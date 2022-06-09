import "./contact.css";
import Map from "../../components/map/Map";
import Offices from "../../components/offices/Offices";
import SmallHero from "../../components/smallHero/SmallHero";
import img from "../../images/p9.jpg";

const Contact = () => {
  return (
    <div className='contacts'>
      <SmallHero title='Contact Us For More Informations' image={img} />
      <div className='contact'>
        <div className='details'>
          <Offices />
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Contact;
