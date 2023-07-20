import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
function NavList() {
  return (
    <Typography
      as="ul"
      className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
    >
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          duration={2000}
          spy={true}
          smooth={true}
          to="resume"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Get my Resume
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          duration={2000}
          spy={true}
          smooth={true}
          to="skills"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Skills
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="form"
          duration={2000}
          spy={true}
          smooth={true}
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contact
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="socials"
          duration={2000}
          spy={true}
          smooth={true}
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Socials
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="contribution"
          duration={2000}
          spy={true}
          smooth={true}
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Experiences
        </Link>
      </Typography>
    </Typography>
  );
}

export const Header = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="min-w-full rounded-none !shadow-none mb-[20px] px-6 py-3">
      <Typography
        as="div"
        className="flex items-center justify-between text-blue-gray-900"
      >
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 text-[20px] font-[600] cursor-pointer py-1.5"
        >
          Abdulganiyu Ibrahim
        </Typography>
        <Typography as="div" className="hidden lg:block">
          <NavList />
        </Typography>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </Typography>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};
