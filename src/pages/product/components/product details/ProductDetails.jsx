import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addReview, selectProduct } from "../../../../redux/product/productController";

import "./productDetails.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { Rate } from "antd";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});

  const [reting , setReting] = useState(0)
  const [feedback , setFeedback] = useState("")

  const { selectedProduct, status } = useSelector((state) => state.product);

  // console.log(selectedProduct);
  useEffect(() => {
    dispatch(selectProduct(id));
  }, []);

  useEffect(() => {
    console.log("useeffect run");
    if (status === "success") {
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);

  const reviewHandle =(e)=>{
    e.preventDefault();
   console.log(reting , feedback);
   dispatch(addReview({ id:product._id, reting, feedback}))
   console.log("ok");
  }

  return (
    <div className="product_details">
      <div className="image_container">

        <Carousel
          infiniteLoop
          autoPlay
          axis="horizontal"
          verticalSwipe="natural"
          showArrows={true}
          showThumbs={true}
          showStatus={false}
          interval={2500}
        >

          {product.images?.map((img , index) => {
            return (
              <div className="slider" key={index}>
                <img src={img.url} />
              </div>
            );
          })}

        </Carousel>
      </div>

      <div className="info_container">
        <div className="review">
          <h3> Review Section </h3>

          <form action="" className="form">
            <Rate count={5} value={reting} allowHalf onChange={(value)=>{setReting(value)}} />
            <textarea type="text" name="feedback" placeholder="Write your feedback" onChange={(e)=>setFeedback(e.target.value)}/>
            <button type="submit" onClick={reviewHandle}>Send Feedback</button>
          </form>
          
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;
