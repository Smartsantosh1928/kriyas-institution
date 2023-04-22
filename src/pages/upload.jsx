import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';

const Upload = () => {

  const navigate=useNavigate()
  const location=useLocation()

  useEffect(()=>{
    if(location.state?.from!=="signup"){
      navigate("/signup")
    }else{
    Swal.fire({
          position: 'top-end',
          icon: 'info',
          title: 'Your PDF must be named as brochure.pdf',
        })}
  },[])

  const [isloading, setIsLoading] = useState(false);

const handleFileUpload = (event) => {
    const file = event.target[0].files[0];
    if(!file) {
      new Swal('Please select a file')
    }
    else if(file.name==="brochure.pdf")
    {
      const formData = new FormData();
      formData.append('file', file);
      setIsLoading(true)
      fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      }).then(async response => 
        {
          const data = await response.text();
          console.log(data)
          setIsLoading(false)
          new Swal(data)
        })
      .catch(error => console.log(error));
      
    }
    else
    {
      Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Your PDF must be named as brochure.pdf',
      })
    }
};
  
const handleFormSubmit = (e) => {
  e.preventDefault();
  handleFileUpload(e)
}

return (
    <div className='flex justify-center items-center'>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
      <input type="file" name="file" className="mt-80" /><br /><br />
      {
        isloading ? 
        <div className='flex justify-center items-center p-5'>
        <ReactLoading type={"spinningBubbles"} color={"lightblue"} height={'10%'} width={'20%'} /> 
        </div> 
        : <input type="submit" value="Upload" className="px-3 p-1 bg-blue-500 rounded-xl cursor-pointer hover:bg-blue-700"/>
      }
      </form>
    </div>
);
}

export default Upload;