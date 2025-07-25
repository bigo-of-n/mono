import { db } from "@/lib/db";
import { notes } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { title, content } = body;

  const updatedNote = await db
    .update(notes)
    .set({
      title,
      content,
      updatedAt: new Date().toISOString(),
    })
    .where(eq(notes.id, params.id))
    .returning();

  return NextResponse.json(updatedNote);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await db.delete(notes).where(eq(notes.id, params.id));

  return new NextResponse(null, { status: 204 });
}
