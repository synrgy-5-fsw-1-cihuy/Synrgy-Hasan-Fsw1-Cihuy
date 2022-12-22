const Testimonial = () => {
  return (
    <div>
      <section className='testimonial'>
        <h3 className='fw-bold' style={{ textAlign: 'center' }}>
          Testimonial
        </h3>
        <p style={{ textAlign: 'center' }}>
          Berbagai review positif dari para pelanggan kami
        </p>
        {/* Carousel wrapper */}
        <div
          id='carouselMultiItemExample'
          className='carousel-testimonial carousel slide carousel-dark text-center'
          data-mdb-ride='carousel'
        >
          {/* Inner */}
          <div className='carousel-inner py-4'>
            {/* Single item */}
            <div className='carousel-item active'>
              <div className='container'>
                <div className='row'>
                  <div className='col-6 col-md-4'>
                    <img
                      className='rounded-circle shadow-1-strong mb-4'
                      src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp'
                      alt='avatar'
                      style={{ width: '150px' }}
                    />
                    <h5 className='mb-3'>Anna Deynah</h5>
                    <p>UX Designer</p>
                    <p className='text-muted'>
                      <i className='fas fa-quote-left pe-2' />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </p>
                    <ul className='list-unstyled d-flex justify-content-center text-warning mb-0'>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                    </ul>
                  </div>
                  <div className='col-lg-4 d-none d-lg-block'>
                    <img
                      className='rounded-circle shadow-1-strong mb-4'
                      src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp'
                      alt='avatar'
                      style={{ width: '150px' }}
                    />
                    <h5 className='mb-3'>John Doe</h5>
                    <p>Web Developer</p>
                    <p className='text-muted'>
                      <i className='fas fa-quote-left pe-2' />
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid
                      commodi.
                    </p>
                    <ul className='list-unstyled d-flex justify-content-center text-warning mb-0'>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star-half-alt fa-sm' />
                      </li>
                    </ul>
                  </div>
                  <div className='col-lg-4 d-none d-lg-block'>
                    <img
                      className='rounded-circle shadow-1-strong mb-4'
                      src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp'
                      alt='avatar'
                      style={{ width: '150px' }}
                    />
                    <h5 className='mb-3'>Maria Kate</h5>
                    <p>Photographer</p>
                    <p className='text-muted'>
                      <i className='fas fa-quote-left pe-2' />
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti.
                    </p>
                    <ul className='list-unstyled d-flex justify-content-center text-warning mb-0'>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='far fa-star fa-sm' />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Single item */}
            <div className='carousel-item'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-4'>
                    <img
                      className='rounded-circle shadow-1-strong mb-4'
                      src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp'
                      alt='avatar'
                      style={{ width: '150px' }}
                    />
                    <h5 className='mb-3'>John Doe</h5>
                    <p>UX Designer</p>
                    <p className='text-muted'>
                      <i className='fas fa-quote-left pe-2' />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </p>
                    <ul className='list-unstyled d-flex justify-content-center text-warning mb-0'>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                    </ul>
                  </div>
                  <div className='col-lg-4 d-none d-lg-block'>
                    <img
                      className='rounded-circle shadow-1-strong mb-4'
                      src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp'
                      alt='avatar'
                      style={{ width: '150px' }}
                    />
                    <h5 className='mb-3'>Alex Rey</h5>
                    <p>Web Developer</p>
                    <p className='text-muted'>
                      <i className='fas fa-quote-left pe-2' />
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid
                      commodi.
                    </p>
                    <ul className='list-unstyled d-flex justify-content-center text-warning mb-0'>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star-half-alt fa-sm' />
                      </li>
                    </ul>
                  </div>
                  <div className='col-lg-4 d-none d-lg-block'>
                    <img
                      className='rounded-circle shadow-1-strong mb-4'
                      src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp'
                      alt='avatar'
                      style={{ width: '150px' }}
                    />
                    <h5 className='mb-3'>Maria Kate</h5>
                    <p>Photographer</p>
                    <p className='text-muted'>
                      <i className='fas fa-quote-left pe-2' />
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti.
                    </p>
                    <ul className='list-unstyled d-flex justify-content-center text-warning mb-0'>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='far fa-star fa-sm' />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Single item */}
            <div className='carousel-item'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-4'>
                    <img
                      className='rounded-circle shadow-1-strong mb-4'
                      src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp'
                      alt='avatar'
                      style={{ width: '150px' }}
                    />
                    <h5 className='mb-3'>Anna Deynah</h5>
                    <p>UX Designer</p>
                    <p className='text-muted'>
                      <i className='fas fa-quote-left pe-2' />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </p>
                    <ul className='list-unstyled d-flex justify-content-center text-warning mb-0'>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                    </ul>
                  </div>
                  <div className='col-lg-4 d-none d-lg-block'>
                    <img
                      className='rounded-circle shadow-1-strong mb-4'
                      src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp'
                      alt='avatar'
                      style={{ width: '150px' }}
                    />
                    <h5 className='mb-3'>John Doe</h5>
                    <p>Web Developer</p>
                    <p className='text-muted'>
                      <i className='fas fa-quote-left pe-2' />
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid
                      commodi.
                    </p>
                    <ul className='list-unstyled d-flex justify-content-center text-warning mb-0'>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star-half-alt fa-sm' />
                      </li>
                    </ul>
                  </div>
                  <div className='col-lg-4 d-none d-lg-block'>
                    <img
                      className='rounded-circle shadow-1-strong mb-4'
                      src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp'
                      alt='avatar'
                      style={{ width: '150px' }}
                    />
                    <h5 className='mb-3'>Maria Kate</h5>
                    <p>Photographer</p>
                    <p className='text-muted'>
                      <i className='fas fa-quote-left pe-2' />
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti.
                    </p>
                    <ul className='list-unstyled d-flex justify-content-center text-warning mb-0'>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='fas fa-star fa-sm' />
                      </li>
                      <li>
                        <i className='far fa-star fa-sm' />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Inner */}
          {/* Controls */}
          <div className='controls-carausel d-flex justify-content-center mb-4'>
            <button
              className='carousel-control-prev position-relative'
              type='button'
              data-mdb-target='#carouselMultiItemExample'
              data-mdb-slide='prev'
            >
              <span className='carousel-control-prev-icon' aria-hidden='true' />
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next position-relative'
              type='button'
              data-mdb-target='#carouselMultiItemExample'
              data-mdb-slide='next'
            >
              <span className='carousel-control-next-icon' aria-hidden='true' />
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
        {/* Carousel wrapper */}
      </section>
      ;
    </div>
  );
};

export default Testimonial;
