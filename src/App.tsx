import Navbar from "@/scenes/navbar/index.tsx"
import Home from "@/scenes/home/index.tsx"
import Benefits from "@/scenes/benefits/index.tsx"
import OurClasses from "@/scenes/ourclasses/index.tsx"
import ContactUs from "@/scenes/contactUs/index.tsx"
import Footer from "@/scenes/footer/index.tsx"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } else {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return <div className="app bg-gray-20">
    <Navbar
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
    <Home setSelectedPage={setSelectedPage} />
    <Benefits setSelectedPage={setSelectedPage} />
    <OurClasses setSelectedPage={setSelectedPage} />
    <ContactUs setSelectedPage={setSelectedPage} />
    <Footer />
  </div>
}

export default App
