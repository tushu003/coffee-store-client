import { FaEdit, FaTrash } from 'react-icons/fa';
import { IoEyeOutline } from "react-icons/io5";

const CoffeeCard = ({coffee}) => {
    const {name, chef, price} = coffee;
  return (
    <div className="flex items-center bg-[#F5F4F1] shadow-md rounded-xl p-4 space-x-4 w-full max-w-md">
      {/* Coffee Image */}
      <img
        src="/coffee.png" // replace with your actual image path
        alt="Coffee"
        className="w-20 h-20 object-cover rounded"
      />

      {/* Coffee Info */}
      <div className="flex-1">
        <p><span className="font-semibold">Name:</span> {name}</p>
        <p><span className="font-semibold">Chef:</span> {chef}</p>
        <p><span className="font-semibold">Price:</span> {price}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col space-y-2">
        <button className="btn btn-sm bg-[#D2B48C] hover:bg-amber-500 text-white">
        <IoEyeOutline />
        </button>
        <button className="btn btn-sm bg-black hover:bg-amber-500 text-white">
          <FaEdit />
        </button>
        <button className="btn btn-sm bg-red-500 hover:bg-red-600 text-white">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
