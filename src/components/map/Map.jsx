import "./map.css";

const Map = () => {
  return (
    <div className='map'>
      <iframe
        src='https://maps.google.com/maps?q=3%20sturdee%20avenue%20rosebank&t=&z=13&ie=UTF8&iwloc=&output=embed'
        frameborder='0'
        scrolling='no'
        marginheight='0'
        marginwidth='0'></iframe>
    </div>
  );
};

export default Map;
