import { NavbarMenuItem } from '@nextui-org/react'
import { FC } from 'react';
import { NavLink } from 'react-router-dom'
import clsx from 'clsx';

interface MobileNavItemProps {
   label: string;
   to: string;
   isActive?: boolean;
}

const MobileNavItem: FC<MobileNavItemProps> = ({ label, to, isActive }) => {
   return (
      <NavbarMenuItem className={clsx(
         'text-default-700',
         isActive && "text-primary-color"
      )}>
         <NavLink
            className="w-full"
            to={to}
         >
            {label}
         </NavLink>
      </NavbarMenuItem>
   )
}

export default MobileNavItem
