'use client'

const WhyUs = () => {
  return (
    <div className="feat bg-gray pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-head col-sm-12">
            <h4>
              <span>Why Choose</span> Us?
            </h4>
            <p>
              We are dedicated to providing top-notch furnace solutions,
              ensuring the efficiency and longevity of your industrial
              processes.
            </p>
          </div>
          <div
            className="col-lg-4 col-sm-6 item"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="0"
          >
            <span className="icon feature_box_col_one">
              <i className="fa fa-globe"></i>
            </span>
            <h6>Modern Furnace Design</h6>
            <p>
              We use the latest technology to create modern furnace designs,
              meeting the demands of contemporary industrial processes.
            </p>
          </div>
          <div
            className="col-lg-4 col-sm-6 item"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <span className="icon feature_box_col_two">
              <i className="fa fa-cogs"></i>
            </span>
            <h6>Advanced Technology</h6>
            <p>
              Our furnaces incorporate advanced technology for optimal
              performance and energy efficiency.
            </p>
          </div>
          <div
            className="col-lg-4 col-sm-6 item"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <span className="icon feature_box_col_three">
              <i className="fa fa-users"></i>
            </span>
            <h6>Expert Team</h6>
            <p>
              Our team of experts ensures high-quality craftsmanship and
              reliable furnace solutions.
            </p>
          </div>
          <div
            className="col-lg-4 col-sm-6 item"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <span className="icon feature_box_col_four">
              <i className="fa fa-database"></i>
            </span>
            <h6>Furnace Business Growth</h6>
            <p>
              Experience business growth with our reliable and efficient
              furnace solutions that propel your industrial processes forward.
            </p>
          </div>
          <div
            className="col-lg-4 col-sm-6 item"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <span className="icon feature_box_col_five">
              <i className="fa-solid fa-bullseye"></i>
            </span>
            <h6>Strategic Furnace Planning</h6>
            <p>
              Our market strategies are designed to integrate cutting-edge
              furnace technologies, ensuring your business stays ahead in the
              industry.
            </p>
          </div>
          <div
            className="col-lg-4 col-sm-6 item"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <span className="icon feature_box_col_six">
              <i className="fa fa-clock"></i>
            </span>
            <h6>Timely Delivery</h6>
            <p>
              We prioritize timely delivery to minimize downtime and keep your
              operations running smoothly.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section mt-5 pt-5">
          <div className="section-head col-sm-12 mb-4">
            <h4>
              <span>Our</span> Expertise
            </h4>
            <p>Years of experience in furnace manufacturing and engineering</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="skill-item mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span>Furnace Design</span>
                  <span>95%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-danger" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span>Manufacturing Quality</span>
                  <span>90%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill-item mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span>Customer Satisfaction</span>
                  <span>98%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-danger" style={{ width: '98%' }}></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span>Technical Support</span>
                  <span>92%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-danger" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;