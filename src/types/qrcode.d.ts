declare module "qrcode" {
  interface QRCodeOptions {
    version?: number;
    errorCorrectionLevel?: "L" | "M" | "Q" | "H";
    margin?: number;
    width?: number;
    scale?: number;
    color?: {
      dark?: string;
      light?: string;
    };
    type?: string;
    quality?: number;
  }

  function toDataURL(text: string, options?: QRCodeOptions): Promise<string>;
  function toCanvas(
    canvasElement: HTMLCanvasElement,
    text: string,
    options?: QRCodeOptions
  ): Promise<void>;
  function toBuffer(text: string, options?: QRCodeOptions): Promise<Buffer>;

  const QRCode: {
    toDataURL: typeof toDataURL;
    toCanvas: typeof toCanvas;
    toBuffer: typeof toBuffer;
  };

  export default QRCode;
}
