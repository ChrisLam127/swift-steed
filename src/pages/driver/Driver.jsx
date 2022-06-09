import "./driver.css";
import SmallHero from "../../components/smallHero/SmallHero";
import img from "../../images/p8.jpg";

const Driver = () => {
  return (
    <>
      <SmallHero title='Register with Us to be a driver' image={img} />
      <div className='drivers'>
        <div className='title'>
          <p>
            Register with us if you are looking to make extra cash with your car
            while studying
          </p>
        </div>
        <form className='drivers-form'>
          <h2>GET ACCESS</h2>
          <div className='drivers-form-details'>
            <div className='form-input'>
              <label className='labels' htmlFor='firstname'>
                First Name
              </label>
              <input
                type='text'
                name='firstname'
                id='firstname'
                className='input'
                placeholder='Enter Your First Name'
              />
            </div>
            <div className='form-input'>
              <label className='labels' htmlFor='lastname'>
                Last Name
              </label>
              <input
                type='text'
                name='lastname'
                id='lastname'
                className='input'
                placeholder='Enter Your Last Name'
              />
            </div>
            <div className='form-input'>
              <label className='labels' htmlFor='email'>
                Email
              </label>
              <input
                type='email'
                name='email+'
                id='email'
                className='input'
                placeholder='Enter Your email'
              />
            </div>

            <div className='form-input'>
              <label className='labels' htmlFor='phone'>
                Phone Number
              </label>
              <input
                type='number'
                name='phone'
                id='phone'
                className='input'
                placeholder='Enter Your Phone Number'
              />
            </div>

            <div className='form-input'>
              <label className='labels' htmlFor='id'>
                Your ID
              </label>
              <input
                type='number'
                name='id'
                id='id'
                className='input'
                placeholder='Enter Your ID'
              />
            </div>

            <div className='form-input'>
              <label className='labels' htmlFor='license'>
                Your Driving License
              </label>
              <input
                type='number'
                name='license'
                id='license'
                className='input'
                placeholder='Enter Your license Number'
              />
            </div>

            <div className='form-input'>
              <label className='labels' htmlFor='picture'>
                Your Picture
              </label>
              <input
                type='file'
                name='picture'
                id='piicture'
                className='input'
                placeholder='Upload Your Picture'
              />
            </div>

            <div className='form-input'>
              <label className='labels' htmlFor='licensePic'>
                Picture of Your License
              </label>
              <input
                type='file'
                name='licensePic'
                id='licensePic'
                className='input'
                placeholder='Upload Your License Picture'
              />
            </div>

            <div className='drivers-radiobox'>
              <p>Please select Corresponding item</p> <br />
              <input type='radio' id='carOwner' name='job' value='CAR OWNER' /> 
              <label for='carOwner'>Car Owner</label>
              <br />
              <input type='radio' id='driver' name='job' value='DRIVER' /> 
              <label for='driver'>DRIVER</label>
              <br />
            </div>
            <div className='checkbox'>
              <input
                type='checkbox'
                id='terms-and-conditions'
                name='tac'
                value='terms-and-conditions'
              />
              <label for='terms-and-conditions'>Agree to our Terms</label>
              <br />
              <input
                type='checkbox'
                id='newsletter'
                name='newsletter'
                value='newsletter'
              />
              <label for='newsletter'> Receive Emails</label>
              <br />
            </div>
            <button type='submit' className='drivers-btn'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Driver;
