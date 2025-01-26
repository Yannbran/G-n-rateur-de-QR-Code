"use client";

import { useEffect, useRef, useState } from "react";
import QRCodeLib from "qrcode";
import { QRData, ImageFormat } from "../types/qr";

interface QRCodeProps {
  data: QRData;
}

const QRCode = ({ data }: QRCodeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [format, setFormat] = useState<ImageFormat>("png");

  const handleDownload = () => {
    if (canvasRef.current) {
      const link = document.createElement("a");
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      link.download = `qrcode-${timestamp}.${format}`;
      link.href = canvasRef.current.toDataURL(`image/${format}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      QRCodeLib.toCanvas(canvasRef.current, data.url, {
        width: data.options.width,
        margin: data.options.margin,
        color: {
          dark: data.options.color,
          light: data.options.backgroundColor,
        },
      });
    }
  }, [data]);

  return (
    <div className="qr-code-container">
      <div className="qr-code-wrapper">
        <canvas ref={canvasRef} />
      </div>
      {data.label && <div className="qr-code-label">{data.label}</div>}
      <div className="download-controls">
        <select
          aria-label="Format d'image"
          value={format}
          onChange={(e) => setFormat(e.target.value as ImageFormat)}
          className="format-select"
        >
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WebP</option>
        </select>
        <button onClick={handleDownload} className="download-button">
          Télécharger le QR Code
        </button>
      </div>
    </div>
  );
};

export default QRCode;
