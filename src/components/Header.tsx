import Link from "next/link";

const Header = () => {
  return (
    <header className='w-full z-10 bg-white py-4 shadow absolute'>
      <div className='container mx-auto px-4 md:px-6 flex items-center justify-between'>
        <Link
          className='text-xl font-bold text-gray-900 hover:shadow-md hover:shadow-gray-500 rounded-xl p-2'
          href='/'
        >
          Quiz App
        </Link>
        <nav className='hidden md:flex items-center space-x-6'>
          <Link
            className='text-gray-900 hover:text-gray-500'
            href='create-quiz'
          >
            Create Quiz
          </Link>
          <Link className='text-gray-900 hover:text-gray-500' href='account'>
            Account
          </Link>
          <Link
            className='text-gray-900 hover:text-gray-500'
            href='leaderboard'
          >
            Leaderboard
          </Link>
          <Link className='text-gray-900 hover:text-gray-500' href='about'>
            About
          </Link>
        </nav>
        <div className='md:hidden'>
          <button
            className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10'
            type='button'
            id='radix-:r6:'
            aria-haspopup='menu'
            aria-expanded='false'
            data-state='closed'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-6 w-6'
            >
              <line x1='4' x2='20' y1='12' y2='12' />
              <line x1='4' x2='20' y1='6' y2='6' />
              <line x1='4' x2='20' y1='18' y2='18' />
            </svg>
            <span className='sr-only'>Toggle navigation menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
