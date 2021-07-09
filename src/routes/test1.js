import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { test } from "./test";
import "../sai.css";
import { newAbsoluteDateFilter } from "@gooddata/sdk-model";

export const test1 = () => {
  return (
    <test>
      {onExportReady => (
        <div style={{ height: 0, width: 0 }}>
          <InsightView insight="abG4RMpBhZyp" onExportReady={onExportReady} />
        </div>
      )}
    </test>
  );
};
export default test1;
