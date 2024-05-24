const Footer = () => {
  return (
    <footer className='w-full bg-white py-6 h-20  mt-12'>
      <div className='container mx-auto px-4 md:px-6 flex items-center justify-between'>
        <p className='text-gray-900  text-sm'>
          © 2024 Quiz App. All rights reserved.{" "}
        </p>
        <nav className='flex items-center space-x-6'>
          <a
            className='text-gray-900   dark:hover:text-gray-500 text-sm'
            href='#'
          >
            Privacy
          </a>
          <a
            className='text-gray-900   dark:hover:text-gray-500 text-sm'
            href='#'
          >
            Terms
          </a>
          <a
            className='text-gray-900   dark:hover:text-gray-500 text-sm'
            href='#'
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
