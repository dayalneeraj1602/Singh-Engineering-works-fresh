'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us</p>
        </div>
      </section>

      <section style={{padding: '80px 0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px'}}>
            <div>
              <h2 style={{color: 'var(--primary-color)', marginBottom: '20px'}}>Get In Touch</h2>
              <div style={{marginBottom: '30px'}}>
                <h3 style={{marginBottom: '10px'}}>📍 Address</h3>
                <p style={{color: 'var(--text-light)'}}>Your Address Here<br/>City, State - PIN</p>
              </div>
              <div style={{marginBottom: '30px'}}>
                <h3 style={{marginBottom: '10px'}}>📞 Phone</h3>
                <p style={{color: 'var(--text-light)'}}>+91 XXX XXX XXXX</p>
              </div>
              <div style={{marginBottom: '30px'}}>
                <h3 style={{marginBottom: '10px'}}>📧 Email</h3>
                <p style={{color: 'var(--text-light)'}}>info@singhengineeringworks.com</p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} style={{background: 'var(--bg-light)', padding: '30px', borderRadius: '10px'}}>
                <div style={{marginBottom: '20px'}}>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    style={{width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '5px'}}
                  />
                </div>

                <div style={{marginBottom: '20px'}}>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    style={{width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '5px'}}
                  />
                </div>

                <div style={{marginBottom: '20px'}}>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    style={{width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '5px'}}
                  />
                </div>

                <div style={{marginBottom: '20px'}}>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '600'}}>Message *</label>
                  <textarea
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    style={{width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '5px', resize: 'vertical'}}
                  ></textarea>
                </div>

                <button type="submit" style={{
                  width: '100%',
                  padding: '15px',
                  background: 'var(--secondary-color)',
                  color: 'var(--white)',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}