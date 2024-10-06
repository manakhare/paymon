import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";

export const GET = async () => {
    const session = await getServerSession(authOptions);

    if (session.user) {
        return NextResponse.json({
            user: session.user
        })
    }

    return NextResponse.json({
        message: 'You are not logged in'
    }, {
        status: 403
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);

    // headers
    // console.log(req.headers.get("Authorization"));

    // query parameters OR Search params
    // console.log(req.nextUrl.searchParams.get("name"));
}