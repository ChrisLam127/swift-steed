import "./footer.css";

const Footer = () => {
  return (
    <div className='bottom'>
      <div className='footer'>
        <div className='left'>
          <div className='footer-contact'>
            Phone: <span>081 743 9255</span>
          </div>
          <div className='footer-contact'>
            Email: <span>christianlambo26@gmail.com</span>
          </div>
        </div>
        <div className='middle'>
          <p>All right reserved &#169; 2022, Christian Lambo</p>
        </div>
        <div className='right'>
          <h2>News Letter</h2>
          <form className='footer-form'>
            <input type='text' className='footer-input' />
            <button className='footer-btn' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
