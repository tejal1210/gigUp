import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "../components/Slide/Slide2";

function Gig() {
  return (
    <div className="gig flex justify-center px-20 py-5 font-[Roboto]">
      <div className="container w-full px-0 py-[30px] flex gap-[50px]">
        <div className="left flex-[2] flex flex-col gap-[20px]">
          <span className="breadcrumbs font-light uppercase text-[13px] text-[#555]">GigUp &gt; Graphics & Design 	&gt;</span>
          <h1 className="title font-semibold text-3xl">I will create AI generated art for you</h1>
          <div className="user flex items-center gap-[10px]">
            <img
              className="pp w-[32px] h-[32px] rounded-[50%] object-cover"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span className="span text-[14px] font-medium">Anna Bell</span>
            <div className="stars flex items-center gap-[5px]">
              <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
              <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
              <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
              <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
              <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
              <span className="text-[14px] font-bold text-[#ffc108]">5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} nextArrow={ <SampleNextArrow to="next"/> } prevArrow={ <SamplePrevArrow to="prev"/> } className="slider bg-[#f5f5f5] max-w-[700px]">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="max-h-[500px] object-contain"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="max-h-[500px] object-contain"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="max-h-[500px] object-contain"
              alt=""
            />
          </Slider>
          <h2 className="h2 font-normal">About This Gig</h2>
          <p className="p font-light leading-[25px] text-[#555]">
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="seller mt-[50px] flex flex-col gap-[20px]">
            <h2>About The Seller</h2>
            <div className="user flex items-center gap-[20px]">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                className="w-[100px] h-[100px] rounded-[50%] object-cover"
                alt=""
              />
              <div className="info flex flex-col gap-[10px]">
                <span>Anna Bell</span>
                <div className="stars flex items-center gap-[5px]">
                  <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                  <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                  <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                  <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                  <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                  <span className="text-[14px] font-bold text-[#ffc108]">5</span>
                </div>
                <button className="bg-[white] rounded-[5px] border-[1px] border-[solid] border-[gray] p-[10px]">Contact Me</button>
              </div>
            </div>
            <div className="box border-[1px] border-[solid] border-[lightgray] rounded-[5px] p-[20px] mt-[20px]">
              <div className="items flex justify-between flex-wrap">
                <div className="item w-[300px] flex flex-col gap-[10px] mb-[20px]">
                  <span className="title font-light">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item w-[300px] flex flex-col gap-[10px] mb-[20px]">
                  <span className="title font-light">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item w-[300px] flex flex-col gap-[10px] mb-[20px]">
                  <span className="title font-light">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item w-[300px] flex flex-col gap-[10px] mb-[20px]">
                  <span className="title font-light">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item w-[300px] flex flex-col gap-[10px] mb-[20px]">
                  <span className="title font-light">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr className="h-[0] border-[0.5px] border-[solid] border-[lightgray] mb-[20px]"/>
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews mt-[50px]">
            <h2>Reviews</h2>
            <div className="item flex flex-col gap-[20px] mx-0 my-[20px]">
              <div className="user flex items-center">
                <img
                  className="pp h-[50px] w-[50px] rounded-[50%] mr-3"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country flex items-center gap-[10px] text-[gray]">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      className="w-[20px]"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars flex gap-[5px]">
                <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                <span className="text-[14px] font-bold text-[#ffc108]">5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful flex items-center gap-[10px]">
                <span>Helpful?</span>
                <img src="/img/like.png" className="w-[14px]" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" className="w-[14px]" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr className="h-[0] border-[0.5px] border-[solid] border-[lightgray] mx-0 my-[50px]"/>
            <div className="item flex flex-col gap-[20px] mx-0 my-[20px]">
              <div className="user flex items-center">
                <img
                  className="pp h-[50px] w-[50px] rounded-[50%] mr-3"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Sidney Owen</span>
                  <div className="country flex items-center gap-[10px] text-[gray]">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      className="w-[20px]"
                      alt=""
                    />
                    <span>Germany</span>
                  </div>
                </div>
              </div>
              <div className="stars flex gap-[5px]">
                <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                <span className="text-[14px] font-bold text-[#ffc108]">5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful flex items-center gap-[10px]">
                <span>Helpful?</span>
                <img src="/img/like.png" className="w-[14px]" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" className="w-[14px]" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item flex flex-col gap-[20px] mx-0 my-[20px]">
              <div className="user flex items-center">
                <img
                  className="pp h-[50px] w-[50px] rounded-[50%] mr-3"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Lyle Giles </span>
                  <div className="country flex items-center gap-[10px] text-[gray]">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      className="w-[20px]"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars flex gap-[5px]">
                <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                <img src="/img/star.png" className="h-[14px] w-[14px]" alt="" />
                <span className="text-[14px] font-bold text-[#ffc108]">5</span>
              </div>
              <p>
                Amazing work! Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful flex items-center gap-[10px]">
                <span>Helpful?</span>
                <img src="/img/like.png" className="w-[14px]" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" className="w-[14px]" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex-[1] border-[1px] border-[solid] border-[lightgray] p-[20px] rounded-[5px] flex flex-col gap-[20px] h-max max-h-[500px] sticky top-[150px]">
          <div className="price flex items-center justify-between">
            <h3 className="font-medium">1 AI generated image</h3>
            <h2 className="font-light">&#x20B9; 599</h2>
          </div>
          <p className="text-[gray] mx-0 my-[10px]">
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details flex items-center justify-between text-[14px]">
            <div className="item flex items-center gap-[10px]">
              <img src="/img/clock.png" className="w-[20px]" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item flex items-center gap-[10px] font-light text-[gray] mb-[5px]">
              <img className='w-[14px]' src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features ">
            <div className="item flex items-center gap-[10px] font-light text-[gray] mb-[5px]">
              <img src="/img/greencheck.png" className="w-[14px]" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item flex items-center gap-[10px] font-light text-[gray] mb-[5px]">
              <img src="/img/greencheck.png" className="w-[14px]" alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="item flex items-center gap-[10px] font-light text-[gray] mb-[5px]">
              <img src="/img/greencheck.png" className="w-[14px]" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item flex items-center gap-[10px] font-light text-[gray] mb-[5px]">
              <img src="/img/greencheck.png" className="w-[14px]" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button className="bg-[#1dbf73] p-[10px] text-[white] font-medium border-[none] text-[18px] cursor-pointer">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;

