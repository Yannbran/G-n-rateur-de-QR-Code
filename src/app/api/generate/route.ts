import { NextResponse } from 'next/server';
import QRCode from 'qrcode';

export async function POST(request: Request) {
    const { url } = await request.json();

    if (!url) {
        return NextResponse.json({ error: 'URL manquante' }, { status: 400 });
    }

    try {
        const qrCodeDataUrl = await QRCode.toDataURL(url);
        return NextResponse.json({ qrCode: qrCodeDataUrl });
    } catch (error) {
        return NextResponse.json({ error: 'Erreur lors de la génération du QR code' }, { status: 500 });
    }
}