import { useState, useRef } from "react";
import { Header } from "./components/header/index";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Box } from "@mui/material";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import SwipeableViews, { SwipeableViewsProps } from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@material-tailwind/react/index";
import lasmab from "./assets/lasmab.png";
import designXcel from "./assets/designXcel.png";
import nupat from "./assets/nupat.png";
import affilbase from "./assets/affilbase.png";
import { PopupWidget } from "react-calendly";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import emailjs from "emailjs-com";
import resume from "./assets/Resume-Ibrahim-Abdulganiyu.pdf";
import javascript from "./assets/javasript.png";
import redux from "./assets/redux.png";
import reactIcon from "./assets/react.png";
import reactNative from "./assets/RN.png";
import tailwind from "./assets/tailwind.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import typesript from "./assets/typescript.png";
import nodejs from "./assets/nodejs.png";
import sanity from "./assets/sanity.png";
import canva from "./assets/canva.webp";
import mogondb from "./assets/mongodb.png";
import express from "./assets/express.png";
import material from "./assets/material.png";
import emailjsIcon from "./assets/emailjsIcon.png";
import affil from "./assets/affil.svg";
import TL from "./assets/TL.png";
import instagram from "./assets/innstagrem.png";
import { TypeAnimation } from "react-type-animation";
import curly from "./assets/curly.png";
import { Theme } from "@material-ui/core/styles";

type AutoPlayType = <P extends object>(
  Component: React.ComponentType<P>
) => React.ComponentType<P>;

const AutoPlaySwipeableViews = autoPlay<SwipeableViewsProps>(SwipeableViews);

