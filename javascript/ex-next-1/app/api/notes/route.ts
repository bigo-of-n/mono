import { db } from "@/lib/db";
import { notes } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  const allNotes = await db.select().from(notes);
  return NextResponse.json(allNotes);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title, content } = body;

  const newNote = await db
    .insert(notes)
    .values({
      id: crypto.randomUUID(),
      title,
      content,
    })
    .returning();

  return NextResponse.json(newNote);
}
