// app/api/upload/route.ts

import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export async function POST(req: Request) {
  const formData = await req.formData();
  const file: File | null = formData.get('file') as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false, error: 'No file provided.' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${Date.now()}-${file.name}`;
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');

  await writeFile(path.join(uploadDir, fileName), buffer);

  const fileUrl = `/uploads/${fileName}`;

  return NextResponse.json({ success: true, url: fileUrl });
}
