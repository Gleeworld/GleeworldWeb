/* app/page.tsx - Build-Proof Branded Production Version */
import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* 1. NAVIGATION HEADER */}
      <header className="border-b border-slate-100 py-4 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-slate-900">
            Gleeworld<span className="text-[#9d174d]">Pharmacy</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-[#9d174d] transition-colors">Services</a>
            <a href="#care-coordination" className="hover:text-[#9d174d] transition-colors">Care Coordination</a>
            <a href="#infrastructure" className="hover:text-[#9d174d] transition-colors">Our Technology</a>
          </nav>
        </div>
      </header>

      {/* 2. CLINICAL HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
          Pharmacy care, designed for real life.
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Your trusted clinical partner. Speak directly with a pharmacist and get your medications handled with professional, attentive care.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://wa.me/your-whatsapp-number" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#9d174d] hover:bg-[#be185d] text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all text-center"
          >
            💬 Consult via WhatsApp
          </a>
          <a 
            href="#care-coordination" 
            className="border border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold transition-all text-center"
          >
            Learn How We Operate
          </a>
        </div>
      </section>

      {/* 3. PROPRIETARY OPERATIONAL METRICS */}
      <section className="bg-slate-50 border-y border-slate-100 py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-3xl font-bold text-slate-900">150k+</h4>
            <p className="text-sm font-medium text-slate-500 mt-1">Orders Fulfilled</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-slate-900">24/7</h4>
            <p className="text-sm font-medium text-slate-500 mt-1">Pharmacist Access</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-slate-900">100%</h4>
            <p className="text-sm font-medium text-slate-500 mt-1">Authentic &amp; Verified Medications</p>
          </div>
        </div>
      </section>

      {/* 4. CARE COORDINATION INTEGRATION (EDUCATIONAL / NON-TRANSACTIONAL) */}
      <section id="care-coordination" className="care-coordination-section max-w-6xl mx-auto px-4 my-16">
        <div className="container-premium">
          
          {/* Badge */}
          <div className="care-badge">
            <span>✨ Care Coordination</span>
          </div>

          {/* Clean Clinical Headline */}
          <h2 className="care-headline">
            When you cannot visit personally,<br />
            you can still speak directly with a pharmacist.
          </h2>

          {/* Contextual Sub-headline */}
          <p className="care-subheadline">
            Trusted relatives, caregivers, or staff can help coordinate medicine pickup<br />
            while you remain actively involved in your care.
          </p>

          {/* User Self-Identification Grid */}
          <div className="who-this-helps">
            <p className="who-label">Commonly used by:</p>
            <div className="who-grid">
              <span className="who-tag">💼 Busy professionals</span>
              <span className="who-tag">👶 Parents with young children</span>
              <span className="who-tag">🤝 Family caregivers</span>
              <span className="who-tag">👵 Elderly patients</span>
              <span className="who-tag">🏠 Households coordinating care remotely</span>
            </div>
          </div>

          {/* Two-Column Explainer Architecture */}
          <div className="care-grid">
            
            {/* Left Column: Human Logistics */}
            <div className="care-card">
              <div className="care-icon">👥</div>
              <h3>How it works</h3>
              <div className="care-steps">
                <div className="care-step">
                  <span className="step-number">1</span>
                  <p>You send a trusted person &mdash; staff, nanny, relative, or caregiver &mdash; to Gleeworld Pharmacy.</p>
                </div>
                <div className="care-step">
                  <span className="step-number">2</span>
                  <p>They call you at the counter. You speak directly to the pharmacist.</p>
                </div>
                <div className="care-step">
                  <span className="step-number">3</span>
                  <p>You describe symptoms. The pharmacist provides guidance. Your representative coordinates pickup.</p>
                </div>
                <div className="care-step">
                  <span className="step-number">4</span>
                  <p>You never left your desk or your child&apos;s bedside.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Supply-chain Resilience & Boundaries */}
            <div className="care-card">
              <div className="care-icon">📦</div>
              <h3>When medicine is temporarily out of stock</h3>
              <p className="care-description">
                The pharmacist informs your representative. Gleeworld quickly orders from our wholesale supplier. 
                Delivery is swift and coordinated seamlessly. No second trip wasted.
              </p>

              <div className="care-divider"></div>

              <div className="care-icon-small">🩺</div>
              <h3>Designed for minor ailments</h3>
              <div className="care-tags">
                <span className="care-tag">🤧 Colds, coughs, mild fevers</span>
                <span className="care-tag">🍲 Digestive complaints</span>
                <span className="care-tag">🌿 Skin rashes &amp; allergies</span>
                <span className="care-tag">👶 Baby colic, teething, mild rashes</span>
                <span className="care-tag">✅ Confirming medicine suitability</span>
              </div>
              
              {/* Strict Clinical Disclaimer */}
              <div className="care-warning">
                <span className="warning-icon">⚠️</span>
                <p>If it sounds urgent, we will tell you to see a doctor immediately. This service provides pharmacist guidance &mdash; not diagnosis or remote prescription treatment.</p>
              </div>
            </div>
          </div>

          {/* Institutional Trust Framework */}
          <div className="trust-section">
            <h3>Why patients trust this</h3>
            <div className="trust-grid">
              <div className="trust-item">
                <span className="trust-icon">🎯</span>
                <p><strong>You remain in control</strong> &ndash; You speak to the pharmacist directly. No secondhand information.</p>
              </div>
              <div className="trust-item">
                <span className="trust-icon">🤝</span>
                <p><strong>Decisions remain yours</strong> &ndash; Your representative handles physical coordination, not clinical decisions.</p>
              </div>
              <div className="trust-item">
                <span className="trust-icon">👁️</span>
                <p><strong>Professional oversight</strong> &ndash; We review patient safety requirements before dispensing or recommending care.</p>
              </div>
              <div className="trust-item">
                <span className="trust-icon">⚡</span>
                <p><strong>Fast, for real life</strong> &ndash; Accessible via standard communication channels. No app download barrier required.</p>
              </div>
            </div>
          </div>

          {/* Clean Educational Closing */}
          <div className="care-closing">
            <p className="care-closing-text">
              Pharmacy care designed for how people actually live &mdash; with staff, with children, 
              with aging parents, and with very little time.
            </p>
          </div>
        </div>
      </section>

      {/* 5. SERVICES PROFILE */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16 border-t border-slate-100">
        <h2 className="text-center font-bold text-3xl mb-12 text-slate-900">Clinical Focus Areas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-slate-100 p-8 rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold text-lg text-slate-900 mb-3">💊 Reliable Dispensing</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Authentic prescription and OTC medication delivery managed with strict temperature control and safety protocols.</p>
          </div>
          <div className="border border-slate-100 p-8 rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold text-lg text-slate-900 mb-3">📱 Telepharmacy Guidance</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Direct, real-time access to licensed pharmacy professionals for immediate counselling and advisory services.</p>
          </div>
          <div className="border border-slate-100 p-8 rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold text-lg text-slate-900 mb-3">🔄 Chronic Refill Networks</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Structured clinical reminders and recurring shipment plans tailored explicitly for metabolic and cardiovascular maintenance.</p>
          </div>
        </div>
      </section>

      {/* 6. HEALTH-TECH DATA LAYER VALIDATION */}
      <section id="infrastructure" className="bg-slate-950 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#ea580c]">SYSTEM ARCHITECTURE</span>
          <h2 className="font-bold text-3xl md:text-4xl mt-3 mb-6">Powered by Medfinder Platform</h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Every clinical decision and care coordination query is reinforced by our proprietary health technology layer, stabilizing retail pharmacy inventories, tracking data pipelines, and bringing transparency to the global health supply chain.
          </p>
        </div>
      </section>

      {/* FOOTER - Hardcoded build-safe string to prevent dynamic hydration bugs */}
      <footer className="border-t border-slate-100 py-8 text-center text-xs text-slate-400">
        <p>&copy; 2026 Gleeworld Pharmacy. All professional clinical practices adhere strictly to regulatory standards.</p>
      </footer>
    </div>
  );
}
