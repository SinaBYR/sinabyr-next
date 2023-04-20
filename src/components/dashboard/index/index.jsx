'use client';

import { useClientAuth } from "@/lib/useClientAuth";

export function DashboardIndex() {
  useClientAuth({
    redirectTo: '/login'
  });

  return (
    <h1>Website Analytics</h1>
  )
}