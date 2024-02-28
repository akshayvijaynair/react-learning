import React from "react";
import Config from "./components/Config";
import TagsBuilder from "./components/TagsBuilder";

const App = () => {
  return (
    <div className="container">
      <Config title="Use Scheduler" toggleState={false} />
      <Config title="Use Location" toggleState={true} />
      <TagsBuilder
        tags={[
          {id: 1, title: "React.js"},
          {id: 2, title: "JavaScript"},
          {id: 3, title: "Node.js"}
        ]}
        addTags={value => {}}
      />
    </div>
  );
};

export default App;
