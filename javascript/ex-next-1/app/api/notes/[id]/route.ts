import { deleteNote, updateNote } from "@/lib/db/dal/notes";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { title, content } = body;

  const updatedNote = await updateNote(params.id, title, content);

  return NextResponse.json(updatedNote);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await deleteNote(params.id);

  return new NextResponse(null, { status: 204 });
}
