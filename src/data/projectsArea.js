import image1 from "@/images/explore-projects-1.webp";
import image2 from "@/images/explore-projects-2.webp";
import image3 from "@/images/explore-projects-3.webp";
import image4 from "@/images/explore-projects-4.webp";
import image5 from "@/images/explore-projects-5.webp";
import image6 from "@/images/explore-projects-6.webp";
import flag from "@/images/flag.png";
import info from "@/images/info.jpg";
import bg1 from "@/images/project-bg-1.jpg";
import bg2 from "@/images/project-bg-2.jpg";
import projectDetails1 from "@/images/project-details-1.jpg";
import projectDetails2 from "@/images/project-details-2.jpg";
import thumb2 from "@/images/project-details-thumb.jpg";
import projectInfo from "@/images/project-info.jpg";
import projectPerk from "@/images/project-perk.jpg";
import thumb from "@/images/single-project-thumb.jpg";
import { faqs } from "./faqArea";

export const socials3 = [
  {
    id: 1,
    icon: "fa fa-facebook-square",
    href: "#",
  },
  {
    id: 2,
    icon: "fa fa-twitter",
    href: "#",
  },
  {
    id: 3,
    icon: "ffa fa-pinterest-p",
    href: "#",
  },
  {
    id: 4,
    icon: "fa fa-instagram",
    href: "#",
  },
];

const projects = [
  {
    id: 1,
    image: image1,
    category: "Health",
    date: "10 Days Left",
    title: "SunnySide: Self Heating & Cooling Lunchbox",
    goal: "36000.00",
    raised: 43,
  },
  {
    id: 2,
    image: image2,
    category: "Tech",
    date: "50 Days Left",
    title: "Banala Sense - FOR BETTER SLEEP .ONLY A BUTTON AWAY",
    goal: "50000.00",
    raised: 23,
  },
  {
    id: 3,
    image: image3,
    category: "Tech",
    date: "20 Days Left",
    title: "Segway SuperScooter GT Series: Perform the Future ",
    goal: "350000.00",
    raised: 25,
  },
  {
    id: 4,
    image: image4,
    category: "Tech",
    date: "40 Days Left",
    title: "Subnado: Compact & Lightweight Underwater Scooter",
    goal: "3600.00",
    raised: 23,
  },
  {
    id: 5,
    image: image5,
    category: "Tech",
    date: "20 Days Left",
    title: "Afreda S6: A Fold-in-1s Reverse 3-wheel E-bike ",
    goal: "500000.00",
    raised: 25,
  },
  {
    id: 6,
    image: image6,
    category: "Tech",
    date: "24 Days Left",
    title: "PicoPC: Tiny Desktop PC, Win10 Linux 4K Computer",
    goal: "100000.00",
    raised: 75,
  },
];

export const projectsArea = {
  tagline: "Businesses You Can Back",
  title: "Explore Projects",
  projects,
};

export const exploreProjects = {
  tagline: "Businesses You Can Back",
  title: "Explore Projects",
  projects: [
    {
      id: 1,
      image: "project-1.jpg",
      tagline: "Health",
      date: "10 Days Left",
      title: "SunnySide: Self Heating & Cooling Lunchbox",
      raised: 43,

    },
    {
      id: 2,
      image: "project-2.jpg",
      tagline: "Design",
      date: "20 Days Left",
      title: "The Power Bank that is Always Charged",
      raised: 23,
    },
    {
      id: 3,
      image: "project-3.jpg",
      tagline: "Design",
      date: "20 Days Left",
      title: "The Power Bank that is Always Charged",
      raised: 23,
    },
    {
      id: 4,
      image: "project-4.jpg",
      tagline: "Design",
      date: "20 Days Left",
      title: "The Power Bank that is Always Charged",
      raised: 23,
    },
    {
      id: 5,
      image: "project-5.jpg",
      tagline: "Design",
      date: "20 Days Left",
      title: "The Power Bank that is Always Charged",
      raised: 23,
    },
    {
      id: 6,
      image: "project-7.jpg",
      tagline: "Design",
      date: "20 Days Left",
      title: "The Power Bank that is Always Charged",
      raised: 23,
    },
  ],
};

export const projectArea = [
  {
    id: 1,
    bg: bg1,
    title: "Ready? Explore",
    text: "There are not is many variations of passages of lorem available.",
    linkText: "Discover projects",
  },
  {
    id: 2,
    bg: bg2,
    title: "Feeling Inspired?",
    text: "There are not is many variations of passages of lorem available.",
    linkText: "Join our team",
    btnClassName: " main-btn-2",
    className: " project-inspired",
  },
];

