import React, { useMemo, useState } from 'react';
import { Search, ArrowUpRight, Menu, X, Heart, Sparkles, ChevronDown } from 'lucide-react';

const products = [
  { title: 'Sunday Studio — Brand Kit', creator: 'Sunday Studio', price: '$24', category: 'Branding', color: 'coral', art: 'SUNDAY\\nSTUDIO', tag: 'BRAND SYSTEM' },
  { title: 'Soft Shapes Poster Pack', creator: 'Mina Creative', price: '$18', category: 'Posters', color: 'lilac', art: 'SHAPES\\nIN MOTION', tag: 'POSTER SERIES' },
  { title: 'Everyday Objects 3D', creator: 'Studio Koto', price: '$32', category: '3D & Objects', color: 'yellow', art: 'OBJECTS\\nOF EVERYDAY', tag: '3D COLLECTION' },
  { title: 'Playful Typefaces', creator: 'Type Dept.', price: '$16', category: 'Typography', color: 'blue', art: 'TYPE\\nPLAY', tag: 'FONT FAMILY' },
  { title: 'Color Studies Vol. 01', creator: 'Ari Makes', price: '$12', category: 'Illustration', color: 'pink', art: 'COLOR\\nSTUDIES', tag: 'DIGITAL ART' },
  { title: 'Good Things Editorial', creator: 'Good Things Co.', price: '$28', category: 'Templates', color: 'green', art: 'GOOD\\nTHINGS', tag: 'EDITORIAL KIT' },
];

const categories = ['All work', 'Branding', 'Posters', '3D & Objects', 'Typography', 'Illustration', 'Templates'];

