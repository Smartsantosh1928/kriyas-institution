import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import callsvg from '/img/call.svg'
import youtubesvg from '/img/youtube.svg'
import whatsappsvg from '/img/whatsapp.svg'
import emailsvg from '/img/email.svg'
import React from "react";

const year = new Date().getFullYear();

export function Footer({ title, description,  socials, menus, copyright }) {
  return (
    <footer className="relative px-4 -mt-20 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center md:justify-center">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h2" className="mb-4 edu" color="gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500 text-2xl">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-center">
              {socials.map(({ color, name,  path }) => (
                <a
                  href={path}
                  target="_blank"
                >
                  <IconButton color="white" className="rounded-full flex justify-center items-center">
                    <Typography color={color}>
                    {name == "youtubesvg" ? (<img src={youtubesvg} alt="video" className='w-6 h-6'/>)
                    : name === "callsvg" ? (<img src={callsvg} alt="video" className='w-7 h-7'/>)
                    : name === "whatsappsvg" ? (<img src={whatsappsvg} alt="video" className='w-7 h-7'/>)
                    : name === "emailsvg" ? (<img src={emailsvg} alt="video" className='w-7 h-7'/>) : null}
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500 text-lg"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Kriyas Institution",
  description:
    "Sign Of Excellence and Success.",
  socials: [
    {
      color: "red",
      name: "youtubesvg",
      path: "https://www.youtube.com/@mahe.chemist402",
    },
    {
      color: "green",
      name: "callsvg",
      path: "tel:+91 9486552761",
    },
    {
      color: "blue",
      name: "whatsappsvg",
      path: "https://wa.me/919442666074",
    },
    {
      color: "red",
      name: "emailsvg",
      path: "mailto:maheswarivaseekaran@gmail.com",
    }
  ],
  copyright: (
    <>
      Copyright © {year} {" "}
      <span className="edu">
        Kriyas Institution{" "} 
      </span> 
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
