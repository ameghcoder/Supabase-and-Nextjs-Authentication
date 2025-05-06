import { emailValidator } from "@/lib/validator";
import { createServerSupabaseClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  const ev = emailValidator.safeParse(email);

  if (!ev.success)
    return NextResponse.json(
      { error: ev.error.errors[0].message },
      { status: 400 }
    );

  const supabase = createServerSupabaseClient();

  const { error } = await supabase.auth.resend({
    email: email,
    type: "signup",
  });

  if (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 400,
      }
    );
  }

  return NextResponse.json(
    {
      message: "Email verification link sent successfully!",
    },
    {
      status: 200,
    }
  );
}
