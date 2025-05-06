import { emailValidator, uuidValidator } from "@/lib/validator";
import { NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/admin";

export async function POST(request: Request) {
  const { id, email } = await request.json();

  const idv = uuidValidator.safeParse(id);
  const ev = emailValidator.safeParse(email);

  if (!idv.success) {
    return NextResponse.json(
      { error: idv.error.errors[0].message },
      { status: 400 }
    );
  }
  if (!ev.success) {
    return NextResponse.json(
      { error: ev.error.errors[0].message },
      { status: 400 }
    );
  }

  const supabase = createAdminClient();

  const { error } = await supabase
    .from("user_profile")
    .insert([{ id: id, email: email }]);

  if (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }

  return NextResponse.json(
    {
      is_added: true,
      message:
        "Signup successful. Please check your email for verification link.",
    },
    { status: 200 }
  );
}
