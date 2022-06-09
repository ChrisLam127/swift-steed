import "./smallHero.css";
import img from "../../images/p9.jpg";

const SmallHero = ({ title, image }) => {
  return (
    <div className='contact-header'>
      <h3>{title}</h3>
      <div className='contact-image'>
        <img src={image} alt='' />
      </div>
    </div>
  );
};

export default SmallHero;
