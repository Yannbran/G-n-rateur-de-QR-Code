"use client";

import { useState, FormEvent, useEffect } from "react";
import { QRData, QROptions } from "../types/qr";
import { useDebounce } from "../hooks/useDebounce";

interface QRFormProps {
  onSubmit: (data: QRData) => void;
}

const QRForm = ({ onSubmit }: QRFormProps) => {
  const [url, setUrl] = useState("");
  const [label, setLabel] = useState("");
  const [options, setOptions] = useState<QROptions>({
    width: 256,
    color: "#000000",
    backgroundColor: "#ffffff",
    margin: 2,
  });

  const debouncedUrl = useDebounce(url, 500);
  const debouncedLabel = useDebounce(label, 500);
  const debouncedOptions = useDebounce(options, 300);

  useEffect(() => {
    if (debouncedUrl.trim()) {
      onSubmit({
        url: debouncedUrl,
        options: debouncedOptions,
        label: debouncedLabel,
      });
    }
  }, [debouncedUrl, debouncedLabel, debouncedOptions, onSubmit]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="qr-form">
      <div className="form-group">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Entrez une URL"
          required
          className="url-input"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Texte sous le QR code (optionnel)"
          className="label-input"
        />
      </div>

      <div className="options-group">
        <div className="option">
          <label>Taille:</label>
          <input
            type="range"
            min="128"
            max="512"
            value={options.width}
            onChange={(e) =>
              setOptions({ ...options, width: Number(e.target.value) })
            }
            title="Ajuster la taille du QR code"
          />
          <span>{options.width}px</span>
        </div>

        <div className="option">
          <label>Couleur:</label>
          <input
            type="color"
            value={options.color}
            onChange={(e) => setOptions({ ...options, color: e.target.value })}
            title="Choisir la couleur du QR code"
          />
        </div>

        <div className="option">
          <label>Couleur de fond:</label>
          <input
            type="color"
            value={options.backgroundColor}
            onChange={(e) =>
              setOptions({ ...options, backgroundColor: e.target.value })
            }
            title="Choisir la couleur de fond du QR code"
          />
        </div>

        <div className="option">
          <label>Marge:</label>
          <input
            type="range"
            min="0"
            max="5"
            value={options.margin}
            onChange={(e) =>
              setOptions({ ...options, margin: Number(e.target.value) })
            }
            title="Ajuster la marge du QR code"
          />
          <span>{options.margin}</span>
        </div>
      </div>
    </form>
  );
};

export default QRForm;
