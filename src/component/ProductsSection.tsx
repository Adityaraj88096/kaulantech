import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsYoutube, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Prepgame",
    description:
      "Prepgame is a mobile application designed to enhance learning efficiency and retention through scientifically backed revision schedules and a comprehensive test-taking platform. Whether you're a student or a professional, Prepgame helps you master new concepts and embed them into long-term memory. The app offers a wide range of test papers, including previous year questions (PYQs) and mock exams, for various competitive and academic examinations.",
    image: "/prepgame.jpg",
    youtube: "",
    // github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://play.google.com/store/apps/details?id=com.kaulantech.prepgame&hl=en-US&ah=OoCsJnR5hRsxZzkYlKBvJcURavI",
    price: 'Free',
    platform: "Android app",
    purpose: 'To Increase efficiency of students and professionals.',
  },
]

const ProductsSection = () => {
  return (
    <section id="products">
      <h1 className="my-10 text-center font-bold text-4xl">
        Products
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <span className="font-bold text-lg">watch product video</span>
                      <Link href={project.youtube} target="_blank">
                        <BsYoutube
                          size={30}
                          color="red"
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} 
                        {/* target="_blank" */}
                        >
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                      <div className="font-bold text-xl mt-4">Price : <span className="text-green-700 font-i">{project.price}</span></div>
                      <div className="font-bold text-xl mt-1">platform : <span className="text-green-700 font-i">{project.platform}</span></div>
                      <div className="font-bold text-xl mt-1">Purpose : <span className="text-green-700 font-i">{project.purpose} </span></div>
                      <div className="font-bold text-xl mt-1">
                      <Link href={project.link} target="_blank" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">
                        🎁 Get it for Free
                      </Link>
                    </div>

                      <div className="font-bold text-xl mt-1">Call us now : <span className="text-green-700 font-i">+91-8226931447</span></div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProductsSection
