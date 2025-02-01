import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import { ScrollProgressBar } from "../srcollprogressbar/ScrollProgressBar"

export const Layout = ({ children }) => {
  return (
    <div>
      <ScrollProgressBar />
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
