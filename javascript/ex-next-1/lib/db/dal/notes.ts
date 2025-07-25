import { db } from "..";
import { notes, Note } from "../schema";
import { eq } from "drizzle-orm";

export const getNotes = async () => {
  const allNotes = await db.select().from(notes);
  return allNotes;
};

export const createNote = async (title: string, content: string) => {
  const newNote = await db
    .insert(notes)
    .values({
      id: crypto.randomUUID(),
      title,
      content,
    })
    .returning();
  return newNote;
};

export const updateNote = async (id: string, title: string, content: string) => {
  const updatedNote = await db
    .update(notes)
    .set({
      title,
      content,
      updatedAt: new Date().toISOString(),
    })
    .where(eq(notes.id, id))
    .returning();
  return updatedNote;
};

export const deleteNote = async (id: string) => {
  await db.delete(notes).where(eq(notes.id, id));
};
