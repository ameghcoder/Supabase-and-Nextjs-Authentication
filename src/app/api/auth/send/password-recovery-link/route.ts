import { createServerSupabaseClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  const supabase = createServerSupabaseClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email);

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
      message: "Password-Reset link sent!",
    },
    {
      status: 200,
    }
  );
}
