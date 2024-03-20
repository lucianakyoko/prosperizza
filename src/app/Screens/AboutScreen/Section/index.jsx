export const Section = ({children, sectionTitle}) => {
  return (
    <section className="flex flex-col gap-4 pb-6 border-b-2 border-brown-150 border-dashed">
      <h3 className="text-xl font-bold text-brown-200">{sectionTitle}</h3>
      <div className=" text-lg flex flex-col gap-2">
        {children}
      </div>
    </section>
  );
};