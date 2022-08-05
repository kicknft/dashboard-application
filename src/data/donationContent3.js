import image1 from "@/images/donation1.webp";
import image2 from "@/images/donation2.jpg";
import image3 from "@/images/donation3.webp";

import flag from "@/images/flag.png";
import info from "@/images/info.jpg";
import bg1 from "@/images/project5-b.jpg";
import bg2 from "@/images/project-bg-2.jpg";
import thumb3 from "@/images/donation3-a.webp"; //section image
// import projectDetails2 from "@/images/project-details-2.jpg";
import thumb2 from "@/images/donation3.webp"; //section image
import projectInfo from "@/images/owner.png";
import projectPerk1 from "@/images/donation-pl.png";

import thumb from "@/images/donation3-a.webp";

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

const donations = [
    {
        id: 1,
        image: image1,
        category: "Education",
        date: "30 Days Left",
        title: "Sponsor a happiness kit for underprivileged kids",
        goal: "25000.00",
        raised: 13,
    },
    {
        id: 2,
        image: image2,
        category: "Tragedy",
        date: "20 Days Left",
        title: "Help People in Assam Flood ",
        goal: "20000.00",
        raised: 13,
    },
    {
        id: 3,
        image: image3,
        category: "Food",
        date: "20 Days Left",
        title: "Help Us Feed The Widow Mataji ",
        goal: "20000.00",
        raised: 13,
    },
    
];

export const donationsArea = {
    tagline: "Businesses You Can Back",
    title: "Explore Projects",
    donations,
};

export const exploreCreators = {
    tagline: "Businesses You Can Back",
    title: "Explore Projects",
    projects: [
        {
            id: 1,
            image: image1,
            tagline: "Education",
            date: "30 Days Left",
            title: "Sponsor a happiness kit for underprivileged kids",
            goal: "25000.00",
            raised: 13,
        },
        {
            id: 2,
            image: image2,
            tagline: "Tragedy",
            date: "20 Days Left",
            title: " Help People in Assam Flood ",
            goal: "20000.00",
            raised: 13,
        },
    
    
    ],
};

export const donationArea = [
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

export const donationDetailsArea = {
    thumb,
    tagline: "Food",
    country: "India",
    title: "Help People in Assam Flood ",
    pledged: 2203,
    backers: 8,
    daysLeft: 20,
    raised: 3,
    goal: "20000.00",
    socials: socials3,
};

export const donationDetailsTabBtns = [
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

export const donationDetailsStory = {
    ids: "pills-home",
    text: "Women, after their spouse’s demise, come down to Vrindavan in their quest to seek spiritual salvation. They spend their life with other widows in the Ashrams.On a normal day, you’d see many widows eke out a living by performing Bhajans and Kirtans. After the nationwide lockdown was imposed, they’ve been left in the lurch without any kind of savings. Many widows here depend on the Ashrams for food, and survival. There are around 6000 widows living in Vrindavan. Today, they don’t have any source of income or work. They hardly have any savings.",

    lists: [
        '',
       
       
    ],
    image: thumb2,
    text2:"These widows are vulnerable. They have nobody to depend on. We urge you to come forward and help them. You might not be able to make the journey to Vrindavan, but you can definitely help feed hundreds of widows by donating a grocery kit. ",
    text3:"We ensure 100% transparency because you deserve to know when, where, and how your donations are bringing a change in who's life. Sponsor a Kit of Ration Kit for our Mataji and we will share with you a picture of the Kut marked with your name on it while it is being given to the beneficiary.",
    // items: [
    //     {
    //         idi: 1,
    //         title: "One Power Bank for Every Wrist Car",
    //         text: "Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum.",
    //     },
    //     {
    //         idi: 2,
    //         title: "One Power Bank for Every Wrist Car",
    //         className: "mt-45 mb-50",
    //         text: "Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum.",
    //     },
    // ],
    images: thumb3,
};

export const donationDetailsFaq = {
    id: "pills-profile",
    faqs,
};

export const donationDetailsUpdates = {
    id: "pills-contact",
    updates: [
        {
            id: 1,
            title: " is the first update of our new project",
            info: {
                image: info,
                name: "Sarah Albert",
                date: "4 March, 2020",
            },
        },
    ],
};

export const donationDetailsComments = {
    idc: "pills-4",
    comments: [
        {
            id: 1,
            
        },
    ],
};

export const donationDetailsSidebar = {
    info: {
        image: projectInfo,
        name: " Charitism Foundation ",
        backed: 10,
        text: "Non Profit",
    },
    perks: [
        {
            id: 1,
            image: projectPerk1,
            sold: 10,
            off: 50,
            amount: "0.1 Matic",
            claimed: 10,
            totalClaimed: 50,
        },
    ],
};


