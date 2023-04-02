import { Redirect } from 'react-dom';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography
} from "@material-tailwind/react";
import { SimpleFooter } from "./simple-footer";
import { useState } from "react";

export function SignUp() {

  const [details, setDetails] = useState({})
  const handleChange = (e) => {
    if(typeof(e) == 'string' &&e.includes("Class"))
    {
      setDetails({ ...details, "stud_std": e })
      console.log(details);
    }
    else{
      const { name, value } = e.target
      setDetails({ ...details, [name]: value })
      console.log(details);
    }
  }

  const handlesubmit = () => {
    if(true)
    return <Redirect to="/upload" />;
  }

  // fetch('https://plum-sparkling-squid.cyclic.app/register', {
  //   method: 'POST',
  //   body : details
  // })

  return (
    <>
      <img
        src="/img/atom.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover -scale-x-100"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white" className="text-blue-500">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 p-5">
            UserName
            <input type="text" name="user" id="user" placeholder="Type Your UserName Here" onChange={handleChange} className="border border-blue-500 p-2 rounded-xl" />
            Password
            <input type="password" name="pass" id="pass" placeholder="Type Your Paswword Here" onChange={handleChange} className="border border-blue-500 p-2 rounded-xl" />
          </CardBody>
          <CardFooter className="pt-0 text-center p-10">
            <Button variant="gradient" className="bg-blue-500 rounded-2xl p-3 px-3" onClick={handlesubmit}>
              Register
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignUp;
