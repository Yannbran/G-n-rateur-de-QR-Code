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

  const addLogoToCanvas = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) => {
    if (data.options.logo) {
      const image = new Image();
      image.src = data.options.logo.image;

      image.onload = () => {
        const maxSize = (canvas.width * data.options.logo!.size) / 100;
        const ratio = image.width / image.height;
        let width = maxSize;
        let height = maxSize;

        if (ratio > 1) {
          height = width / ratio;
        } else {
          width = height * ratio;
        }

        const x = (canvas.width - width) / 2;
        const y = (canvas.width - height) / 2;
        const margin = 5;
        const borderRadius = Math.min(width, height) * 0.2; // 20% de la plus petite dimension

        // Sauvegarder le contexte
        ctx.save();

        // Créer un chemin arrondi pour le fond
        ctx.beginPath();
        ctx.roundRect(
          x - margin,
          y - margin,
          width + margin * 2,
          height + margin * 2,
          borderRadius
        );
        ctx.fillStyle = data.options.backgroundColor;
        ctx.fill();

        // Créer un chemin arrondi pour l'image
        ctx.beginPath();
        ctx.roundRect(x, y, width, height, borderRadius);
        ctx.clip();

        // Dessiner l'image
        ctx.drawImage(image, x, y, width, height);

        // Restaurer le contexte
        ctx.restore();
      };
    }
  };

  const createDownloadableCanvas = () => {
    // Créer un nouveau canvas temporaire pour l'image finale
    const tempCanvas = document.createElement("canvas");
    const ctx = tempCanvas.getContext("2d");
    if (!ctx || !canvasRef.current) return null;

    // Calculer la hauteur totale nécessaire (QR code + espace pour le texte)
    const labelHeight = data.label ? 40 : 0; // Hauteur pour le texte si présent
    const padding = data.label ? 20 : 0; // Espace entre le QR code et le texte

    // Définir les dimensions du canvas
    tempCanvas.width = data.options.width;
    tempCanvas.height = data.options.width + labelHeight + padding;

    // Remplir le fond
    ctx.fillStyle = data.options.backgroundColor;
    ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    // Copier le QR code avec le logo
    ctx.drawImage(canvasRef.current, 0, 0);

    // Ajouter le texte si présent
    if (data.label) {
      ctx.fillStyle = data.options.color;
      ctx.font = "bold 16px Inter";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText(
        data.label,
        tempCanvas.width / 2,
        data.options.width + padding
      );
    }

    return tempCanvas;
  };

  const handleDownload = () => {
    const downloadCanvas = createDownloadableCanvas();
    if (downloadCanvas) {
      const link = document.createElement("a");
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      link.download = `qrcode-${timestamp}.${format}`;
      link.href = downloadCanvas.toDataURL(`image/${format}`);
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
      }).then(() => {
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx && canvasRef.current) {
          addLogoToCanvas(ctx, canvasRef.current);
        }
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
