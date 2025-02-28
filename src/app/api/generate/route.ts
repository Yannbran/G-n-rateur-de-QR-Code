import { NextResponse } from "next/server";
import QRCode from "qrcode";

export async function POST(request: Request) {
  try {
    const { url, options } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const qrCodeDataUrl = await QRCode.toDataURL(url, {
      width: options?.width || 256,
      margin: options?.margin || 4,
      color: {
        dark: options?.color || "#000000",
        light: options?.backgroundColor || "#ffffff",
      },
    });

    return NextResponse.json({ qrCode: qrCodeDataUrl });
  } catch (error) {
    console.error("Error generating QR code:", error);
    return NextResponse.json(
      { error: "Failed to generate QR code" },
      { status: 500 }
    );
  }
}
