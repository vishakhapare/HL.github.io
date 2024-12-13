import React from 'react'

const Testimonial = () => {

  const testimonial = [
    {
      user: "John Doe",
      company: "Stellar Solutions",
      img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/163901_v9_ba.jpg",
      text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",

    },
    {
      user: "Jane Smith",
      company: "New Horizons Technologies",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnr2sT8mQabbD0ByP0GypEtDtnrc7rmFQFw&s",
      text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
    },
    {
      user: "David Johnson",
      company: "Quantum Innovations",
      img: "https://images.deccanherald.com/deccanherald/2024-06/b42f302b-bfdd-4955-a7ad-3a097e132e6e/file7vy8bfebxr8r3fnb763__1_.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
      text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them.",
    },
    {
      user: "Ronnie Brown",
      company: "Apex Dynamics",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuahpUapr2QF_E-fa6-9L9dRlxkWczQ-U9xw&s",
      text: "Working with the team at XYZ Company was a game-changer. Their innovative solutions helped us achieve our goals faster than we thought possible.",
    },
    {
      user: "Sundar Pichai",
      company: "Visionary Creations",
      img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/08/11/22/pg-53-google-ap.jpg",
      text: "I am amazed by the level of professionalism and dedication shown by the team. They delivered outstanding results.",
    },
    {
      user: "Mark Zuckerberg",
      company: "Synergy Systems",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvY8GQjs8WRU8MvR6QXnK3cP5nquLKDpQpWw&s",
      text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched.",
    },
  ]

  return (
    <div className='tracking-wide bg-gray-200 w-screen '>
      <h2 className='text-2xl sm:text-6xl text-center my-10 lg:my-20 text-black font-bold'> What people are<span className='bg-gradient-to-r from-orange-600 to-orange-600 text-transparent bg-clip-text'>saying</span>
      </h2>
      <div className='grid grid-cols-3  gap-5  justify-center ml-8'>
        {testimonial.map((testimonial, index) => (
          <div key={index} className='w-full sm:w-1/2 lg:1/3 px-4py-4  hover:scale-105 transition-transform duration-300"'>
            <div className='bg-neural rounded-md p-5 text-md border border-neutral-800 font-semibold w-96 text-white bg-gray-800'>
              <p>{testimonial.text}</p>
              <div className='flex mt-8 items-start'>
                <img className='w-12 h-12 mr-6 rounded-full border border-neutral-300'
                  src={testimonial.img}
                  alt={testimonial.user}>
                </img>
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className='text-sm font-medium italic text-neutral-200'>{testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
