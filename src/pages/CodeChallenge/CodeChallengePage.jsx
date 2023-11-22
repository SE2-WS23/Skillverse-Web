import React, { useState } from "react";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import PageLayout from "../../components/PageLayout";

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
          <div style={{ ...layoutCSS, background: "#ddd" }}>pane1</div>
        </Pane>
        <Pane minSize={minSize} maxSize={maxSize}>
          <div style={{ ...layoutCSS, background: "#eee" }}>pane2</div>
        </Pane>
        <Pane minSize={minSize} maxSize={maxSize}></Pane>
      </SplitPane>
    </PageLayout>
  );
}

export default CodeChallengePage;
