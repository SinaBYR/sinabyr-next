import '../../styles/index.css';
import AuthProvider from './auth-provider';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}