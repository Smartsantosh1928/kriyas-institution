import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";
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

  // fetch('http://localhost:3000/register', {
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
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input variant="standard" type="text" label="Name" size="lg" name="stud_name" onChange={handleChange}/>
            <Input variant="standard" type="email" label="Email" size="lg" name="stud_email" onChange={handleChange}/>
            <Input variant="standard" type="text" label="Phone" size="lg" name="stud_phone" onChange={handleChange}/>
            <Input
              variant="standard"
              type="password"
              label="Password"
              name="stud_password"
              size="lg"
              onChange={handleChange}
            />
            <Select variant="outlined" label="Select Class" name="stud_std" value={details.stud_std} onChange={handleChange}>
              <Option value="Class 12+">Class 12+</Option>
              <Option value="Class 12" >Class 12</Option>
              <Option value="Class 11">Class 11</Option>
              <Option value="Class 10">Class 10</Option>
            </Select>
            <div className="-ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" checked={details.terms} name="terms" onChange={(e) => {setDetails(e.target.checked)}}/>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
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
