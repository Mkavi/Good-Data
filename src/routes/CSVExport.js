import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import "../sai.css";

export class CSVExport extends React.Component {
    constructor(props) {
        super(props);
        this.doExport = this.doExport.bind(this);
        this.onExportReady = this.onExportReady.bind(this);
    }

    onExportReady(getExportedData) {
        this.getExportedData = getExportedData;
    }

    async doExport() {
        try {
            const result = await this.getExportedData({
                format: "csv",
                includeFilterContext: true,
                mergeHeaders: true,
                title: "CustomTitle"
            });
            console.log("Export successfully: ", result.uri);
        } catch (error) {
            console.log("Export error: ", error);
        }
    }

    render() {
        return (
            <div style={{ height: 30}}>
                <InsightView
                    insight="abG4RMpBhZyp"
                    onExportReady={this.onExportReady}
                />
                <button className="csvexport" onClick={this.doExport}>
                    Download CSV
                    </button>
            </div>
        );
    }
}
export default CSVExport;