// social media
import instagram from "../assets/icons/socials/instagram.svg";
import facebook from "../assets/icons/socials/facebook.svg";
import twitter from "../assets/icons/socials/twitter.svg";
import linkedin from "../assets/icons/socials/linkedin.svg";

// social media - BLACK
import instagramB from "../assets/icons/team/instagram-black.svg";
import facebookB from "../assets/icons/team/facebook-black.svg";
import twitterB from "../assets/icons/team/twitter-black.svg";
import linkedinB from "../assets/icons/team/linkedin-black.svg";

// services
import AirFlight from "../assets/icons/services/airFlight.svg";
import Sea from "../assets/icons/services/sea.svg";
import Shipping from "../assets/icons/services/shipping.svg";
import Warehouse from "../assets/icons/services/warehouse.svg";

// project
import contract from "../assets/images/projectImg/contract.png";
import liquid from "../assets/images/projectImg/liquid.png";
import packaging from "../assets/images/projectImg/packaging.png";
import transport from "../assets/images/projectImg/transport.png";
import warehouse from "../assets/images/projectImg/warehouse.png";

// Blog
import blog1 from "../assets/images/blog/blog1.png";
import blog2 from "../assets/images/blog/blog2.png";
import blog3 from "../assets/images/blog/blog3.png";

// header
import call from "../assets/icons/topheading/call.svg";
import envelop from "../assets/icons/topheading/envelop.svg";
import time from "../assets/icons/topheading/time.svg";

// About
import money from "../assets/icons/about/money.svg";
import box from "../assets/icons/about/box.svg";

export const SERVICES = {
  Sea: {
    id: 1,
    img: Sea,
    title: "Sea Transport Services",
    description:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  Warehouse: {
    id: 2,
    img: Warehouse,
    title: "Warehousing Services",
    description:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  AirFlight: {
    id: 3,
    img: AirFlight,
    title: "Air Fright Services",
    description:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  Shipping: {
    id: 4,
    img: Shipping,
    title: "Local Shipping Services",
    description:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
};

// project
export const ACROSSIMG = {
  liquid: {
    id: 1,
    img: liquid,
    title: "Liguid Transportation",
    subTitle: "Premium Tankers",
  },
  packaging: {
    id: 2,
    img: packaging,
    title: "Packaging Solutions",
    subTitle: "Warehouse Management",
  },
  contact: {
    id: 3,
    img: contract,
    title: "Contract Logistics",
    subTitle: "Road Transportation",
  },
  warehouse: {
    id: 4,
    img: warehouse,
    title: "Warehouse & Distribution",
    subTitle: "Large Warehouse",
  },
  transport: {
    id: 5,
    img: transport,
    title: "Specialized Transport",
    subTitle: "Ocean Transports",
  },
};

export const CONTACT_DATA = {
  mail: {
    id: 1,
    icon: envelop,
    topText: "Email",
    bottomText: "contact@logistics.com",
  },
  time: {
    id: 2,
    icon: time,
    topText: "Mon - Sat 9:00 - 18:00",
    bottomText: "Sunday Closed",
  },
  phone: {
    id: 3,
    icon: call,
    topText: "Call Us",
    bottomText: "(00) 112 365 489",
  },
};

export const SOCIAL_MEDIA = {
  instagram: {
    id: 1,
    icon: instagram,
    link: "https://www.instagram.com",
  },
  facebook: {
    id: 2,
    icon: facebook,
    link: "https://www.facebook.com",
  },
  twitter: {
    id: 3,
    icon: twitter,
    link: "https://www.twitter.com",
  },
  linkedin: {
    id: 4,
    icon: linkedin,
    link: "https://www.linkedin.com",
  },
};

export const SOCIAL_BLACK = {
  instagram: {
    id: 1,
    icon: instagramB,
    link: "https://www.instagram.com",
  },
  facebook: {
    id: 2,
    icon: facebookB,
    link: "https://www.facebook.com",
  },
  twitter: {
    id: 3,
    icon: twitterB,
    link: "https://www.twitter.com",
  },
  linkedin: {
    id: 4,
    icon: linkedinB,
    link: "https://www.linkedin.com",
  },
};

export const NEWS = {
  1: {
    image: blog1,
    link: "#",
    date: {
      day: 8,
      month: "September",
    },
    title: "Inland freight a worthy solution for your business",
    text: "We are dedicated in creating added value for our customers by implementing modern technology in our work.",
    bullets: [
      "Urgent transport solutions",
      "Reliable & experienced staffs",
      "Urgent transport solutions",
      "Reliable & experienced staffs",
    ],
  },
  2: {
    image: blog2,
    link: "#",
    date: {
      day: 12,
      month: "September",
    },
    title: "How technology can help redraw the supply chain map",
    text: "We are dedicated in creating added value for our customers by implementing modern technology in our work.",
    bullets: [
      "Urgent transport solutions",
      "Reliable & experienced staffs",
      "Urgent transport solutions",
      "Reliable & experienced staffs",
    ],
  },
  3: {
    image: blog3,
    link: "#",
    date: {
      day: 25,
      month: "September",
    },
    title: "Five things you should have ready for your broker",
    text: "We are dedicated in creating added value for our customers by implementing modern technology in our work.",
    bullets: [
      "Urgent transport solutions",
      "Reliable & experienced staffs",
      "Urgent transport solutions",
      "Reliable & experienced staffs",
    ],
  },
};

export const DELIVERY_TRAVEL = {
  money: {
    id: 1,
    images: money,
    description: "Delivery on Time",
  },
  box: {
    id: 2,
    images: box,
    description: "Optimized Travel Cost",
  },
};
