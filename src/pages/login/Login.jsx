import "./login.css";

const Login = () => {
  return (
    <div className='login'>
      <div className='title'>
        <p>Stay Connected, Keep Growing</p> <br />
        <br />
      </div>
      <form className='form'>
        <h2>LOG IN</h2>
        <input
          type='email'
          name='email+'
          id='email'
          placeholder='Enter Your email'
        />{" "}
        <br />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Enter Your Password'
        />{" "}
        <br />
        <button type='submit' className='btn'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
