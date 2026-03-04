import { NextResponse } from "next/server";

type DemoPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /.+@.+\..+/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as DemoPayload;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !company || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    return NextResponse.json({
      message: `Thanks ${name}! Demo request received. We will contact ${email} soon.`
    });
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }
}
