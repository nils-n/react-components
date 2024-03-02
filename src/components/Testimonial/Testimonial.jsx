export default function Testimonial({
  image,
  alt = "headshot of a person giving a testimonial",
  children,
}) {
  return (
    <div className="testimonial">
      <div className="testimonial--background"></div>
      <div
        className="testimonial--image-container "
        style={{ borderRadius: "40px" }}
      >
        <img className="testimonial--image " src={image} alt={alt} />
      </div>
      <div className="testimonial--text-container">{children}</div>
    </div>
  );
}
