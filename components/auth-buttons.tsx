'use client';

import { useAuth } from '@/context/auth';
import Link from 'next/link';

export default function AuthButtons() {
  const auth = useAuth();

  return (
    <div>
      {!!auth?.currentUser && (
        <>
          <div>{auth.currentUser.email}</div>
          <div
            onClick={() => {
              auth.logout();
            }}
          >
            Logout
          </div>
        </>
      )}
      {!auth?.currentUser && (
        <>
          <Link href="/login" className="mr-5">
            Login
          </Link>
          <Link href="/register">Signup</Link>
        </>
      )}
    </div>
  );
}
