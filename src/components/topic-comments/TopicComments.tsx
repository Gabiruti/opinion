"use client";

import Comment from "@/components/comment/Comment";
import {
  handleComment,
  handleDeleteComment,
} from "@/components/topic-comments/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ITopicComment } from "@/utils/interfaces/ITopicComment";
import { Loader2Icon } from "lucide-react";
import { useState, useTransition } from "react";

export default function TopicComments({
  topicId,
  topicComments,
  onCommentAdded,
  onCommentDeleted,
}: {
  topicId: string;
  topicComments?: ITopicComment[];
  onCommentAdded?: (newComment: ITopicComment) => void;
  onCommentDeleted?: (commentId: number) => void;
}) {
  const [comment, setComment] = useState("");
  const [isPending, startTransition] = useTransition();

  async function onSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await handleComment(formData, topicId);
      onCommentAdded?.(res);
      setComment("");
    });
  }

  async function deleteComment(commentId: number) {
    await handleDeleteComment(commentId);
    onCommentDeleted?.(commentId);
  }

  return (
    <div className="flex flex-col gap-5">
      <form className="flex flex-col gap-2" action={onSubmit}>
        <Textarea
          name="comment"
          placeholder="Leave a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="self-end">
          <Button
            variant="outline"
            type="submit"
            disabled={isPending || comment.trim() === ""}
          >
            {isPending ? (
              <>
                <Loader2Icon className="animate-spin" /> Please wait
              </>
            ) : (
              "send it"
            )}
          </Button>
        </div>
      </form>
      <div className="flex flex-col gap-3">
        {topicComments ? (
          topicComments.map((topicComment, index) => (
            <Comment
              key={index}
              topicComment={topicComment}
              deleteComment={(commentId) => deleteComment(commentId)}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
