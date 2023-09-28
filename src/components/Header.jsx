import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <>
    <div className="header">
      <h1>Twi Notes</h1>
      <button
        className="save toggle"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      >
        Toggle Mode
      </button>

   
    </div>
      </>
  );
};

export default Header;
