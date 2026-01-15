import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  console.log("Contact form submission:", data);

  // TODO:
  // - Send email (Resend, SendGrid)
  // - Save to DB
  // - Send Slack notification

  return NextResponse.json({ success: true });
}
