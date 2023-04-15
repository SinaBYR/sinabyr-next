import { Link } from "../../utilities";
import { FiSettings, FiInbox, FiLogOut } from 'react-icons/fi';
import { GoProject } from 'react-icons/go';
import { IoAnalytics } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { useClientAuth } from "../../../lib/useClientAuth";

export function SidebarLinks() {
  const { mutateUser } = useClientAuth();

  async function handleLogout() {
    try {
      const response = await fetch('/api/auth/logout', {method: 'POST'});
      if(!response.ok) {
        throw new Error('An error occured');
      }
      const result = await response.json();
      mutateUser(result);
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
        <Link variant="simple-alt" href="/" onClick={e => {
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