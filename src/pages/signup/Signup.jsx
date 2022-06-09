import "./signup.css";

const Signup = () => {
  return (
    <div className='signup'>
      <div className='title'>
        <p>
          Register with us if you are looking to make extra cash with your car
          while studying
        </p>
      </div>
      <form className='signup-form'>
        <h2>GET ACCESS</h2>
        <div className='signup-form-details'>
          <div className='form-input'>
            <input
              type='text'
              name='firstname'
              id='firstname'
              className='input'
              placeholder='Enter Your First Name'
            />
          </div>
          <div className='form-input'>
            <input
              type='text'
              name='lastname'
              id='lastname'
              className='input'
              placeholder='Enter Your Last Name'
            />
          </div>
          <div className='form-input'>
            <input
              type='email'
              name='email+'
              id='email'
              className='input'
              placeholder='Enter Your email'
            />
          </div>
          <div className='form-input'>
            <input
              type='password'
              name='password'
              id='password'
              className='input'
              placeholder='Enter Your Password'
            />
          </div>
          <div className='form-input'>
            <input
              type='number'
              name='phone'
              id='phone'
              className='input'
              placeholder='Enter Your Phone Number'
            />
          </div>
          <div className='signup-radiobox'>
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
          <button type='submit' className='signup-btn'>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
