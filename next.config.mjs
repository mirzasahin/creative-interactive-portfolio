import { NextResponse } from "next/server.js";
import { revalidateTag } from "next/cache.js";

export async function POST() {
  revalidateTag("prismic");

  return NextResponse.json({ revalidateTag: true, now: Date.now() });
}
