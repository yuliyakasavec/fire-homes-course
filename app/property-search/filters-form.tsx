'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import z from 'zod';

const formSchema = z.object({
  minPrice: z.string().optional(),
  maxPrice: z.string().optional(),
  minBedrooms: z.string().optional(),
});

export default function FiltersForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      maxPrice: searchParams.get('maxPrice') ?? '',
      minBedrooms: searchParams.get('minBedrooms') ?? '',
      minPrice: searchParams.get('minPrice') ?? '',
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    // console.log({ data });
    const newSearchParams = new URLSearchParams();

    if (data.minPrice) {
      newSearchParams.set('minPrice', data.minPrice);
    }

    if (data.maxPrice) {
      newSearchParams.set('maxPrice', data.maxPrice);
    }

    if (data.minBedrooms) {
      newSearchParams.set('minBedrooms', data.minBedrooms);
    }

    newSearchParams.set('page', '1');
    router.push(`/property-search?${newSearchParams.toString()}`);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="grid grid-cols-4"
      >
        <FormField
          control={form.control}
          name="minPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-2">Min price</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Min price"
                  type="number"
                  min={0}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maxPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-2">Max price</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Max price"
                  type="number"
                  min={0}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="minBedrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-2">Min bedrooms</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Min bedrooms"
                  type="number"
                  min={0}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="ml-2 mt-auto uppercase">
          Search
        </Button>
      </form>
    </Form>
  );
}
