import React from "react";
import { Link } from "react-router-dom"; // Make sure Link is imported
import FOOTER_LINKS from "../assets/footer_links";
import { FOOTER_CONTACT_INFO, SOCIALS } from "../assets/data";
import logoImg from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className="flexCenter pb-24 pt-20">
      <div className="max_padd_container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link to="/" className="">
            <img src={logoImg} alt=''></img>
          </Link>
          <div className="flex flex-wrap gap-48 sm:justify-between xs:gap-20 md:flex-1">
            {FOOTER_LINKS.map((col) => (
              <FooterColumn title={col.title} key={col.title}>
                <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                  {col.links.map((link) => (
                    <Link to='/' key={link}>{link}</Link> // Ensure each link is properly rendered inside <li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
                <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                    {FOOTER_CONTACT_INFO.links.map((link) => (
                        <Link to='/' key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                            <p>{link.label}:</p>
                            <p className="medium-14">{link.value}</p>
                        </Link>
                    ))}
                </FooterColumn>
            </div>
            <div className="flex">
                <FooterColumn>
                    <ul className="flex gap-4">
                        {SOCIALS.links.map((link) => (
                            <Link to='/' key={link}>
                                <img src={link} alt='socialIcon' height={22} width={22}></img>
                            </Link>
                        ))}
                    </ul>
                </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border">
            <p className="text-center regular-14 text-gray-30">2024 Vutoria | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
