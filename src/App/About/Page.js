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
          <p>Your Trusted Partner in Industrial Solutions</p>
        </div>
      </section>

      <section style={{padding: '80px 0'}}>
        <div className="container">
          <div style={{marginBottom: '60px', textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px'}}>
            <h2 style={{fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '20px'}}>Our Story</h2>
            <p style={{fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '20px'}}>
              Since our establishment, Singh Engineering Works has been at the forefront
              of providing innovative engineering solutions to industries across the region.
              With decades of combined experience, our team delivers excellence in every project.
            </p>
            <p style={{fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8'}}>
              We specialize in custom fabrication, manufacturing, and engineering services
              that meet the highest standards of quality and precision.
            </p>
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
        </div>
      </section>
    </>
  )
}