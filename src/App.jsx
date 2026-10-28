import React from 'react';
import {
  ArrowUpRight, BriefcaseBusiness, GraduationCap, Award, Languages,
  MapPin, Phone, Mail, CalendarDays, BookOpen, Trophy, HardHat,
  Download, CheckCircle2
} from 'lucide-react';

const experience = [
  {
    role: 'Storekeeper & Site Worker',
    company: 'U.L.C.C.S. Ltd.',
    period: 'Dec 2018 – Sep 2024',
    detail: 'Supported site operations, storekeeping, material handling and coordination across construction project activities.'
  },
  {
    role: 'Field Staff',
    company: 'Mathrubhumi',
    period: 'Nov 2017 – Nov 2018',
    detail: 'Worked with field operations and coordinated with agents and customers.'
  }
];

const education = [
  { year: '2023', title: 'Master of Business Administration', place: 'Jaipur National University, Jaipur', note: 'Human Resources (HR) · 1422/2200' },
  { year: '2015', title: 'B.A. Economics', place: 'University of Calicut', note: 'B Grade' },
  { year: '2012', title: 'Plus Two – Computer Application with Commerce', place: 'GHSS Vatakara, Puthur', note: 'A Grade' },
  { year: '2010', title: 'SSLC', place: 'B.E.M.H.S. Vatakara', note: 'B Grade' }
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Akhin M home">
          <span className="brand-mark">A<span>.</span></span>
          <span>AKHIN M <small>PORTFOLIO</small></span>
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact" className="nav-cta">Contact <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>Akhin <span>M.</span></h1>
            <h2>Operations · Storekeeping · Site Coordination</h2>
            <p className="hero-description">
              A committed professional with experience in field operations, customer coordination,
              storekeeping and construction-site support. I value teamwork, responsibility and getting
              the details right.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">Explore my experience <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Get in touch</a>
            </div>
            <div className="hero-facts">
              <div><strong>6+</strong><span>Years at U.L.C.C.S. Ltd.</span></div>
              <div><strong>MBA</strong><span>Human Resources</span></div>
              <div><strong>4</strong><span>Languages</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-glow" />
              <img src="/profile.jpg" alt="Portrait of Akhin M" className="portrait" />
              <div className="portrait-caption"><span className="caption-icon"><BriefcaseBusiness size={18} /></span><div><strong>Professional Profile</strong><small>Reliable · Practical · Team-focused</small></div></div>
            </div>
            <div className="floating-card card-location"><MapPin size={17} /><span>Vatakara, Kerala</span></div>
            <div className="floating-card card-ncc"><Award size={19} /><span>NCC C Certificate</span></div>
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          </div>
        </section>

        <section className="stats-strip section-wrap" aria-label="Profile highlights">
          <div><BriefcaseBusiness /><span><strong>Work Experience</strong><small>Field and site operations</small></span></div>
          <div><GraduationCap /><span><strong>Education</strong><small>MBA in Human Resources</small></span></div>
          <div><Trophy /><span><strong>Achievement</strong><small>NCC C Certificate</small></span></div>
          <div><Languages /><span><strong>Languages</strong><small>Malayalam, Tamil, Hindi, English</small></span></div>
        </section>

        <section className="section-wrap content-section" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Professional summary" description="A practical, people-oriented professional who brings a responsible approach to daily operations." />
          <div className="about-grid">
            <div className="about-card about-main">
              <span className="big-quote">“</span>
              <h3>Committed to doing the work well.</h3>
              <p>
                My background combines field staff responsibilities, coordination with agents and customers,
                and storekeeping/site work in a construction environment. I aim to contribute through clear
                communication, dependable execution and a willingness to learn.
              </p>
            </div>
            <div className="about-card focus-card">
              <span className="icon-tile"><CheckCircle2 /></span>
              <h3>Core strengths</h3>
              <div className="skill-tags"><span>Coordination</span><span>Storekeeping</span><span>Customer support</span><span>Site operations</span><span>Teamwork</span><span>Communication</span></div>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="experience">
          <SectionHeading eyebrow="CAREER JOURNEY" title="Work experience" description="Roles and responsibilities drawn from my professional background." />
          <div className="timeline">
            {experience.map((job, index) => (
              <article className="timeline-item" key={job.company}>
                <div className="timeline-marker">{index === 0 ? <HardHat size={18} /> : <BriefcaseBusiness size={18} />}</div>
                <div className="experience-card">
                  <div className="experience-top"><span className="period"><CalendarDays size={14} />{job.period}</span><span className="experience-index">0{index + 1}</span></div>
                  <h3>{job.role}</h3>
                  <h4>{job.company}</h4>
                  <p>{job.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="project-card">
            <div className="project-icon"><HardHat size={24} /></div>
            <div><span className="eyebrow">PROJECT EXPERIENCE</span><h3>Pulluva–Thottilpalam Hill Highway Project (KIIFB)</h3><p>Contractor: U.L.C.C.S. Ltd. · Worked as Storekeeper from September 2022 to August 2023.</p></div>
          </div>
        </section>

        <section className="section-wrap content-section" id="education">
          <SectionHeading eyebrow="LEARNING & GROWTH" title="Education" description="Academic qualifications and professional development." />
          <div className="education-grid">
            {education.map((item, index) => (
              <article className="education-card" key={item.title}>
                <div className="education-icon"><GraduationCap size={20} /></div>
                <span className="education-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.place}</p>
                <small>{item.note}</small>
                <span className="education-number">0{index + 1}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap content-section extras-grid">
          <div className="extra-card">
            <div className="extra-heading"><span className="icon-tile"><Award /></span><div><span className="eyebrow">RECOGNITION</span><h3>Achievements & Awards</h3></div></div>
            <p><strong>NCC C Certificate</strong><br />9(K) Naval NCC Directorate; participated in the IGC held at Kollam.</p>
          </div>
          <div className="extra-card">
            <div className="extra-heading"><span className="icon-tile"><Languages /></span><div><span className="eyebrow">COMMUNICATION</span><h3>Languages</h3></div></div>
            <div className="language-list"><span>Malayalam</span><span>Tamil</span><span>Hindi</span><span>English</span></div>
            <p className="muted-note">Comfortable communicating across a range of everyday and workplace situations.</p>
          </div>
          <div className="extra-card">
            <div className="extra-heading"><span className="icon-tile"><BookOpen /></span><div><span className="eyebrow">PERSONAL INTERESTS</span><h3>Beyond work</h3></div></div>
            <p>Reading books and enjoying sports such as cricket and football.</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div><span className="eyebrow">LET'S CONNECT</span><h2>Have an opportunity in mind?</h2><p>I'd be happy to discuss how my experience can support your team.</p></div>
            <div className="contact-actions">
              <a className="contact-link" href="tel:9037334596"><Phone size={18} /><span><small>CALL ME</small><strong>90373 34596</strong></span><ArrowUpRight /></a>
              <div className="contact-link"><MapPin size={18} /><span><small>LOCATION</small><strong>Vatakara, Kozhikode, Kerala</strong></span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span>AKHIN M <small>PORTFOLIO</small></span></a>
        <p>© {new Date().getFullYear()} Akhin M. Built with React.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </div>
  );
}
