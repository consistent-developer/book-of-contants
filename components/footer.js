const Footer = () => {
  return (
    <div>
      <footer className="mb-20 mt-10 text-gray-600 body-font">
        <div className="container px-5 pb-4 flex items-center sm:flex-row flex-col">
          <a className="flex text-sm md:font-base font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Book-of-concepts</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 ">© 2020 Book-of-concepts —
            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@arth</a>
          </p>
         
        </div>
      </footer>
    </div>
  );
}

export default Footer;