const ReadMinutes = () => {
  return (
    <div>

      <div className="mt-6 grid grid-cols-2 text2 px-1 lg:px-20">
        <h6 className="w-20 md:w-28 py-1 md:p-2 text-base text-center text-white bg-green-400 rounded-md">Next Js</h6>
        <div className="flex place-self-end justify-items-center bg-green-400 rounded-md px-1.5 py-1 md:py-2 text-white">
          <i className="far fa-clock mr-1 flex-auto self-center"></i>
          <h6 className="flex-auto self-center text-base ml-1">10 minute read</h6>
        </div>
      </div>

    </div>
  );
}

export default ReadMinutes;