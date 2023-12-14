import { NavbarItem } from '@nextui-org/react'
import { FC } from 'react';
import { NavLink } from 'react-router-dom'
import clsx from 'clsx';


interface DesktopNavItemProps {
  label: string;
  to: string;
  isActive?: boolean;
}

const DesktopNavItem: FC<DesktopNavItemProps> = ({ label, to, isActive }) => {
  return (
    <NavbarItem className={clsx(
      'text-default-700',
      isActive && "text-primary-color"
    )}>
      <NavLink to={to}>
        {label}
      </NavLink>
    </NavbarItem>
  )
}

export default DesktopNavItem
