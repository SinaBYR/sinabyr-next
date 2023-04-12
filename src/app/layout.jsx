import '../../styles/index.css';
// import { Inter,  } from 'next/font/google';
import AuthProvider from './auth-provider';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
        {/* {children} */}
      </body>
    </html>
  )
}