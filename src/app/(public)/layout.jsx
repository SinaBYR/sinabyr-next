import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{marginTop: '100px'}}>{children}</main>
      <Footer />
    </>
  )
}