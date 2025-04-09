import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json()

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // In a real implementation, you would:
    // 1. Store this in a database
    // 2. Send a confirmation email
    // 3. Maybe integrate with a service like Mailchimp

    // For now, we'll just log it and return success
    console.log(`New waitlist signup: ${email} (${name || "No name provided"})`)

    // You could also send a notification to your team
    // await sendNotification({ email, name })

    return NextResponse.json({ success: true, message: "Successfully joined waitlist" }, { status: 200 })
  } catch (error) {
    console.error("Waitlist error:", error)
    return NextResponse.json({ error: "Failed to join waitlist" }, { status: 500 })
  }
}
