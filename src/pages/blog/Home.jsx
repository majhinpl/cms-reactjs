import React from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";
import BlogSearch from "./components/blogSearch/BlogSearch";
import Pagination from "./components/pagination/Pagination";

const Home = () => {
  return (
    <Layout>
      <BlogSearch />
      <div className="mx-auto container mt-12 max-w-7xl flex flex-wrap items-center justify-center gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </Layout>
  );
};

export default Home;
