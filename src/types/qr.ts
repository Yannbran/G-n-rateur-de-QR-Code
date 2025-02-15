export interface QROptions {
  width: number;
  color: string;
  backgroundColor: string;
  margin: number;
  logo?: {
    image: string;
    size: number; // Taille en pourcentage de la largeur du QR code (1-30)
  };
}

export type ImageFormat = "png" | "jpeg" | "webp";

export interface QRData {
  url: string;
  options: QROptions;
  label?: string;
}
