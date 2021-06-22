// (C) 2007-2019 GoodData Corporation
import React, { useState, useEffect } from "react";
// import { IExtendedExportConfig, IExportFunction } from "@gooddata/sdk-ui";
// import { IFilter } from "@gooddata/sdk-model";
import "../sai.css";

const style = { height: 367 };
const buttonsContainerStyle = { marginTop: 15 };
const errorStyle = { color: "red", marginTop: 5 };
const loadingStyle = { minHeight: 30 };

const Button = ({ children, onClick, disabled }) => (
  <button
    className={`csvexport ${disabled ? "disabled" : ""}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

const DownloaderId = "downloader";
const downloadFile = uri => {
  let anchor = document.getElementById(DownloaderId);
  if (!anchor) {
    anchor = document.createElement("a");
    anchor.id = DownloaderId;
    document.body.appendChild(anchor);
  }
  anchor.href = uri;
  anchor.click();
};

export const ExampleWithExport = ({ children, filters }) => {
  const [
    {
      exportFunction,
      exportConfig,
      showExportDialog,
      errorMessage,
      downloadUri,
      exporting
    },
    setState
  ] =
    useState <
    IExampleWithExportState >
    {
      showExportDialog: false,
      errorMessage: undefined,
      exportFunction: () => undefined,
      downloadUri: undefined,
      exportConfig: undefined,
      exporting: false
    };

  const onExportReady = exportFunction =>
    setState(oldState => ({ ...oldState, exportFunction }));

  const exportToCSV = () =>
    setState(oldState => ({ ...oldState, exportConfig: {} }));
  const exportToXLSX = () =>
    setState(oldState => ({ ...oldState, exportConfig: { format: "xlsx" } }));

  useEffect(() => {
    const getExportUri = async () => {
      try {
        const uri = (await exportFunction(exportConfig))?.uri;
        return uri;
      } catch (error) {
        let errorMessage = error.message;
        if (error.responseBody) {
          errorMessage = JSON.parse(error.responseBody)?.error?.message;
        }
        throw errorMessage;
      }
    };

    if (exportFunction && exportConfig) {
      setState(oldState => ({ ...oldState, exporting: true }));
      getExportUri()
        .then(uri =>
          setState(oldState => ({
            ...oldState,
            errorMessage: undefined,
            downloadUri: uri,
            exporting: false
          }))
        )
        .catch(errorMessage =>
          setState(oldState => ({
            ...oldState,
            errorMessage,
            downloadUri: undefined,
            exporting: false
          }))
        );
    }
  }, [exportFunction, exportConfig]);

  useEffect(() => {
    if (downloadUri) {
      downloadFile(downloadUri);

      setState(oldState => ({
        ...oldState,
        downloadUri: undefined
      }));
    }
  }, [downloadUri]);

  return (
    <div style={style}>
      {children(onExportReady)}
      <div style={buttonsContainerStyle}>
        <div style={loadingStyle}>{exporting && <span>Exporting...</span>}</div>
        <Button onClick={exportToCSV} disabled={exporting}>
          Download CSV
        </Button>
        <Button onClick={exportToXLSX} disabled={exporting}>
          Download XLSX
        </Button>
      </div>
      {errorMessage && <div style={errorStyle}>{errorMessage}</div>}
    </div>
  );
};
