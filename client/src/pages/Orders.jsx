import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  //console.log(currentUser)
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        //console.log(res.data);
        return res.data.data;
      }),
  });

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      let res = await newRequest.get(`/conversations/single/${id}`);
      console.log("conversation"+res);
      if(!res.data.data) {
        res = await newRequest.post(`/conversations/`, {
          to: currentUser.seller ? buyerId : sellerId,
        });
        console.log("conversation after creation"+res);
      }
      navigate(`/message/${res.data.data.id}`);
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="orders flex justify-center text-gray-700 font-[Roboto] mx-20">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container w-full py-12">
          <div className="title flex justify-between">
            <h1 className="mx-3 mb-7 font-semibold text-3xl">Your Orders</h1>
          </div>
          {data.length === 0 ? (
            <div className="text-center text-xl text-gray-500">
              You have no orders at the moment.
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="h-12">
                  <th className="text-left px-5">Image</th>
                  <th className="text-left px-5">Title</th>
                  <th className="text-left px-5">Price</th>
                  <th className="text-left px-5">Contact</th>
                </tr>
              </thead>
              <tbody>
                {data.map((order) => (
                  <tr key={order._id} className="h-12 even:bg-green-100 font-light">
                    <td>
                      <img
                        className="image w-12 h-6 object-cover mx-3 rounded-sm"
                        src={order.img}
                        alt=""
                      />
                    </td>
                    <td>{order.title}</td>
                    <td>&#x20B9; {order.price}</td>
                    <td>
                      <img
                        className="message w-[25px] cursor-pointer"
                        src="./img/message.png"
                        alt=""
                        onClick={() => handleContact(order)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;

