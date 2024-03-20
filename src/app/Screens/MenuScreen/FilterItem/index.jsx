export const FilterItem = ({tagName}) => {
  return (
    <li className="bg-white font-medium active:bg-red-200 active:text-gray-100 text-gray-900 hover:bg-red-200 text-sm hover:cursor-pointer hover:text-gray-100 py-2 px-4 rounded-2xl w-fit 
     flex items-center justify-center">
      {tagName}
    </li>
  );
}