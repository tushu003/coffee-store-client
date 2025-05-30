import { FaEdit, FaTrash } from 'react-icons/fa';
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, coffees , setCoffees}) => {
    const {_id, name, chef, price, photo} = coffee;

    const handleDelete = (_id) =>{
      console.log(_id);

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remainingCoffees = coffees.filter(coffee => coffee._id !== _id);
              setCoffees(remainingCoffees);
            }
          })
        }
      });
    }
  return (
    <div className="flex items-center bg-[#F5F4F1] shadow-md rounded-xl p-4 space-x-4 w-full max-w-md">
      {/* Coffee Image */}
      <img
        src={photo} // replace with your actual image path
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
 <Link to={`/coffee/${_id}`} className="btn btn-sm bg-black hover:bg-amber-500 text-white">
          <IoEyeOutline />
        </Link>
       <Link to={`/updateCoffee/${_id}`}>
       <button className="btn btn-sm bg-black hover:bg-amber-500 text-white">
       <FaEdit />
       </button>
       </Link>
        
        <button onClick={()=>handleDelete(_id)} className="btn btn-sm bg-red-500 hover:bg-red-600 text-white">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
