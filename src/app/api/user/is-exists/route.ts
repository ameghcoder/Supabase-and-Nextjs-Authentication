import { createServerSupabaseClient } from "@/utils/supabase/server";
import { emailValidator } from "@/lib/validator";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const ev = emailValidator.safeParse(email);

    if (!ev.success)
      return NextResponse.json(
        { error: ev.error.errors[0].message },
        { status: 400 }
      );

    const supabase = createServerSupabaseClient();

    const { data, error } = await supabase
      .from("user_profile")
      .select("id, is_verified")
      .eq("email", email)
      .maybeSingle();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      {
        is_exists: data !== null,
        is_verified: data?.is_verified,
        message: "Check user existense using is_exists",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
