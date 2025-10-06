"use client";

import TopicComments from "@/components/topic-comments/TopicComments";
import { ITopic } from "@/utils/interfaces/ITopic";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ITopicComment } from "@/utils/interfaces/ITopicComment";

export default function TopicPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [topic, setTopic] = useState<ITopic | null>(null);
  const params = useParams();
  const topicId = params.id?.toString();

  useEffect(() => {
    if (!topicId) return;

    const loadTopic = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:3001/topic/${topicId}`);
        if (res.status !== 404) {
          const data: ITopic = await res.json();
          setTopic(data);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadTopic();
  }, [topicId]);

  function addComment(newComment: ITopicComment) {
    setTopic((prev) =>
      prev && prev.comments
        ? { ...prev, comments: [newComment, ...prev.comments] }
        : prev
    );
  }

  function deleteComment(commentId: number) {
    setTopic((prev) =>
      prev
        ? {
            ...prev,
            comments: prev.comments?.filter((c) => c.id !== commentId) ?? [],
          }
        : prev
    );
  }

  if (loading) return <p>Loading...</p>;

  return !topic ? (
    <p>Missing topic...</p>
  ) : (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h1 className="text-xl font-bold">{topic.title}</h1>
        <p className="text-gray-500">{topic.description}</p>
        <div className="mt-4">{topic.content}</div>
      </div>
      {topicId ? (
        <TopicComments
          topicId={topicId}
          topicComments={topic.comments}
          onCommentAdded={addComment}
          onCommentDeleted={deleteComment}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
