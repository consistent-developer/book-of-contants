import Link from "next/link";

const ReadMinutes = () => {
  return (
    <div>

      <div className="mt-6 grid grid-cols-2 text2 px-1 lg:px-20">
        <Link href="/python" >
          <a>
            <h6 className="w-20 md:w-28 p-0.5 text-sm lg:text-base text-center self-center text-white bg-green-400">Python</h6>
          </a>
        </Link>
        <div className="flex place-self-end justify-items-center bg-green-400 px-1.5 py-0.5 md:px-2 text-white">
          <i className="far fa-clock mr-1 text-base text-green-900 flex-auto self-center"></i>
          <h6 className="flex-auto self-center text-sm lg:text-base ml-1">10 minute</h6>
        </div>
      </div>
    </div>
  );
}

export default ReadMinutes;