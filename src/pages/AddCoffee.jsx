import React from "react";

const AddCoffee = () => {
  return (
    <div className="flex justify-center items-center min-h-screen py-10 ">
      <div className="bg-[#F4F3F0] p-10 rounded-xl shadow-xl w-full max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-4 rancho-font">Add New Coffee</h2>
        <p className="text-center text-sm mb-8 text-gray-500 raleway-font">
          It is a long established fact that a reader will be distracted by the readable content
          of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed <br /> to using Content here.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Enter coffee name" className="input input-bordered w-full" />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input type="text" placeholder="Enter coffee chef" className="input input-bordered w-full" />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input type="text" placeholder="Enter coffee supplier" className="input input-bordered w-full" />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input type="text" placeholder="Enter coffee taste" className="input input-bordered w-full" />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input type="text" placeholder="Enter coffee category" className="input input-bordered w-full" />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input type="text" placeholder="Enter coffee details" className="input input-bordered w-full" />
          </div>

          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input type="text" placeholder="Enter photo URL" className="input input-bordered w-full" />
          </div>

          <div className="md:col-span-2 mt-4">
            <button className="btn btn-block rancho-font bg-[#D2B48C] text-[#374151] hover:bg-[#b6966f]">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
