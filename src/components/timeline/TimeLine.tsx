import Topic from "@/components/topic/Topic";
import { ITopic } from "@/utils/interfaces/ITopic";

export default function TimeLine() {
  const topic1: ITopic = {
    id: 1,
    title: "title 1",
    description: "Description",
    content: "Content",
  };

  const topic2: ITopic = {
    id: 2,
    title: "title 2",
    content: "Content 2",
  };

  const topic3: ITopic = {
    id: 3,
    title: "title 3",
    description: "Description 3",
    content: "Content 3",
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-2 container mx-auto ">
      <Topic
        id={topic1.id}
        title={topic1.title}
        description={topic1.description}
        content={topic1.content}
      />
      <Topic id={topic2.id} title={topic2.title} content={topic2.content} />
      <Topic
        id={topic3.id}
        title={topic3.title}
        description={topic3.description}
        content={topic3.content}
      />
    </div>
  );
}
