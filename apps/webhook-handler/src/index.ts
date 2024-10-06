import express from 'express';
import db from '@repo/db/client'

const app = express();

app.post('/hdfcWebhook', async (req, res) => {
    // Add zod validation

    // Check if the request really came from hdfc bank. Use a webhook secret here
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    }

    // update balance in db and add transaction
    try {
        await db.$transaction([
            db.balance.update({
                where: {
                    userId: paymentInformation.userId
                },
                data: {
                    amount: {
                        increment: paymentInformation.amount
                    }
                }
            }),
            db.onRampTransaction.update({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    status: 'Success'
                }

            })
        ])

        // Send a message to hdfcbank that the request was completed successfully, otherwise it will refund the amount
        res.status(200).json({
            message: "Captured"
        })
    }
    catch (e) {
        console.error(e)
        res.status(411).json({
            message: "Error while processing webhook"
        })

        // update the transaction status and refund money if deducted
        db.onRampTransaction.update({
            where: {
                token: paymentInformation.token
            },
            data: {
                status: 'Failure'
            }
        })
    }

})