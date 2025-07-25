"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddNoteModal from "@/components/dashboard/AddNoteModal";
import { Wrapper } from "@/components/atoms/wrapper";
import { Button } from "@/components/ui/button";
import { deleteNote } from "../actions";
import { getAllNotes } from "@/lib/db/dal";

const DashboardPage = () => {
  const [allNotes, setAllNotes] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchNotes = async () => {
      const notes = await getAllNotes();
      setAllNotes(notes);
    };
    fetchNotes();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      await deleteNote(id);
      const newNotes = allNotes.filter((note) => note.id !== id);
      setAllNotes(newNotes);
    }
  };

  return (
    <Wrapper>
      <div className="flex justify-between items-center mb-4 mt-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <AddNoteModal />
      </div>
      {allNotes.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>No Notes Found</CardTitle>
            <CardDescription>
              No notes yet. Click the button above to add a new note.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allNotes.map((note) => (
            <div key={note.id}>
              <a href={`/notes/${note.id}`}>
                <Card>
                  <CardHeader>
                    <CardTitle>{note.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{note.content}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <p className="text-sm text-gray-500">
                      {note.createdAt &&
                        new Date(note.createdAt).toLocaleDateString()}
                    </p>
                    <Button
                      variant="destructive"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(note.id);
                      }}
                    >
                      Delete
                    </Button>
                  </CardFooter>
                </Card>
              </a>
            </div>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default DashboardPage;
