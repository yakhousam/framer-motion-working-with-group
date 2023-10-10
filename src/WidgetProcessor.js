import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'react-feather';
import range from 'lodash.range';

import VisuallyHidden from './VisuallyHidden';

function WidgetProcessor({ total }) {
  const [numOfProcessedWidgets, setNumOfProcessedWidgets] = React.useState(0);

  const numOfUnprocessedWidgets = total - numOfProcessedWidgets;

  function handleProcessWidget() {
    if (numOfProcessedWidgets < total) {
      setNumOfProcessedWidgets(numOfProcessedWidgets + 1);
    }
  }

  function handleRevertWidget() {
    if (numOfProcessedWidgets > 0) {
      setNumOfProcessedWidgets(numOfProcessedWidgets - 1);
    }
  }

  return (
    <div className="wrapper">
      <div className="inbox">
        {range(numOfUnprocessedWidgets).map((itemNum) => {
          return (
            <motion.div
              layout={true}
              key={itemNum}
              className="widget"
            />
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
        {range(numOfProcessedWidgets).map((itemNum) => {
          return (
            <motion.div
              layout={true}
              key={itemNum}
              className="widget"
            />
          );
        })}
      </div>
    </div>
  );
}

export default WidgetProcessor;