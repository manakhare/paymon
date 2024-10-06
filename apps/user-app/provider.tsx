"use client";

import { SessionProvider } from "next-auth/react";
// import { Session } from 'next-auth';

interface IProvider {
    children: React.ReactNode;
}

export function Provider({ children }: IProvider) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}