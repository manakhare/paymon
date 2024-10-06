import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import prisma from "@repo/db/client";

interface SignUpData {
    username: string;
    email: string;
    password: string;
    number: string;
}

export async function POST(req: NextRequest) {
    try {
        const body: SignUpData = await req.json();
        const { username, email, password, number } = body;

        // check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if(existingUser) {
            NextResponse.json({
                success: false,
                message: 'A user already exists with this email'
            }, {
                status: 400
            })
        }

        // hashing password before storing it in db
        const hashedPassword = await bcrypt.hash(password, 10);

        // store user in db
        const newUser = await prisma.user.create({
            data: {
                name: username,
                email,
                password: hashedPassword,
                number
            }
        });

        // success response
        return NextResponse.json({
            success: true,
            user: newUser,
            message: 'User created and signed up successfully!'
        }, {
            status: 201
        });

    } catch (err) {
        console.error('Error in signup : ', err);
        return NextResponse.json({
            success: false,
            message: 'Failed to create a new user'
        }, {
            status: 404
        })
    }
}

