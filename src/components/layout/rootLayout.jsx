import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

// marginTop value is equal to height of navbar.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{marginTop: '100px'}}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}