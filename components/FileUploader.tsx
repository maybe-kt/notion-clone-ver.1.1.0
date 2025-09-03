'use client';
import { useState } from 'react';

export default function FileUploader() {
  const [fileUrl, setFileUrl] = useState('');

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setFileUrl(data.url);
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleUpload(file);
        }}
      />
      {fileUrl && (
        <p>
          ✅ 업로드 완료: <a href={fileUrl} target="_blank">{fileUrl}</a>
        </p>
      )}
    </div>
  );
}
