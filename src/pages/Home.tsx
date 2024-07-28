import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useTheme } from "@material-tailwind/react/index";
import { Box } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import { useEffect, useRef, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import { images, skills } from "../data/data";

import { TypeAnimation } from "react-type-animation";
import curly from "../assets/curly.png";
import instagram from "../assets/innstagrem.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
import voiceOver from "../assets/voiceIbrahim.mp3";

export const Home = () => {
  const [hasPlayed, setHasPlayed] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);
  const maxSteps = images.length;
  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  useEffect(() => {
    const audioPlayed = localStorage.getItem("voiceOverPlayed");
    if (audioPlayed) {
      setHasPlayed(true);
    }
    audioRef.current = new Audio(voiceOver);
  }, []);


  return (
    <Box>
      <Typography
        as="div"
        className="grid lg:grid-cols-2 gap-5 lg:px-[100px] px-[30px] mb-[20px] lg:mb-[40px]"
      >
        <Typography as="div" className="w-full mb-5 lg:mb-0">
          {!hasPlayed && (
            <p>
              You have found my portfolio, I am glad we are meeting for the
              first time{" "}
            </p>
          )}
          {hasPlayed && <p>Welcome back!</p>}
          <TypeAnimation
            sequence={[
              "Ibrahim is a Frontend Developer",
              "Ibrahim is a Tech Tutor",
              1000,
              "Ibrahim is a Mobile Application Expert",
              1000,
              "Ibrahim is a Web Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <Typography variant="p">
            I am a fullstack mobile and web developer from Lagos Nigeria. I
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
                as="a"
                target="_blank"
                href="https://x.com/ibrahimxtech"
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
                target="_blank"
                href="https://www.linkedin.com/in/ibrahimxtech/"
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
                target="_blank"
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
                target="_blank"
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
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
                    src={step?.imgPath}
                    alt={step?.label}
                  />
                ) : null}
              </Typography>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            backButton=""
            nextButton=""
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
      <Box className="flex justify-center gap-4">
        <Box>
          <Typography as="h3" className="text-center font-[600]">
            Get My Resume
          </Typography>
          <Box id="resume" className="flex justify-center">
            <Typography variant="div">
              <a
                href="https://instaresume.io/resume/view/JrCIxdtLo8YZ2fUrd5mz"
                target="_blank"
              >
                <Button className="bg-gradient-to-r from-blue-gray-300 to-gray-400">
                  Download my Resume
                </Button>
              </a>
            </Typography>
          </Box>
        </Box>
        <Box className="flex justify-center">
          <Typography variant="div" className="">
            <Typography as="h3" className="text-center font-[600]">
              Contact me here
            </Typography>
            <Box id="resume" className="flex justify-center">
              <Typography variant="div">
                <a
                  href="https://calendly.com/abdulganiyutechng/30min"
                  target="_blank"
                >
                  <Button className="bg-gradient-to-r from-blue-gray-300 to-gray-400">
                    Schedule a meeting
                  </Button>
                </a>
              </Typography>
            </Box>
          </Typography>
        </Box>
      </Box>
      <Box className="pb-[120px] mt-10 flex justify-center">
        <Typography as="p">Copyright © 2024 Ibrahim Abdulganiyu</Typography>
      </Box>
    </Box>
  );
};
