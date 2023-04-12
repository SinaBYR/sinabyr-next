import { Link } from "../../utilities";
import { FiSettings, FiInbox, FiLogOut } from 'react-icons/fi';
import { GoProject } from 'react-icons/go';
import { IoAnalytics } from 'react-icons/io5';
import { useUser } from "../../../lib/useUser";
import { fetchJson } from "../../../lib/fetchJson";
import { User } from "../../../types/types";
import { toast } from 'react-toastify';

export function SidebarLinks() {
  const { mutateUser } = useUser({
    redirectTo: '/login'
  });

  async function handleLogout() {
    try {
      const result = await fetchJson<User>('/api/logout', {method: 'POST'});
      mutateUser(result, false);
    } catch(err) {
      toast.error(err.message, {
        hideProgressBar: true,
        autoClose: false,
        position: 'top-center'
      })
    }
  }

  return (
    <>
      <li>
        <Link variant="simple-alt" href="/dashboard">
          <IoAnalytics style={{marginRight: '16px'}}/>
          Analytics
        </Link>
      </li>
      <li>
        <Link variant="simple-alt" href="/dashboard/inbox">
          <FiInbox style={{marginRight: '16px'}}/>
          Inbox
        </Link>
      </li>
      <li>
        <Link variant="simple-alt" href="/dashboard/projects">
          <GoProject style={{marginRight: '16px'}}/>
          Projects
        </Link>
      </li>
      <li>
        <Link variant="simple-alt" href="/dashboard/settings">
          <FiSettings style={{marginRight: '16px'}}/>
          Settings
        </Link>
      </li>
      <li>
        <Link variant="simple-alt" href="/api/logout" onClick={e => {
          e.preventDefault();
          handleLogout();
        }}>
          <FiLogOut style={{marginRight: '16px'}}/>
          Log out
        </Link>
      </li>
    </>
  )
}