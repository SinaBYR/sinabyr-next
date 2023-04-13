import { redirect } from "next/navigation";
import { useServerUser } from "../../lib/useServerUser";
import DashboardLayout from "../../components/layout/dashboardLayout/dashboardLayout";

export default async function Layout({ children }) {
  const [isLoggedIn, user] = await useServerUser();

  if(!isLoggedIn) {
    return redirect('/login');
  }

  return (
    <DashboardLayout user={user}>
      {children}
    </DashboardLayout>
  )
}