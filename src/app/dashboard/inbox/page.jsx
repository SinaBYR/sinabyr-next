import { DashboardInbox } from "@/components/dashboard/inbox/inbox"
import { getDashboardMessages } from "./lib";
import { useServerAuth } from "@/lib/useServerAuth";


export default async function DashboardInboxPage() {
  const [isLoggedIn, _user] = await useServerAuth();

  if(!isLoggedIn) {
    return redirect('/login');
  }

  const data = await getDashboardMessages();
  return <DashboardInbox data={data}/>
}