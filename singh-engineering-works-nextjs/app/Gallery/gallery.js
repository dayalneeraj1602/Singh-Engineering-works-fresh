export const metadata = {
  title: 'Gallery - Singh Engineering Works',
  description: 'View our completed projects and work',
}

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: "https://keramo.in/upload/p/SHUTTLE%20KILN.jpg",
      title: "Shuttle Kiln Furnace",
      category: "Furnace Manufacturing"
    },
    {
      id: 2,
      src: "https://5.imimg.com/data5/PR/IJ/OS/SELLER-36709685/roller-hearth-furnace-500x500.jpg",
      title: "Roller Hearth Furnace",
      category: "Industrial Equipment"
    },
    {
      id: 3,
      src: "https://5.imimg.com/data5/OF/QX/RT/SELLER-36709685/pit-pot-furnace-500x500.jpg",
      title: "Pit Pot Furnace Installation",
      category: "Installation Services"
    },
    {
      id: 4,
      src: "https://5.imimg.com/data5/SELLER/Default/2023/6/312078/rotary-hearth-furnace-500x500.jpeg",
      title: "Rotary Hearth Furnace",
      category: "Custom Manufacturing"
    },
    {
      id: 5,
      src: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      title: "Manufacturing Facility",
      category: "Our Workshop"
    },
    {
      id: 6,
      src: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      title: "Quality Control",
      category: "Production Process"
    },
    {
      id: 7,
      src: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      title: "Engineering Team",
      category: "Our Team"
    },
    {
      id: 8,
      src: "https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993__480.jpg",
      title: "Completed Project",
      category: "Client Delivery"
    }
  ];

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
          <div style={{marginBottom: '40px', textAlign: 'center'}}>
            <p style={{fontSize: '1.1rem', color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto'}}>
              Explore our portfolio of completed projects, furnace installations, and manufacturing excellence.
              Each project represents our commitment to quality and innovation.
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
            {galleryImages.map((image) => (
              <div key={image.id} style={{
                background: 'var(--bg-light)',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  height: '200px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img
                    src={image.src}
                    alt={image.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    padding: '20px 15px 15px',
                    color: 'white'
                  }}>
                    <h4 style={{margin: '0', fontSize: '1.1rem'}}>{image.title}</h4>
                    <p style={{margin: '5px 0 0', fontSize: '0.9rem', opacity: '0.9'}}>{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}