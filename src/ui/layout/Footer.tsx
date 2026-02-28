import { Link, NavLink } from "react-router";
import Logo from "../icons/Logo";
import { socialLinks } from "../../config/socialLinks";
import { links } from "../../config/pageLinks";
import Container from "./Container";

function Footer() {
  return (
    <footer className="mb-6 sm:mb-10">
      <Container>
        <div
          className="bg-neutral-900 text-neutral-0 py-10 px-4 flex flex-col gap-6 items-center md:flex-row md:justify-between
        md:px-20 md:py-12"
        >
          <Link to="/" className="max-w-40 md:max-w-[14.2rem]">
            <Logo />
          </Link>
          <nav>
            <ul className="text-preset-8 *:text-neutral-500 *:hover:text-neutral-0 flex gap-x-5 md:gap-x-8 items-center text-center">
              {links.map((link) => (
                <li key={link.label}>
                  <NavLink to={link.href}>{link.text}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex flex-row gap-5 items-center">
            {socialLinks.map(function (social) {
              const Icon = social.icon;
              return (
                <li key={social.platform} className="w-5">
                  <a
                    href={social.url}
                    target="_blank"
                    aria-label={social.platform}
                    rel="noopener noreferrer"
                  >
                    <Icon className="hover:text-orange-200" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
