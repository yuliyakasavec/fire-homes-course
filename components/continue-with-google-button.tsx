'use client';

import { Button } from './ui/button';
import { useAuth } from '@/context/auth';

export default function ContinueWithGoogleButton() {
  const auth = useAuth();

  return (
    <Button
      onClick={() => {
        auth?.loginWithGoogle();
      }}
      className="w-full bg-sky-950 hover:bg-sky-800"
    >
      Continue with Google
    </Button>
  );
}
