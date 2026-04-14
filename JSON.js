// TAZARA MEMORIAL PARK - COMPLETE NEXT.JS APPLICATION
// Single consolidated file with all pages, components, and styles
// Install: npm install next react react-dom
// Run: npm run dev

// ============================================
// PACKAGE.JSON (Save as package.json)
// ============================================
/*
{
  "name": "tazara-memorial-park",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^13.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "eslint": "latest",
    "eslint-config-next": "latest"
  }
}
*/

// ============================================
// NEXT.CONFIG.JS
// ============================================
/*
module.exports = {
  compress: true,
  poweredByHeader: false,
};
*/

// ============================================
// GLOBAL STYLES
// ============================================
const globalStyles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-green: #2d5016;
  --accent-green: #6b8e23;
  --earth-brown: #8b7355;
  --light-brown: #d2b48c;
  --soft-grey: #a9a9a9;
  --off-white: #f5f5f0;
  --dark-text: #2c3e50;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--dark-text);
  background-color: var(--off-white);
}

a {
  color: var(--primary-green);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--accent-green);
}

h1, h2, h3, h4, h5, h6 {
  color: var(--primary-green);
  margin-bottom: 1rem;
  font-weight: 600;
}

h1 {
  font-size: 3rem;
  line-height: 1.2;
}

h2 {
  font-size: 2.2rem;
  margin-top: 2rem;
  border-bottom: 3px solid var(--accent-green);
  padding-bottom: 0.5rem;
}

h3 {
  font-size: 1.5rem;
}

p {
  margin-bottom: 1rem;
  font-size: 1.05rem;
  line-height: 1.8;
}

button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: var(--primary-green);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--accent-green);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

