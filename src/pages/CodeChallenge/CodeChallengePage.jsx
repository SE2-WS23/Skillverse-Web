import { Box } from "@mui/system";
import React, { useState } from "react";
import Markdown from "react-markdown";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import PageLayout from "../../components/PageLayout";
import markdown from "./mockData";

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

  return (
    <PageLayout title="Code Challenge" viewportPage>
      <SplitPane
        split="vertical"
        sizes={sizes}
        onChange={setSizes}
        height="100%"
      >
        <Pane minSize={minSize} maxSize={maxSize}>
          <Box style={{ ...layoutCSS, padding: 10 }}>
            <Markdown>{markdown}</Markdown>
          </Box>
        </Pane>
        <Pane minSize={minSize} maxSize={maxSize}>
          <div style={{ ...layoutCSS, background: "#eee" }}>pane2</div>
        </Pane>
        <Pane minSize={minSize} maxSize={maxSize}>
          <Box sx={{ ...layoutCSS, background: "#fff" }}>
            Code Output <br /> <i>Has to be valided by backend</i>
          </Box>
        </Pane>
      </SplitPane>
    </PageLayout>
  );
}

export default CodeChallengePage;
