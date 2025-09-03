"use client";

import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { useCoverImage } from "@/hooks/use-cover-image";
import { SingleImageDropzone } from "../single-image-dropzone";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

export const CoverImageModal = () => {
  const params = useParams();
  const update = useMutation(api.documents.update);
  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const coverImage = useCoverImage();

  // ✅ 임시 mock 업로드 함수 (Edge Store 제거)
  const mockUpload = async (file: File): Promise<string> => {
    console.log("이미지 업로드 (mock):", file);
    // 여기에서 다른 스토리지 API 호출로 교체 가능
    // 예: Convex, Supabase, Firebase, S3 등
    return "https://placehold.co/1200x300?text=Uploaded+Cover";
  };

  const onClose = () => {
    setFile(undefined);
    setIsSubmitting(false);
    coverImage.onClose();
  };

  const onChange = async (file?: File) => {
    if (file) {
      setIsSubmitting(true);
      setFile(file);

      try {
        // ✅ mock 업로드 함수 사용
        const uploadedUrl = await mockUpload(file);

        await update({
          id: params.documentId as Id<"documents">,
          coverImage: uploadedUrl,
        });

        onClose();
      } catch (error) {
        console.error("이미지 업로드 실패:", error);
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
        <SingleImageDropzone
          className="w-full outline-none"
          disabled={isSubmitting}
          value={file}
          onChange={onChange}
        />
      </DialogContent>
    </Dialog>
  );
};

