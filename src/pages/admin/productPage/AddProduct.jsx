import React, { useState } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import "./addProduct.scss";
import PhotoViewer from "photoviewer";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../redux/product/productController";

import Loader from "react-js-loader";

function AddProduct() {
  const [imagePreview, setImagesPreview] = useState([]);
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [discount, setDiscount] = useState(0);
  const [brand, setBrand] = useState("");
  const dispatch = useDispatch();
  const { product, status } = useSelector((state) => state.product);

  const fileHandle = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
          setImagesPreview((old) => [
            ...old,
            { original: reader.result, thumbnail: reader.result },
          ]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const discountAmmount = (price * discount) / 100;
    const actualPrice = price - discountAmmount;
    console.log(actualPrice);
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("stock", stock);
    myForm.set("discount", discount);
    myForm.set("brand", brand);
    myForm.set("actualPrice", actualPrice);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    console.log("this is my form", myForm);

    dispatch(addProduct(myForm));
  };

  return (
    <div className="add_product_container">
      {/* <div className="notify_container"> Importent notification here... </div> */}
      <div className="form_container">
        <form action="" className="form">
          <input
            type="file"
            name="images"
            id=""
            accept="image/*"
            multiple
            onChange={fileHandle}
          />
          <input
            type="text"
            name="name"
            id=""
            placeholder="Product Title"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            name="price"
            id=""
            placeholder="Product Pricse"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="number"
            name="discount"
            id=""
            placeholder="Product discount"
            onChange={(e) => setDiscount(e.target.value)}
          />
          <input
            type="number"
            name="stock"
            id=""
            placeholder="Total Stock"
            onChange={(e) => setStock(e.target.value)}
          />
          <input
            type="text"
            name="brand"
            id=""
            placeholder="Brand Name"
            onChange={(e) => setBrand(e.target.value)}
          />
          <select
            name="category"
            id=""
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled selected>
              Select a Category
            </option>
            <option value="electronics">Electronics</option>
            <option value="grocery">Grocery</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            <option value="books">Books</option>
          </select>

          <textarea
            type="text"
            name="descreption"
            id=""
            placeholder="Product Descreption"
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit" onClick={handleSubmit}>
            {
              status.addProduct === 'pending'? 
              <Loader type={"spinner-circle"} bgColor={'white'}  color={"green"} size={40} />:
              <>Add Product <IoCloudUploadSharp /></>
            }
          </button>
        </form>
        <div className="extra_info">
          {imagePreview.length != 0 ? (
            <ImageGallery
              items={imagePreview}
              showPlayButton={false}
              showIndex={true}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
