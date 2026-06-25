import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, business_type, automate, hear_about } = body;

    // Basic validation
    if (!name || !email || !automate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log submission server-side (replace with Resend/Nodemailer when ready)
    console.log("Contact form submission:", {
      name,
      email,
      company,
      business_type,
      automate,
      hear_about,
      timestamp: new Date().toISOString(),
    });

    // If RESEND_API_KEY is configured, send via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "NeuralOps Contact <contact@neuralops.io>",
          to: ["hello@neuralops.io"],
          subject: `New inquiry from ${name} — ${business_type || "Unknown industry"}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Industry:</strong> ${business_type || "Not specified"}</p>
            <p><strong>What they want to automate:</strong></p>
            <blockquote>${automate}</blockquote>
            <p><strong>How they heard about us:</strong> ${hear_about || "Not specified"}</p>
          `,
        }),
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
