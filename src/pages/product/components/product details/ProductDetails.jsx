import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addReview, selectProduct } from "../../../../redux/product/productController";

import { Rate } from "antd";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./productDetails.scss";
import { BsCurrencyRupee } from "react-icons/bs";

import { FaLeaf } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { addCard } from "../../../../redux/cart/cartController";

import { spiral } from "ldrs";


const ProductDetails = () => {
  spiral.register()
  const [isLoading , setIsLoading] = useState(false)
  const { id } = useParams();
  const dispatch = useDispatch();
  const [thisProduct, setThisProduct] = useState({});
  const navigate = useNavigate()
  const [reting , setReting] = useState(0)
  const [feedback , setFeedback] = useState("")
  
  const [ isAddFeedback , setIsAddFeedback ] = useState(false)

  const { selectedProduct, status ,product } = useSelector((state) => state.product);
  const {isAuthenticate } = useSelector((state)=> state.user )

  // console.log(selectedProduct);
  useEffect(() => {
    dispatch(selectProduct(id));
  }, [product]);

 
  useEffect(() => {
    if(status.selectProduct === 'pending'){
       setIsLoading(true)
    }else{
      setIsLoading(false)
    }
    if (status.selectProduct === "success" || status.reviewProduct === 'success') {
      setThisProduct(selectedProduct);
    }
  }, [status.selectProduct , status.reviewProduct]);

  const reviewHandle =(e)=>{
    e.preventDefault();
    if (!isAuthenticate) return navigate('/login')
   console.log(reting , feedback);
   dispatch(addReview({ id:thisProduct._id, reting, feedback}))
   console.log("ok");
  }

  const data = {
    productId:thisProduct._id,
    price:thisProduct.actualPrice,
  };

  const addToCart =()=>{
    if(!isAuthenticate) return navigate('/login')
    dispatch(addCard(data))
    navigate('/cart')
  }

  const orderProduct =()=>{
    if(!isAuthenticate) return navigate('/login')
      
  }

  return (
<> {
  isLoading ?
    
  <div className="h-[100vh] w-[100vw] flex justify-center items-center"> <l-spiral size="60" speed="0.9" color="green"></l-spiral>  </div>
  :

<>
 <div className="product_details_page">
      <div className="product_image_container">
       
        <Carousel
          infiniteLoop
          autoPlay
          showArrows={false}
          showThumbs={true}
          showStatus={false}
          interval={2500}
        >

          {thisProduct.images?.map((img , index) => {
            return (
              <div className="slider" key={index}>
                <img src={img.url} />
              </div>
            );
          })}

        </Carousel>

      
      </div>

      <div className="info_container">
        
          <div className="product_details">
            <div className="name">
            <h2>{thisProduct.name}</h2>
            <p>{thisProduct._id}</p>
            </div>
            <div className="rating">
             <Rate count={5} value={thisProduct.totalRating} allowHalf disabled  />
             <span>{ thisProduct.totalReview || 0} </span> 
            </div>
            
            <div className="w-auto">
                <span className="category inline-flex items-center">
                <FaLeaf className="mr-2" /> {thisProduct.category}
             </span>
           </div>

              
            <p>{thisProduct.brand}</p>
        
            <div className="price">
            <BsCurrencyRupee/> {thisProduct.actualPrice} <del>{thisProduct.price}</del> <b> {thisProduct.discount}%</b>
            </div>
            <p className="description">{thisProduct.description}</p>
            
          </div>

          <div className="button">
          
          <button onClick={addToCart}> <FaCartShopping/> Add to Cart</button>
          
          <button className="bye" onClick={orderProduct}> <HiMiniCurrencyRupee/> Bye Product</button>
        </div>
       {
         isAddFeedback? (
           
           <div className="review">
          <h3> Review Section </h3>

          <form action="" className="form">
            <Rate count={5} value={reting} allowHalf onChange={(value)=>{setReting(value)}} />
            <textarea type="text" name="feedback" placeholder="Write your feedback" onChange={(e)=>setFeedback(e.target.value)}/>
            <button type="submit" onClick={reviewHandle}>Send Feedback</button>
          </form>
          
        </div>
        ):""
      }
      <br/>
      <span className="add_feedback" onClick={()=>setIsAddFeedback(!isAddFeedback)}>{isAddFeedback?"Hide  Feedback":"Add Feedback "}</span>
        </div>

      </div>

    <div className="review_container">
      {
        thisProduct.review?.map((ele)=>{
          return(
            <div className="review" key={ele._id}>
               <div className="user-info">
                <img src={ele?.user?.dp.url} alt="" />
                <p>{ ele?.user?.name} </p>
               </div>
               <div>
                  <div className="ratting">
                    <Rate count={5} value={ele.rating} allowHalf disabled />
                  </div>
                  <p>
                    {ele.feedback}
                  </p>
               </div>
            </div>
          )
        })

      }
    </div></>
}
    </> 
  );
};

export default ProductDetails;
