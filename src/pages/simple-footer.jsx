import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

export function SimpleFooter({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className="">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2">
        <Typography variant="small" className="font-normal text-inherit">
          &copy; {year}, made with{" "}
          <HeartIcon className="-mt-0.5 inline-block h-3.5 w-3.5" /> by{" "}
          <a
            href={brandLink}
            target="_blank"
            className="transition-colors hover:text-blue-500 edu"
          >
            {brandName}
          </a>{" "}
          for a better web.
        </Typography>
      </div>
    </footer>
  );
}

SimpleFooter.defaultProps = {
  brandName: "Unijac Technologies",
  brandLink: "https://www.unijactech.com",
  routes: [
    { name: "Unijac Technologies", path: "https://www.unijactech.com" },
    { name: "About Us", path: "https://www.unijactech.com/about/about.html" },
    { name: "Contact Us", path: "https://www.unijactech.com/contact/contact.php" }
  ],
};

SimpleFooter.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

SimpleFooter.displayName = "/src/widgets/layout/simple-footer.jsx";

export default SimpleFooter;
