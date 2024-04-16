import React from "react";
import { LuFilePlus } from "react-icons/lu";

const Form = ({ type }) => {
  return (
    <div className="write pt-5 mx-auto container flex flex-col flex-wrap">
      <img
        src="https://images.pexels.com/photos/20147085/pexels-photo-20147085/free-photo-of-a-mountain-is-seen-in-the-distance-with-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="ml-[150px] w-[70vw] h-[250px] object-cover rounded-md mb-2"
      />
      <form className="writeform relative">
        <div className="writeFormGroup flex ml-[150px] items-center justify-around w-[70vw] shadow-lg flex-wrap">
          <label htmlFor="fileInput">
            <LuFilePlus className="w-25 h-25 flex items-center justify-center rounded-full text-3xl cursor-pointer " />
          </label>
          <input type="file" id="fileInput" className="hidden" />
          <input
            type="text"
            placeholder="Title"
            autoFocus
            className="writeInput focus:outline-none"
          />
          <input
            type="text"
            placeholder="Subtitle"
            autoFocus
            className="writeInput focus:outline-none"
          />

          <div className="category">
            <label htmlFor="pet-select"></label>
            <select id="pet-select">
              <option value="">Select a category</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </select>
          </div>
        </div>
        <div className="writeFormGroup ml-[150px]">
          <textarea
            cols="30"
            rows="10"
            type="text"
            required
            placeholder="Write your content here ..."
            className="writeInput writeText p-20 text-4xl w-[70vw] focus:outline-none"
          />
        </div>
        <button className="writeSubmit absolute top-20 right-20 bg-teal-300 p-2 rounded-md cursor-pointer text-xl">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Form;
