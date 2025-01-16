import Stripe from "stripe"
import { NextResponse, NextRequest } from "next/server"

// Stripe instance setup
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

// Webhook handler
export async function POST(req: NextRequest, res: NextResponse) {

  const payload = await req.text()
  const response = JSON.parse(payload)

  const sig = req.headers.get("stripe-signature")

  const dateTime = new Date(response?.created * 1000).toLocaleString()
  const timeString = new Date(response?.created * 1000).toLocaleString()

  try {
    let event = stripe.webhooks.constructEvent(payload, sig!, process.env.STRIPE_WEBHOOK_SECRET!);

    console.log("event", event.type);

    return NextResponse.json({ status: "Success" }, { status: 200 })
  } catch (error) {
    console.log("error", error)
    return NextResponse.json({ status: "Failed", error: error }, { status: 400 })
  }
}
