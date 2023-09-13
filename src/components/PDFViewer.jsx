import React from 'react';
import { Document, Page } from 'react-pdf';

function PDFViewer() {
  const pdfURL = 'https://pdfhost.io/v/VZEMQEMUf_louay'; // Replace with your PDF URL

  return (
    <div>
      <h2>Your PDF Viewer</h2>
      <Document file={pdfURL}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default PDFViewer;
