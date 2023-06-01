import { FullMessage } from "@/components/dashboard/inbox/fullMessage/fullMessage";
import { getMessageMetaData, getFullMessage } from "./lib";
import { useServerAuth } from "@/lib/useServerAuth";

export async function generateMetadata({ params }) {
  const metaData = await getMessageMetaData(params.id);

  return {
    title: `Message from '${metaData.full_name}'`
  };
}

export default async function DashboardInboxFullMessagePage({ params }) {
  const [isLoggedIn, _user] = await useServerAuth();

  if(!isLoggedIn) {
    return redirect('/login');
  }

  const message = await getFullMessage(params.id);
  return <FullMessage data={message} />
}