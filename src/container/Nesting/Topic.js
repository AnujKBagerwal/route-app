import React from "react";
import { useParams } from "react-router-dom";

const Topic = () => {
  let { topicId } = useParams();
  console.log("topicId", topicId);

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
};

export default Topic;
