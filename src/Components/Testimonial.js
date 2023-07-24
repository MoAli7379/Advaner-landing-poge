import React from 'react';

const Testimonial = ({avatar, name, profession, quote}) => {
    return (
        <div className="flex flex-col overflow-hidden shadow-2xl rounded-lg bg-[#F1F5FB]">
            <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                <div className="flex-1">
                    <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">{quote}</p>
                    </blockquote>
                </div>
                <div className="flex items-center mt-8">
                    <img className="flex-shrink-0 object-cover rounded-full w-14 h-14 shadow-md" src={avatar} alt="" />
                    <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">{name}</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">{profession}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Testimonials = () => {
  const testimonialsData = [
      {
          avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Leslie Alexander",
          profession: "Freelance React Developer",
          quote: "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”"
      },
      {
          avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "John Doe",
          profession: "Full Stack Developer",
          quote: "“The user experience is just amazing. I've never seen anything like this before!”"
      },
      {
          avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
          name: "Jane Smith",
          profession: "Product Designer",
          quote: "“The design is simply beautiful and intuitive. Great job, Rareblocks!”"
      },
  ];
  


    return (
        <section className="py-12 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <p className="text-lg font-medium text-gray-600 font-pj">{testimonialsData.length} people have said how good Rareblocks</p>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Our happy clients say about us</h2>
                    </div>
                    <div className="mt-8 text-center md:mt-16 md:order-3">
                        <a href="#" title="" className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"> Check all {testimonialsData.length} reviews </a>
                    </div>
                    <div className="relative mt-10 md:mt-24 md:order-2">
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{background: 'linear-gradient(90deg, #0fa0ff -0.55%, #ff007d 22.86%, #ebff70 48.36%, #ff6644 73.33%, #44ff9a 99.34%)'}}></div>
                        </div>
                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                            {testimonialsData.map((testimonial, index) => 
                                <Testimonial key={index} {...testimonial} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;
