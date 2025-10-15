export default function MedfinderPromo() {
  return (
    <section style={{ background: '#FF6B35', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }}>
          {/* For larger screens */}
          <div style={{ display: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          </div>
          
          <div style={{ color: 'white', textAlign: 'center' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px' }}>
              Save time and money with <span style={{ color: '#F8F9FA' }}>Medfinder</span>
            </h2>
            <p style={{ fontSize: '20px', marginBottom: '32px', opacity: 0.9 }}>
              Discover a simpler way to access the medicines you need. Medfinder connects you to nearby pharmacies.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
              <a 
                href="https://medfinder.com.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  backgroundColor: 'white',
                  color: '#E10075',
                  padding: '16px 32px',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Visit Medfinder.com.ng
              </a>
              <a 
                href="https://medfinder.com.ng/download" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  border: '2px solid white',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Download Medfinder App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
