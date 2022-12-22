const WhyUs = () => {
  return (
    <section className='why-us' style={{ padding: '50px' }}>
      <h3
        className='fw-bold text-sm-center text-md-start'
        style={{ paddingBottom: '10px' }}
      >
        Why Us?
      </h3>
      <p
        className='text-sm-center text-md-start'
        style={{ paddingBottom: '10px' }}
      >
        Mengapa harus pilih Binar Car Rental?
      </p>
      <div className='row'>
        <div className='col-12 col-md mb-sm-4'>
          <div className='card-testimonial card'>
            <div className='card-body'>
              <i
                style={{ color: '#F9CC00' }}
                className='fa-regular fa-thumbs-up fa-2x'
              />
              <h5 className='card-title my-3'>Mobil Lengkap</h5>
              <p className='card-text mb-4'>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
          </div>
        </div>
        <div className='col-12 col-md mb-sm-4'>
          <div className='card-testimonial card'>
            <div className='card-body'>
              <i
                style={{ color: '#FA2C5A' }}
                className='fa-sharp fa-solid fa-tag fa-2x'
              />
              <h5 className='card-title my-3'>Harga Murah</h5>
              <p className='card-text'>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
          </div>
        </div>
        <div className='col-12 col-md mb-sm-4'>
          <div className='card-testimonial card'>
            <div className='card-body'>
              <i
                style={{
                  color: 'white',
                  backgroundColor: '#0D28A6',
                  borderRadius: '50%',
                }}
                className='fa-regular fa-clock fa-2x'
              />
              <h5 className='card-title my-3'>Layanan 24 Jam</h5>
              <p className='card-text'>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
          </div>
        </div>
        <div className='col-12 col-md mb-sm-4'>
          <div className='card-testimonial card'>
            <div className='card-body'>
              <i
                style={{
                  color: '#73ca5c' /* backgroundColor: '#73ca5c', */,
                  borderRadius: '40%',
                }}
                className='fa-solid fa-award fa-2x'
              />
              <h5 className='card-title my-3'>Sopir Profesional</h5>
              <p className='card-text'>
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
