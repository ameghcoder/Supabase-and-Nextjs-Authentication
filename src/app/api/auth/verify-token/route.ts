import { NextResponse, type NextRequest } from "next/server";
import { createServerSupabaseClient } from "@/utils/supabase/server";

export async function POST(request: NextRequest) {
  const { type, token_hash } = await request.json();

  if (token_hash && type) {
    const supabase = createServerSupabaseClient();

    const { data, error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (!error) {
      return NextResponse.json(
        {
          is_valid: true,
          user: {
            id: data.user?.id,
          },
          type,
        },
        {
          status: 200,
        }
      );
    }
  }

  return NextResponse.json(
    {
      error: "Missing Parameters or Invalid Request",
      data: {
        token_hash,
        type,
      },
    },
    {
      status: 400,
    }
  );
}
