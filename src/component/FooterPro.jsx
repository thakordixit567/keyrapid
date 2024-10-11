import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Logo from "/logo.png";

const FooterPro = () => {
  return (
    <Footer container className=" bg-gray-200 mt-12">
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className=" text-green-400">
            <Footer.Brand
              href="https://flowbite.com"
              src={Logo}
              alt="KeyRapid"
              name="  KeyRapid"
              className="font-Primary font-bold text-green-400"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">KeyRapid</Footer.Link>
                <Footer.Link href="#">Typing</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link _blank href="https://github.com/thakordixit567">Github</Footer.Link>
                <Footer.Link target="_blank" href="https://www.linkedin.com/in/dixit-thakor-2209642a7/">Linkedin</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="KeyRapid™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon target="_blank" href="https://www.linkedin.com/in/dixit-thakor-2209642a7/" icon={BsLinkedin} />

          
            <Footer.Icon target="_blank" href="https://github.com/thakordixit567" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterPro;
