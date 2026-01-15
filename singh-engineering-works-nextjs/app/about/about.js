export const metadata = {
  title: 'About Us - Singh Engineering Works',
  description: 'Learn about Singh Engineering Works and our commitment to excellence',
}

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Singh Engineering Works</h1>
          <p>Excellence in Industrial Furnace Manufacturing Since 2001</p>
        </div>
      </section>

      <section style={{padding: '80px 0'}}>
        <div className="container">
          <div style={{marginBottom: '60px', textAlign: 'center', maxWidth: '1000px', margin: '0 auto 60px'}}>
            <h2 style={{fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '30px'}}>Our Story</h2>
            <p style={{fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '20px'}}>
              Founded in 2001, Singh Engineering Works has established itself as a premier manufacturer and supplier
              of industrial furnaces and engineering solutions. Located in Noida, Uttar Pradesh, our company has been
              serving industries across India with innovative, high-quality furnace systems that meet international standards.
            </p>
            <p style={{fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '20px'}}>
              Under the leadership of Mr. Prabhudayal Singh, our team of experienced engineers and technicians has
              successfully completed numerous projects for clients in metal processing, ceramics, glass, and various
              manufacturing sectors. We pride ourselves on delivering customized solutions that optimize performance
              and efficiency for our clients' specific requirements.
            </p>
            <p style={{fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8'}}>
              With over two decades of experience, we have built a reputation for reliability, innovation, and
              exceptional customer service. Our commitment to quality and continuous improvement has made us
              a trusted partner for businesses seeking dependable industrial furnace solutions.
            </p>
          </div>

          <div style={{marginBottom: '60px'}}>
            <h2 style={{textAlign: 'center', fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '50px'}}>Leadership</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '600px', margin: '0 auto'}}>
              <div style={{background: 'var(--bg-light)', padding: '40px', borderRadius: '10px', textAlign: 'center'}}>
                <div style={{fontSize: '4rem', marginBottom: '20px'}}>👨‍💼</div>
                <h3 style={{color: 'var(--primary-color)', marginBottom: '10px'}}>Mr. Prabhudayal Singh</h3>
                <p style={{color: 'var(--text-dark)', fontWeight: 'bold', marginBottom: '15px'}}>Founder & Managing Director</p>
                <p style={{color: 'var(--text-light)', fontSize: '0.95rem'}}>
                  With over 25 years of experience in industrial engineering and furnace manufacturing,
                  Mr. Singh leads our team with vision and expertise, ensuring every project meets
                  the highest standards of quality and innovation.
                </p>
              </div>
            </div>
          </div>

          <div style={{marginBottom: '60px'}}>
            <h2 style={{textAlign: 'center', fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '50px'}}>Our Expertise</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
              <div style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '20px'}}>🔥</div>
                <h3 style={{color: 'var(--primary-color)', marginBottom: '15px'}}>Furnace Manufacturing</h3>
                <p style={{color: 'var(--text-light)'}}>
                  Design and manufacture of various industrial furnaces including shuttle kilns,
                  roller hearths, pit furnaces, and custom heating systems.
                </p>
              </div>
              <div style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '20px'}}>⚙️</div>
                <h3 style={{color: 'var(--primary-color)', marginBottom: '15px'}}>Engineering Solutions</h3>
                <p style={{color: 'var(--text-light)'}}>
                  Complete engineering services from concept design to installation,
                  including PLC controls, automation, and system integration.
                </p>
              </div>
              <div style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '20px'}}>🔧</div>
                <h3 style={{color: 'var(--primary-color)', marginBottom: '15px'}}>Maintenance & Support</h3>
                <p style={{color: 'var(--text-light)'}}>
                  Comprehensive maintenance services, spare parts supply, and technical
                  support to ensure optimal performance of your equipment.
                </p>
              </div>
              <div style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '20px'}}>🎯</div>
                <h3 style={{color: 'var(--primary-color)', marginBottom: '15px'}}>Custom Solutions</h3>
                <p style={{color: 'var(--text-light)'}}>
                  Tailored furnace systems designed to meet specific process requirements,
                  temperature ranges, and production capacities.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 style={{textAlign: 'center', fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '50px'}}>Our Values</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
                <h3 style={{color: 'var(--primary-color)', marginBottom: '15px'}}>Quality</h3>
                <p style={{color: 'var(--text-light)'}}>We never compromise on the quality of our work and materials</p>
              </div>
              <div style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
                <h3 style={{color: 'var(--primary-color)', marginBottom: '15px'}}>Innovation</h3>
                <p style={{color: 'var(--text-light)'}}>Continuously improving and adopting new technologies</p>
              </div>
              <div style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
                <h3 style={{color: 'var(--primary-color)', marginBottom: '15px'}}>Integrity</h3>
                <p style={{color: 'var(--text-light)'}}>Honest and transparent in all our business dealings</p>
              </div>
              <div style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
                <h3 style={{color: 'var(--primary-color)', marginBottom: '15px'}}>Customer Focus</h3>
                <p style={{color: 'var(--text-light)'}}>Your satisfaction is our top priority</p>
              </div>
            </div>
          </div>

          <div style={{marginBottom: '60px'}}>
            <h2 style={{textAlign: 'center', fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '50px'}}>Company Statistics</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px'}}>
              <div style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '15px'}}>🏭</div>
                <h3 style={{color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '10px'}}>20+</h3>
                <p style={{color: 'var(--text-light)'}}>Years of Experience</p>
              </div>
              <div style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '15px'}}>🔥</div>
                <h3 style={{color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '10px'}}>500+</h3>
                <p style={{color: 'var(--text-light)'}}>Furnaces Delivered</p>
              </div>
              <div style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '15px'}}>🏢</div>
                <h3 style={{color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '10px'}}>100+</h3>
                <p style={{color: 'var(--text-light)'}}>Happy Clients</p>
              </div>
              <div style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '15px'}}>🌍</div>
                <h3 style={{color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '10px'}}>15+</h3>
                <p style={{color: 'var(--text-light)'}}>Cities Served</p>
              </div>
            </div>
          </div>

          <div style={{marginBottom: '60px'}}>
            <h2 style={{textAlign: 'center', fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '50px'}}>Certifications & Standards</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '20px'}}>📋</div>
                <h3 style={{color: 'var(--primary-color)', marginBottom: '15px'}}>ISO 9001:2015</h3>
                <p style={{color: 'var(--text-light)'}}>Quality Management System certified for consistent quality standards</p>
              </div>
              <div style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '20px'}}>⚡</div>
                <h3 style={{color: 'var(--primary-color)', marginBottom: '15px'}}>BIS Approved</h3>
                <p style={{color: 'var(--text-light)'}}>Bureau of Indian Standards approved for industrial equipment</p>
              </div>
              <div style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '20px'}}>🔒</div>
                <h3 style={{color: 'var(--primary-color)', marginBottom: '15px'}}>Safety Standards</h3>
                <p style={{color: 'var(--text-light)'}}>Compliance with industrial safety and electrical standards</p>
              </div>
              <div style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '20px'}}>🏆</div>
                <h3 style={{color: 'var(--primary-color)', marginBottom: '15px'}}>Industry Recognition</h3>
                <p style={{color: 'var(--text-light)'}}>Recognized supplier for major industrial projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}