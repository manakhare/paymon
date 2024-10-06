import prisma from '@repo/db/client';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'xyz@gmail.com',
                    required: true
                },
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'username',
                    required: true
                },
                phone: {
                    label: 'Phone number',
                    type: 'text',
                    placeholder: '0123456789',
                    required: true
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    required: true
                }
            },

            async authorize(credentials: any) {
                // Do zod and otp validation here
                const hashedPassword = await bcrypt.hash(credentials.password, 10);
                const existingUser = await prisma.user.findFirst({
                    where: {
                        number: credentials.phone
                    }
                });

                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                    if (passwordValidation) {
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            number: existingUser.number
                        }
                    }
                    return null;
                }

                try {
                    const user = await prisma.user.create({
                        data: {
                            number: credentials.phone,
                            password: hashedPassword
                        }
                    });

                    return {
                        id: user.id.toString(),
                        name: user.name,
                        number: user.number
                    }
                }
                catch (e) {
                    console.error(e)
                }

                return null;
            }
        })
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        async session({ token, session }: any) {
            session.user.id = token.sub
            return session
        }
    }
}
