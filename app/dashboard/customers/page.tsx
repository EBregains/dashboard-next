import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import Table from '@/app/ui/customers/table';
import { InvoicesTableSkeleton, TableRowSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';
 
export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page( {
  searchParams,
} : {
  searchParams?: {
    query?: string;
    page?: number;
  };
}) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">  
      <Suspense key={query + currentPage} fallback={<TableRowSkeleton />}>
        <Table customers={customers} />
      </Suspense>
    </div>
  )
}