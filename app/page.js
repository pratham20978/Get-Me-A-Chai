import Image from "next/image";
import Devider from "@/components/Devider";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="flex justify-center items-center flex-col text-center text-white h-[44vh] gap-4 px-5 sm:px-0">
        <div className="font-bold text-5xl flex gap-4 sm:gap-2 items-center sm:flex-row flex-col ">
          <span>Buy Me A Chai</span> <span><img className="invertImg" width={70} src="/tea.gif" alt="" /></span></div>
        <p>A crowdfunding platform for creators. Get funded by your fans and followers. Start now!</p>

        <div>
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>

          <Link href={"/about"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>
        </div>
      </div>

      <Devider />

      <div className="text-white container mx-auto pb-32 pt-16">
        <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
        <div className="flex sm:gap-5 justify-around flex-col sm:flex-row gap-12">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className=" text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className=" text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className=" text-center">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <Devider />

      <div className="text-white container mx-auto pb-32 pt-16 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        <iframe src="https://www.youtube.com/embed/QtaorVNAwbI?si=GOfM_trkpxg8xISS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      </div>

    </>
  );
}
