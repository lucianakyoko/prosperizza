export const PaymentType = ({ value, icon, label }) => {
  return (
    <label htmlFor={value} className="flex items-center gap-6 py-4 border-b-2 border-brown-150 border-dashed">
      <input
        type="radio"
        name='payment-type'
        id={value}
        value={value}
      />
      <div className="flex items-center gap-2">
        <span className="text-3xl">{icon}</span>
        <span className="text-base font-light leading-none">{label}</span>
      </div>
    </label>
  );
}