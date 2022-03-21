import * as React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-2 px1">
        <a href="/" className="brand-logo">
          React+TypeScript
        </a>
        <ul  className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Список діл</a>
          </li>
          <li> 
            <a href="badges.html">Про нас</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
