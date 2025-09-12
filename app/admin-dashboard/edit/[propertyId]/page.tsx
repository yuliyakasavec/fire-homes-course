import { Breadcrumbs } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getPropertyById } from '@/data/properties';

export default async function EditProperty({
  params,
}: {
  params: Promise<any>;
}) {
  const paramsValue = await params;
  //   console.log({ paramsValue });

  const property = await getPropertyById(paramsValue.propertyId);
  console.log({ property });

  return (
    <div>
      <Breadcrumbs
        items={[
          {
            href: '/admin-dashboard',
            label: 'Dashboard',
          },
          {
            label: 'Edit Property',
          },
        ]}
      />
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Edit Property</CardTitle>
        </CardHeader>
        <CardContent>edit property form</CardContent>
      </Card>
    </div>
  );
}
