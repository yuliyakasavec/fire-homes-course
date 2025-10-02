import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { HomeIcon } from 'lucide-react';

export default function Loading() {
  return (
    <>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Edit Property</CardTitle>
        </CardHeader>
      </Card>
      <Skeleton className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-sky-950 text-white flex justify-center items-center">
        <HomeIcon />
      </Skeleton>
    </>
  );
}
