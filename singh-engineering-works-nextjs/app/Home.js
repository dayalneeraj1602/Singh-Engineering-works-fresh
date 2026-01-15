import Hero from '@/Component/Hero'
import ServiceCard from '@/Component/ServiceCard'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: 'Metal Fabrication',
      description: 'Custom metal fabrication services with precision and quality',
      icon: '🔧'
    },
    {
      title: 'Industrial Manufacturing',
      description: 'Large-scale manufacturing solutions for industrial needs',
      icon: '🏭'
    },
    {
      title: 'Equipment Repair',
      description: 'Professional repair and maintenance services',
      icon: '⚙️'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored engineering solutions for your specific requirements',
      icon: '🛠️'
    }
  ]

  return (
    <>
      <Hero />
      
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Providing comprehensive engineering solutions for all your industrial needs
          </p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="cta-button-container">
            <Link href="/services" className="cta-button">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <h2>About Singh Engineering Works</h2>
            <p>
              With decades of experience in industrial engineering and manufacturing,
              we deliver quality solutions that exceed expectations. Our commitment
              to excellence and customer satisfaction makes us the preferred choice
              for businesses across industries.
            </p>
            <Link href="/about" className="learn-more-link">
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}