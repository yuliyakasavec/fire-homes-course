'use client';

import { HeartIcon } from 'lucide-react';

export default function ToggleFavouriteButton() {
  return (
    <button className="absolute top-0 right-0 z-10 p-2">
      <HeartIcon />
    </button>
  );
}
