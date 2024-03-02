import { FaQuoteLeft } from "react-icons/fa6";

export default function TestimonialText({ children }) {
  return (
    <div className="testimonial--text">
      <div className="testimonial--icon">
        <FaQuoteLeft />
      </div>
      <div>{children}</div>
    </div>
  );
}
