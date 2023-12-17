import { useState } from "react";
import { Navbar as NextNavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu } from "@nextui-org/react";
import DesktopNavItem from "./DesktopNavItem";
import MobileNavItem from "./MobileNavItem";
import { MdMenu } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";


const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   return (
      <NextNavbar
         className="bg-transparent container mx-auto"
         maxWidth="full"
         isMenuOpen={isMenuOpen}
         onMenuOpenChange={setIsMenuOpen}
      >
         <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} icon={MdMenu} />
         </NavbarContent>

         <NavbarContent className="sm:hidden" justify="center">
            <NavbarBrand className="select-none text-primary-color cursor-pointer ">
               <h3 className="font-bold text-inherit">MC collage</h3>
            </NavbarBrand>
         </NavbarContent>

         <NavbarContent className="hidden sm:flex" justify="start">
            <NavbarBrand className="flex-grow-0 mr-6 select-none text-primary-color cursor-pointer">
               <h3 className="font-bold text-inherit text-lg">MC collage</h3>
            </NavbarBrand>
            <DesktopNavItem to="#" label="Home" />
            <DesktopNavItem to="#" label="Classes" />
            <DesktopNavItem to="#" label="Admission" />
            <DesktopNavItem to="#" label="My Classes" />
            <NavbarContent justify="end">
               <NavbarItem className="group relative transition-all flex items-center justify-start gap-2 cursor-pointer">
                  <div>Sign up</div>
                  <IoIosArrowRoundForward size={22} className="group-hover:translate-x-1 duration-300 " />
               </NavbarItem>
            </NavbarContent>
         </NavbarContent>
         <NavbarMenu>
            <MobileNavItem to="#" label="Home" />
            <MobileNavItem to="#" label="Classes" />
            <MobileNavItem to="#" label="Admission" />
            <MobileNavItem to="#" label="My Classes" />
         </NavbarMenu>
      </NextNavbar>
   )
}

export default Navbar