// type FormValues = {
//   email: string;
//   name: string;
//   phoneNumber: string;
//   message: string;
// };
function App() {
  const images = [
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

  const skills = [
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
  const theme = useTheme<Theme>();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const form = useRef(null);
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_ajo817t",
        "template_75vn9zs",
        form,
        "xeJgl9bgaJn5fCkpD"
      )
      .then(
        (result) => {
          console.log(result?.text);
          form.current?.reset();
        },
        (error) => {
          console.log(error?.text);
        }
      );
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resume-ibrahim-abdulganiyu.pdf";
    link.click();
  };
  const experiences = [
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
  return (
    <>
      <Header />
      <Typography
        as="div"
        className="grid lg:grid-cols-2 gap-5 lg:px-[100px] px-[30px] mb-[20px] lg:mb-[40px]"
      >
        <Typography as="div" className="w-full mb-5 lg:mb-0">
          <TypeAnimation
            sequence={[
              "Ibrahim is a Software Engineer",
              "Ibrahim is a Tech Tutor",
              1000,
              "Ibrahim is a brand designer",
              1000,
              "Ibrahim is a Social media promoter",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <Typography variant="p">
            A fullstack mobile and web developer from Lagos Nigeria with a BSc
            in Social Work from University of Ilorin, Ilorin, Kwara State. I
            design, I develop, and I maintain fully-fledged and functioning
            platforms with databases or servers, I'm eager to work for any
            respectable organization, individual or entity who is interested in
            my services.
          </Typography>
          <Typography as="div" className="hidden lg:block">
            <Typography
              as="img"
              src="https://i.pinimg.com/originals/b9/37/12/b9371273ae94a946e92074d1b9696680.gif"
              className="h-[100px]"
            ></Typography>
            <Typography as="div" className="flex">
              <Typography as="p" className="">
                Check my socials to link up with me
              </Typography>
              <Typography as="img" className="h-[300px]" src={curly} />
            </Typography>
          </Typography>
        </Typography>
        <Typography
          variant="div"
          className="w-full myPoster bg-cover h-[300px] lg:h-[500px] bg-no-repeat rounded-[10px] md:rounded-[20px]"
        >
          <Typography as="div" className="w-full h-full"></Typography>
        </Typography>
      </Typography>
      <Box className="flex justify-center lg:hidden">
        <Typography as="div">
          <Typography
            as="img"
            src="https://i.pinimg.com/originals/b9/37/12/b9371273ae94a946e92074d1b9696680.gif"
            className="h-[100px]"
          ></Typography>
          <Typography as="div" className="">
            <Typography as="p" className="">
              Check my socials to link up with me
            </Typography>
            <Typography as="img" className="h-[200px]" src={curly} />
          </Typography>
        </Typography>
      </Box>
      <Typography
        variant="div"
        id="socials"
        className="flex justify-center mt-[15px]"
      >
        <Typography variant="h3" className="text-[20px] font-[500]">
          Checkout my socials
        </Typography>
      </Typography>
      <Typography as="div" className="flex justify-center pb-[15px]">
        <Typography
          as="div"
          className="flex justify-center mb-[20px] border-b-2 border-b-[#607d8b] shadow-xl w-[90%] md:w-[70%] p-2"
        >
          <Typography
            as="div"
            className="grid md:grid-cols-2 gap-1 lg:grid-cols-4"
          >
            <Typography
              as="div"
              className="flex items-center justify-center gap-1"
            >
              <Typography
                as="img"
                src={twitter}
                className="w-[20px] h-[20px]"
              />
              <Typography
                className="cursor-pointer"
                variant="a"
                href="https://twitter.com/ibrahimxtech"
              >
                twitter: @ibrahimxtech
              </Typography>
            </Typography>
            <Typography
              as="div"
              className="flex items-center justify-center gap-1"
            >
              <Typography
                as="img"
                src={linkedin}
                className="w-[20px] h-[20px]"
              />
              <Typography
                className="cursor-pointer"
                as="a"
                href="https://www.linkedin.com/in/ibrahim-abdulganiyu-10208a202/"
              >
                LinkedIn: ibrahim Abdulganiyu
              </Typography>
            </Typography>
            <Typography
              as="div"
              className="flex items-center justify-center gap-1"
            >
              <Typography
                as="img"
                src={instagram}
                className="w-[20px] h-[20px]"
              />
              <Typography
                className="cursor-pointer"
                as="a"
                href="https://instagram.com/ibrahimxtech?igshid=MzNlNGNkZWQ4Mg=="
              >
                Instagram: @ibrahimxtech
              </Typography>
            </Typography>
            <Typography
              as="div"
              className="flex items-center justify-center gap-1"
            >
              <Typography as="img" src={github} className="w-[20px] h-[20px]" />
              <Typography
                className="cursor-pointer"
                as="a"
                href="https://github.com/Oxygene1"
              >
                Github: Oxygene1
              </Typography>
            </Typography>
          </Typography>
        </Typography>
      </Typography>
      <Typography
        as="div"
        id="skills"
        className="bg-gradient-to-r from-blue-gray-300 to-gray-400 py-[50px]"
      >
        <Typography as="div" className="flex justify-center">
          <Typography as="h3" className="text-[20px] text-white font-[500]">
            My Skill Set
          </Typography>
        </Typography>
        <Box className="lg:px-[100px] flex justify-center px-[30px] mb-[50px] items-center">
          <Box className="grid md:grid-cols-2 gap-[2rem] lg:grid-cols-3">
            {skills?.map((data) => (
              <Card className="mt-6 w-full" key={data.id}>
                <CardBody>
                  <Typography
                    as="img"
                    src={data.icon}
                    className="text-[#607d8b] w-12 h-12 mb-4"
                  />
                  <Typography as="h5" className="mb-2 tex-[#607d8b]">
                    {data.title}
                  </Typography>
                  <Typography>{data.description}</Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Typography as="a" href={data.link} className="inline-block">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center gap-2"
                    >
                      Learn More
                      <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                    </Button>
                  </Typography>
                </CardFooter>
              </Card>
            ))}
          </Box>
        </Box>
      </Typography>
      <Typography variant="div" className="my-[30px] flex justify-center">
        <Typography
          as="h3"
          className="text-center text-[20px] lg:w-[20%] font-[500]"
        >
          My recent works
        </Typography>
      </Typography>
      <Box className="grid lg:grid-cols-2 px-[20px] mb-[30px] md:px-[100px]">
        <Box className="w-full border shadow-lg rounded-[20px] mb-5">
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography>{images[activeStep]?.label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme?.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images?.map((step, index) => (
              <Typography as="div" key={step?.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      display: "block",
                      overflow: "hidden",
                      width: "100%",
                    }}
                    className="lg:h-[400px] h-[200px] sm:h-[250px]"
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </Typography>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
          />
        </Box>

        <Box className="flex justify-center items-center">
          <Box>
            <Typography variant="p" className="text-center mb-3">
              {images[activeStep].description}
            </Typography>
            <Typography
              variant="a"
              href={images[activeStep].link}
              className="text-center text-green-700"
            >
              visit the website here
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box id="contribution" className="mb-[20px]">
        <Typography as="h3" className="text-center font-[600] mb-5">
          My experiences
        </Typography>
        <Box className="flex justify-center">
          <Box className="grid items-center md:grid-cols-3 gap-3">
            {experiences.map((data) => (
              <Typography
                as="img"
                className="h-[40px]"
                src={data.icon}
                key={data.id}
              ></Typography>
            ))}
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography as="h3" className="text-center font-[600]">
          Get My Resume
        </Typography>
        <Box id="resume" className="flex justify-center py-[30px]">
          <Typography variant="div">
            <Button
              className="bg-gradient-to-r from-blue-gray-300 to-gray-400"
              onClick={handleDownload}
            >
              Download my Resume
            </Button>
          </Typography>
        </Box>
      </Box>
      <Box id="form" className="flex justify-center py-[70px]">
        <Typography variant="div" className="w-[90%] md:w-[60%]">
          <Typography as="h3" className="text-center mb-5 font-[600]">
            Contact me here
          </Typography>

          <form onSubmit={sendEmail} className="grid" ref={form}>
            <input
              className="mb-3 border-2 px-[10px] py-[5px] rounded-xl"
              placeholder="input your email address"
            />
            <input
              className="mb-3 border-2 px-[10px] py-[5px] rounded-xl"
              placeholder="input your name here"
            />
            <input
              className="mb-3 border-2 px-[10px] py-[5px] rounded-xl"
              placeholder="input your phone number here"
              type="tel"
            />
            <textarea className="mb-3 border-2 px-[10px] h-[90px] py-[5px] rounded-xl" />
            <Button
              className="bg-gradient-to-r from-blue-gray-300 to-gray-400 py-[10px] rounded-[10px] text-white"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Typography>
      </Box>

      <Box>
        <PopupWidget
          url="https://calendly.com/abdulganiyutechng"
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
          text="Schedule a meeting with Ibrahim!"
          textColor="#ffffff"
          color="gray"
        />
      </Box>
    </>
  );
}

export default App;
