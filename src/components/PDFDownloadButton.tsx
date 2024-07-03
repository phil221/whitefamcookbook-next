"use client";

import { FaFilePdf } from "react-icons/fa";
import { Options, usePDF } from "react-to-pdf";

const PDFDownloadButton = ({ toPDF }: { toPDF: (options?: Options | undefined) => void }) => {
    return (
        <button onClick={() => toPDF()}>
            <FaFilePdf />
        </button>
    );
};

export default PDFDownloadButton;