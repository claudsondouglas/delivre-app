import { find } from "lodash";
import users from "../userdb";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params } : { params: { slug: number } }) {
    console.log(params)
    // find with lodash a item in user with slug = params.slug
    const array = find(users, { slug: params.slug });
    
    if (!array) {
        return new Response(null, { status: 404 });
    }
    
    return NextResponse.json(array);
}
