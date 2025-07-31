import { db } from ".";
import { notes } from "./schema";
import { eq } from "drizzle-orm";

export const getAllNotes = async () => {
  return await db.select().from(notes);
};

export const getNoteById = async (id: string) => {
  return await db.select().from(notes).where(eq(notes.id, id)).limit(1).get();
};
