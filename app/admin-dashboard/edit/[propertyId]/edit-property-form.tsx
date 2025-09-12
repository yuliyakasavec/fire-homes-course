'use client';

import PropertyForm from '@/components/property-form';
import { Property } from '@/types/property';
import { propertyDataSchema } from '@/validation/propertySchema';
import { SaveIcon } from 'lucide-react';
import z from 'zod';

type Props = Property;
// & {
//     anotherProp: string
// }

export default function EditPropertyForm({
  id,
  address1,
  address2,
  city,
  postcode,
  bathrooms,
  bedrooms,
  description,
  price,
  status,
}: Props) {
  const handleSubmit = async (data: z.infer<typeof propertyDataSchema>) => {};
  return (
    <div>
      <PropertyForm
        handleSubmit={handleSubmit}
        submitButtonLabel={
          <>
            <SaveIcon /> Save Property
          </>
        }
        defaultValues={{
          address1,
          address2,
          city,
          postcode,
          bathrooms,
          bedrooms,
          description,
          price,
          status,
        }}
      />
    </div>
  );
}
