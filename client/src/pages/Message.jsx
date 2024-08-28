// import React from "react";
// import { Link } from "react-router-dom";


// const Message = () => {
//   return (
//     <div className="message flex justify-center font-[Roboto]">
//       <div className="container w-11/12 m-12">
//         <span className="breadcrumbs font-light text-md text-[#555]">
//           <Link to="/messages">Messages</Link> 	&gt; John Doe 	&gt;
//         </span>
//         <div className="messages mx-0 my-[30px] p-[50px] flex flex-col gap-[20px] h-[500px] overflow-scroll">
//           <div className="item flex gap-[20px] max-w-[600px] text-sm">
//             <img
//               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               className="w-[40px] h-[40px] rounded-[50%] object-cover"
//               alt=""
//             />
//             <p className="max-w-[500px] p-[20px] bg-[#f4f1f1] rounded-tl-none rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] text-[gray] font-light">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item owner flex-row-reverse self-end flex gap-[20px] max-w-[600px] text-sm">
//             <img
//               src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               className="w-[40px] h-[40px] rounded-[50%] object-cover"
//               alt=""
//             />
//             <p className="max-w-[500px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-[20px] bg-[royalblue] text-[white] p-[20px] font-light">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item flex gap-[20px] max-w-[600px] text-sm">
//             <img
//               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               className="w-[40px] h-[40px] rounded-[50%] object-cover"
//               alt=""
//             />
//             <p className="max-w-[500px] p-[20px] bg-[#f4f1f1] rounded-tl-none rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] text-[gray] font-light">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item owner flex-row-reverse self-end flex gap-[20px] max-w-[600px] text-sm">
//             <img
//               src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               className="w-[40px] h-[40px] rounded-[50%] object-cover"
//               alt=""
//             />
//             <p className="max-w-[500px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-[20px] bg-[royalblue] text-[white] p-[20px] font-light">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item flex gap-[20px] max-w-[600px] text-sm">
//             <img
//               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               className="w-[40px] h-[40px] rounded-[50%] object-cover"
//               alt=""
//             />
//             <p className="max-w-[500px] p-[20px] bg-[#f4f1f1] rounded-tl-none rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] text-[gray] font-light">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item owner flex-row-reverse self-end flex gap-[20px] max-w-[600px] text-sm">
//             <img
//               src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               className="w-[40px] h-[40px] rounded-[50%] object-cover"
//               alt=""
//             />
//             <p className="max-w-[500px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-[20px] bg-[royalblue] text-[white] p-[20px] font-light">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item flex gap-[20px] max-w-[600px] text-sm">
//             <img
//               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               className="w-[40px] h-[40px] rounded-[50%] object-cover"
//               alt=""
//             />
//             <p className="max-w-[500px] p-[20px] bg-[#f4f1f1] rounded-tl-none rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] text-[gray] font-light">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item owner flex-row-reverse self-end flex gap-[20px] max-w-[600px] text-sm">
//             <img
//               src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               className="w-[40px] h-[40px] rounded-[50%] object-cover"
//               alt=""
//             />
//             <p className="max-w-[500px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-[20px] bg-[royalblue] text-[white] p-[20px] font-light">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item flex gap-[20px] max-w-[600px] text-sm">
//             <img
//               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               className="w-[40px] h-[40px] rounded-[50%] object-cover"
//               alt=""
//             />
//             <p className="max-w-[500px] p-[20px] bg-[#f4f1f1] rounded-tl-none rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] text-[gray] font-light">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item owner flex-row-reverse self-end flex gap-[20px] max-w-[600px] text-sm">
//             <img
//               src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               className="w-[40px] h-[40px] rounded-[50%] object-cover"
//               alt=""
//             />
//             <p className="max-w-[500px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-[20px] bg-[royalblue] text-[white] p-[20px] font-light">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item flex gap-[20px] max-w-[600px] text-sm">
//             <img
//               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               className="w-[40px] h-[40px] rounded-[50%] object-cover"
//               alt=""
//             />
//             <p className="max-w-[500px] p-[20px] bg-[#f4f1f1] rounded-tl-none rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] text-[gray] font-light">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item flex gap-[20px] max-w-[600px] text-sm">
//             <img
//               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               className="w-[40px] h-[40px] rounded-[50%] object-cover"
//               alt=""
//             />
//             <p className="max-w-[500px] p-[20px] bg-[#f4f1f1] rounded-tl-none rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] text-[gray] font-light">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item owner flex-row-reverse self-end flex gap-[20px] max-w-[600px] text-sm">
//             <img
//               src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               className="w-[40px] h-[40px] rounded-[50%] object-cover"
//               alt=""
//             />
//             <p className="max-w-[500px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-[20px] bg-[royalblue] text-[white] p-[20px] font-light">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item owner flex-row-reverse self-end flex gap-[20px] max-w-[600px] text-sm">
//             <img
//               src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               className="w-[40px] h-[40px] rounded-[50%] object-cover"
//               alt=""
//             />
//             <p className="max-w-[500px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-[20px] bg-[royalblue] text-[white] p-[20px] font-light">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//           <div className="item flex gap-[20px] max-w-[600px] text-sm">
//             <img
//               src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               className="w-[40px] h-[40px] rounded-[50%] object-cover"
//               alt=""
//             />
//             <p className="max-w-[500px] p-[20px] bg-[#f4f1f1] rounded-tl-none rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] text-[gray] font-light">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
//               mollitia perspiciatis officiis voluptate? Sequi quae officia
//               possimus, iusto labore alias mollitia eveniet nemo placeat
//               laboriosam nisi animi! Error, tenetur!
//             </p>
//           </div>
//         </div>
//         <hr className="h-[0] border-[0.5px] border-[solid] border-[#e8e6e6] mb-[20px]"/>
//         <div className="write flex items-center justify-between">
//           <textarea type="text" placeholder="Write a message" className="w-[90%] h-[100px] p-[10px] border-[1px] border-[solid] border-[lightgray] rounded-[10px] placeholder-sm"/>
//           <button className="bg-[#1dbf73] p-3 text-[white] font-medium border-[none] rounded-[10px] cursor-pointer w-[75px]">Send</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Message;

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import newRequest from "../utils/newRequest";

