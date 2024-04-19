import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";
import BlogSearch from "./components/blogSearch/BlogSearch";
import Pagination from "./components/pagination/Pagination";
import { baseUrl } from "../../config";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const fethBlogs = async () => {
    const response = await axios.get(`${baseUrl}/blog`);

    if (response.status === 200) {
      setBlogs(response.data.data);
    }
  };

  useEffect(() => {
    fethBlogs();
  }, []);

  return (
    <Layout>
      <BlogSearch />
      <div className="mx-auto container mt-12 max-w-7xl flex flex-wrap items-center justify-center gap-2">
        {blogs.length > 0 &&
          blogs.map((blog) => {
            return <Card blog={blog} />;
          })}
      </div>
      <Pagination />
    </Layout>
  );
};

export default Home;
