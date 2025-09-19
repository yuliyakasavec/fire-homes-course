'use client';

import { useRef } from 'react';
import { Button } from './ui/button';

export type ImageUpload = {
  id: string;
  url: string;
  file?: File;
};

type Props = {
  images?: ImageUpload[];
  onImagesChange: (images: ImageUpload[]) => void;
};

export default function MultiImageUploader({
  images = [],
  onImagesChange,
}: Props) {
  const uploadInputRef = useRef<HTMLInputElement | null>(null);

  console.log({ images });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.map((file, index) => {
      return {
        id: `${Date.now()}-${index}-${file.name}`,
        url: URL.createObjectURL(file),
        file,
      };
    });
    onImagesChange([...images, ...newImages]);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <input
        className="hidden"
        ref={uploadInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleInputChange}
      />
      <Button type="button" onClick={() => uploadInputRef?.current?.click()}>
        Upload images
      </Button>
    </div>
  );
}
