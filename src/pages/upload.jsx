import {swal} from 'sweetalert2';

const Upload = () => {

const handleFileUpload = (event) => {
    const file = event.target[0].files[0];
    const formData = new FormData();
    formData.append('file', file);
  
  fetch('https://plum-sparkling-squid.cyclic.app/upload', {
        method: 'POST',
        body: formData,
      }).then(async response => 
        {
          const data = await response.text();
          console.log(data)
          confirm(data)
        })
      .catch(error => console.log(error));
      
};
  
const handleFormSubmit = (e) => {
  e.preventDefault();
  handleFileUpload(e)
}

return (
    <div>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
      <input type="file" name="file" className="border" /><br /><br />
      <input type="submit" value="Upload" className="px-3 p-1 bg-blue-500 rounded-xl"/>
      </form>
    </div>
);
}

export default Upload;