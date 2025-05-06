import { createServerSupabaseClient } from "@/utils/supabase/server";
import { emailValidator, passwordValidator } from "@/lib/validator";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const ev = emailValidator.safeParse(email);
    const pv = passwordValidator.safeParse(password);

    if (!ev.success)
      return NextResponse.json(
        { error: ev.error.errors[0].message },
        { status: 400 }
      );
    if (!pv.success)
      return NextResponse.json(
        { error: pv.error.errors[0].message },
        { status: 400 }
      );

    const supabase = createServerSupabaseClient();

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { message: "Logged in successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
