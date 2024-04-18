import React from "react";

const BlogSearch = () => {
  return (
    <div className="mx-auto container flex items-center justify-center flex-col space-y-8 pb-10 pt-12 px-2 md:pt-24">
      <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
        Resources and insights
      </p>
      <p className="max-w-4xl text-base text-gray-600 md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        veritatis voluptates neque itaque repudiandae sint, explicabo assumenda
        quam ratione placeat?
      </p>
      <div className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="earch Topics"
        />
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default BlogSearch;
