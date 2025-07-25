"use server";

import { db } from "@/lib/db";
import { notes } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deleteNote(id: number) {
  await db.delete(notes).where(eq(notes.id, id));
  revalidatePath("/dashboard");
}
