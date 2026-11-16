import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink, FileText, Presentation, Video } from 'lucide-react';
import './hackathon.css';

const navPartners = [
  { name: 'Siksha O Anusandhan University', logo: '/images/sponsors/SOA.png' },
  { name: 'NIT Rourkela', logo: '/images/sponsors/nit-rourkela.png' },
  { name: 'NIST University', logo: '/images/sponsors/nist.png' },
  { name: 'Maharaja Sriram Chandra Bhanja Deo University', logo: '/images/sponsors/mscb-university.png' },
];

export const metadata: Metadata = {
  title: 'Odisha AI Hackathon 2026 | Innovate for Odisha, Build for the Future',
  description:
    'Odisha AI Hackathon 2026 — Applications of AI. Regional rounds across Odisha, culminating at SOA University, Bhubaneswar on 20 December 2026.',
};

export default function HackathonsPage() {
  return (
    <div className="hackathon-scope">
      <nav className="hackathon-subnav">
        <div className="hackathon-container nav-inner">
          <a className="brand" href="#top">
            <Image src="/images/logo.png" alt="" width={163} height={200} style={{ height: 36, width: 'auto' }} />
            <span className="brand-text">
              Odisha AI Hackathon <span className="brand-year">2026</span>
            </span>
          </a>
          <div className="nav-links">
            <a href="#themes">Themes</a>
            <a href="#regions">Regions</a>
            <a href="#journey">How to Apply</a>
            <a href="#contacts">Contacts</a>
          </div>
          <div className="nav-right">
            <div className="nav-partners" aria-label="Hackathon partners">
              {navPartners.map((p) => (
                <Image
                  key={p.name}
                  src={p.logo}
                  alt={p.name}
                  title={p.name}
                  width={80}
                  height={80}
                  className="nav-partner-logo"
                />
              ))}
            </div>
            <a
              className="btn btn-primary"
              href="https://docs.google.com/forms/d/1qqRZuBO3jY_4MsAHXTMBu3DKJGecwP76hqcGJxvKp0o"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply now
              <ExternalLink size={16} aria-hidden />
            </a>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hackathon-container hero-inner">
          <div>
            <span className="kicker">Odisha AI · SOA · HCLTech</span>
            <h1>
              Odisha AI Hackathon <span className="hero-year">2026</span>
            </h1>
            <div className="tagline">Innovate for Odisha and Build for the Future.</div>
            <p className="sub">
              Build practical, impactful AI solutions for Odisha. Compete through regional rounds, receive expert mentorship, and take high-potential solutions toward incubation.
            </p>
            <div className="cta-row">
              <a
                className="btn btn-primary"
                href="https://docs.google.com/forms/d/1qqRZuBO3jY_4MsAHXTMBu3DKJGecwP76hqcGJxvKp0o"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start your application
                <ExternalLink size={16} aria-hidden />
              </a>
              <a className="btn btn-light" href="#themes">
                Explore themes
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <div className="mini">Grand Finale</div>
            <div className="prize">₹1,50,000</div>
            <div style={{ fontWeight: 600 }}>Prizes worth INR 1,50,000</div>
            <div className="date-box">
              <div className="stat">
                <b>20 Dec 2026</b>
                <span>Finale date</span>
              </div>
              <div className="stat">
                <b>SOA University</b>
                <span>Bhubaneswar</span>
              </div>
              <div className="stat">
                <b>12 Teams</b>
                <span>Final round</span>
              </div>
              <div className="stat">
                <b>4 Members</b>
                <span>Group size</span>
              </div>
            </div>
            <p style={{ margin: '18px 0 0', color: 'var(--muted)', fontSize: '13px' }}>
              <strong>Qualification:</strong> Top 3 teams from each of the four regions advance to the final round.
            </p>
          </aside>
        </div>
      </header>

      <section>
        <div className="hackathon-container">
          <div className="section-head">
            <div>
              <div className="eyebrow">The Challenge</div>
              <h2>From ideas to impact.</h2>
            </div>
            <p className="lead">
              The hackathon focuses on <strong>Applications of AI</strong>, with tracks spanning infrastructure, human well-being, future technologies and disruptive innovation.
            </p>
          </div>
          <div className="grid-4">
            <div className="info-card">
              <div className="icon">01</div>
              <h3>Build</h3>
              <p>Develop a meaningful AI-powered solution addressing a real problem.</p>
            </div>
            <div className="info-card">
              <div className="icon">02</div>
              <h3>Compete</h3>
              <p>Participate through Odisha’s four regional nodal centres.</p>
            </div>
            <div className="info-card">
              <div className="icon">03</div>
              <h3>Mentor</h3>
              <p>Regional winners receive mentoring from expert committee members.</p>
            </div>
            <div className="info-card">
              <div className="icon">04</div>
              <h3>Incubate</h3>
              <p>Solutions beyond TRL 4 may be mentored/incubated by AIC-SOA for a possible startup.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="regions" style={{ paddingTop: '10px' }}>
        <div className="hackathon-container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Across Odisha</div>
              <h2>Four regions. One AI mission.</h2>
            </div>
            <p className="lead">Select your nodal centre based on the district in which your institute is located.</p>
          </div>
          <div className="regions">
            <div className="region">
              <h3>North Odisha</h3>
              <div className="node">Maharaja Sriram Chandra Bhanja Deo University, Baripada</div>
              <p>Angul, Keonjhar, Balasore, Bhadrak, Mayurbhanj &amp; Dhenkanal.</p>
            </div>
            <div className="region">
              <h3>Western Odisha</h3>
              <div className="node">NIT, Rourkela</div>
              <p>Balangir, Subarnapur, Sambalpur, Bargarh, Boudh, Deogarh, Jharsuguda &amp; Sundargarh.</p>
            </div>
            <div className="region">
              <h3>Central Odisha</h3>
              <div className="node">SOA, Bhubaneswar</div>
              <p>Cuttack, Jagatsinghpur, Jajpur, Kendrapara, Khordha, Nayagarh &amp; Puri.</p>
            </div>
            <div className="region">
              <h3>Southern Odisha</h3>
              <div className="node">NIST University, Berhampur</div>
              <p>Gajapati, Ganjam, Kalahandi, Kandhamal, Koraput, Malkangiri, Nabarangpur, Nuapada &amp; Rayagada.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="themes" id="themes">
        <div className="hackathon-container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Applications of AI</div>
              <h2>Choose your frontier.</h2>
            </div>
            <p className="lead">Build at the intersection of AI, society, infrastructure and emerging technologies.</p>
          </div>
          <div className="theme-grid">
            <div className="theme-card">
              <h3>1. AI Enabling Infrastructure &amp; Support</h3>
              <ul>
                <li>AI for Power, Energy, and Smart Grids</li>
                <li>AI for IoT, Edge Computing, and Autonomous Systems</li>
                <li>Cybersecurity, Privacy, and Trustworthy AI</li>
                <li>Ethics, Fairness, and Governance of AI</li>
                <li>AI Benchmarking, Testbeds, and Open-Source Ecosystems</li>
              </ul>
            </div>
            <div className="theme-card">
              <h3>2. AI &amp; Human Well-Being</h3>
              <ul>
                <li>AI for Healthcare and Biomedical Engineering</li>
                <li>AI for Smart Cities, Agriculture, and Sustainable Development</li>
                <li>AI for Governance and Social Good (Odisha Government Priority)</li>
                <li>AI for Governance, Disaster Management</li>
                <li>AI in Art, Music, and Humanities</li>
              </ul>
            </div>
            <div className="theme-card">
              <h3>3. AI Future &amp; Disruption</h3>
              <ul>
                <li>Quantum Computing and AI</li>
                <li>AI for Next-Generation Networks and Connectivity</li>
                <li>Green AI Computing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="journey">
        <div className="hackathon-container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Participation Journey</div>
              <h2>How to apply.</h2>
            </div>
            <p className="lead">A simple regional pathway from application to the Odisha AI Conference 2026 finale.</p>
          </div>
          <div className="timeline timeline-5">
            <div className="step">
              <div className="num">1</div>
              <h3>Apply Online</h3>
              <p>Submit your application via the official Google Form.</p>
            </div>
            <div className="step">
              <div className="num">2</div>
              <h3>Select your nodal centre</h3>
              <p>Choose the centre corresponding to your institute’s district.</p>
            </div>
            <div className="step step-highlight">
              <div className="num num-highlight">3</div>
              <h3>Regional Selection</h3>
              <p className="step-date">Around 20 Nov 2026</p>
              <p>Regional screening and evaluation at your nodal centre.</p>
            </div>
            <div className="step">
              <div className="num">4</div>
              <h3>Apply &amp; Compete</h3>
              <p>Shortlisted teams present solutions at the regional hackathon event.</p>
            </div>
            <div className="step">
              <div className="num">5</div>
              <h3>Finale at SOA</h3>
              <p>Regional winners exhibit solutions at OAIC 2026 on 20 Dec 2026.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" style={{ paddingTop: '10px' }}>
        <div className="hackathon-container contacts">
          <div className="contact-card">
            <div className="eyebrow">Regional Chairs</div>
            <h2 style={{ marginBottom: '18px' }}>Need regional guidance?</h2>
            <div className="table-scroll">
            <table className="contact-table">
              <thead>
                <tr>
                  <th>Region</th>
                  <th>Chair</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Western</td>
                  <td>Prof. Suchismita Chinara</td>
                  <td>
                    <a href="mailto:suchismita@nitrkl.ac.in">suchismita@nitrkl.ac.in</a>
                  </td>
                </tr>
                <tr>
                  <td>Central</td>
                  <td>Prof. Ashis Pati</td>
                  <td>
                    <a href="mailto:ashispati@soa.ac.in">ashispati@soa.ac.in</a>
                  </td>
                </tr>
                <tr>
                  <td>Northern</td>
                  <td>Prof. Swarupananda Bissoyi</td>
                  <td>
                    <a href="mailto:swarupananda@gmail.com">swarupananda@gmail.com</a>
                  </td>
                </tr>
                <tr>
                  <td>Southern</td>
                  <td>Prof. Sanjeet K. Subudhi</td>
                  <td>
                    <a href="mailto:sksubudhi@nist.edu">sksubudhi@nist.edu</a>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
          <div className="apply apply-requirements">
            <div className="eyebrow">Submission Requirements</div>
            <h2>What to submit.</h2>
            <ul className="requirements-list">
              <li>
                <Presentation className="req-icon" aria-hidden />
                <span><strong>Idea PPT:</strong> present your concept, approach &amp; solution</span>
              </li>
              <li>
                <FileText className="req-icon" aria-hidden />
                <span><strong>Abstract:</strong> a brief written summary of your project</span>
              </li>
              <li>
                <Video className="req-icon" aria-hidden />
                <span><strong>3-minute video:</strong> a demo or pitch of your AI solution</span>
              </li>
            </ul>
            <div style={{ marginTop: '16px' }}>
              <a
                className="btn btn-primary"
                href="https://docs.google.com/forms/d/1qqRZuBO3jY_4MsAHXTMBu3DKJGecwP76hqcGJxvKp0o"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Apply now
                <ExternalLink size={16} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="hackathon-footer-strip">
        <div className="hackathon-container foot">
          <div>
            <strong style={{ color: 'var(--ink)' }}>Odisha AI Hackathon 2026</strong> · Innovate for Odisha and Build for the Future
          </div>
          <div>Finale · 20 December 2026 · SOA University, Bhubaneswar</div>
        </div>
      </div>
    </div>
  );
}
