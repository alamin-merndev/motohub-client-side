import React from "react";
import { Link } from "react-router-dom";
import HeadingDivider from "../../Shared/HeadingDivider/HeadingDivider";

const Category = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center "> Popular Makers</h2>
      <p className=" font-bold text-center "> Choose wisely</p>
      <HeadingDivider></HeadingDivider>
      <div className="grid grid-cols-4 gap-12 ">
        <Link>
          <div className=" shadow hover:shadow-lg hover:cursor-pointer h-72 flex items-center justify-center p-12">
            <img src="https://i.ibb.co/m8m1nM1/toyota.png" alt="" />
          </div>
        </Link>
        <Link>
          <div className=" shadow hover:shadow-lg hover:cursor-pointer h-72 flex items-center justify-center p-12">
            <img src="https://i.ibb.co/0qFD1ch/Asset-2.png" alt="" />
          </div>
        </Link>
        <Link>
          <div className=" shadow hover:shadow-lg hover:cursor-pointer h-72 flex items-center justify-center p-12">
            <img src="https://i.ibb.co/bJWhWbt/Asset-2-8.png" alt="" />
          </div>
        </Link>
        <Link>
          <div className=" shadow hover:shadow-lg hover:cursor-pointer h-72 flex items-center justify-center p-12">
            <img src="https://i.ibb.co/HG1fXdq/nissan-6.png" alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;