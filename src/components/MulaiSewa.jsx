const MulaiSewa = () => {
  return (
    <section className='mulai-sewa'>
      <div className='container-fluid'>
        <div className='mulai-sewa-row row'>
          <h3 className='title-mulai-sewa fw-bold'>
            Sewa Mobil di (Lokasimu) Sekarang
          </h3>
          <p className='text-mulai-sewa'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <button
          id
          className='btn btn-mulai-sewa'
          style={{ backgroundColor: '#73ca5c', color: 'white' }}
        >
          <span className='text-btn-mulai-sewa'>Mulai Sewa Mobil</span>
        </button>
      </div>
    </section>
  );
};

export default MulaiSewa;
