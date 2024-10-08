import React, { Suspense } from 'react'
import { lato } from '../../ui/fonts'
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from '../../lib/data'
import RevenueChart from '../../ui/dashboard/revenue-chart';
import LatestInvoices from '../../ui/dashboard/latest-invoices';
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';

export default async function Page() {
	const latestInvoices = await fetchLatestInvoices();
	const { numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();
  return (
    <main>
			<h1 className={`${lato.className} mb-4 text-xl md:text-2xl`}>
					Dashboard
			</h1>
			<div className="grid gap-6 sm-grid-cols-2 lg:grid-cols-4">
					<Suspense fallback={<CardsSkeleton />}>
						<CardWrapper /> 
					</Suspense>
			</div>

			<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
					<Suspense fallback={<RevenueChartSkeleton />}>
						<RevenueChart />
					</Suspense>
					<Suspense fallback={<LatestInvoicesSkeleton />}>
						<LatestInvoices />
					</Suspense>
			</div>
    </main>
  )
}
