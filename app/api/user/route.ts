import { NextResponse } from "next/server";
import users from "./userdb";

export async function GET(request: Request) {
    return NextResponse.json(users);
}