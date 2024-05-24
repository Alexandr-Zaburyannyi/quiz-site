const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-900'>
      {children}
    </div>
  );
};
export default Card;
