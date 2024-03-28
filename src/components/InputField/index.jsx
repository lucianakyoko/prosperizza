export const InputField = (props) => {
  const {
    name, 
    label, 
    placeholder, 
    type='text', 
    className, 
    value, 
    onChange, 
    validate, 
    mask,
    ...restProps
  } = props;

  return (
    <label htmlFor={name} className={`flex flex-col gap-1 ${className}`}>
      <span className="text-brown-200 text-base">{label}</span>
      <input 
        className="p-2 sm:p-4 rounded-xl bg-white"
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    
        {...restProps}
      />
    </label>
  );
}