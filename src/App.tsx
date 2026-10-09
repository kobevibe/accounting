import React, { useState } from "react";
import { SignalRevealText } from "@/components/ui/signal-reveal-text";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [revenue, setRevenue] = useState(12000000);
  const [exitValue, setExitValue] = useState(25000000);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", jurisdiction: "New York" });
  const [submitted, setSubmitted] = useState(false);

  // Interactive Liquidity Alpha Model calculations
  const calculatedShield = Math.min(exitValue, 10000000);
  const estimatedRnd = Math.round(revenue * 0.032);
  const totalAlpha = Math.round((calculatedShield * 0.238) + estimatedRnd + (revenue * 0.045));

  const formatCurrency = (val: number) => {
    return '$' + val.toLocaleString();
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setConsultationModalOpen(false);
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", jurisdiction: "New York" });
      alert("Private consultation requested successfully. Our senior partner will contact you within 2 hours.");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f3] text-[#1b1c18] font-sans selection:bg-[#07241a] selection:text-[#fbf9f3]">
      {/* Top Atmospheric Anchor / Header */}
      <header className="sticky top-0 z-50 bg-[#fbf9f3]/90 backdrop-blur-md border-b border-[#c1c8c3]/30">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-12 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded bg-[#07241a] flex items-center justify-center text-[#fed488] font-serif font-bold text-xl shadow-sm">
              §
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#07241a] block">
                Aura & Stone
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-[0.25em] text-[#775a19]">
                CPA & Advisory • Est. MMXVI
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-[#424844]">
            <a href="#practices" className="hover:text-[#07241a] transition-colors">Practices</a>
            <a href="#calculator" className="hover:text-[#07241a] transition-colors">Liquidity Model</a>
            <a href="#heritage" className="hover:text-[#07241a] transition-colors">Heritage</a>
            <a href="#jurisdictions" className="hover:text-[#07241a] transition-colors">Offices</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setConsultationModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#07241a] text-white text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded hover:bg-[#1e3a2f] transition-all shadow-md"
            >
              <span>Schedule Consultation</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#07241a]"
          >
            <span className="material-symbols-outlined text-2xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#fbf9f3] border-b border-[#c1c8c3]/40 px-6 py-6 space-y-4">
            <a href="#practices" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold uppercase tracking-wider text-[#07241a]">Practices</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold uppercase tracking-wider text-[#07241a]">Liquidity Model</a>
            <a href="#heritage" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold uppercase tracking-wider text-[#07241a]">Heritage</a>
            <a href="#jurisdictions" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold uppercase tracking-wider text-[#07241a]">Offices</a>
            <button 
              onClick={() => { setMobileMenuOpen(false); setConsultationModalOpen(true); }}
              className="w-full py-3 rounded bg-[#07241a] text-white text-xs font-semibold uppercase tracking-widest text-center shadow"
            >
              Schedule Consultation
            </button>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative w-full pt-16 pb-24 md:pb-32 overflow-hidden">
          <div className="absolute -top-32 right-[-10%] w-[680px] h-[680px] rounded-full bg-[#fed488]/20 blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute top-1/2 left-[-15%] w-[520px] h-[520px] rounded-full bg-[#aecebe]/25 blur-3xl pointer-events-none -z-10"></div>
          
          <div className="max-w-[1100px] mx-auto px-6 md:px-10 text-center">
            {/* Hero Main Content */}
            <div className="space-y-8 max-w-4xl mx-auto">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#07241a] tracking-tight leading-[1.08]">
                Financial precision crafted for visionaries, family offices, and <SignalRevealText text="ambitious enterprises." accent="#775a19" speed={950} className="inline-block text-[#775a19]" />
              </h1>

              <p className="text-lg md:text-xl text-[#424844] max-w-2xl mx-auto leading-relaxed">
                We combine rigorous institutional CPA craftsmanship with forward-looking fractional CFO guidance to safeguard generational assets and engineer strategic capital velocity.
              </p>

              {/* Dual CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-md sm:max-w-none mx-auto">
                <button 
                  onClick={() => setConsultationModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#07241a] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest px-5 sm:px-8 py-3.5 sm:py-4 rounded hover:bg-[#1e3a2f] transition-all shadow-md group whitespace-nowrap"
                >
                  <span>Schedule Private Consultation</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <a 
                  href="#calculator" 
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-[#775a19] hover:text-[#07241a] text-[11px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest px-5 sm:px-7 py-3.5 sm:py-4 rounded hover:bg-[#fed488]/10 transition-all border border-[#775a19]/40 hover:border-[#775a19] whitespace-nowrap"
                >
                  Explore Advisory Tiers
                </a>
              </div>
            </div>

            {/* Trust Metrics Ribbon */}
            <div className="mt-24 pt-12 border-t border-[#c1c8c3]/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-1 text-center">
                  <span className="text-xs font-semibold text-[#775a19] uppercase tracking-widest block">Advised AUM</span>
                  <div className="font-serif text-3xl md:text-4xl text-[#07241a] tracking-tight">$4.2B+</div>
                  <p className="text-xs text-[#424844]">Aggregated private balance sheets</p>
                </div>
                <div className="space-y-1 text-center">
                  <span className="text-xs font-semibold text-[#775a19] uppercase tracking-widest block">Statutory Integrity</span>
                  <div className="font-serif text-3xl md:text-4xl text-[#07241a] tracking-tight">99.4%</div>
                  <p className="text-xs text-[#424844]">IRS & regulatory defensibility index</p>
                </div>
                <div className="space-y-1 text-center">
                  <span className="text-xs font-semibold text-[#775a19] uppercase tracking-widest block">Median Yield</span>
                  <div className="font-serif text-3xl md:text-4xl text-[#07241a] tracking-tight">42%</div>
                  <p className="text-xs text-[#424844]">Avg. first-year tax alpha captured</p>
                </div>
                <div className="space-y-1 text-center">
                  <span className="text-xs font-semibold text-[#775a19] uppercase tracking-widest block">Private Mandates</span>
                  <div className="font-serif text-3xl md:text-4xl text-[#07241a] tracking-tight">140+</div>
                  <p className="text-xs text-[#424844]">Selected founders & dynasties</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practices & Advisory Architectural Matrix */}
        <section id="practices" className="w-full py-24 bg-[#f5f3ed]/70">
          <div className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#775a19] block mb-2">Core Competencies</span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#07241a] tracking-tight">Institutional Practice Areas</h2>
              </div>
              <p className="text-sm md:text-base text-[#424844] max-w-md">
                Structured precisely to bridge the divide between strategic treasury velocity and non-negotiable compliance rigor.
              </p>
            </div>

            {/* Practice Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 (Dark Accent Card) */}
              <div className="bg-[#07241a] text-white p-8 rounded shadow-md flex flex-col justify-between group hover:bg-[#1e3a2f] transition-all">
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-[#fed488]">
                    <span className="text-xs font-semibold tracking-widest uppercase">Mandate 01</span>
                    <span className="material-symbols-outlined text-2xl">trending_up</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-white mb-2 leading-snug">Strategic Fractional CFO</h3>
                    <p className="text-xs text-[#86a496] leading-relaxed">
                      Executive capital stewardship for high-growth tech enterprises, life science ventures, and multi-entity operations.
                    </p>
                  </div>
                  <div className="pt-2 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#eae8e2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fed488]"></span>
                      <span>Multi-entity balance sheet consolidation</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#eae8e2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fed488]"></span>
                      <span>Dynamic burn & runway cohort modeling</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#eae8e2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fed488]"></span>
                      <span>M&A sell-side dataroom diligence</span>
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-[#1e3a2f] flex items-center justify-between mt-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#fed488]">Tier A / Growth Focus</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform text-[#fed488]">north_east</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded shadow-sm flex flex-col justify-between group hover:bg-[#eae8e2]/50 transition-all border border-[#c1c8c3]/30">
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-[#775a19]">
                    <span className="text-xs font-semibold tracking-widest uppercase">Mandate 02</span>
                    <span className="material-symbols-outlined text-2xl">account_balance</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#07241a] mb-2 leading-snug">Private Wealth & Estate Tax</h3>
                    <p className="text-xs text-[#424844] leading-relaxed">
                      Protecting intergenerational family office balance sheets from statutory erosion and friction points.
                    </p>
                  </div>
                  <div className="pt-2 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#1b1c18]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#775a19]"></span>
                      <span>QSBS Section 1202 multi-stacking</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#1b1c18]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#775a19]"></span>
                      <span>Dynasty & Grantor retained annuity trusts</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#1b1c18]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#775a19]"></span>
                      <span>Cross-border dual residency optimization</span>
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-[#c1c8c3]/30 flex items-center justify-between mt-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#775a19]">Family Office & Trusts</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform text-[#07241a]">north_east</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded shadow-sm flex flex-col justify-between group hover:bg-[#eae8e2]/50 transition-all border border-[#c1c8c3]/30">
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-[#775a19]">
                    <span className="text-xs font-semibold tracking-widest uppercase">Mandate 03</span>
                    <span className="material-symbols-outlined text-2xl">analytics</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#07241a] mb-2 leading-snug">Corporate Tax & R&D Credits</h3>
                    <p className="text-xs text-[#424844] leading-relaxed">
                      Substantive quantitative analysis uncovering statutory arbitrage, enterprise credits, and nexus shields.
                    </p>
                  </div>
                  <div className="pt-2 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#1b1c18]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#775a19]"></span>
                      <span>Sec. 41 Federal R&D defensibility studies</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#1b1c18]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#775a19]"></span>
                      <span>Multistate apportionment & nexus relief</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#1b1c18]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#775a19]"></span>
                      <span>Transfer pricing & IP holding structures</span>
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-[#c1c8c3]/30 flex items-center justify-between mt-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#775a19]">Enterprise & Scale</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform text-[#07241a]">north_east</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 rounded shadow-sm flex flex-col justify-between group hover:bg-[#eae8e2]/50 transition-all border border-[#c1c8c3]/30">
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-[#775a19]">
                    <span className="text-xs font-semibold tracking-widest uppercase">Mandate 04</span>
                    <span className="material-symbols-outlined text-2xl">gavel</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#07241a] mb-2 leading-snug">Audit Assurance & Representation</h3>
                    <p className="text-xs text-[#424844] leading-relaxed">
                      Impenetrable preparation and aggressive defense before state agencies, the IRS, and PCAOB bodies.
                    </p>
                  </div>
                  <div className="pt-2 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#1b1c18]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#775a19]"></span>
                      <span>IRS Appeals & technical advice memorandums</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#1b1c18]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#775a19]"></span>
                      <span>GAAP/PCAOB audit-readiness reviews</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#1b1c18]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#775a19]"></span>
                      <span>Complex forensic reconciliation audits</span>
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-[#c1c8c3]/30 flex items-center justify-between mt-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#775a19]">Fiduciary Defense</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform text-[#07241a]">north_east</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Tax Alpha Matrix & Forensic Simulator */}
        <section id="calculator" className="w-full py-24">
          <div className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="bg-[#f0eee8] p-8 md:p-14 rounded shadow-sm border border-[#c1c8c3]/30">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#775a19]">Capital Architecture Tool</span>
                  <h3 className="font-serif text-3xl md:text-4xl text-[#07241a] tracking-tight">Interactive Liquidity Alpha Model</h3>
                  <p className="text-sm md:text-base text-[#424844] leading-relaxed">
                    Adjust transaction parameters to preview modeled statutory savings across corporate tax restructuring, QSBS Section 1202 exclusions, and multi-state apportionment shields.
                  </p>
                  <div className="space-y-4 text-xs text-[#1b1c18]">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#775a19]">shield</span>
                      <span>Zero-exposure compliance validation prior to filing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#775a19]">tune</span>
                      <span>Calibrated dynamically for New York, California & Federal codes</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded shadow-sm border border-[#c1c8c3]/30">
                  <div className="space-y-8">
                    {/* Slider 1 */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#424844]">Annual Gross Entity Revenue</label>
                        <span className="font-serif text-xl text-[#07241a] tabular-nums font-bold">{formatCurrency(revenue)}</span>
                      </div>
                      <input 
                        type="range" 
                        min="2000000" 
                        max="60000000" 
                        step="1000000"
                        value={revenue}
                        onChange={(e) => setRevenue(Number(e.target.value))}
                        className="w-full accent-[#07241a] h-1.5 bg-[#eae8e2] rounded cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] text-[#727974] mt-2">
                        <span>$2M</span>
                        <span>$30M</span>
                        <span>$60M+</span>
                      </div>
                    </div>

                    {/* Slider 2 */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#424844]">Target Exit / Liquidity Event Projection</label>
                        <span className="font-serif text-xl text-[#07241a] tabular-nums font-bold">{formatCurrency(exitValue)}</span>
                      </div>
                      <input 
                        type="range" 
                        min="5000000" 
                        max="100000000" 
                        step="2500000"
                        value={exitValue}
                        onChange={(e) => setExitValue(Number(e.target.value))}
                        className="w-full accent-[#775a19] h-1.5 bg-[#eae8e2] rounded cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] text-[#727974] mt-2">
                        <span>$5M</span>
                        <span>$50M</span>
                        <span>$100M</span>
                      </div>
                    </div>

                    {/* Result Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#c1c8c3]/30">
                      <div className="bg-[#f5f3ed] p-4 rounded border border-[#c1c8c3]/20">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#775a19] block">QSBS 1202 Shield</span>
                        <div className="font-serif text-xl text-[#07241a] mt-1 tabular-nums font-bold">{formatCurrency(calculatedShield)}</div>
                        <span className="text-[10px] text-[#424844]">100% Fed Cap Gains Exclusion</span>
                      </div>
                      <div className="bg-[#f5f3ed] p-4 rounded border border-[#c1c8c3]/20">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#775a19] block">Annual R&D Credit</span>
                        <div className="font-serif text-xl text-[#07241a] mt-1 tabular-nums font-bold">{formatCurrency(estimatedRnd)}</div>
                        <span className="text-[10px] text-[#424844]">Direct Payroll Offset</span>
                      </div>
                      <div className="bg-[#07241a] text-white p-4 rounded shadow-inner">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#fed488] block">Est. Retained Alpha</span>
                        <div className="font-serif text-xl text-[#fed488] mt-1 tabular-nums font-bold">{formatCurrency(totalAlpha)}</div>
                        <span className="text-[10px] text-[#86a496]">Total Strategic Spread</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#424844] pt-2">
                      <span className="italic">Based on standard Section 1202/1045 statutes & typical tech gross margins.</span>
                      <button 
                        onClick={() => setConsultationModalOpen(true)}
                        className="font-semibold text-[#07241a] uppercase tracking-wider hover:text-[#775a19] flex items-center gap-1"
                      >
                        Run Full Diagnostic <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Testimonial & Heritage Validation */}
        <section id="heritage" className="w-full py-24 bg-white border-y border-[#c1c8c3]/30">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center space-y-8">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#775a19]">Principal Dispatch</span>
            <blockquote className="font-serif text-2xl md:text-4xl text-[#07241a] italic leading-snug max-w-3xl mx-auto">
              “Aura & Stone restructured our multi-entity capital stack prior to our $140M secondary round. Their foresight on QSBS qualification alone preserved more than $14M in founder equity.”
            </blockquote>
            <div className="pt-2">
              <p className="font-serif text-lg text-[#07241a] font-bold">Julian Vance-Moreau</p>
              <p className="text-xs text-[#424844]">Managing Partner, Vance-Moreau Capital & Family Trust</p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="text-xs px-3 py-1 rounded bg-[#f0eee8] text-[#775a19] uppercase tracking-wider font-semibold">Series B Founder</span>
                <span className="text-xs px-3 py-1 rounded bg-[#f0eee8] text-[#424844] uppercase tracking-wider">Client Since 2019</span>
              </div>
            </div>

            {/* Peer Client Trust Marks */}
            <div className="pt-12 border-t border-[#c1c8c3]/30 max-w-3xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#424844] block mb-6">Trusted By Leaders Across</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
                <div className="p-4 rounded bg-[#f5f3ed] text-center border border-[#c1c8c3]/20">
                  <span className="font-serif text-sm text-[#07241a] tracking-wider font-bold">APEX BIO</span>
                  <span className="block text-[10px] uppercase font-semibold text-[#775a19]">Biotech Unicorn</span>
                </div>
                <div className="p-4 rounded bg-[#f5f3ed] text-center border border-[#c1c8c3]/20">
                  <span className="font-serif text-sm text-[#07241a] tracking-wider font-bold">VALENCE</span>
                  <span className="block text-[10px] uppercase font-semibold text-[#775a19]">Robotics / AI</span>
                </div>
                <div className="p-4 rounded bg-[#f5f3ed] text-center border border-[#c1c8c3]/20">
                  <span className="font-serif text-sm text-[#07241a] tracking-wider font-bold">CRESTVIEW</span>
                  <span className="block text-[10px] uppercase font-semibold text-[#775a19]">Family Office</span>
                </div>
                <div className="p-4 rounded bg-[#f5f3ed] text-center border border-[#c1c8c3]/20">
                  <span className="font-serif text-sm text-[#07241a] tracking-wider font-bold">KINETIC</span>
                  <span className="block text-[10px] uppercase font-semibold text-[#775a19]">Fintech Platform</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jurisdictional Presence & Final Consultation Invitation */}
        <section id="jurisdictions" className="w-full py-24 bg-[#eae8e2]/60">
          <div className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="bg-[#07241a] text-white rounded p-10 md:p-16 shadow-xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
                <svg className="text-[#fed488]" fill="none" height="400" viewBox="0 0 400 400" width="400">
                  <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="2"></circle>
                  <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="2"></circle>
                  <line stroke="currentColor" strokeWidth="2" x1="20" x2="380" y1="200" y2="200"></line>
                  <line stroke="currentColor" strokeWidth="2" x1="200" x2="200" y1="20" y2="380"></line>
                </svg>
              </div>

              <div className="max-w-3xl space-y-6 relative z-10">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#fed488]">Confidential Dialogue</span>
                <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-tight">
                  Initiate your engagement with Aura & Stone.
                </h2>
                <p className="text-base text-[#86a496] leading-relaxed max-w-2xl">
                  We limit partner-level advisory intake to maintain unparalleled fidelity and responsiveness. Inquire now to confirm private availability for the coming quarter.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                  <button 
                    onClick={() => setConsultationModalOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#fed488] text-[#261900] text-[11px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest px-5 sm:px-8 py-3.5 sm:py-4 rounded hover:bg-[#e9c176] transition-all shadow-md whitespace-nowrap"
                  >
                    <span>Request Partner Consultation</span>
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  </button>
                  <a 
                    href="#calculator" 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#1e3a2f] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest px-5 sm:px-7 py-3.5 sm:py-4 rounded hover:bg-[#304c41] transition-all border border-[#86a496]/30 whitespace-nowrap"
                  >
                    <span>Explore Advisory Tiers</span>
                    <span className="material-symbols-outlined text-[18px]">lock</span>
                  </a>
                </div>

                {/* Jurisdictions */}
                <div className="pt-12 border-t border-[#1e3a2f] grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs font-bold text-[#fed488] uppercase tracking-wider">Tribeca, New York</p>
                    <p className="text-xs text-[#86a496] mt-1">Franklin Street Chambers</p>
                    <span className="text-[11px] text-[#aecebe] block mt-1">Direct +1 (212) 840-2210</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#fed488] uppercase tracking-wider">Presidio, San Francisco</p>
                    <p className="text-xs text-[#86a496] mt-1">Montgomery Street Tower</p>
                    <span className="text-[11px] text-[#aecebe] block mt-1">Direct +1 (415) 902-8840</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#fed488] uppercase tracking-wider">Bahnhofstrasse, Zurich</p>
                    <p className="text-xs text-[#86a496] mt-1">Swiss Banking Quarters</p>
                    <span className="text-[11px] text-[#aecebe] block mt-1">Direct +41 44 210 9900</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#f0eee8] border-t border-[#c1c8c3]/40">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#c1c8c3]/40">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#07241a] flex items-center justify-center text-[#fed488] font-serif font-bold text-sm">§</div>
                <span className="font-serif text-xl font-bold text-[#07241a]">Aura & Stone</span>
              </div>
              <p className="text-xs text-[#424844] max-w-sm leading-relaxed">
                Bespoke fractional CFO advisory, institutional tax jurisprudence, and multi-generational family office capital structuring.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-semibold text-[#775a19] uppercase tracking-widest block">Advisory Scope</span>
              <ul className="space-y-2 text-xs text-[#424844]">
                <li><a href="#practices" className="hover:text-[#07241a] transition-colors">Fractional CFO Mandates</a></li>
                <li><a href="#practices" className="hover:text-[#07241a] transition-colors">Wealth & Estate Structuring</a></li>
                <li><a href="#practices" className="hover:text-[#07241a] transition-colors">Corporate Tax & R&D</a></li>
                <li><a href="#practices" className="hover:text-[#07241a] transition-colors">Audit & Representation</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-semibold text-[#775a19] uppercase tracking-widest block">Governance</span>
              <ul className="space-y-2 text-xs text-[#424844]">
                <li><a href="#" className="hover:text-[#07241a] transition-colors">Fiduciary Standards</a></li>
                <li><a href="#" className="hover:text-[#07241a] transition-colors">Statutory Defensibility</a></li>
                <li><a href="#" className="hover:text-[#07241a] transition-colors">Confidentiality Protocol</a></li>
                <li><a href="#" className="hover:text-[#07241a] transition-colors">SEC & AICPA Compliance</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-semibold text-[#775a19] uppercase tracking-widest block">Private Inquiries</span>
              <p className="text-xs text-[#424844] leading-relaxed">
                Admissions for Q3/Q4 private family office and enterprise mandates are reviewed weekly by our managing partners.
              </p>
              <button 
                onClick={() => setConsultationModalOpen(true)}
                className="text-xs font-semibold uppercase tracking-wider text-[#07241a] underline hover:text-[#775a19] transition-colors"
              >
                Inquire for Partner Availability →
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#727974] gap-4">
            <div>© {new Date().getFullYear()} Aura & Stone CPA & Advisory LLP. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#07241a] transition-colors">Privacy Jurisprudence</a>
              <a href="#" className="hover:text-[#07241a] transition-colors">Terms of Mandate</a>
              <a href="#" className="hover:text-[#07241a] transition-colors">Regulatory Disclosures</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      {consultationModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#07241a]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#fbf9f3] rounded-lg max-w-lg w-full p-8 shadow-2xl border border-[#c1c8c3]/40 relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setConsultationModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#727974] hover:text-[#07241a] rounded-full hover:bg-[#eae8e2] transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#775a19] block mb-1">Private Engagement</span>
              <h3 className="font-serif text-2xl font-bold text-[#07241a] mb-2">Schedule Partner Consultation</h3>
              <p className="text-xs text-[#424844]">Please submit your corporate details for confidential review by our senior partners.</p>
            </div>

            <form onSubmit={handleConsultationSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold text-[#424844] uppercase tracking-wider mb-1.5">Principal / Founder Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Julian Vance-Moreau"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded bg-white border border-[#c1c8c3]/60 focus:ring-1 focus:ring-[#07241a] focus:border-[#07241a] text-xs outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#424844] uppercase tracking-wider mb-1.5">Secure Email</label>
                <input 
                  type="email" 
                  required 
                  placeholder="julian@vancemoreau.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded bg-white border border-[#c1c8c3]/60 focus:ring-1 focus:ring-[#07241a] focus:border-[#07241a] text-xs outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#424844] uppercase tracking-wider mb-1.5">Direct Telephone</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+1 (212) 555-0199"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded bg-white border border-[#c1c8c3]/60 focus:ring-1 focus:ring-[#07241a] focus:border-[#07241a] text-xs outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#424844] uppercase tracking-wider mb-1.5">Preferred Jurisdiction Desk</label>
                <select 
                  value={formData.jurisdiction}
                  onChange={(e) => setFormData({...formData, jurisdiction: e.target.value})}
                  className="w-full px-4 py-3 rounded bg-white border border-[#c1c8c3]/60 focus:ring-1 focus:ring-[#07241a] focus:border-[#07241a] text-xs outline-none transition-all"
                >
                  <option value="New York">Tribeca, New York</option>
                  <option value="San Francisco">Presidio, San Francisco</option>
                  <option value="Zurich">Bahnhofstrasse, Zurich</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={submitted}
                className="w-full py-4 mt-2 rounded bg-[#07241a] hover:bg-[#1e3a2f] text-white text-xs font-semibold uppercase tracking-widest shadow transition-all disabled:opacity-50"
              >
                {submitted ? "Transmitting Credentials..." : "Submit Confidential Inquiry"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
