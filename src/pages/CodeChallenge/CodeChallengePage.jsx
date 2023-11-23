import Editor from "@monaco-editor/react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import Markdown from "react-markdown";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import PageLayout from "../../components/PageLayout";
import {
  exampleCode,
  exampleLanguage,
  exampleTheme,
  markdown,
} from "./mockData";

/**
 * The `CodeChallengePage` function returns a React component that displays a split pane layout with a
 * Markdown viewer, code editor, and code output pane.
 */
function CodeChallengePage() {
  const [sizes, setSizes] = useState([
    "calc(3/100%)",
    "calc(3/100%)",
    "calc(3/100%)",
  ]);

  const minSize = "10%";
  const maxSize = "50%";

  const layoutCSS = {
    height: "100%",
    borderLeft: "2px solid black",
    borderRight: "2px solid black",
    overflow: "auto",
  };

  const editorRef = useRef(null);

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  //Example function to retrieve the value of the editor
  function showValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <PageLayout title="Code Challenge" viewportPage>
      <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
        <Pane minSize={minSize} maxSize={maxSize}>
          <Box sx={{ ...layoutCSS, padding: "10px" }}>
            <Markdown>{markdown}</Markdown>
          </Box>
        </Pane>

        <Pane minSize={minSize} maxSize={maxSize}>
          <Box sx={{ ...layoutCSS }}>
            <Editor
              defaultLanguage={exampleLanguage}
              defaultValue={exampleCode}
              theme={exampleTheme}
              onMount={handleEditorDidMount}
            />
          </Box>
        </Pane>

        <Pane minSize={minSize} maxSize={maxSize}>
          <Box sx={{ ...layoutCSS }}>
            Code Output <br /> <i>Has to be valided by backend</i> <br />
            <button onClick={showValue}>Show value</button>
          </Box>
        </Pane>
      </SplitPane>

      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ position: "fixed", bottom: "10px", right: "10px" }}
        onClick={() => {}}
      >
        Next
      </Button>
    </PageLayout>
  );
}

export default CodeChallengePage;
