import React from 'react';

import electronics from './electronics.jpg'
import grocery from './grocery.jpg'
import fashion from './fashion.jpeg'
import home from './home.jpg'
import books from './books.webp'
import others from './others.avif'
import veg from './vegetables.webp'
import all from './all.webp'

function FilterSection({onSelect}) {
  const filterData = [
    {category:'All Category' , imagePath: all},
    { category: "Electronics", imagePath:electronics },
    { category: "Grocery", imagePath: grocery},
    { category: "Fashion", imagePath: fashion },
    { category: "Home", imagePath: home},
    { category: "Books", imagePath: books },
    { category: "Others", imagePath: others },
    {category:"Vegetables" , imagePath:veg}
  ];

  return (
    <div className="w-full px-4 py-6 bg-gray-100 mt-4 rounded-2xl">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Filter Products by Category</h3>
      <div className="flex gap-3 justify-between overflow-x-auto">
        {filterData.map((ele, index) => (
          <div key={index} className=" min-w-[160px] flex flex-col justify-center items-center  rounded-lg " onClick={()=>onSelect(ele.category)}>
            <img
             
              src={ele?.imagePath}
              alt={ele?.category}
              className="h-24 w-24 object-cover rounded-full border border-gray-400 shadow-md hover:shadow-lg transition-shadow duration-300"
            />
            <p className="text-center text-lg font-semibold text-gray-700 py-2">{ele.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterSection;
