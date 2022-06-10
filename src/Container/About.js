import React from 'react';

function About(props) {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <h1 className="section-title position-relative text-center mb-5">Traditional &amp; Delicious Ice Cream Since 1950</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 py-5">
              <h4 className="font-weight-bold mb-3">About Us</h4>
              <h5 className="text-muted mb-3">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h5>
              <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
              <a href className="btn btn-secondary mt-2">Learn More</a>
            </div>
            <div className="col-lg-4" style={{ minHeight: 400 }}>
              <div className="position-relative h-100 rounded overflow-hidden">
                <img className="position-absolute w-100 h-100" src="img/about.jpg" style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className="col-lg-4 py-5">
              <h4 className="font-weight-bold mb-3">Our Features</h4>
              <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
              <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3" />Eos kasd eos dolor</h5>
              <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3" />Eos kasd eos dolor</h5>
              <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3" />Eos kasd eos dolor</h5>
              <a href className="btn btn-primary mt-2">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Team Start */}
      <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h1 className="section-title position-relative text-center mb-5">Best Prices We Offer For Ice Cream Lovers</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 pb-2">
                        <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                            <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                <h4 className="font-weight-bold text-white mb-0">$99</h4>
                            </div>
                            <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                <img className="rounded-circle w-100 h-100" src="img/product-1.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                            <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                            <a href className="btn btn-sm btn-secondary">Order Now</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 pb-2">
                        <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                            <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                <h4 className="font-weight-bold text-white mb-0">$99</h4>
                            </div>
                            <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                <img className="rounded-circle w-100 h-100" src="img/product-2.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                            <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                            <a href className="btn btn-sm btn-secondary">Order Now</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 pb-2">
                        <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                            <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                <h4 className="font-weight-bold text-white mb-0">$99</h4>
                            </div>
                            <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                <img className="rounded-circle w-100 h-100" src="img/product-3.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                            <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                            <a href className="btn btn-sm btn-secondary">Order Now</a>
                        </div>
                    </div>  
                    <div className="col-lg-3 col-md-6 mb-4 pb-2">
                        <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                            <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                <h4 className="font-weight-bold text-white mb-0">$99</h4>
                            </div>
                            <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                <img className="rounded-circle w-100 h-100" src="img/product-3.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                            <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                            <a href className="btn btn-sm btn-secondary">Order Now</a>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <a href className="btn btn-primary py-3 px-5">Load More</a>
                    </div>
                </div>
            </div>
    </div>

  );
}

export default About;