export const metadata = {
  title: 'Products - Singh Engineering Works',
  description: 'Browse our range of quality industrial products',
}

export default function Products() {
  const products = [
    { name: 'Industrial Gates', category: 'Fabrication' },
    { name: 'Storage Tanks', category: 'Manufacturing' },
    { name: 'Conveyor Systems', category: 'Equipment' },
    { name: 'Metal Structures', category: 'Fabrication' },
    { name: 'Safety Equipment', category: 'Safety' },
    { name: 'Custom Parts', category: 'Manufacturing' }
  ]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>Quality Industrial Products</p>
        </div>
      </section>

      <section style={{padding: '80px 0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
            {products.map((product, index) => (
              <div key={index} style={{
                background: 'var(--white)',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                textAlign: 'center',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{fontSize: '4rem', marginBottom: '20px'}}>📦</div>
                <h3 style={{color: 'var(--primary-color)', marginBottom: '10px'}}>{product.name}</h3>
                <p style={{color: 'var(--text-light)', fontSize: '0.9rem'}}>{product.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
