import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../api/api";
import "./Info.css"


const Infoimg = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  const handleImage = (newImage) => {
    console.log("New image clicked:", newImage);
    if (newImage !== mainImage) {
      setMainImage(newImage)
    }
  }

  useEffect(() => {
    if (product && product.imgs.length > 0) {
      setMainImage(product.imgs[0])
    }
  }, [product])

  useEffect(() => {
    const selectProduct = productsData.find(product => product.id == parseInt(id))
    if (selectProduct) {
      setProduct(selectProduct)
    } else {
      console.log("error")
    }
  }, [id])

  return (
    <div className="info-content-img">
      {
        product ? (
          <>
          <div>
            <img className="main-image" src={mainImage} alt="" />
          </div>
            <br />
            <div className="info-content-img-in">
              {
                product.imgs.map((image, index) => (
                  <img
                  className="main-imgs"
                    key={index}
                    src={image}
                    onClick={() => handleImage(image)}
                  />
                ))
              }
            </div>
          </>
        ) : (
          <p>Loading</p>
        )
      }
    </div>
  );
};

export default Infoimg;
