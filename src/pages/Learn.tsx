import Editor from "@monaco-editor/react";
import { useState } from "react";
// import AceEditor from "react-ace";
export const Learn = () => {
  const [code] = useState(`function hello() {
    console.log("Hello World!");
  }`);
  return (
    <>
      <div className="px-5">
        <Editor
          height="300px"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={{
            inlineSuggest: true,
            fontSize: "16px",
            formatOnType: true,
            autoClosingBrackets: true,
            minimap: { scale: 10 },
          }}
        />
      </div>
    </>
  );
};
