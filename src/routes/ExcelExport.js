import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { ExampleWithExport} from "./ExampleWithExport.tsx";
import "../sai.css";
import { newAbsoluteDateFilter } from "@gooddata/sdk-model";




export const ExcelExport = () => {
    return (
        <ExampleWithExport >
            {(onExportReady) => (
                <div style={{ height: 0, width: 0 }}>
                    <InsightView
                        insight="abG4RMpBhZyp"
                        onExportReady={onExportReady}
                    />
                </div>
            )}
        </ExampleWithExport>
    );
};
export default ExcelExport;


