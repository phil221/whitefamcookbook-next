"use client";

import { FaRegFilePdf } from "react-icons/fa";
import { Options } from "react-to-pdf";

const PDFDownloadButton = ({
  toPDF,
}: {
  toPDF: (options?: Options | undefined) => void;
}) => {
  return (
    <button onClick={() => toPDF()}>
      <FaRegFilePdf />
    </button>
  );
};

export default PDFDownloadButton;
