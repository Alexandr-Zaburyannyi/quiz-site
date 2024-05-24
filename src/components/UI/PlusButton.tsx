import { IconPlus } from "@tabler/icons-react";
import { ForwardRefRenderFunction, RefObject } from "react";

interface Props {
  onClick: () => void;
  classes?: string;
  ref?: RefObject<HTMLButtonElement>;
}

const PlusButton: React.FC<Props> = (({ onClick, classes }) => {
  return (
    <button
      onClick={() => onClick()}
      type='button'
      className={`flex items-center justify-center px-4 py-2 mt-4 text-sm font-medium rounded-md border-solid border-2 border-white  bg-gray-950 text-gray-50 shadow-md hover:shadow-lg hover:shadow-white shadow-white ${classes}`}
    >
      <IconPlus className='h-6 w-6' />
    </button>
  );
}) as ForwardRefRenderFunction<HTMLButtonElement, Props>;
export default PlusButton;
