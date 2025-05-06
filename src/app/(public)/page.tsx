import Image from "next/image";

export default function Home() {
  return (
    <div id="container" className="p-20 w-auto flex px-24 justify-center items-center relative">
      <div id="container" className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex justify-center flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
        <div className="mr-10">
          <Image
            className="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
            src="/assets/dev.jpeg"
            alt="image of myself"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <h1 className="text-white font-bold text-3xl mt-6 mb-8">
            Hey it&apos;s me, Yashraj
          </h1>

          <p className="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-4">
            Hi, I&apos;m a Full-Stack developer that loves building products and web apps that can impact millions of lives. Want to contact me - check my LinkedIn.
          </p>
          <ul className="mb-4">
            <li>
              • Next.js, Sanity, Supabase, Vercel
            </li>
            <li>
              • Laravel, MySQL
            </li>
            <li>
              • Best to use AI Tools
            </li>
            <li>
              • Logo & UI/UX Designer
            </li>
            <li>
              • Traveller
            </li>
            <li>
              • Always try to learn
            </li>
          </ul>
          <div id="social" className="flex flex-wrap justify-start items-center gap-4">
            <a rel="noopener" target="_blank" href="https://github.com/ameghcoder" className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
              <img className="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg" width="20px" height="20px" alt="Github" />
              <span>Visit my Github</span>
            </a>
            <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/yrjdeveloper/" className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
              <img className="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg" width="20px" height="20px" alt="LinkedIn" />
              <span>Follow me on Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