ul, ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  h3 {
    font-size: 1.2rem;
  }
}
`;

// ============================================
// NAVIGATION COMPONENT
// ============================================
import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navStyle = {
    nav: {
      backgroundColor: '#2d5016',
      color: 'white',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      flex: 1,
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    menu: {
      display: isOpen ? 'flex' : 'flex',
      listStyle: 'none',
      gap: '2rem',
      '@media (maxWidth: 768px)': {
        display: isOpen ? 'flex' : 'none',
      },
    },
    menuItem: {
      color: 'white',
      fontWeight: 500,
      cursor: 'pointer',
    },
    hamburger: {
      display: 'none',
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      fontSize: '1.5rem',
      cursor: 'pointer',
      '@media (maxWidth: 768px)': {
        display: 'block',
      },
    },
  };

  return (
    <nav style={navStyle.nav}>
      <div style={navStyle.container}>
        <Link href="/">
          <div style={navStyle.logo}>🌍 Tazara Memorial Park</div>
        </Link>

        <button 
          style={{...navStyle.hamburger, display: window.innerWidth <= 768 ? 'block' : 'none'}}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul style={{...navStyle.menu, flexDirection: window.innerWidth <= 768 ? 'column' : 'row'}}>
          <li style={navStyle.menuItem}><Link href="/">Home</Link></li>
          <li style={navStyle.menuItem}><Link href="/about">About</Link></li>
          <li style={navStyle.menuItem}><Link href="/gallery">Gallery</Link></li>
          <li style={navStyle.menuItem}><Link href="/visitor-info">Visit</Link></li>
          <li style={navStyle.menuItem}><Link href="/getting-there">Directions</Link></li>
          <li style={navStyle.menuItem}><Link href="/events">Events</Link></li>
        </ul>
      </div>
    </nav>
  );
};

// ============================================
// FOOTER COMPONENT
// ============================================
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    footer: {
      backgroundColor: '#2d5016',
      color: 'white',
      padding: '3rem 1rem 1rem',
      marginTop: '3rem',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem',
    },
    section: {
      color: 'white',
    },
    sectionH3: {
      color: '#d2b48c',
      marginBottom: '1rem',
      border: 'none',
    },
    bottom: {
      textAlign: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      paddingTop: '1rem',
      fontSize: '0.9rem',
    },
  };

  return (
    <footer style={footerStyle.footer}>
      <div style={footerStyle.container}>
        <div style={footerStyle.section}>
          <h3 style={footerStyle.sectionH3}>Contact</h3>
          <p>📍 Great East Road, Lusaka, Zambia<br />📞 +260 97 0688888<br />✉️ info@tazaramamorial.zm</p>
        </div>

        <div style={footerStyle.section}>
          <h3 style={footerStyle.sectionH3}>Quick Links</h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/events">Events</Link></li>
          </ul>
        </div>

        <div style={footerStyle.section}>
          <h3 style={footerStyle.sectionH3}>Hours</h3>
          <p>Monday - Sunday<br />8:00 AM - 5:00 PM<br /><em>Closed on public holidays</em></p>
        </div>

        <div style={footerStyle.section}>
          <h3 style={footerStyle.sectionH3}>Support</h3>
          <p>Help preserve this memorial.<br /><button>Make a Donation</button></p>
        </div>
      </div>

      <div style={footerStyle.bottom}>
        <p>&copy; {currentYear} Tazara Memorial Park. All rights reserved.</p>
        <p>Honoring the heroes of the TAZARA railway – a place of remembrance, history, and unity.</p>
      </div>
    </footer>
  );
};

// ============================================
// HOME PAGE
// ============================================
const HomePage = () => {
  const heroStyle = {
    hero: {
      position: 'relative',
      height: '600px',
      background: 'linear-gradient(135deg, #2d5016 0%, #6b8e23 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      overflow: 'hidden',
      textAlign: 'center',
    },
    heroContent: {
      maxWidth: '800px',
      padding: '2rem',
      zIndex: 2,
    },
    tagline: {
      color: '#d2b48c',
      fontSize: '1.3rem',
      marginBottom: '2rem',
      fontWeight: 300,
    },
    ctaButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    primaryBtn: {
      backgroundColor: 'white',
      color: '#2d5016',
      fontWeight: 600,
      padding: '1rem 2rem',
      fontSize: '1rem',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '4px',
    },
    secondaryBtn: {
      backgroundColor: 'transparent',
      border: '2px solid white',
      color: 'white',
      fontWeight: 600,
      padding: '0.8rem 1.8rem',
      cursor: 'pointer',
      borderRadius: '4px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    quickInfo: {
      backgroundColor: '#f5f5f0',
      padding: '2rem 1rem',
      borderBottom: '4px solid #6b8e23',
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    infoCard: {
      background: 'white',
      padding: '2rem',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    welcome: {
      padding: '4rem 1rem',
      backgroundColor: 'white',
    },
    highlights: {
      padding: '4rem 1rem',
      backgroundColor: '#f5f5f0',
    },
    highlightGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    highlightCard: {
      background: 'white',
      padding: '2rem',
      borderRadius: '8px',
      textAlign: 'center',
      cursor: 'pointer',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
    },
    icon: {
      fontSize: '3rem',
      marginBottom: '1rem',
    },
    cta: {
      padding: '4rem 1rem',
      background: 'linear-gradient(135deg, #2d5016 0%, #6b8e23 100%)',
      color: 'white',
      textAlign: 'center',
    },
  };

  return (
    <>
      <Head>
        <title>Tazara Memorial Park - Honoring Heroes</title>
        <meta name="description" content="Tazara Memorial Park in Lusaka, Zambia - honoring the heroes of the TAZARA railway." />
        <meta name="keywords" content="Tazara Memorial Park, TAZARA railway, Lusaka memorial, Zambia heritage" />
      </Head>

      <div style={heroStyle.hero}>
        <div style={heroStyle.heroContent}>
          <h1>Tazara Memorial Park</h1>
          <p style={heroStyle.tagline}>Honoring the heroes of the TAZARA railway – a place of remembrance, history, and unity.</p>
          <div style={heroStyle.ctaButtons}>
            <Link href="/gallery">
              <button style={heroStyle.primaryBtn}>Explore the Park</button>
            </Link>
            <Link href="/visitor-info">
              <button style={heroStyle.secondaryBtn}>Plan Your Visit</button>
            </Link>
          </div>
        </div>
      </div>

      <section style={heroStyle.quickInfo}>
        <div style={{...heroStyle.container, ...heroStyle.infoGrid}}>
          <div style={heroStyle.infoCard}>
            <h3>📍 Location</h3>
            <p>Great East Road<br />Lusaka, Zambia</p>
          </div>
          <div style={heroStyle.infoCard}>
            <h3>🕐 Hours</h3>
            <p>Monday - Sunday<br />8:00 AM - 5:00 PM</p>
          </div>
          <div style={heroStyle.infoCard}>
            <h3>📞 Contact</h3>
            <p>+260 97 0688888<br />Always open to visitors</p>
          </div>
        </div>
      </section>

      <section style={heroStyle.welcome}>
        <div style={heroStyle.container}>
          <h2>Welcome to Tazara Memorial Park</h2>
          <p>The Tazara Memorial Park stands as a solemn tribute to the thousands who sacrificed their lives during the construction of the TAZARA railway. This sacred space brings together the peoples of Zambia and Tanzania to remember, honor, and celebrate the spirit of Pan-African solidarity and progress.</p>
          <p>Whether you're a historian, a family member of those who served, or simply seeking to understand this pivotal moment in African history, we welcome you to walk these grounds and connect with the legacy of unity and courage.</p>
        </div>
      </section>

      <section style={heroStyle.highlights}>
        <div style={heroStyle.container}>
          <h2>Experience the Memorial</h2>
          <div style={heroStyle.highlightGrid}>
            <Link href="/about">
              <div style={heroStyle.highlightCard}>
                <div style={heroStyle.icon}>📖</div>
                <h3>Learn the History</h3>
                <p>Discover the story of the TAZARA railway and the heroes it honors</p>
              </div>
            </Link>
            <Link href="/gallery">
              <div style={heroStyle.highlightCard}>
                <div style={heroStyle.icon}>📸</div>
                <h3>Gallery</h3>
                <p>View authentic photos of monuments, graves, and the park grounds</p>
              </div>
            </Link>
            <Link href="/events">
              <div style={heroStyle.highlightCard}>
                <div style={heroStyle.icon}>🎉</div>
                <h3>Events & Ceremonies</h3>
                <p>Join annual commemorations and remembrance services</p>
              </div>
            </Link>
            <Link href="/getting-there">
              <div style={heroStyle.highlightCard}>
                <div style={heroStyle.icon}>🚗</div>
                <h3>Visit Us</h3>
                <p>Get directions and plan your visit to the memorial park</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section style={heroStyle.cta}>
        <div style={{...heroStyle.container, maxWidth: '800px'}}>
          <h2 style={{ color: 'white', border: 'none' }}>Support the Memorial</h2>
          <p>Help us preserve this important piece of history for future generations.</p>
          <button style={{ backgroundColor: 'white', color: '#2d5016', fontWeight: 600 }}>Make a Donation</button>
        </div>
      </section>
    </>
  );
};

// ============================================
// ABOUT PAGE
// ============================================
const AboutPage = () => {
  const pageStyle = {
    pageHero: {
      background: 'linear-gradient(135deg, #2d5016 0%, #6b8e23 100%)',
      color: 'white',
      padding: '3rem 1rem',
      textAlign: 'center',
      marginBottom: '2rem',
    },
    pageHeroH1: {
      color: 'white',
      marginBottom: '0.5rem',
      fontSize: '2.5rem',
      border: 'none',
    },
    pageHeroP: {
      color: '#d2b48c',
      fontSize: '1.1rem',
      margin: 0,
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    contentSection: {
      background: 'white',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '2rem',
    },
    infoBox: {
      background: 'white',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    callout: {
      backgroundColor: '#f5f5f0',
      borderLeft: '4px solid #6b8e23',
      padding: '1.5rem',
      margin: '2rem 0',
      borderRadius: '4px',
      fontStyle: 'italic',
      fontSize: '1.1rem',
    },
    list: {
      marginLeft: '1.5rem',
      marginBottom: '1rem',
    },
    listItem: {
      marginBottom: '0.5rem',
    },
  };

  return (
    <>
      <Head>
        <title>About - Tazara Memorial Park</title>
        <meta name="description" content="Learn about the TAZARA railway history and the heroes honored" />
      </Head>

      <div style={pageStyle.pageHero}>
        <h1 style={pageStyle.pageHeroH1}>About the Memorial</h1>
        <p style={pageStyle.pageHeroP}>Understanding the Legacy of TAZARA</p>
      </div>

      <div style={pageStyle.container}>
        <section style={pageStyle.contentSection}>
          <h2>The TAZARA Railway: A Story of Courage and Unity</h2>

          <h3>The Vision (1960s-1970s)</h3>
          <p>In the aftermath of independence, Zambia and Tanzania envisioned a transformative project that would change the fate of East and Central Africa. The TAZARA Railway symbolized Pan-African solidarity, economic independence, and the determination of two young nations to chart their own course.</p>

          <h3>The Construction Challenge</h3>
          <p>Spanning 1,860 kilometers from Dar es Salaam in Tanzania to New Lusaka in Zambia, the TAZARA Railway was an engineering marvel. Yet it came at an unprecedented human cost.</p>
          <ul style={pageStyle.list}>
            <li style={pageStyle.listItem}>Dense forests and difficult geography</li>
            <li style={pageStyle.listItem}>Extreme climates and harsh weather</li>
            <li style={pageStyle.listItem}>Limited infrastructure and resources</li>
            <li style={pageStyle.listItem}>Remote locations far from medical facilities</li>
            <li style={pageStyle.listItem}>Disease, accidents, and labor disputes</li>
          </ul>

          <h3>The Heroes</h3>
          <p>Thousands of workers – engineers from Yugoslavia, China, and other nations; laborers from Zambia, Tanzania, and neighboring countries – poured their sweat, blood, and sometimes their lives into this project.</p>

          <h3>The Legacy</h3>
          <p>When the TAZARA Railway officially opened in 1975, it became a symbol of African ingenuity and cooperation. It provided Zambia with a critical transport route independent of apartheid South Africa.</p>

          <h3>Why We Remember</h3>
          <p>The Tazara Memorial Park exists to ensure that the stories of those who built this railway are never forgotten:</p>
          <ul style={pageStyle.list}>
            <li style={pageStyle.listItem}>Families to honor their loved ones</li>
            <li style={pageStyle.listItem}>Historians to study Pan-African achievement</li>
            <li style={pageStyle.listItem}>Young people to understand the cost of progress</li>
            <li style={pageStyle.listItem}>Nations to celebrate cooperation and solidarity</li>
            <li style={pageStyle.listItem}>Humanity to reflect on sacrifice and courage</li>
          </ul>

          <h2>The Park Today</h2>
          <p>The Tazara Memorial Park is maintained as a sacred space of remembrance featuring memorial walls, graves, information centers, and peaceful grounds for reflection.</p>

          <p style={pageStyle.callout}>
            <strong>"Every rail, every stone, every beam of this railway was built on the sacrifice of those who believed in unity, progress, and a better Africa."</strong>
          </p>
        </section>

        <section style={pageStyle.infoBox}>
          <h3>Quick Facts</h3>
          <ul style={pageStyle.list}>
            <li style={pageStyle.listItem}><strong>Length:</strong> 1,860 kilometers</li>
            <li style={pageStyle.listItem}><strong>Start Point:</strong> Dar es Salaam, Tanzania</li>
            <li style={pageStyle.listItem}><strong>End Point:</strong> New Lusaka, Zambia</li>
            <li style={pageStyle.listItem}><strong>Construction Period:</strong> 1970-1975</li>
            <li style={pageStyle.listItem}><strong>Opening Date:</strong> September 1975</li>
            <li style={pageStyle.listItem}><strong>Workers Involved:</strong> Over 50,000</li>
            <li style={pageStyle.listItem}><strong>Lives Lost:</strong> Estimated hundreds during construction</li>
            <li style={pageStyle.listItem}><strong>Cost:</strong> Over $5 billion USD (in modern equivalent)</li>
          </ul>
        </section>
      </div>
    </>
  );
};

// ============================================
// GALLERY PAGE
// ============================================
const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    { id: 1, category: 'monuments', title: 'Main Memorial Monument', description: 'The central monument honoring all TAZARA railway workers' },
    { id: 2, category: 'monuments', title: 'Commemorative Plaque', description: 'Close-up of historical information plaque' },
    { id: 3, category: 'graves', title: 'Remembrance Wall', description: 'Wall with names of those who sacrificed their lives' },
    { id: 4, category: 'graves', title: 'Grave Site', description: 'Respectfully maintained burial grounds' },
    { id: 5, category: 'nature', title: 'Memorial Garden', description: 'Serene pathways through the memorial park' },
    { id: 6, category: 'nature', title: 'Sacred Trees', description: 'Ancient trees providing shelter and reflection' },
    { id: 7, category: 'visitors', title: 'Commemoration Ceremony', description: 'Annual remembrance service at the memorial' },
    { id: 8, category: 'entrance', title: 'Park Entrance', description: 'Welcoming entrance to the memorial park' },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'monuments', name: 'Monuments' },
    { id: 'graves', name: 'Graves' },
    { id: 'nature', name: 'Nature' },
    { id: 'visitors', name: 'Visitors' },
    { id: 'entrance', name: 'Entrance' },
  ];

  const filtered = selectedCategory === 'all' ? galleryItems : galleryItems.filter(item => item.category === selectedCategory);

  const style = {
    pageHero: { background: 'linear-gradient(135deg, #2d5016 0%, #6b8e23 100%)', color: 'white', padding: '3rem 1rem', textAlign: 'center' },
    container: { maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' },
    filterSection: { textAlign: 'center', marginBottom: '3rem' },
    filterButtons: { display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' },
    filterBtn: { backgroundColor: 'white', color: '#2d5016', border: '2px solid #6b8e23', padding: '0.7rem 1.5rem', borderRadius: '25px', cursor: 'pointer', fontWeight: 500 },
    filterBtnActive: { backgroundColor: '#2d5016', color: 'white', borderColor: '#2d5016' },
    galleryGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' },
    galleryItem: { background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' },
    imageWrapper: { width: '100%', height: '250px', backgroundColor: '#a9a9a9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' },
    imageCaption: { padding: '1.5rem' },
  };

  return (
    <>
      <Head>
        <title>Gallery - Tazara Memorial Park</title>
        <meta name="description" content="Photo gallery of Tazara Memorial Park" />
      </Head>

      <div style={style.pageHero}>
        <h1 style={{ color: 'white', border: 'none' }}>Photo Gallery</h1>
        <p style={{ color: '#d2b48c', margin: 0 }}>Capturing the Spirit of Remembrance</p>
      </div>

      <div style={style.container}>
        <section style={style.filterSection}>
          <h2>Filter by Category</h2>
          <div style={style.filterButtons}>
            {categories.map(cat => (
              <button
                key={cat.id}
                style={{
                  ...style.filterBtn,
                  ...(selectedCategory === cat.id ? style.filterBtnActive : {})
                }}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        <section style={style.galleryGrid}>
          {filtered.map(item => (
            <div key={item.id} style={style.galleryItem}>
              <div style={style.imageWrapper}>
                📸 {item.title}
              </div>
              <div style={style.imageCaption}>
                <h3>{item.title}</h3>
                <p style={{ color: '#a9a9a9', fontSize: '0.95rem', margin: 0 }}>{item.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section style={{ background: '#f5f5f0', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
          <h2>Help Us Preserve History</h2>
          <p>Do you have authentic photographs from Tazara Memorial Park? We welcome high-resolution images that capture the spirit and significance of this sacred space.</p>
          <p>📧 Email: info@tazaramamorial.zm | 📞 Phone: +260 97 0688888</p>
        </section>
      </div>
    </>
  );
};

// ============================================
// VISITOR INFO PAGE
// ============================================
const VisitorInfoPage = () => {
  const style = {
    pageHero: { background: 'linear-gradient(135deg, #2d5016 0%, #6b8e23 100%)', color: 'white', padding: '3rem 1rem', textAlign: 'center', marginBottom: '2rem' },
    container: { maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' },
    infoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' },
    infoBox: { background: 'linear-gradient(135deg, #2d5016, #6b8e23)', color: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' },
    contentSection: { background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', marginBottom: '2rem' },
  };

  return (
    <>
      <Head>
        <title>Visitor Information - Tazara Memorial Park</title>
        <meta name="description" content="Hours, location, amenities, and visitor guidelines" />
      </Head>

      <div style={style.pageHero}>
        <h1 style={{ color: 'white', border: 'none' }}>Visit Information</h1>
        <p style={{ color: '#d2b48c', margin: 0 }}>Plan Your Visit to the Memorial</p>
      </div>

      <div style={style.container}>
        <section style={style.infoGrid}>
          <div style={style.infoBox}>
            <h3 style={{ color: '#d2b48c', border: 'none', marginTop: 0 }}>📍 Location</h3>
            <p>Great East Road<br />Lusaka, Zambia</p>
            <p style={{ fontSize: '0.9rem' }}>Approximately 25km from Lusaka city center</p>
          </div>

          <div style={style.infoBox}>
            <h3 style={{ color: '#d2b48c', border: 'none', marginTop: 0 }}>🕐 Opening Hours</h3>
            <p>Monday - Sunday<br /><strong>8:00 AM - 5:00 PM</strong></p>
            <p style={{ fontSize: '0.9rem' }}>Last entry at 4:30 PM</p>
          </div>

          <div style={style.infoBox}>
            <h3 style={{ color: '#d2b48c', border: 'none', marginTop: 0 }}>📞 Contact</h3>
            <p>Phone: +260 97 0688888<br />Email: info@tazaramamorial.zm</p>
            <p style={{ fontSize: '0.9rem' }}>Available during business hours</p>
          </div>

          <div style={style.infoBox}>
            <h3 style={{ color: '#d2b48c', border: 'none', marginTop: 0 }}>💵 Entry Fee</h3>
            <p>Domestic Visitors: K50<br />International Visitors: USD 10</p>
            <p style={{ fontSize: '0.9rem' }}>Children under 12: Free</p>
          </div>
        </section>

        <section style={style.contentSection}>
          <h2>Dress Code & Respectful Conduct</h2>
          <p>As a sacred memorial site, we ask all visitors to dress respectfully and conduct themselves with dignity.</p>
          <ul>
            <li><strong>Dress Code:</strong> Modest clothing is recommended</li>
            <li><strong>Behavior:</strong> Please maintain quiet voices and respectful demeanor</li>
            <li><strong>Photography:</strong> Personal photography is permitted</li>
            <li><strong>Flowers & Tributes:</strong> Visitors are welcome to leave flowers at designated areas</li>
            <li><strong>Eating & Drinking:</strong> Food and drinks are not permitted within the memorial grounds</li>
            <li><strong>Sacred Objects:</strong> Please do not touch or disturb monuments</li>
          </ul>

          <h2>Best Times to Visit</h2>
          <ul>
            <li><strong>Mornings (8:00-11:00 AM):</strong> Peaceful, fewer crowds</li>
            <li><strong>Late Afternoon (3:00-5:00 PM):</strong> Serene atmosphere</li>
            <li><strong>Weekdays:</strong> Quieter than weekends</li>
            <li><strong>Dry Season (May-November):</strong> Most comfortable weather</li>
          </ul>

          <h2>Amenities & Facilities</h2>
          <ul>
            <li>Information Center with historical displays</li>
            <li>Restroom facilities</li>
            <li>Seating areas for rest and reflection</li>
            <li>Shaded pathways throughout the grounds</li>
            <li>Parking area for vehicles</li>
            <li>First aid station</li>
            <li>Water fountains</li>
          </ul>

          <h2>Guided Tours</h2>
          <p>Guided tours are available for groups of 5 or more. Our knowledgeable guides provide in-depth historical context. To book a tour, please contact us at least 48 hours in advance.</p>

          <div style={{ backgroundColor: '#f5f5f0', borderLeft: '4px solid #6b8e23', padding: '1.5rem', margin: '2rem 0', borderRadius: '4px', fontStyle: 'italic' }}>
            <strong>Thank you for honoring this sacred space with your respectful visit.</strong>
          </div>
        </section>
      </div>
    </>
  );
};

// ============================================
// GETTING THERE PAGE
// ============================================
const GettingTherePage = () => {
  const style = {
    pageHero: { background: 'linear-gradient(135deg, #2d5016 0%, #6b8e23 100%)', color: 'white', padding: '3rem 1rem', textAlign: 'center', marginBottom: '2rem' },
    container: { maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' },
    contentSection: { background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', marginBottom: '2rem' },
  };

  return (
    <>
      <Head>
        <title>Getting There - Tazara Memorial Park</title>
        <meta name="description" content="Directions and transport options to Tazara Memorial Park" />
      </Head>

      <div style={style.pageHero}>
        <h1 style={{ color: 'white', border: 'none' }}>Getting There</h1>
        <p style={{ color: '#d2b48c', margin: 0 }}>Directions to Tazara Memorial Park</p>
      </div>

      <div style={style.container}>
        <section style={style.contentSection}>
          <h2>Location</h2>
          <p>
            <strong>Tazara Memorial Park</strong><br />
            Great East Road<br />
            Lusaka, Zambia<br />
            Approximately 25km from Lusaka City Center
          </p>

          <h2>By Car</h2>
          <h3>From Lusaka City Center</h3>
          <ol>
            <li>Head east on Cairo Road towards Great East Road</li>
            <li>Continue on Great East Road for approximately 20km</li>
            <li>Look for Tazara Memorial Park signage on your right</li>
            <li>Turn into the marked entrance</li>
            <li>Follow the access road to the parking area</li>
          </ol>
          <p><strong>Estimated driving time: 30-40 minutes</strong></p>

          <h3>From Kenneth Kaunda International Airport</h3>
          <ol>
            <li>Exit the airport and head towards Lusaka city center</li>
            <li>Follow signs for Great East Road</li>
            <li>Continue east on Great East Road</li>
            <li>The memorial is approximately 25km from the airport</li>
          </ol>
          <p><strong>Estimated driving time: 45-60 minutes</strong></p>

          <div style={{ backgroundColor: '#f5f5f0', borderLeft: '4px solid #6b8e23', padding: '1.5rem', margin: '2rem 0', borderRadius: '4px' }}>
            <strong>Parking:</strong> Free parking is available at the memorial entrance. The parking area is secure and monitored.
          </div>

          <h2>By Public Transport</h2>
          <p>Public minibuses (kombis) operate along Great East Road from Lusaka City Center. Typical fare: K5-K10. Buses and taxis are also available.</p>

          <h2>Accessibility</h2>
          <p>The entrance road is paved and accessible by all vehicle types. For special accessibility needs, please contact us in advance.</p>

          <h2>Contact for Directions Assistance</h2>
          <p>
            📞 <strong>+260 97 0688888</strong><br />
            📧 <strong>info@tazaramamorial.zm</strong><br />
            🕐 <strong>Monday - Sunday, 8:00 AM - 5:00 PM</strong>
          </p>
        </section>
      </div>
    </>
  );
};

// ============================================
// EVENTS PAGE
// ============================================
const EventsPage = () => {
  const upcomingEvents = [
    { id: 1, title: 'Heroes\' Day Commemoration', date: 'May 25, 2026', time: '9:00 AM - 12:00 PM', description: 'National Heroes\' Day celebration honoring all fallen TAZARA railway workers', location: 'Main Memorial Grounds' },
    { id: 2, title: 'TAZARA Anniversary Service', date: 'September 14, 2026', time: '10:00 AM - 1:00 PM', description: 'Commemorating the anniversary of the TAZARA railway opening in 1975', location: 'Memorial Hall' },
    { id: 3, title: 'Remembrance Sunday', date: 'Every third Sunday of the month', time: '4:00 PM - 5:30 PM', description: 'Monthly reflection and prayer service for all visitors', location: 'Quiet Reflection Area' },
  ];

  const pastEvents = [
    { id: 1, title: 'Easter Sunrise Service', date: 'April 9, 2026', description: 'Annual Easter sunrise commemoration at the memorial' },
    { id: 2, title: 'Independence Day Celebration', date: 'October 24, 2025', description: 'Zambian independence day celebration honoring national heroes' },
  ];

  const style = {
    pageHero: { background: 'linear-gradient(135deg, #2d5016 0%, #6b8e23 100%)', color: 'white', padding: '3rem 1rem', textAlign: 'center', marginBottom: '2rem' },
    container: { maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' },
    contentSection: { background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', marginBottom: '2rem' },
    eventCard: { display: 'flex', gap: '2rem', background: 'white', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #6b8e23', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', marginBottom: '1rem' },
  };

  return (
    <>
      <Head>
        <title>Events - Tazara Memorial Park</title>
        <meta name="description" content="Commemorative events and ceremonies at Tazara Memorial Park" />
      </Head>

      <div style={style.pageHero}>
        <h1 style={{ color: 'white', border: 'none' }}>Events & Ceremonies</h1>
        <p style={{ color: '#d2b48c', margin: 0 }}>Commemorating History and Honoring Heroes</p>
      </div>

      <div style={style.container}>
        <section style={style.contentSection}>
          <h2>Upcoming Events</h2>
          <p>Join us for meaningful commemorations that honor the lives and sacrifices of TAZARA railway heroes.</p>

          {upcomingEvents.map(event => (
            <div key={event.id} style={style.eventCard}>
              <div style={{ minWidth: '150px' }}>
                <div style={{ fontWeight: 600, color: '#2d5016', fontSize: '1.1rem' }}>{event.date}</div>
                <div style={{ color: '#a9a9a9', fontSize: '0.9rem', marginTop: '0.5rem' }}>{event.time}</div>
              </div>
              <div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p style={{ color: '#6b8e23', fontWeight: 500 }}>📍 {event.location}</p>
              </div>
            </div>
          ))}

          <h2>Annual Commemorations</h2>
          <h3>Heroes' Day (May 25)</h3>
          <p>A national holiday in Zambia honoring freedom fighters and national heroes. Our special ceremony includes wreath-laying, speaker reflections, traditional music, and community gathering.</p>

          <h3>TAZARA Anniversary (September 14)</h3>
          <p>Commemorating the official opening of the TAZARA Railway in 1975. This event celebrates Pan-African cooperation, remembrance of workers, and the railway's ongoing impact.</p>

          <h2>Past Events</h2>
          {pastEvents.map(event => (
            <div key={event.id} style={{ background: '#f5f5f0', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #8b7355', marginBottom: '1rem' }}>
              <h4 style={{ marginTop: 0 }}>{event.title}</h4>
              <p style={{ fontSize: '0.9rem', color: '#a9a9a9', marginBottom: '0.5rem' }}>{event.date}</p>
              <p style={{ marginBottom: 0 }}>{event.description}</p>
            </div>
          ))}

          <h2>How to Register</h2>
          <ul>
            <li><strong>School Groups:</strong> Contact 48 hours in advance</li>
            <li><strong>Guided Tours:</strong> Reserve at least 48 hours ahead</li>
            <li><strong>Corporate Events:</strong> Schedule 2 weeks in advance</li>
            <li><strong>Family Remembrance:</strong> Arrange with park management</li>
          </ul>

          <p>
            📞 <strong>+260 97 0688888</strong><br />
            📧 <strong>info@tazaramamorial.zm</strong>
          </p>

          <h2>Support This Memorial</h2>
          <p>Your donations help us maintain the memorial and fund educational programs. Every contribution honors the legacy of those we remember.</p>
          <button style={{ backgroundColor: '#2d5016', color: 'white', padding: '1rem 2rem', cursor: 'pointer', borderRadius: '4px', fontSize: '1.1rem' }}>Make a Donation</button>
        </section>
      </div>
    </>
  );
};

// ============================================
// 404 PAGE
// ============================================
const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found - Tazara Memorial Park</title>
      </Head>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 1rem', textAlign: 'center' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist. Please use the navigation menu to explore the site.</p>
        <Link href="/">
          <button style={{ backgroundColor: '#2d5016', color: 'white', padding: '1rem 2rem', cursor: 'pointer', fontSize: '1rem' }}>Return to Home</button>
        </Link>
      </div>
    </>
  );
};

// ============================================
// PAGES/_APP.JS
// ============================================
function MyApp({ Component, pageProps }) {
  return (
    <>
      <style>{globalStyles}</style>
      <Navigation />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

// ============================================
// PAGE ROUTES
// ============================================
export async function getStaticProps(context) {
  return {
    props: {},
    revalidate: 3600,
  };
}

// Export pages as static props
export default MyApp;

// Pages mapping
export const pages = {
  '/': HomePage,
  '/about': AboutPage,
  '/gallery': GalleryPage,
  '/visitor-info': VisitorInfoPage,
  '/getting-there': GettingTherePage,
  '/events': EventsPage,
  '/404': NotFoundPage,
};

// For Next.js export each page
export { HomePage as index, AboutPage as about, GalleryPage as gallery, VisitorInfoPage as visitorInfo, GettingTherePage as gettingThere, EventsPage as events, NotFoundPage as notFound };
