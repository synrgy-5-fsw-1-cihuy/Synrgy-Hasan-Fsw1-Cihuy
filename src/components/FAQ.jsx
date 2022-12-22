const FAQ = () => {
  return (
    <section className='faq' style={{ padding: '50px' }}>
      <div className='row'>
        <div className='col-12 col-xl-6'>
          <h3 className='fw-bold'>Frequently Asked Question</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='col-12 col-xl-6'>
          <ul className='list-group'>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              Apa saja syarat yang dibutuhkan?
              <i className='fa-solid fa-chevron-down' />
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              Berapa hari minimal sewa mobil lepas kunci?
              <i className='fa-solid fa-chevron-down' />
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              Berapa hari sebelumnya sabaiknya booking sewa mobil?
              <i className='fa-solid fa-chevron-down' />
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              Apakah Ada biaya antar-jemput?
              <i className='fa-solid fa-chevron-down' />
            </li>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              Bagaimana jika terjadi kecelakaan
              <i className='fa-solid fa-chevron-down' />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
