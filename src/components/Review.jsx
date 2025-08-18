import React from "react";

const reviews = [
  {
    id: 1,
    name: "James Miller",
    role: "Creative Director",
    text: "Planova has been a game-changer for my home. Their ability to blend functionality with exquisite design is unparalleled...",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Daniel Ortiz",
    role: "Principal Architect & Founder",
    text: "Choosing Planova was the best design decision I’ve made. They brought vision and expertise to every detail...",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Brand Specialist",
    text: "Working with Planova turned my vision into reality. Their flawless execution gave my living room elegance and charm...",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 4,
    name: "Daniel Ortiz",
    role: "Principal Architect & Founder",
    text: "Choosing Planova was the best design decision I’ve made. They brought vision and expertise to every detail...",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const ReviewsSection = () => {
  return (
    <div className="bg-[#f6f6ea] py-20 pl-4 md:pl-16">
      <div className="w-full mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-[100px] font-bold text-gray-900 mb-10 leading-tight">
          Client's Words <br /> Reviews
        </h2>

        <div className="flex flex-col md:flex-row ">
          {/* Left Fixed Video Card */}
          <div className="w-full md:w-[418px] h-[300px] md:h-[560px] flex-shrink-0 rounded-xl overflow-hidden relative">
            <video
              src="https://cdn.prod.website-files.com/6864c5e4479c3c44f5272e57%2F687ecbbee59ca24ab7115391_0_Man_Video_Call_1280x720%20%281%29-transcode.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            ></video>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
              <h3 className="font-semibold">Inshad Zaman</h3>
              <p className="text-sm">Architect & Founder</p>
            </div>
          </div>

          {/* Right Continuous Scrolling Reviews */}
          <div className="relative flex-1 overflow-hidden">
            <div className="flex gap-6 animate-marquee">
              {[...reviews, ...reviews].map((review, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow flex flex-col h-[300px] md:h-[560px] w-[280px] md:w-[418px] flex-shrink-0"
                >
                  {/* Stars */}
                  <div className="flex text-yellow-500 mb-4">
                    {"★".repeat(5)}
                  </div>
                  {/* Text */}
                  <p className="text-gray-700 mb-6 text-sm md:text-base">
                    {review.text}
                  </p>
                  {/* User */}
                  <div className="flex items-center mt-auto gap-4">
                    <img
                      src={review.img}
                      alt={review.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                        {review.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;



