import React from 'react';

const ResumeDownloadButton = ({ pdfUrl, fileName }) => {
  const handleDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = fileName;
    anchor.click();
  };

  return (
    <button className="ResumeDownloadButton" onClick={handleDownload}>
      Download Resume
    </button>
  );
};

export default ResumeDownloadButton;
