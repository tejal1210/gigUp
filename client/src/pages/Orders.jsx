import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="flex justify-center text-gray-700 font-[Roboto] mx-20">
      <div className="w-full py-12">
        <div className="flex justify-between">
          <h1 className="mx-3 mb-7 font-semibold text-3xl"> Your Orders</h1>
        </div>
        <table className="w-full">
          <tr className="h-12 ">
            <th className="text-left px-5">Image</th>
            <th className="text-left px-5">Title</th>
            <th className="text-left px-5">Price</th>
            <th className="text-left px-5">{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th className="text-left px-5">Contact</th>
          </tr>
          <tr className="h-12 even:bg-green-100 font-light">
            <td>
              <img
                className="w-12 h-6 object-cover mx-3 rounded-sm"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>
            &#x20B9; 599
            </td>
            <td>Maria Anders</td>
            <td>
              <img className="w-6 cursor-pointer mx-8" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr className="h-12 even:bg-green-100 font-light">
            <td>
              <img
                className="w-12 h-6 object-cover mx-3 rounded-sm"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>
            &#x20B9; 799
            </td>
            <td>Francisco Chang</td>
            <td>
              <img className="w-6 cursor-pointer mx-8" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr className="h-12 even:bg-green-100 font-light">
            <td>
              <img
                className="w-12 h-6 object-cover mx-3 rounded-sm"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>High quality digital character</td>
            <td>
            &#x20B9; 1109
            </td>
            <td>Roland Mendel</td>
            <td>
              <img className="w-6 cursor-pointer mx-8" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr className="h-12 even:bg-green-100 font-light">
            <td>
              <img
                className="w-12 h-6 object-cover mx-3 rounded-sm"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>
            &#x20B9; 399
            </td>
            <td>Helen Bennett</td>
            <td>
              <img className="w-6 cursor-pointer mx-8" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr className="h-12 even:bg-green-100 font-light">
            <td>
              <img
                className="w-12 h-6 object-cover mx-3 rounded-sm"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>
            &#x20B9; 1199
            </td>
            <td>Yoshi Tannamuri</td>
            <td>
              <img className="w-6 cursor-pointer mx-8" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr className="h-12 even:bg-green-100 font-light">
            <td>
              <img
                className="w-12 h-6 object-cover mx-3 rounded-sm"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Text based ai generated art</td>
            <td>
            &#x20B9; 499
            </td>
            <td>Giovanni Rovelli</td>
            <td>
              <img className="w-6 cursor-pointer mx-8" src="./img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
