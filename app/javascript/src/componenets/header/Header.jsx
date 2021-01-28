import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="border-b-2 border-gray-300 font-nunito py-3 shadow-md">
      <div className="header-wrapper">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center">
              <Link to="/">
                <h2 className="text-2xl font-bold text-indigo-700 ">
                  Url-Shortener
                </h2>
              </Link>
            </div>
          </div>

          <div>
            <ul className="flex text-indigo-700">
              <li>
                <NavLink
                  className="ml-6 text-xl hover:text-indigo-400 tracking-wider"
                  activeClassName="border-b border-indigo-400"
                  to="/report"
                  exact
                >
                  Generate Report
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    // <>
    //   <Link exact to="/report">
    //     Generate Report
    //   </Link>
    // </>
  );
}

export default Header;
