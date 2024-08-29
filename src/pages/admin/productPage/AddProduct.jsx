import React, { useState } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import "./addProduct.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../redux/product/productController";
import { spiral } from "ldrs";

function AddProduct() {
  spiral.register();
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
  const { status } = useSelector((state) => state.product);

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
    const discountAmount = Math.round((price * discount) / 100);
    const actualPrice = price - discountAmount;

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

    dispatch(addProduct(myForm));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <form
        className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full m-2"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add Product
        </h2>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Product Images</label>
          <div className="flex items-center">
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              onChange={fileHandle}
              className="hidden"
              id="productImages"
            />
            <label
              htmlFor="productImages"
              className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Choose Images
            </label>
            {imagePreview.length > 0 && (
              <ImageGallery
                items={imagePreview}
                showPlayButton={false}
                showIndex={true}
                className="ml-4 w-16 h-16 rounded-full border border-gray-300 object-cover"
              />
            )}
          </div>
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Product Title"
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="mb-4">
          <input
            type="number"
            name="price"
            placeholder="Product Price"
            onChange={(e) => setPrice(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="mb-4">
          <input
            type="number"
            name="discount"
            placeholder="Product Discount"
            onChange={(e) => setDiscount(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="mb-4">
          <input
            type="number"
            name="stock"
            placeholder="Total Stock"
            onChange={(e) => setStock(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="brand"
            placeholder="Brand Name"
            onChange={(e) => setBrand(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="mb-4">
          <select
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            className="input-field"
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
        </div>

        <div className="mb-4">
          <textarea
            type="text"
            name="description"
            placeholder="Product Description"
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
          />
        </div>

        <button
          type="submit"
          className="custom-button"
        >
          {status.addProduct === "pending" ? (
            <l-spiral size="40" speed="0.9" color="white"></l-spiral>
          ) : (
            "Add Product"
          )}
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
