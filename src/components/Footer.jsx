const Footer = () => {
  return (
    <footer style={{ padding: '50px' }}>
      <div className='row'>
        <div className='col-12 col-md-4'>
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className='col-12 col-md-2'>
          <ul style={{ padding: 0, listStyleType: 'none' }}>
            <li>Our services</li>
            <li>Why Us</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className='col-12 col-md-4'>
          <div className='row'>
            <div className='col'>
              <i
                className='fa-brands fa-facebook fa-2x'
                style={{ color: '#0D28A6' }}
              />
            </div>
            <div className='col'>
              <i
                className='fa-brands fa-instagram fa-2x'
                style={{ color: '#0D28A6' }}
              />
            </div>
            <div className='col'>
              <i
                className='fa-brands fa-twitter fa-2x'
                style={{ color: '#0D28A6' }}
              />
            </div>
            <div className='col'>
              <i
                className='fa-solid fa-envelope fa-2x'
                style={{ color: '#0D28A6' }}
              />
            </div>
            <div className='col'>
              <i
                className='fa-brands fa-twitch fa-2x'
                style={{ color: '#0D28A6' }}
              />
            </div>
          </div>
        </div>
        <div className='col-12 col-md-2 mt-2'>
          <p>Copyright Binar 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
