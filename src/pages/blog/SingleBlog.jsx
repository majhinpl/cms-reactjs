import React from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-start">
          <img
            src="https://images.pexels.com/photos/3056057/pexels-photo-3056057.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className="w-screen object-cover mb-4 h-[300px]"
          />
          <div className="">
            <p className="content-start w-[600px] border-b-2 border-b-slate-400">
              Table of contents
            </p>

            <ul>
              <li>
                What is the difference between ETFs and stocks? ETFs like
                stocks?
              </li>
              <li>ETFs (Exchange-Traded Funds) </li>
              <li>Stocks</li>
              <li>Might it be possible to trade ETFs</li>
              <li>Are ETFs better than stocks?</li>
            </ul>
          </div>
          <div>
            <p>
              When considering different CFD assets for trading, it may be
              useful to understand their main characteristics and factors
              affecting their prices. This is especially important in the case
              of ETFs vs. stocks, as it might be difficult to choose the most
              suitable option for you
            </p>
            <p>
              What is the difference between ETFs and stocks? Are ETFs better
              than stocks? Which trading approach may be used for trading ETFs?
              In this article, we’ll delve into the key differences between
              these two asset types, explore their trading mechanisms, and look
              for answers to these common trader questions.
            </p>

            <h1>What is the difference between ETFs and stocks?</h1>
            <p className="text-sm">
              Let’s have a look at the key characteristics of each asset type
              and outline their main differences.
            </p>
          </div>
          <section>
            <h1>ETFs (Exchange-Traded Funds)</h1>
            <p>
              ETFs normally include a number of various assets, such as stocks,
              commodities, cryptocurrencies, etc. One of the most popular ETFs
              is the S&P 500 ETF (SPY). It aims to track the S&P 500 Index,
              which includes the largest and most influential companies across
              different industries.{" "}
            </p>
            <p>Here are some of the key points to keep in mind about ETFs. </p>
            <ul>
              <li>
                Diversification: as ETFs cover a wide range of assets, they
                might offer a more diversified investment.
              </li>
              <li>
                Lower risks: a balanced mix of assets from different sectors may
                be less prone to volatility than a single asset. However, risks
                still exist.
              </li>
              <li>
                Simplicity: ETFs may offer access to diverse markets without
                having to analyse and choose specific assets for trading.
              </li>
            </ul>
          </section>
        </div>
        <div className="flex gap-6">
          <div className="text-xl flex gap-4 mt-6">
            <p>Author</p>
            <p>Category</p>
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
