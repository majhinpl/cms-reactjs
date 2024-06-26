import React from "react";
import { LuSignalMedium } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  console.log(blog);

  // Function to format the date
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  return (
    <div
      className="flex flex-col w-[400px] h-[400px] m-1 shadow-lg hover:shadow-slate-900 hover:opacity-70 p-2"
      key={blog._id}
    >
      <div className="flex justify-between px-2 py-1 mb-2">
        <span className="text-sm">{formatDate(blog.userId.createdAt)}</span>
        <span className="flex">
          <LuSignalMedium /> <span className="text-sm">123,412</span>
        </span>
      </div>
      <Link to={`/blog/${blog._id}`}>
        <div className="mb-2">
          <img
            src={
              blog.imageUrl
                ? blog.imageUrl
                : "https://images.pexels.com/photos/20877190/pexels-photo-20877190/free-photo-of-plaza-de-espana.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            className="rounded-lg object-cover w-screen h-[150px] flex text-left "
            alt=""
            title="A tips to make a lot of money"
            loading="lazy"
          />
        </div>

        <div className="blogHeading">
          <h1 className="mt-6 text-lg font-semibold text-gray-900">
            {blog.title}
          </h1>
        </div>
      </Link>
      <div className="blogDetails items-start">
        <p className="mt-4 w-full text-sm leading-normal text-gray-600 ">
          {blog.description}
        </p>
      </div>
      <div className="btn">
        <Link to={`/blog/${blog._id}`}>
          <button className="flex items-center shadow-md py-2">
            Read more <MdKeyboardArrowRight />
          </button>
        </Link>
      </div>
      <div className="mt-4 flex space-x-3 ">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={blog.imageUrl}
          alt="Emily Lee"
          width={10}
          height={10}
        />
        <div className="item-star">
          <p className="text-sm font-semibold leading-tight text-gray-900">
            {blog.userId.username ? blog.userId.username : "Author"}
          </p>
          <p className="text-sm leading-tight text-gray-600">
            {formatDate(blog.userId.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
