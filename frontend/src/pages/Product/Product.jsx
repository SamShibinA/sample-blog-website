import React, { useState, useEffect } from "react";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import "./Product.css";

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
    <div className ="product-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image} 
          style={{
            display: index === currentImage ? "block" : "none"
          }}
        />
      ))}
    </div>
  );
}

export default Product;