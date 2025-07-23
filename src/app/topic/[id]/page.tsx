import React from "react";

const TopicPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <h1>TOPIC PAGE FOR ID: {id}</h1>;
};

export default TopicPage;
