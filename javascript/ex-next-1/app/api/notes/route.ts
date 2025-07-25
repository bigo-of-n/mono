import { createNote, getNotes } from "@/lib/db/dal/notes";
import { NextResponse } from "next/server";

export async function GET() {
  const allNotes = await getNotes();
  return NextResponse.json(allNotes);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title, content } = body;

  const newNote = await createNote(title, content);

  return NextResponse.json(newNote);
}
