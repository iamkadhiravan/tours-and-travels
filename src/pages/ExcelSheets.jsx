import React from "react";

export default function ExcelSheet() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/YOUR_SHEET_ID/pubhtml"
        width="1000"
        height="600"
        frameBorder="0"
        title="Excel Sheet"
      ></iframe>
    </div>
  );
}
