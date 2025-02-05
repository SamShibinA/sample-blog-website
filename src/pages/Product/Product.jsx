import React, { useState, useEffect } from "react";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";

function Product() {
  const images = [image1, image2, image3, image4, image5]; 
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage)=>(currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image} 
          style={{
            width: "25rem",
            height: "20rem",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px black",
            transition: "opacity 0.5s",
            display: index === currentImage ? "block" : "none",
          }}
        />
      ))}
    </div>
  );
}

export default Product;