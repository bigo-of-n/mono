import { getNoteById } from "@/lib/db/dal";
import { Wrapper } from "@/components/atoms/wrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const NotePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const note = await getNoteById(id);

  if (!note) {
    return (
      <Wrapper>
        <h1 className="text-2xl font-bold mt-6">Note not found</h1>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="mt-6">
        <Input defaultValue={note.title} className="text-2xl font-bold mb-4" />
        <Textarea defaultValue={note.content} rows={10} />
        <Button className="mt-4">Save</Button>
      </div>
    </Wrapper>
  );
};

export default NotePage;
