import "./hero.css";
import { Link } from "react-router-dom";
import delivery from "../../images/delivery01.png";
import img06 from "../../images/p6.jpg";
import Offices from "../offices/Offices";

const Hero = () => {
  return (
    <div>
      <div class='hero-container'>
        <div class='hero'>
          <Link to='/drivers' class='driver'>
            Register As Driver
          </Link>
          <Link to='/owners' class='carOwner'>
            Register My Car
          </Link>
        </div>
        <h1>Safe & Convenient</h1>
        <p>
          Swift Steed is designed for you to earn some money either as a driver
          or as a car owner or both while you are studying.
        </p>
      </div>

      <div id='banner'>
        <div class='banner'>
          <div class='mission'>
            <div class='des'>
              <h3>Students Car Owners</h3>
              <br />
              <ul className='lists'>
                <li>
                  Rent out your car every morning at 08h00 and collect it at
                  16h00.
                </li>
                <li>We will pay you daily or monthly.</li>
                <li>
                  We will get a Student driver or you can bring your friend as a
                  drive.
                </li>
                <li>
                  Earn Up to R400/day by renting out your car plus benefits
                </li>
              </ul>
              <br />
              <br />
              <Link to='#'>Know more</Link>
            </div>
            <div class='pic'>
              <img src={delivery} alt='' />
            </div>
          </div>

          <div class='vision'>
            <div class='pic'>
              <img src={img06} alt='' />
            </div>
            <div class='des'>
              <h3>Be A Driver</h3> <br />
              <p>
                If you are studying part time, or have time during the day for a
                job, We will be happy to work with you, giving you an
                opportunity to make extra cash while you continue working on
                your dreams. We do basic deliveries for students books and
                submisssions for Universities such as UNISA, Damlin and more...
                We will connect you with a car owner from your University and
                let us know if you already have a car.
              </p>
              <br />
              <br />
              <Link to='#'>REGISTER AS DRIVER</Link>
            </div>
          </div>
        </div>
      </div>

      <Offices />
    </div>
  );
};

export default Hero;
