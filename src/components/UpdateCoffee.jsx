import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const {_id, price, chef, photo, details, taste, supplier, name}=useLoaderData()

    const handleUpdateCoffee = (e) => { 
        event.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCoffee=Object.fromEntries(formData.entries());
        console.log(updateCoffee);
        // send updated coffee to the database
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
          })
          .then(res => res.json())
          .then(data => {
          if(data.modifiedCount){
            Swal.fire(
              'Updated!',
              'Your coffee has been updated.',
              'success'
            )}
            form.reset();
            
          })
        }
// })

    return (
        <div className="flex justify-center items-center min-h-screen py-10 ">
        <div className="bg-[#F4F3F0] p-10 rounded-xl shadow-xl w-full max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 rancho-font">Update Coffee</h2>
          <form onSubmit={handleUpdateCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" className="input input-bordered w-full" />
            </div>
  
            <div>
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input type="text" name="chef" defaultValue={chef} placeholder="Enter coffee chef" className="input input-bordered w-full" />
            </div>
  
            <div>
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full" />
            </div>
  
            <div>
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered w-full" />
            </div>
  
            <div>
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="number" name="price" defaultValue={price} placeholder="Price per cup" className="input input-bordered w-full" />
            </div>
  
            <div>
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full" />
            </div>
  
            <div className="md:col-span-2">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" />
            </div>
  
            <div className="md:col-span-2 mt-4">
              <button  type="submit" className="btn btn-block rancho-font bg-[#D2B48C] text-[#374151] hover:bg-[#b6966f]">
                Update Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default UpdateCoffee;