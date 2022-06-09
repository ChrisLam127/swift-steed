import "./owner.css";
import SmallHero from "../../components/smallHero/SmallHero";
import img from "../../images/p11.jpg";

const Owner = () => {
  return (
    <>
      <SmallHero title='Register Your Car For Renting' image={img} />
      <div className='owner'>
        <div className='title'>
          <p>
            Register with us if you are looking to make extra cash with your car
            while studying
          </p>
        </div>
        <form className='owner-form'>
          <h2>CAR OWNER</h2>
          <div className='owner-form-details'>
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
              <label className='labels' htmlFor='numberPlate'>
                Number Plate
              </label>
              <input
                type='text'
                name='numberPlate'
                id='numberPlate'
                className='input'
                placeholder='Enter Car Number Plate'
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

            <div className='form-input'>
              <label className='labels' htmlFor='picture'>
                Upload 4 Pictures Of Your Car
              </label>
              <input
                type='file'
                name='picture'
                id='piicture'
                className='input'
                placeholder='Upload Your Picture'
              />
            </div>

            {/* <div className='owner-radiobox'>
              <p>Please select Corresponding item</p> <br />
              <input type='radio' id='carOwner' name='job' value='CAR OWNER' /> 
              <label for='carOwner'>Car Owner</label>
              <br />
              <input type='radio' id='driver' name='job' value='DRIVER' /> 
              <label for='driver'>DRIVER</label>
              <br />
            </div> */}
            <div className='checkbox'>
              <input
                type='checkbox'
                id='terms-and-conditions'
                name='tac'
                value='terms-and-conditions'
              />
              <label for='terms-and-conditions'> Agree to our Terms</label>
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
            <button type='submit' className='owner-btn'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Owner;
