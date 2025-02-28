export interface Logo {
  image: string; // Non-optional
  size: number;
}

export interface QROptions {
  width: number;
  color: string;
  backgroundColor: string;
  margin: number;
  logo?: Logo; // Logo est optionnel, mais quand il existe, il doit avoir image et size
}

export type ImageFormat = "png" | "jpeg" | "webp";

export interface QRData {
  url: string;
  options: QROptions;
  label?: string;
}
