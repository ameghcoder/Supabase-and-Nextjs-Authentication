import { uuidValidator } from "@/lib/validator";
import { NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/admin";

export async function POST(request: Request) {
  try {
    const { id } = await request.json();

    const idv = uuidValidator.safeParse(id);

    if (!idv.success) {
      return NextResponse.json(
        { error: idv.error.errors[0].message },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    const { error, count } = await supabase
      .from("user_profile")
      .update({
        is_verified: true,
      })
      .eq("id", id)
      .select("*");

    if (error) {
      console.error("Update error: ", error);
      return NextResponse.json(
        { error: "Failed to update verification status." },
        { status: 500 }
      );
    }

    if (count === 0) {
      return NextResponse.json(
        { error: "No matching user found with the given ID." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        is_verified: true,
        message: "Email confirmed successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error: ", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
