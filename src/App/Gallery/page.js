export const metadata = {
  title: 'Gallery - Singh Engineering Works',
  description: 'View our completed projects and work',
}

export default function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>Our Work & Projects</p>
        </div>
      </section>

      <section style={{padding: '80px 0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
            {[1,2,3,4,5,6].map((item) => (
              <div key={item} style={{
                background: 'var(--bg-light)',
                aspectRatio: '16/9',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem'
              }}>
                🖼️
              </div>
            ))}
          </div>
          <p style={{textAlign: 'center', marginTop: '40px', color: 'var(--text-light)'}}>
            Add your project images to the public/images folder
          </p>
        </div>
      </section>
    </>
  )
}