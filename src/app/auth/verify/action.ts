import { UUID } from "crypto";

export default async function AfterEmailConfirmation(id: UUID) {
  const resp = await fetch("/api/user/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/type",
    },
    body: JSON.stringify({ id }),
  });

  const data = await resp.json();

  return data;
}