const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser)
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        console.log(res)
        return res.data.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };


  return (
    <div className="message flex justify-center font-[Roboto]">
      <div className="container w-11/12 m-12">
        <span className="breadcrumbs font-light text-md text-[#555]">
          <Link to="/messages">Messages</Link> &gt; ;
        </span>
        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <div className="messages mx-0 my-[30px] p-[50px] flex flex-col gap-[20px] h-[500px] overflow-scroll">
            {data.map((m) => (
              <div
                className={
                  m.userId == currentUser.user._id
                    ? "item owner flex-row-reverse self-end flex gap-[20px] max-w-[600px] text-sm"
                    : "item flex gap-[20px] max-w-[600px] text-sm"
                }
                key={m._id}
              >
                <img
                  className="w-[40px] h-[40px] rounded-[50%] object-cover"
                  src={
                    m.userId == currentUser.user._id
                      ? currentUser.user.img
                      : "../../public/img/noavatar.jpg"
                  }
                  alt=""
                />
                <p
                  className={
                    m.userId == currentUser.user._id
                      ? "max-w-[500px] rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-[20px] bg-[royalblue] text-[white] p-[20px] font-light"
                      : "max-w-[500px] p-[20px] bg-[#f4f1f1] rounded-tl-none rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] text-[gray] font-light"
                  }
                >
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        )}
        <hr className="h-[0] border-[0.5px] border-[solid] border-[#e8e6e6] mb-[20px]" />
        <form className="write flex items-center justify-between" onSubmit={handleSubmit}>
          <textarea
            type="text"
            placeholder="write a message"
            className="w-[90%] h-[100px] p-[10px] border-[1px] border-[solid] border-[lightgray] rounded-[10px] placeholder-sm"
          />
          <button
            type="submit"
            className="bg-[#1dbf73] p-3 text-[white] font-medium border-[none] rounded-[10px] cursor-pointer w-[75px]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
