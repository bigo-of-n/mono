"use client";

import { Button } from "@/components/ui/button";
import { deleteNote } from "@/app/actions";
import { useRouter } from "next/navigation";

export const DeleteNoteButton = ({ noteId }: { noteId: number }) => {
  const router = useRouter();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      await deleteNote(noteId);
      router.refresh();
    }
  };

  return (
    <Button variant="destructive" onClick={handleDelete}>
      Delete
    </Button>
  );
};
