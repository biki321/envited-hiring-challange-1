import landingSvg from "../statics/imgs/landing.svg";
import {  Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="mt-12 flex flex-col items-center
    "
    >
      <div
        className="mb-3 flex flex-col justify-center items-center text-4xl leading-9
        font-bold"
      >
        <h1 className="text-[#240D57]">Imagine if</h1>
        <h1 className="text-[#8456EC]">Snapchat</h1>
        <h1 className="text-[#240D57]">had events.</h1>
      </div>
      <p>Easily host and share events with your</p>
      <p className="mb-8">friends across any social media.</p>
      <img
        src={landingSvg}
        alt="landing page svgs"
        className="w-[165px] rounded-sm shadow-md
        mb-4"
      />
  
      <Link to={'/create'}>
      <button
          className="w-[185px] h-[50px] rounded-md py-2 bg-gradient-to-r from-[#8456EC] to-[#E87BF8
] text-base font-bold text-white"
        >
          <p> Create my event</p>
        </button>
      </Link>
       
    </div>
  );
}
