export const FilterItem = ({tagName, isActive, onClick}) => {

  return (
    <li 
      className={`${isActive ? 'bg-red-200 text-gray-100' : 'bg-white text-gray-900'} font-medium  hover:bg-red-200 text-sm hover:cursor-pointer hover:text-gray-100 py-2 px-4 rounded-2xl w-fit 
      flex items-center justify-center`}
      onClick={onClick}
    >
      {tagName}
    </li>
  );
}