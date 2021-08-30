import React from "react";

function Footer() {
  let today = new Date();
  return (
    <footer className="Footer">
      <p>Copyright since &copy; {today.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
