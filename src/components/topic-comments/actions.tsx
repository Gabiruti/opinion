"use server";

import { TopicCommentDTO } from "@/utils/dto/TopicCommentDTO";
import { ITopicComment } from "@/utils/interfaces/ITopicComment";

export async function handleComment(
  formData: FormData,
  topicId: string
): Promise<ITopicComment> {
  const comment = formData.get("comment");

  if (!comment) {
    throw new Error("Comment is required");
  }

  const body: TopicCommentDTO = {
    comment: comment.toString(),
    topic_id: parseInt(topicId),
  };

  const res = await fetch(`http://localhost:3001/topic/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return data;
}

export async function handleDeleteComment(commentId: number) {
  await fetch(`http://localhost:3001/topic/comment/${commentId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
