import { useState } from "react";
import { Navbar as NextNavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu } from "@nextui-org/react";
import DesktopNavItem from "./DesktopNavItem";
import MobileNavItem from "./MobileNavItem";
import NavMenuIcon from "./NavMenuIcon";

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   return (
      <NextNavbar
         shouldHideOnScroll
         className="bg-transparent"
         isMenuOpen={isMenuOpen}
         onMenuOpenChange={setIsMenuOpen}
      >
         <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
         />
         <NavbarBrand>
            <NavMenuIcon />
            <p className="font-bold text-inherit">ACME</p>
         </NavbarBrand>
         <NavbarContent className="hidden sm:flex gap-4" justify="start">
            <DesktopNavItem to="#" label="Home" />
            <DesktopNavItem to="#" label="Classes" />
            <DesktopNavItem to="#" label="Admission" />
            <DesktopNavItem to="#" label="My Classes" />
         </NavbarContent>
         <NavbarContent justify="end">
            <NavbarItem>
               Sign Up
            </NavbarItem>
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
