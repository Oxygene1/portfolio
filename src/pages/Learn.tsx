import {
  Card,
  CardBody,
  List,
  ListItem,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

export const Learn = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tableOfContents = [
    { title: "Introduction to HTML", route: "/learn" },
    {
      title: "Getting Familiar with the basic structures of HTML",
      route: "/learn/basic-structure",
    },
    { title: "Tags and Elements", route: "/learn/tags" },
    { title: "Attributes", route: "/learn/attributes" },
    { title: "Forms", route: "/learn/forms" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Mobile menu button */}
      <div className="lg:hidden mb-4">
        <IconButton
          variant="text"
          size="lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } lg:block lg:w-1/4 lg:pr-4 mb-4 lg:mb-0`}
        >
          <Card className="sticky top-0">
            <CardBody>
              <Typography variant="h5" color="blue" className="mb-4">
                Table of Contents
              </Typography>
              <List>
                {tableOfContents.map((item, index) => (
                  <ListItem key={index + 1}>
                    <Link
                      to={item.route}
                      className="text-[#607d8b]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </CardBody>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
