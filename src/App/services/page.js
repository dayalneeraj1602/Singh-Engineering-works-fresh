export const metadata = {
  title: 'Services - Singh Engineering Works',
  description: 'Explore our comprehensive range of engineering and manufacturing services',
}

export default function Services() {
  const servicesList = [
    {
      title: 'Metal Fabrication',
      description: 'Expert metal fabrication services including cutting, bending, welding, and assembly. We work with various metals to create custom components and structures.',
      features: ['Laser Cutting', 'CNC Machining', 'Welding', 'Assembly']
    },
    {
      title: 'Industrial Manufacturing',
      description: 'Large-scale manufacturing solutions for industrial equipment and components with stringent quality control.',
      features: ['Mass Production', 'Quality Control', 'Testing', 'Packaging']
    },
    {
      title: 'Equipment Repair & Maintenance',
      description: 'Professional repair and preventive maintenance services to keep your equipment running at peak performance.',
      features: ['Diagnostics', 'Repairs', 'Maintenance', '24/7 Support']
    },
    {
      title: 'Custom Engineering Solutions',
      description: 'Tailored engineering services designed to meet your specific industrial requirements and challenges.',
      features: ['Design', 'Prototyping', 'Implementation', 'Support']
    }
  ]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive Engineering Solutions</p>
        </div>
      </section>

      <section style={{padding: '80px 0'}}>
        <div className="container">
          <div style={{display: 'grid', gap: '40px'}}>
            {servicesList.map((service, index) => (
              <div key={index} style={{
                background: 'var(--white)',
                padding: '40px',
                borderRadius: '10px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}>
                <h2 style={{color: 'var(--primary-color)', marginBottom: '15px'}}>{service.title}</h2>
                <p style={{color: 'var(--text-light)', marginBottom: '20px', lineHeight: '1.8'}}>{service.description}</p>
                <div>
                  <strong style={{color: 'var(--text-dark)'}}>Features:</strong>
                  <ul style={{marginTop: '10px', paddingLeft: '20px'}}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{color: 'var(--text-light)', marginBottom: '5px'}}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
