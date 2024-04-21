import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config";
import Login from "../auth/Login";

const SingleBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  const fetchBlog = async () => {
    const response = await axios.get(`${baseUrl}/blog/${id}`);
    if (response.status === 200) {
      setBlog(response.data.data);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  // delete blog
  const deleteBlog = async () => {
    const response = await axios.delete(`${baseUrl}/blog/${id}`);
    if (response.status === 200) {
      navigate("/");
    } else {
      alert(error?.response?.data?.message);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-start">
          <img
            src={
              blog.imageUrl
                ? blog.imageUrl
                : "https://images.pexels.com/photos/3056057/pexels-photo-3056057.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
            alt=""
            className="w-screen object-cover mb-4 h-[250px] rounded-md"
          />
        </div>
        <div className="w-[70vw] border border-slate-500">
          <div className="text-3xl border border-red-600">{blog.title}</div>
          <div className="text-3xl">{blog.subtitle}</div>
          <div className="text-3xl">{blog.description}</div>
        </div>

        <div className="flex gap-6">
          <div className="text-xl flex gap-4 mt-6">
            <p>{blog.uthor}</p>
            <p>{blog.category}</p>
          </div>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 mt-4">
            <Link to="/blogs/edit">
              <button
                type="button"
                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Edit This Page
              </button>
            </Link>
            <button
              type="button"
              onClick={deleteBlog}
              className="rounded-md border border-yellow-600 px-3 py-2 text-sm font-semibold text-yellow-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              Delete This Page
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
