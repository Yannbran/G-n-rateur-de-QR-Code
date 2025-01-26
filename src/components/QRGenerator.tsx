"use client";

import { useState } from "react";
import QRForm from "./QRForm";
import QRCode from "./QRCode";
import { QRData } from "../types/qr";

const QRGenerator = () => {
  const [qrData, setQrData] = useState<QRData | null>(null);

  return (
    <div className="preview-container">
      <QRForm onSubmit={setQrData} />
      {qrData && (
        <div className="qr-preview">
          <h2>Prévisualisation</h2>
          <QRCode data={qrData} />
        </div>
      )}
    </div>
  );
};

export default QRGenerator;
