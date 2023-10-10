import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import { ChevronDown, ChevronUp } from "react-feather";
import range from "lodash.range";

import VisuallyHidden from "./VisuallyHidden";

function WidgetProcessor({ total }) {
  const id = React.useId();
  const [numOfProcessedWidgets, setNumOfProcessedWidgets] = React.useState(0);

  const numOfUnprocessedWidgets = total - numOfProcessedWidgets;

  function handleProcessWidget() {
    if (numOfProcessedWidgets < total) {
      setNumOfProcessedWidgets(numOfProcessedWidgets + 4);
    }
  }

  function handleRevertWidget() {
    if (numOfProcessedWidgets > 0) {
      setNumOfProcessedWidgets(numOfProcessedWidgets - 4);
    }
  }

  return (
    <LayoutGroup>
      <div className="wrapper">
        <div className="inbox">
          {range(numOfUnprocessedWidgets).map((itemNum) => {
            const layoutId = `${id}-${itemNum}`;
            return (
              <motion.div layoutId={layoutId} key={layoutId} className="widget">
                {itemNum}
              </motion.div>
            );
          })}
        </div>

        <div className="actions">
          <button onClick={handleProcessWidget}>
            <VisuallyHidden>Process widget</VisuallyHidden>
            <ChevronDown />
          </button>
          <button onClick={handleRevertWidget}>
            <ChevronUp />
            <VisuallyHidden>Revert widget</VisuallyHidden>
          </button>
        </div>

        <div className="outbox">
          {range(numOfUnprocessedWidgets, total).map((itemNum) => {
            const layoutId = `${id}-${itemNum}`;
            return (
              <motion.div layout={layoutId} key={layoutId} className="widget">
                {itemNum}
              </motion.div>
            );
          })}
        </div>
      </div>
    </LayoutGroup>
  );
}

export default WidgetProcessor;
