import { NavLink } from "react-router";

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/subscribe">Create your plan</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
