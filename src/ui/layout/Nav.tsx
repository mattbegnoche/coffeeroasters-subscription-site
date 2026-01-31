import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link, NavLink } from "react-router";
import Logo from "../icons/Logo";
import IconHamburger from "../icons/IconHamburger";
import IconClose from "../icons/IconClose";
import { links } from "../../config/pageLinks";
import Container from "./Container";

function Nav() {
  return (
    <nav className="pt-6 pb-8">
      <Container className="flex flex-row flex-wrap sm:gap-4 justify-between items-center">
        <Link to="/" className="block w-44">
          <Logo />
        </Link>
        <div className="sm:hidden">
          <Menu>
            <MenuButton className="w-4 h-4 flex items-center justify-center">
              {({ active }) => (active ? <IconClose /> : <IconHamburger />)}
            </MenuButton>
            <MenuItems
              className="w-full px-4 pb-14 pt-20 bg-neutral-0 flex flex-col gap-y-8 text-center text-preset-4"
              anchor="bottom"
            >
              {links.map((link) => (
                <MenuItem key={link.label}>
                  <NavLink to={link.href}>{link.text}</NavLink>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>
        <ul className="hidden sm:flex sm:gap-x-8 text-center items-center">
          {links.map((link) => (
            <li key={link.label}>
              <NavLink
                className="text-preset-8 text-neutral-500 hover:text-neutral-900"
                to={link.href}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}

export default Nav;
