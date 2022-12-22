const Main = () => {
  return (
    <div>
      <section
        className='main'
        style={{ padding: '50px', backgroundColor: '#cfd4ed' }}
      >
        <div className='row'>
          <div className='col-12 col-md-6' style={{ paddingTop: '70px' }}>
            <h3 className='fw-bold'>
              Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)
            </h3>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <button
              type='button'
              className='btn'
              style={{ backgroundColor: '#73ca5c' }}
            >
              <span style={{ color: 'white' }}>Mulai Sewa Mobil</span>
            </button>
          </div>
          <div className='col-12 col-md-6'>
            <img className='img-main' src='./assets/img/car.svg' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
