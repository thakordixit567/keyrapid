import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="/logo.png" className=" mr-3 h-6 sm:h-9" alt="logo" />
        <span className="self-center font-Primary whitespace-nowrap text-2xl text-green-300 font-extrabold dark:text-white">
          KeyRapid
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <Link to="/typing-speed-test"><Button>Get started</Button></Link>
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
