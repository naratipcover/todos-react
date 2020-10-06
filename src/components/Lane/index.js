import React from "react";
import { useTodo } from "../../contexts/ActionContext";
import Content from "./Content";

function Lane() {
  
  const [{todos, doings , dones}] = useTodo();

  return (

      <div className="lane-container">
        <Content title="Todo" list={todos} />
        <Content title="Doing" list={doings} />
        <Content title="Done" list={dones} />
      </div>
  
  );
}

export default Lane;
