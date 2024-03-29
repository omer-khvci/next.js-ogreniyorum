import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextFetchEvent, NextResponse } from "next/server";
export async function POST(request: Request) {
    const {name,email,password} = await request.json();

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = prisma.user.create({
        data:{
            name,
            email,
            hashedPassword
        }
    })
    return NextResponse.json(user);
}