import { redirect } from "next/navigation";
import { useServerAuth } from "../../lib/useServerAuth";
import DashboardLayout from "../../components/layout/dashboardLayout/dashboardLayout";

export default async function Layout({ children }) {
  const [isLoggedIn, _user] = await useServerAuth();

  if(!isLoggedIn) {
    return redirect('/login');
  }

  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  )
}