export const projectDetailsArea = {
  thumb,
  flag,
  tagline: "Tech",
  country: "United Kingdom",
  title: "Afreda S6: A Fold-in-1s Reverse 3-wheel E-bike ",
  pledged: 2203,
  backers: 68,
  daysLeft: 20,
  raised: 23,
  goal: "3600.00",
  socials: socials3,
};

export const projectDetailsTabBtns = [
  {
    id: "pills-home",
    name: "Story",
  },
  {
    id: "pills-profile",
    name: "FAQs",
  },
  {
    id: "pills-contact",
    name: "Updates",
  },
  {
    id: "pills-4",
    name: "Comments",
  },
];

export const projectDetailsStory = {
  ids: "pills-home",
  text: " ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate sed mauris vitae pellentesque. Nunc ut ullamcorper libero. Aenean fringilla mauris quis risus laoreet interdum. Quisque imperdiet orci in metus aliquam egestas. Fusce elit libero, imperdiet nec orci quis, convallis hendrerit nisl. Cras auctor nec purus at placerat.",
  lists: [
    "Nsectetur cing mauris quis risus laoreet elit.",
    "Suspe ndisse dolor sit amet suscipit sagittis leo.",
    "Entum estibulum metus aliquam egestas dignissim posuere.",
    "If you are going to use a auctor nec purus passage.",
    "Lorem Ipsum on the tend to repeat.",
  ],
  image: thumb2,
  text2:
    "Integer feugiat est in tincidunt congue. Nam eget accumsan ligula. Nunc auctor ligula a quam fermentum, non iaculis diam suscipit. Aliquam lacinia lorem vel suscipit pulvinar. Etiam condimentum nunc non ultricies hendrerit. Sed nec blandit libero, ut gravida quam. Nam tortor est, faucibus at dolor id, blandit venenatis leo. Praesent euismod tempus libero et accumsan. Nunc ultrices sit amet urna sed euismod. Pellentesque finibus ipsum non mi sodales, vel ullamcorper ipsum pharetra. Praesent nec pharetra neque.",
  text3:
    "Nulla in ex at mi viverra sagittis ut non erat raesent nec congue elit. Nunc arcu odio, convallis a lacinia ut, tristique id eros. Suspendisse leo erat, pellentesque et commodo vel, varius in felis. Nulla mollis turpis porta justo eleifend volutpat. Cras malesuada nec magna eu blandit. Nam sed efficitur ante. Quisque lobortis sodales risus, eu dapibus dolor porta vitae. Vestibulum eu ex auctor, scelerisque velit sit amet, vehicula sapien.",
  items: [
    {
      idi: 1,
      title: "One Power Bank for Every Wrist Car",
      text: "Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum.",
    },
    {
      idi: 2,
      title: "One Power Bank for Every Wrist Car",
      className: "mt-45 mb-50",
      text: "Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum.",
    },
  ],
  images: [projectDetails1, projectDetails2],
};

export const projectDetailsFaq = {
  id: "pills-profile",
  faqs,
};

export const projectDetailsUpdates = {
  id: "pills-contact",
  updates: [
    {
      id: 1,
      title: "Post your update here",
    
    },
  ],
};

export const projectDetailsComments = {
  id: "pills-4",
  comments: [
    {
      id: 1,
      image: "comment-2.2.jpg",
      name: "Kevin Martin",
      date: "3 March, 2020",
      text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis.",
    },
    {
      id: 2,
      image: "comment-2.1.jpg",
      name: "Sarah albert",
      date: "3 March, 2020",
      text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis.",
    },
  ],
};

export const projectDetailsSidebar = {
  info: {
    image: projectInfo,
    name: "John Wilson",
    backed: 20,
    text: "Aenean fringilla mauris quis risus laoreet interdum. Quisque imperdiet orci in metus aliquam egestas.",
  },
  perks: [
    {
      id: 1,
      image: projectPerk,
      sold: 50,
      off: 62,
      amount: "5,800",
      date: "July 2022",
      claimed: 53,
      totalClaimed: 30,
    },
    {
      id: 2,
      sold: 50,
      off: 62,
      amount: "5,800",
      date: "November 2022",
      claimed: 23,
      totalClaimed: 30,
    },
  ],
};

export const similarProjects = {
  tagline: "Businesses You Can Back",
  title: "Similar Projects",
  projects: projects.slice(0, 3),
};