function Artwork({ item, index }) {
  return <div className={`artwork ${item.color} art-${index}`}>
    <span className="art-tag">{item.tag}</span>
    <div className="art-shapes" aria-hidden="true">
      <i className="shape shape-one" /><i className="shape shape-two" /><i className="shape shape-three" />
    </div>
    <strong>{item.art.split('\\n').map((line, i) => <React.Fragment key={line}>{i > 0 && <br />}{line}</React.Fragment>)}</strong>
    <span className="art-index">0{index + 1} / 06</span>
  </div>;
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All work');
  const [search, setSearch] = useState('');
  const [saved, setSaved] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const visibleProducts = useMemo(() => products.filter(p =>
    (activeCategory === 'All work' || p.category === activeCategory) &&
    `${p.title} ${p.creator} ${p.category}`.toLowerCase().includes(search.toLowerCase())
  ), [activeCategory, search]);

  function toggleSaved(title) {
    setSaved(current => current.includes(title) ? current.filter(t => t !== title) : [...current, title]);
  }

  return <div className="site-shell">
    <div className="announcement"><Sparkles size={14} /> A little more inspiration for your next big idea <a href="#marketplace">Explore the marketplace <ArrowUpRight size={13} /></a></div>
    <header className="navbar">
      <a className="logo" href="#home" aria-label="Forma home"><span className="logo-mark">f.</span> forma<span className="logo-dot">®</span></a>
      <nav className={mobileMenu ? 'nav-links open' : 'nav-links'}>
        <a href="#marketplace" onClick={() => setMobileMenu(false)}>Marketplace</a>
        <a href="#discover" onClick={() => setMobileMenu(false)}>Discover</a>
        <a href="#membership" onClick={() => setMobileMenu(false)}>Membership</a>
        <a href="#about" onClick={() => setMobileMenu(false)}>For creators</a>
      </nav>
      <div className="nav-actions">
        <button className="text-button login" onClick={() => alert('Welcome back! Sign-in can be connected to your account system next.')}>Log in</button>
        <a className="button button-dark nav-join" href="#membership">Join Forma <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle navigation">{mobileMenu ? <X /> : <Menu />}</button>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> THE CREATIVE MARKETPLACE</div>
          <h1>A place to display your <span className="highlight-word">masterpiece.</span></h1>
          <p>Discover independent design, collect beautiful things, and find the little details that make your next idea feel like you.</p>
          <div className="hero-buttons"><a className="button button-dark" href="#marketplace">Explore the marketplace <ArrowUpRight size={16} /></a><a className="button button-light" href="#about">I'm a creator</a></div>
          <div className="social-proof"><div className="avatar-stack"><span>A</span><span>M</span><span>J</span><span>+</span></div><div><strong>Made by creatives, for creatives</strong><small>Fresh finds from independent makers.</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="hero-note note-top">NEW & NOTEWORTHY <span>✳</span></div>
          <div className="hero-poster poster-one"><small>VOL. 01 / CREATIVE LIFE</small><b>MAKE<br/>ROOM<br/>FOR <i>IDEAS.</i></b><span>DESIGN YOUR EVERYDAY</span></div>
          <div className="hero-poster poster-two"><span>GOOD<br/>THINGS<br/><i>TAKE</i><br/>SHAPE.</span><small>AN OBJECT STUDY — 2026</small></div>
          <div className="hero-poster poster-three"><div className="sun-shape" /><b>PLAY<br/>MORE.</b><small>STUDIO NOTES / 004</small></div>
          <div className="floating-sticker sticker-one">✳ GOOD<br/>IDEAS ONLY</div><div className="floating-sticker sticker-two">DESIGNED<br/>WITH LOVE ♥</div>
          <div className="hero-note note-bottom">INDEPENDENT BY NATURE <span>↗</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Marketplace highlights"><div>GOOD DESIGN <span>✳</span> INDEPENDENT CREATORS <span>✳</span> FRESH PERSPECTIVES <span>✳</span> GOOD DESIGN <span>✳</span> INDEPENDENT CREATORS <span>✳</span></div></section>

      <section className="marketplace section-wrap" id="marketplace">
        <div className="section-heading">
          <div><div className="eyebrow">THE GOOD STUFF</div><h2>Made to make you <em>look twice.</em></h2><p>Thoughtful work from people who care about the details.</p></div>
          <a className="underlined-link" href="#discover">Explore all work <ArrowUpRight size={16} /></a>
        </div>
        <div className="market-controls">
          <div className="category-list">{categories.map(cat => <button key={cat} className={activeCategory === cat ? 'category active' : 'category'} onClick={() => setActiveCategory(cat)}>{cat}</button>)}</div>
          <label className="search-box"><Search size={17} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search creative work..." aria-label="Search creative work" /></label>
        </div>
        <div className="product-grid">
          {visibleProducts.map((item) => {
            const index = products.indexOf(item);
            return <article className="product-card" key={item.title}>
              <div className="product-image"><Artwork item={item} index={index} /><button className={saved.includes(item.title) ? 'save-button saved' : 'save-button'} onClick={() => toggleSaved(item.title)} aria-label={`Save ${item.title}`}><Heart size={17} fill={saved.includes(item.title) ? 'currentColor' : 'none'} /></button><span className="product-badge">DIGITAL GOOD</span></div>
              <div className="product-info"><div><h3>{item.title}</h3><p>by {item.creator}</p></div><strong>{item.price}</strong></div>
            </article>;
          })}
        </div>
        {visibleProducts.length === 0 && <div className="empty-state">No work found. Try another search or category.</div>}
        <div className="center-button"><button className="button button-outline" onClick={() => {setActiveCategory('All work'); setSearch('');}}>View all creative work <ArrowUpRight size={16} /></button></div>
      </section>

      <section className="creator-banner" id="about"><div className="creator-art"><div className="creator-circle">MAKE<br/>IT<br/><i>MATTER.</i></div><span className="spark spark-a">✳</span><span className="spark spark-b">✦</span><span className="creator-caption">YOUR NEXT CHAPTER STARTS HERE ↗</span></div><div className="creator-copy"><div className="eyebrow">YOUR WORK, OUT IN THE WORLD</div><h2>Good things happen when you <em>put it out there.</em></h2><p>Your work deserves more than a folder on your desktop. Share your ideas, find your people, and turn your creative practice into something bigger.</p><a className="button button-dark" href="#membership">Start selling your work <ArrowUpRight size={16} /></a><small>No gatekeeping. Just good work.</small></div></section>

      <section className="discover section-wrap" id="discover"><div className="section-heading"><div><div className="eyebrow">A LITTLE BIT OF EVERYTHING</div><h2>Find your next <em>favourite thing.</em></h2></div><p className="discover-intro">From tiny type details to big, bold ideas — there’s something here for every creative mood.</p></div><div className="discover-grid"><a className="discover-tile tile-pink" href="#marketplace" onClick={() => setActiveCategory('Illustration')}><span>01 / ILLUSTRATION</span><b>Colour outside<br/>the lines.</b><div className="tile-doodle">✳</div><ArrowUpRight /></a><a className="discover-tile tile-blue" href="#marketplace" onClick={() => setActiveCategory('Typography')}><span>02 / TYPE & LETTERING</span><b>Words with<br/>personality.</b><div className="tile-letter">Aa</div><ArrowUpRight /></a><a className="discover-tile tile-yellow" href="#marketplace" onClick={() => setActiveCategory('Branding')}><span>03 / BRANDING</span><b>Make it<br/>memorable.</b><div className="tile-sun">◉</div><ArrowUpRight /></a></div></section>

      <section className="membership" id="membership"><div className="membership-top"><div className="eyebrow">THE FORMA LETTER</div><h2>A good idea in your inbox.<br/><em>Every now and then.</em></h2><p>Fresh work, creative notes, and things worth bookmarking. No noise.</p><form onSubmit={e => {e.preventDefault(); if(email.trim()) setJoined(true);}} className="email-form"><input type="email" required placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} aria-label="Your email address"/><button type="submit">{joined ? 'You’re on the list ✓' : 'Count me in'} <ArrowUpRight size={16}/></button></form>{joined && <small className="success-message">Thanks for joining the list!</small>}</div><div className="membership-shape"><span>GOOD<br/>IDEAS<br/><i>LIVE</i><br/>HERE.</span><div>✳</div></div></section>
    </main>

    <footer className="footer"><div className="footer-top"><a className="logo footer-logo" href="#home"><span className="logo-mark">f.</span> forma<span className="logo-dot">®</span></a><p>A home for good ideas<br/>and the people behind them.</p><div className="footer-links"><a href="#marketplace">Marketplace</a><a href="#discover">Discover</a><a href="#about">For creators</a><a href="#membership">Newsletter</a></div><a className="back-top" href="#home">Back to top ↑</a></div><div className="footer-bottom"><span>© 2026 Forma Marketplace</span><span>Made for the love of making. ✳</span><div><a href="#about">Privacy</a><a href="#about">Terms</a></div></div></footer>
  </div>;
}

export default App;