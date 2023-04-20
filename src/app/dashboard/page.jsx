import { DashboardIndex } from "../../components/dashboard/index/index";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Website Analytics',
}

export default async function DashboardPage() {
  return <DashboardIndex />
}