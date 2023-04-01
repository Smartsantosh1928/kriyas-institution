const Upload = () => {

const handleFileUpload = (event) => {
    const file = event.target[0].files[0];
    const formData = new FormData();
    formData.append('file', file);
  
  fetch('http://127.0.0.1:3000/upload', {
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
      <input type="file" name="file" /><br /><br />
      <input type="submit" value="Upload" />
      </form>
    </div>
);
}

export default Upload;