import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { handleSubmission } from "@/app/actions";

import SubmitButton from "@/components/general/SubmitButton";

export default function CreateBlogRoute() {
  return (
    <div className="flex justify-center align-middle">
      <Card className="">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>Create a new post</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmission} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                required
                type="text"
                id="title"
                placeholder="Title"
                name="title"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea required id="content" name="content" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="image">Image URL</Label>
              <Input required type="text" id="image" name="image" />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
