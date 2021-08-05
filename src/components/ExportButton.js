import React, { useRef } from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import "../custom.scss";

const ExportButton = ({
  insight = "abt4T3CjejSr",
  format = "csv",
  title = "Exported Data",
  buttonTitle = "Download Data"
}) => {
  const getExportedData = useRef(null);
  const onExportReady = exportedDataCallback => {
    getExportedData.current = exportedDataCallback;
  };

  const doExport = async () => {
    try {
      const result = await getExportedData?.current({
        format: format,
        includeFilterContext: true,
        mergeHeaders: true,
        title: title
      });
      console.log("Export successfully: ", result.uri);
    } catch (error) {
      console.log("Export error: ", error);
    }
  };
  return (
    <div style={{ height: 30 }}>
      <InsightView insight={insight} onExportReady={onExportReady} />
      <button
        className="csvexport"
        disabled={insight && Boolean(getExportedData.current)}
        onClick={doExport}
      >
        {buttonTitle}
      </button>
    </div>
  );
};

export default ExportButton;
