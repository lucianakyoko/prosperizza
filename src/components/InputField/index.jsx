export const InputField = ({name, label, placeholder, type='text', className}) => {
  return (
    <label htmlFor={name} className={`flex flex-col gap-1 ${className}`}>
      <span className="text-brown-200 text-base">{label}</span>
      <input 
        className="p-2 sm:p-4 rounded-xl"
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder}
      />
    </label>
  );
}