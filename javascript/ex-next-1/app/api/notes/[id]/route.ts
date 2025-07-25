import { deleteNote, updateNote } from "@/lib/db/dal/notes";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { title, content } = body;

  const updatedNote = await updateNote(id, title, content);

  return NextResponse.json(updatedNote);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await deleteNote(id);

  return new NextResponse(null, { status: 204 });
}
