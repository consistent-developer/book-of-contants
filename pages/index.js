import Link from 'next/link'
const Welcome = () => {
  return (
    <div>
      <section className="container mx-auto flex px-5 py-2 pt-24 items-center justify-center flex-col  ">
        <img src="drwkit/drawkit-grape-pack-illustration-20.svg" alt=""
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">unique book of concepts</h1>
          <Link href="/home">
            <a><i className="fas fa-play animate-bounce p-4 m-4 border-2 rounded-full text-gray-600 border-gray-600 "></i></a>
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Welcome;