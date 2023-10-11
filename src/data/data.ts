import javascript from "../assets/javasript.png";
import redux from "../assets/redux.png";
import reactIcon from "../assets/react.png";
import reactNative from "../assets/RN.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import typesript from "../assets/typescript.png";
import nodejs from "../assets/nodejs.png";
import sanity from "../assets/sanity.png";
import canva from "../assets/canva.webp";
import mogondb from "../assets/mongodb.png";
import express from "../assets/express.png";
import material from "../assets/material.png";
import emailjsIcon from "../assets/emailjsIcon.png";
import lasmab from "../assets/lasmab.png";
import designXcel from "../assets/designXcel.png";
import nupat from "../assets/nupat.png";
import affilbase from "../assets/affilbase.png";
import affil from "../assets/affil.svg";
import TL from "../assets/TL.png";

type SkillType = {
  id: number;
  title: string;
  description: string;
  link: string;
  icon: string;
};

export const skills: SkillType[] = [
  {
    id: 1,
    title: "HTML 5",
    description:
      "With my brilliant foundation and steady HTML projects, I have created online apps, code websites, assist website visitors, take . psd files and mockups, and produced web applications that enhanced businesses and enterprises efficiently.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: html,
  },
  {
    id: 2,
    title: "Vanilla CSS",
    description:
      "Apart from vanilla CSS, my styling method also span across other styling frameworks and methods such as Tailwind, Bootstrap, and styled components.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: css,
  },
  {
    id: 3,
    title: "Tailwind CSS",
    description:
      "I am very proficient in the use of Tailwind across many software development systems from mobile desktop application development",
    link: "https://tailwindcss.com/",
    icon: tailwind,
  },
  {
    id: 4,
    title: "CSS Modules",
    description: "",
    link: "https://css-tricks.com/css-modules-part-1-need/",
    icon: css,
  },
  {
    id: 5,
    title: "Canva",
    description:
      "I create great logos, fliers, and graphic contents with Canva",
    link: "https://www.canva.com/",
    icon: canva,
  },
  {
    id: 6,
    title: "Sanity",
    description:
      "Sanity is a very great content management tool that I have incorporated in a couple of projects and It is very fast to use. I find it satisfying ",
    link: "https://www.sanity.io/",
    icon: sanity,
  },
  {
    id: 7,
    title: "JavaScript",
    description:
      "As a JavaScript developer, I'm responsible for implementing the front-end logic that defines the behavior of the visual elements of a web application. Also, I am responsible for connecting this with the services that reside on the back-end",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: javascript,
  },
  {
    id: 8,
    title: "TypeScript",
    description: "",
    link: "https://www.typescriptlang.org/",
    icon: typesript,
  },
  {
    id: 9,
    title: "React.js",
    description:
      "I design and implement Applications and softwares that suits user interfaces (UIs) and UI components using React, a front-end JavaScript library.",
    link: "https://reactjs.org/",
    icon: reactIcon,
  },
  {
    id: 10,
    title: "Node.js",
    description:
      "As a software developer who works with Node, an open-source developer tool that runs on the website's server-side functionality, I build and maintain network applications. Additionally, I also manage the data exchanged between servers and users through database tools such as MySQL.",
    link: "https://nodejs.org/",
    icon: nodejs,
  },
  {
    id: 11,
    title: "Express.js",
    description: "",
    link: "https://expressjs.com/",
    icon: express,
  },
  {
    id: 12,
    title: "MongoDB",
    description: "",
    link: "https://www.mongodb.com/",
    icon: mogondb,
  },
  {
    id: 13,
    title: "Material-UI",
    description:
      "I can use Material-UI (a CSS framework for JavaScript frontend libraries) as it offers a comprehensive suite of UI tools to help you ship new features faster and efficiently for your web applications",
    link: "https://material-ui.com/",
    icon: material,
  },
  {
    id: 14,
    title: "Redux Toolkit",
    description:
      "Redux is a JavaScript library for managing application state. It is often used with libraries such as React or Angular for building user interfaces. Redux follows a unidirectional data flow, making it easier to reason about the changes that happen in an application. It also provides a simple way to manage the state of complex applications by allowing developers to specify how the state should change in response to actions that are dispatched.",
    link: "https://redux.js.org/",
    icon: redux,
  },
  {
    id: 15,
    title: "EmailJS",
    description: "",
    link: "https://www.emailjs.com/",
    icon: emailjsIcon,
  },
  {
    id: 16,
    title: "React Native",
    description:
      "React Native is a JavaScript framework for building native mobile applications. I can use it to build iOS and Android applications using JavaScript and the React library. React Native uses the same design as React, making it possible to compose a rich mobile UI from declarative components.",
    link: "https://reactnative.dev/",
    icon: reactNative,
  },
  {
    id: 17,
    title: "Redux Toolkit Query",
    description: "",
    link: "https://redux-toolkit.js.org/tutorials/rtk-query",
    icon: redux,
  },
];

type ImageType = {
  label: string;
  description: string;
  imgPath: string;
  link: string;
};

export const images: ImageType[] = [
  {
    label: "DesignXcel",
    description:
      "DesignXcel is a design website where people can utilize unlimited features of tech ranging from product design to software build with very cheap subscription",
    imgPath: designXcel,
    link: "https://designxcel.com/",
  },
  {
    label: "Nupat",
    description:
      "Nupat Code Camp is a code academy that is specialized in impacting tech skills",
    imgPath: nupat,
    link: "https://nupat.africa/",
  },
  {
    label: "Lasmab",
    description:
      "Lasmab is a Lagos State Anglican Management Board that directs, organize and manage the affairs of all Anglican schools in Lagos",
    imgPath: lasmab,
    link: "https://lasmab-landing-page.vercel.app/",
  },
  {
    label: "AffilBase",
    description:
      "Affil Base Merchant App is a merchant application that helps merchants handle and organize all their agents and productivity, it is currently on beta phase",
    imgPath: affilbase,
    link: "",
  },
];

type ExpType = {
  id: number;
  icon: string;
};

export const experiences: ExpType[] = [
  {
    id: 1,
    icon: "https://nupat.africa/static/media/logo.42137cb95eeb5c3ead69.png",
  },
  {
    id: 2,
    icon: affil,
  },
  {
    id: 3,
    icon: TL,
  },
];
