import { Outlet } from "react-router-dom"
import Header from "../components/navbar/Header"

const RootLayout = () => {
   return (
      <>
         <Header />
         <main className="container mx-auto">
            <Outlet />
         </main>
         <footer>
            footer
         </footer>
      </>
   )
}

export default RootLayout
