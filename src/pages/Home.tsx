import { images, skills, experiences } from "../data/data";
import { useState, useRef, FormEvent } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Alert, AlertTitle, Box } from "@mui/material";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@material-tailwind/react/index";
// import { PopupWidget } from "react-calendly";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import emailjs from "emailjs-com";
import resume from "../assets/IBRAHIM-ABDULGANIYU-RESUME.pdf";

import instagram from "../assets/innstagrem.png";
import { TypeAnimation } from "react-type-animation";
import curly from "../assets/curly.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Home = () => {
  const theme = useTheme();
  const [snackBar, setSnackBar] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const maxSteps = images.length;
  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = async (event: FormEvent) => {
    event.preventDefault();
    if (form?.current) {
      try {
        const result = await emailjs?.sendForm(
          "service_ajo817t",
          "template_75vn9zs",
          form?.current,
          "xeJgl9bgaJn5fCkpD"
        );
        console.log(result?.text);
        form.current.reset();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDownload = () => {
    // window.open(`${resume}`, "_blank");
    setSnackBar(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "IBRAHIM-ABDULGANIYU-RESUME.pdf";

    // Add a text indicating the download is in progress
    const downloadText = document.createTextNode("Downloading...");
    link.appendChild(downloadText);

    document.body.appendChild(link);

    link.click();

    // Remove the download in progress text once the download is complete
    link.onload = () => {
      link.removeChild(downloadText);
      // Show a notification when the download is complete
      // You can use a library or custom notification component here
    };

    document.body.removeChild(link);
  };
  return (
    <>
      {snackBar && (
        <Alert
          className="fixed z-50"
          onClose={() => setSnackBar(false)}
          severity="success"
        >
          <AlertTitle>Success</AlertTitle>
          Resume download complete{" "}
          <strong
            className="cursur-pointer"
            onClick={() => window.open(`${resume}`, "_blank")}
          >
            <button> check it out!</button>
          </strong>
        </Alert>
      )}
      <Typography
        as="div"
        className="grid lg:grid-cols-2 gap-5 lg:px-[100px] px-[30px] mb-[20px] lg:mb-[40px]"
      >
        <Typography as="div" className="w-full mb-5 lg:mb-0">
          <TypeAnimation
            sequence={[
              "Ibrahim is a MERN STACK Engineer",
              "Ibrahim is a Tech Tutor",
              1000,
              "Ibrahim is a Brand designer",
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

      {/* <Box>
    <PopupWidget
      url="https://calendly.com/abdulganiyutechng"
      rootElement={document.getElementById("root")!}
      text="Schedule a meeting with Ibrahim!"
      textColor="#ffffff"
      color="gray"
    />
  </Box> */}
    </>
  );
};
