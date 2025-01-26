export interface QROptions {
  width: number;
  color: string;
  backgroundColor: string;
  margin: number;
}

export type ImageFormat = "png" | "jpeg" | "webp";

export interface QRData {
  url: string;
  options: QROptions;
  label?: string;
}
