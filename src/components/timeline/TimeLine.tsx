import Topic from "@/components/topic/Topic";
import { ITopic } from "@/utils/interfaces/ITopic";
// import { useEffect, useState } from "react";

export default async function TimeLine() {
  // const [topics, setTopic] = useState<ITopic[] | undefined>();

  // useEffect(() => {
  //   fetch("http://localhost:3001/topic")
  //     .then((res) => res.json())
  //     .then((data) => setTopic(data))
  //     .catch((err) => console.log("Fetch error:", err));
  // }, []);
  const data = await fetch("http://localhost:3001/topic");
  const topics: ITopic[] = await data.json();

  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-2 container mx-auto items-start h-auto">
        {topics
          ? topics.map((topic, index) => (
              <Topic
                key={index}
                id={topic.id}
                title={topic.title}
                description={topic.description}
                content={topic.content}
              />
            ))
          : "Loading..."}
      </div>
    </>
  );
}
