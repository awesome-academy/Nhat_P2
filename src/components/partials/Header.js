import React from "react";
import HeaderTopBar from "./HeaderTopBar";
import HeaderSearch from "./HeaderSearch";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <div>
      <HeaderTopBar />
      <HeaderSearch />
      <HeaderMenu />
    </div>
  );
};

export default Header;
