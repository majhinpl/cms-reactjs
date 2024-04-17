import React from "react";
import { LuSignalMedium } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <div className="flex flex-col w-[400px] h-[500px] m-1">
        <div className="flex justify-between px-2 py-1 mb-2">
          <span className="text-sm">3 April 2024</span>
          <span className="flex">
            <LuSignalMedium /> <span className="text-sm">123,412</span>
          </span>
        </div>
        <div className="mb-4">
          <img
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1469&amp;q=80"
            className="rounded-md object-cover w-screen h-[150px] flex text-left"
            alt=""
            title="A tips to make a lot of money"
            loading="lazy"
          />
        </div>
        <div className="blogHeading">
          <h1 className="mt-6 text-lg font-semibold text-gray-900">
            10 Tips for Crafting the Perfect UX Portfolio
          </h1>
        </div>
        <div className="blogDetails items-start">
          <p className="mt-4 w-full text-sm leading-normal text-gray-600 ">
            Learn how to showcase your design skills and stand out in a crowded
            job market. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Ducimus, iusto?
          </p>
        </div>
        <div className="btn">
          <Link to="/blog/id">
            <button className="flex items-center shadow-md py-2">
              Read more <MdKeyboardArrowRight />
            </button>
          </Link>
        </div>
        <div className="mt-4 flex space-x-3 ">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Emily Lee"
            width={10}
            height={10}
          />
          <div className="item-star">
            <p className="text-sm font-semibold leading-tight text-gray-900">
              Emily Lee
            </p>
            <p className="text-sm leading-tight text-gray-600">3 April 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
