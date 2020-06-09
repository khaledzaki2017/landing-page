import React, { useState } from "react";
import axios from "axios";
//using a cloudinary API to upload images
const UploadImages = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImg = (event) => {
    const files = event.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "d5fekbxk");
    formData.append("file", files);
    setLoading(true);
    axios
      .post("https://api.cloudinary.com/v1_1/dkmuq2ocy/image/upload", formData)
      .then((res) => setImage(res.data.secure_url))
      .then(setLoading(false))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <label for="logo">Choose logo to upload </label>

      <input type="file" name="logo" onChange={uploadImg} />
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <img className="settings-image" src={image} />
      )}
    </div>
  );
};
export default UploadImages;
