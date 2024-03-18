import { Italiana } from "next/font/google";
import './title.css';

const italianaFont = Italiana({
  subsets: ["latin"],
  weight: ['400']
});

export const Title = ({ children, type }) => {
  return (
    <h2 className={`${italianaFont.className} ${type} text-2xl sm:text-3xl lg:text-4xl`}>
      {children}
    </h2>
  );
};