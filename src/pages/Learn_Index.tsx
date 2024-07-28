import React from "react";
import {
  Typography,
  Card,
  CardBody,
  List,
  ListItem,
} from "@material-tailwind/react";
import createFolder from "../learnAsset/createFolder.jpg";
import createHTML from "../learnAsset/createHTML.jpg";
import exclCreate from "../learnAsset/exlCreate.jpg";
import nameFile from "../learnAsset/nameFile.jpg";
import genearatedHTML from "../learnAsset/generatedHTML.jpg";
import Congratulations from "../components/congratulations";
const Learn_Index: React.FC = () => {
  const setupSteps = [
    {
      step: "Create a new folder on your desktop",
      image: createFolder,
    },
    {
      step: "Open the created folder in your text editor (e.g., VS Code, Sublime Text) and Click on 'New File' icon. PS: Your text editor might not look like mine but they all work the same way",
      image: createHTML,
    },
    {
      step: "Save the file with .html extension (e.g., index.html)",
      image: nameFile,
    },
    {
      step: "Press '!' and then 'Enter' to generate HTML template",
      image: exclCreate,
    },
    {
      step: "After generating the HTML code, save the file and it should look like this 👇",
      image: genearatedHTML,
    },
  ];
  return (
    <div>
      <Typography variant="h2" color="blue" className="mb-6 text-center">
        Learn HTML with Ibrahim
      </Typography>

      <Card className="mb-8 shadow-lg">
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-4">
            The Big Questions
          </Typography>
          <List>
            <ListItem>What really is HTML?</ListItem>
            <ListItem>
              Why is it the first point of entry for almost everyone in tech?
            </ListItem>
          </List>
        </CardBody>
      </Card>

      <div className="space-y-6">
        <Card className="shadow-lg">
          <CardBody>
            <Typography variant="h5" color="blue" className="mb-4">
              Q1: What really is HTML?
            </Typography>
            <Typography variant="paragraph" className="text-gray-700">
              HTML is a markup language for creating web pages. It defines the
              structure of a document and the content that will be displayed on
              a web page. It is the foundation for text and media (audio,
              graphic and video) content to get displayed properly on the web.
            </Typography>
          </CardBody>
        </Card>

        <Card className="shadow-lg">
          <CardBody>
            <Typography variant="h5" color="blue" className="mb-4">
              Q2: Why is it the first point of entry for almost everyone in
              tech?
            </Typography>
            <List className="list-disc list-inside text-gray-700">
              <ListItem>
                HTML has a relatively simple syntax that's easy to understand
                for beginners.
              </ListItem>
              <ListItem>
                It doesn't require complex programming concepts to get started.
              </ListItem>
              <ListItem>
                You can create visible results quickly, which is encouraging for
                newcomers.
              </ListItem>
              <ListItem>
                HTML is the backbone of every website, making it essential
                knowledge for web developers.
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card className="shadow-lg">
          <CardBody>
            <Typography variant="h5" color="blue" className="mb-4">
              Setting Up Your First HTML File
            </Typography>
            {setupSteps.map((step, index) => (
              <div key={index + 1} className="mb-4">
                <Typography variant="h6" color="blue-gray">
                  Step {index + 1}: {step.step}
                </Typography>
                <img
                  src={step.image}
                  alt={`Step ${index + 1}`}
                  className="mt-2 w-full"
                />
              </div>
            ))}
          </CardBody>
        </Card>
        <Congratulations />
      </div>
    </div>
  );
};

export default Learn_Index;
