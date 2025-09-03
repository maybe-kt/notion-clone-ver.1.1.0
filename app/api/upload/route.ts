import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  // 파일 내용을 버퍼로 읽기
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // 예: 파일명을 고유하게 지정 (중복 방지용)
  const fileName = `${Date.now()}-${file.name}`;

  // 실제 파일 저장 (예: public/uploads/)
  const fs = require('fs');
  const path = require('path');
  const uploadPath = path.join(process.cwd(), 'public', 'uploads', fileName);
  fs.writeFileSync(uploadPath, buffer);

  return NextResponse.json({ url: `/uploads/${fileName}` });
}
