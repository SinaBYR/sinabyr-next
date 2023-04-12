import DashboardLayout from "../../components/layout/dashboardLayout/dashboardLayout";
import AuthProvider from '../auth-provider';

export default function Layout({ children }) {
  return (
    // <AuthProvider>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    // </AuthProvider>
  )
}