import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CustomCursor from './components/CustomCursor/CustomCursor';
import './App.css';

function App() {
  const techStack = [
    { name: 'C++', color: '#00599C' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'PowerShell', color: '#5391FE' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Bash', color: '#4EAA25' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'HTML5', color: '#E34F26' },
    { name: 'Java', color: '#007396' },
    { name: 'Kotlin', color: '#7F52FF' },
    { name: 'Dart', color: '#0175C2' },
    { name: 'Rust', color: '#000000' },
    { name: 'Azure', color: '#0089D6' },
    { name: 'AWS', color: '#232F3E' },
    { name: 'Firebase', color: '#FFCA28' },
    { name: '.NET', color: '#512BD4' },
    { name: 'Vite', color: '#646CFF' },
    { name: 'React', color: '#61DAFB' },
    { name: 'NGINX', color: '#009639' },
    { name: 'SQLite', color: '#003B57' },
    { name: 'Appwrite', color: '#F02E65' }
  ];

  return (
    <>
      <CustomCursor />
      <Navbar />

      <main className="main-content">

        {/* Hero Section */}
        <section className="hero-section" id="home">
          <h1 className="hero-title">
            <span className="text-blue">Kunal</span> Singha
          </h1>

          <div className="hero-subtitle">
            <p>CTO of Aternex Solutions | Android Frameworks</p>
            <p className="we-are-text">I am</p>
            <div className="hero-logo-text">
              HUNTERZEN
            </div>
          </div>

          <div className="button-group">
            <button
              className="btn btn-outline border-blue"
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
            >
              About Me
            </button>
            <a href="mailto:kunalsingha390@gmail.com" className="btn btn-outline border-red">Contact Me</a>
          </div>
        </section>

        {/* Info Card Section */}
        <section className="card-section" id="about">
          <div className="info-card">
            <div className="card-content">
              {/* Left Column */}
              <div className="card-text-container">
                <h2 className="card-title">
                  <span className="text-blue">About</span> Kunal Singha
                </h2>
                <p className="card-description">
                  I'm a dedicated and passionate software engineer with a core focus on <strong>Full-Stack Development</strong> and <strong>App Development</strong>. Beyond building end-to-end web applications, I am deeply involved in mobile ecosystems as an <strong>Android ROM Developer</strong>—building custom OS experiences and creating port builds. I also serve as the CTO of <span className="text-teal">Aternex Solutions</span>. Currently, I'm expanding my horizons into <strong>Cybersecurity</strong> and am always open to exciting collaborations and providing elite tech support.
                </p>
                <div className="card-footer-text">
                  Let's build something amazing together.
                </div>
              </div>

              {/* Right Column / Graphic */}
              <div className="card-graphic-container">
                <div className="android-badge">
                  <div className="badge-header">DEVELOPER</div>
                  <div className="badge-icon-area">
                    {/* Placeholder Android graphic from reference image */}
                    <div className="green-diamond">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 17L12 21L20 17M4 12L12 16L20 12M4 7L12 11L20 7L12 3L4 7Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="badge-number">JS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section mimicking Evolution X Feature Grid */}
        <section className="skills-section" id="skills">
          <div className="section-header">
            <h2 className="section-title">Tech <span className="text-blue">Stack</span></h2>
            <p className="section-subtitle">Languages, Tools & Frameworks I specialize in.</p>
          </div>

          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div className="tech-badge" key={index} style={{ "--glow-color": tech.color }}>
                <div className="tech-indicator" style={{ backgroundColor: tech.color }}></div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Pinned Projects Section */}
        <section className="projects-section" id="projects">
          <div className="section-header">
            <h2 className="section-title">Pinned <span className="text-blue">Projects</span></h2>
            <p className="section-subtitle">A showcase of my recent work from GitHub.</p>
          </div>

          <div className="projects-grid">
            <a href="https://github.com/HUNTERZEN/Simple-Weather-Code" target="_blank" rel="noreferrer" className="project-card">
              <div className="project-card-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="folder-icon"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="link-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </div>
              <h3 className="project-title">Simple-Weather-Code</h3>
              <p className="project-desc">A simple weather application code.</p>
              <div className="project-footer">
                <span className="project-lang"><span className="lang-dot" style={{ backgroundColor: '#563d7c' }}></span>CSS</span>
              </div>
            </a>

            <a href="https://github.com/HUNTERZEN/Git-AdvanceGG" target="_blank" rel="noreferrer" className="project-card">
              <div className="project-card-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="folder-icon"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="link-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </div>
              <h3 className="project-title">Git-AdvanceGG</h3>
              <p className="project-desc">Advanced Git workflows and optimizations.</p>
              <div className="project-footer">
                <span className="project-lang"><span className="lang-dot" style={{ backgroundColor: '#3572A5' }}></span>Python</span>
              </div>
            </a>

            <a href="https://github.com/HUNTERZEN/Kernel-Builder" target="_blank" rel="noreferrer" className="project-card">
              <div className="project-card-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="folder-icon"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="link-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </div>
              <h3 className="project-title">Kernel-Builder</h3>
              <p className="project-desc">Can make kernel with your device trees links and no need to download anything.</p>
              <div className="project-footer">
                <span className="project-lang"><span className="lang-dot" style={{ backgroundColor: '#89e051' }}></span>Shell</span>
              </div>
            </a>

            <a href="https://github.com/HUNTERZEN/Personal-Developer-Portfolio" target="_blank" rel="noreferrer" className="project-card">
              <div className="project-card-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="folder-icon"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="link-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </div>
              <h3 className="project-title">Developer-Portfolio</h3>
              <p className="project-desc">A high-performance, responsive portfolio website built to showcase projects.</p>
              <div className="project-footer">
                <span className="project-lang"><span className="lang-dot" style={{ backgroundColor: '#f1e05a' }}></span>JavaScript</span>
              </div>
            </a>

            <a href="https://github.com/HUNTERZEN/ExtremeL3" target="_blank" rel="noreferrer" className="project-card">
              <div className="project-card-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="folder-icon"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="link-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </div>
              <h3 className="project-title">ExtremeL3</h3>
              <p className="project-desc">A high-performance system optimization module meticulously tuned for Snapdragon 870.</p>
              <div className="project-footer">
                <span className="project-lang"><span className="lang-dot" style={{ backgroundColor: '#89e051' }}></span>Shell</span>
              </div>
            </a>

            <a href="https://github.com/HUNTERZEN/MaxPerfomanceMagiskModule" target="_blank" rel="noreferrer" className="project-card">
              <div className="project-card-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="folder-icon"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="link-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </div>
              <h3 className="project-title">MaxPerfomanceMagisk</h3>
              <p className="project-desc">A professional, universal system optimization module built for Raw Performance.</p>
              <div className="project-footer">
                <span className="project-lang"><span className="lang-dot" style={{ backgroundColor: '#89e051' }}></span>Shell</span>
                <span className="project-stars">★ 1</span>
              </div>
            </a>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-left">
            <div className="footer-logo">
              HUNTERZEN
            </div>
            <div className="footer-credits">
              Designed & Developed by Kunal Singha
            </div>
          </div>

          <div className="footer-right">
            <div className="social-icons">
              <a href="https://github.com/hunterzen" target="_blank" rel="noreferrer" className="social-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://www.instagram.com/ig_nitroxedits?igsh=MXZ6dXI1MjI2aGlyMg==" target="_blank" rel="noreferrer" className="social-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://t.me/HunterZolomonnnn" target="_blank" rel="noreferrer" className="social-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </a>
            </div>

            <button
              className="scroll-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </button>
          </div>
        </footer>

      </main>
    </>
  );
}

export default App;
