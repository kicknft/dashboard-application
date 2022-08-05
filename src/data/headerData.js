import icon from "@/images/header-icon.png";
import logo2 from "@/images/logo-2.png";
import logo from "@/images/logo.png";

export const navItems = [
  {
    id: 1,
    name: "Home",
    href: "https://kicknft.xyz",



  },

  {
    id: 3,
    name: "Explore",
    href: "/projects",
  },
  {
    id: 4,
    name: "Projects",
    href: "/projects",
  },

  {
    id: 5,
    name: "Creators",
    href: "/creators",
  },
  {
    id: 6,
    name: "Donations",
    href: "/donations",
  },


];

export const socials = [
 
  {
    id: 1,
    icon: "fa fa-twitter",
    href: "#",
  },
  
];

const headerData = {
  logo,
  logo2,
  icon,
  navItems,
  email: "info@kicknft.xyz",
  phone: "666 888 0000",
  address: "66 Broklyn Street, USA",
  socials,
};

export default headerData;
