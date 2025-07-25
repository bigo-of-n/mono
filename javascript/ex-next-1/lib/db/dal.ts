import { db } from ".";
import { notes } from "./schema";
import { eq } from "drizzle-orm";

export const getAllNotes = async () => {
  return await db.select().from(notes);
};

export const getNoteById = async (id: number) => {
  return await db.query.notes.findFirst({
    where: eq(notes.id, id),
  });
};
