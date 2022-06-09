import "./offices.css";

const Offices = () => {
  return (
    <div className='offices'>
      <div className='office'>
        <div className='city'>
          Pretoria: <span>Jakaranda</span>
        </div>
        <div className='phone'>
          Phone: <span>(+27) 81 743 9255 </span>
        </div>
        <div className='phone'>
          Email: <span>christianlambo26@gmail.com </span>
        </div>
        <div className='hours'>
          <br />
          <h5>Working Hours</h5>
          <br />
          <div>
            Monday: <strong>08h00 - 17h00</strong>
          </div>
          <div>
            Tuesday: <strong>08h00 - 17h00</strong>
          </div>
          <div>
            Wednesday: <strong>08h00 - 17h00</strong>
          </div>
          <div>
            Thursday: <strong>08h00 - 17h00</strong>
          </div>
          <div>
            Friday: <strong>08h00 - 17h00</strong>
          </div>
          <div>
            Saturday: <strong>09h00 - 16h00</strong>
          </div>
        </div>
      </div>
      <div className='office'>
        <div className='city'>
          Johannesburg: <span>Kempton Park</span>
        </div>
        <div className='phone'>
          Phone: <span>(+27) 81 743 9255 </span>
        </div>
        <div className='phone'>
          Email: <span>christianlambo26@gmail.com </span>
        </div>
        <div className='hours'>
          <h5>Working Hours</h5>
          <div>
            Monday: <strong>08h00 - 17h00</strong>
          </div>
          <div>
            Tuesday: <strong>08h00 - 17h00</strong>
          </div>
          <div>
            Wednesday: <strong>08h00 - 17h00</strong>
          </div>
          <div>
            Thursday: <strong>08h00 - 17h00</strong>
          </div>
          <div>
            Friday: <strong>08h00 - 17h00</strong>
          </div>
          <div>
            Saturday: <strong>09h00 - 16h00</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offices;
