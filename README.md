# my_portfolio
A modern, interactive, and fully responsive personal portfolio website showcasing my skills, projects, coding profiles, and achievements. 

🌐 Live Demo
You can view the live deployed site here: 

✨ Highlights & Features

> Fully responsive UI
> Clean, modern design
> Smooth animations & transitions
> Project cards with hover effects
> Integrated GitHub, LinkedIn, and resume links
> Contact form with direct email support

🛠️ Built With

A simple, elegant section listing the technologies you used in your portfolio or projects.

Minimal & Clean : 
> HTML5
> CSS3 (Custom styling, animations, responsive design)
> JavaScript (Dynamic interactions + ES6+)
> Bootstrap / Tailwind CSS (if used)
> Git & GitHub
> 🚀 Made using Claude & ChatGPT ✨

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nuved Ahmad — Portfolio</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&family=Fira+Code:wght@300;400;600&display=swap" rel="stylesheet">

  <!-- Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>

  <!-- CSS -->
  <link rel="stylesheet" href="style.css" />
</head>
<body>

<!-- ===================================================
     NAVBAR
======================================================= -->
<nav class="navbar" id="navbar">
  <div class="nav-logo">&lt;NUVED /&gt;</div>

  <ul class="nav-links" id="navLinks">
    <li><a class="nav-link active" href="#hero">Home</a></li>
    <li><a class="nav-link" href="#about">About</a></li>
    <li><a class="nav-link" href="#skills">Skills</a></li>
    <li><a class="nav-link" href="#projects">Projects</a></li>
    <li><a class="nav-link" href="#contact">Contact</a></li>
  </ul>

  <!-- Mobile Menu -->
  <button class="hamburger" id="hamburger">
    <span></span><span></span><span></span>
  </button>
</nav>


<!-- ===================================================
     HERO
======================================================= -->
<section class="hero" id="hero">
  <div class="hero-bg">
    <div class="grid-overlay"></div>
    <div class="glow-orb orb1"></div>
    <div class="glow-orb orb2"></div>
  </div>

  <div class="hero-inner">
    <span class="hero-tag">&lt;hero&gt;</span>

    <h1 class="hero-name">
      <span class="name-line">Nuved</span>
      <span class="name-line accent">Ahmad</span>
    </h1>

    <div class="hero-role">
      <span id="typing"></span><span class="cursor">|</span>
    </div>

    <p class="hero-bio">
      Passionate developer specializing in full-stack web development, machine learning solutions,
      and modern UI experiences. I enjoy building meaningful digital products that solve real problems.
    </p>

    <div class="hero-actions">
      <a href="#projects" class="btn btn-primary">View Projects</a>
      <a href="#contact" class="btn btn-ghost">Contact Me</a>
    </div>

    <span class="hero-tag end-tag">&lt;/hero&gt;</span>
  </div>
</section>



<!-- ===================================================
     ABOUT
======================================================= -->
<section id="about" class="section">
  <div class="container">

    <div class="section-label">
      <span class="label-tag">&lt;about&gt;</span>
    </div>
    <h2 class="section-title">About Me</h2>

    <div class="about-grid">

      <!-- Left Column -->
      <div class="about-text">
        <p>
          I'm <strong>Nuved Ahmad</strong>, a developer with a strong passion for
          building elegant, efficient, and impactful digital solutions.
        </p>

        <p>
          I work across <strong>full-stack web development</strong> and
          <strong>machine learning</strong>, creating clean UI designs, scalable backend systems,
          and ML models that solve problems.
        </p>

        <p>
          My focus is always on writing clean, maintainable code and delivering projects
          that truly create value.
        </p>

        <div class="about-meta">
          <div class="meta-item">
            <i class="fa-solid fa-location-dot"></i>
            <div>
              <span class="meta-label">Location</span>
              <span class="meta-value">India</span>
            </div>
          </div>

          <div class="meta-item">
            <i class="fa-solid fa-envelope"></i>
            <div>
              <span class="meta-label">Email</span>
              <span class="meta-value">nuvedahmad@gmail.com</span>
            </div>
          </div>

          <div class="meta-item">
            <i class="fa-solid fa-code"></i>
            <div>
              <span class="meta-label">Role</span>
              <span class="meta-value">Full-Stack Developer</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div>
        <div class="info-card">
          <div class="info-card-title"><i class="fa-solid fa-user"></i> Experience</div>

          <div class="timeline-item">
            <div class="tl-dot"></div>
            <div class="tl-body">
              <h4>Web Developer</h4>
              <span class="tl-date">2023 – Present</span>
              <p>Building intuitive interfaces & functional applications.</p>
              <span class="chip">Frontend</span>
              <span class="chip">Backend</span>
            </div>
          </div>
        </div>

        <div class="info-card">
          <div class="info-card-title"><i class="fa-solid fa-award"></i> Certifications</div>
          
          <div class="cert-list">
            <div class="cert-row">
              <span class="cert-name">Machine Learning</span>
              <span class="cert-org">Coursera</span>
            </div>
            
            <div class="cert-row">
              <span class="cert-name">Full-Stack Web Dev</span>
              <span class="cert-org">Udemy</span>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>




<!-- ===================================================
     SKILLS
======================================================= -->
<section id="skills" class="section skills-section">
  <div class="container">

    <div class="section-label">
      <span class="label-tag">&lt;skills&gt;</span>
    </div>
    <h2 class="section-title">Skills</h2>

    <div class="skills-grid">

      <div class="skill-card">
        <div class="skill-card-icon"><i class="fa-solid fa-code"></i></div>
        <h3>Frontend</h3>
        <div class="skill-pills">
          <span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span>
        </div>
      </div>

      <div class="skill-card">
        <div class="skill-card-icon"><i class="fa-solid fa-server"></i></div>
        <h3>Backend</h3>
        <div class="skill-pills">
          <span>NodeJS</span><span>Express</span><span>MongoDB</span><span>SQL</span>
        </div>
      </div>

      <div class="skill-card">
        <div class="skill-card-icon"><i class="fa-solid fa-brain"></i></div>
        <h3>Machine Learning</h3>
        <div class="skill-pills">
          <span>Python</span><span>TensorFlow</span><span>Sklearn</span>
        </div>
      </div>

    </div>

  </div>
</section>




<!-- ===================================================
     PROJECTS
======================================================= -->
<section id="projects" class="section">
  <div class="container">

    <div class="section-label">
      <span class="label-tag">&lt;projects&gt;</span>
    </div>
    <h2 class="section-title">Projects</h2>

    <div class="projects-grid">

      <!-- Project 1 -->
      <div class="proj-card">
        <div class="proj-thumb ml-thumb">
          <i class="fa-solid fa-robot"></i>
        </div>
        <div class="proj-body">
          <span class="proj-type ml-type">Machine Learning</span>
          <h3>Student Dropout Prediction</h3>
          <p>ML model predicting student dropout probability with accuracy optimization.</p>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="proj-card">
        <div class="proj-thumb backend-thumb">
          <i class="fa-solid fa-database"></i>
        </div>
        <div class="proj-body">
          <span class="proj-type backend-type">Backend</span>
          <h3>API Automation System</h3>
          <p>Automated API workflows for faster backend operations.</p>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="proj-card">
        <div class="proj-thumb web-thumb">
          <i class="fa-solid fa-globe"></i>
        </div>
        <div class="proj-body">
          <span class="proj-type web-type">Web App</span>
          <h3>Portfolio Website</h3>
          <p>Fully responsive personal portfolio with modern UI + animations.</p>
        </div>
      </div>

    </div>
  </div>
</section>



<!-- ===================================================
     CONTACT
======================================================= -->
<section id="contact" class="section">
  <div class="container">
    <div class="section-label">
      <span class="label-tag">&lt;contact&gt;</span>
    </div>
    <h2 class="section-title">Contact</h2>

    <p style="color: var(--text-2); max-width: 520px;">
      Feel free to reach out if you'd like to collaborate or simply say hello 👋
    </p>

    <br/>

    <a href="mailto:nuvedahmad@gmail.com" class="btn btn-primary">Send Email</a>
  </div>
</section>



<!-- ===================================================
     FOOTER
======================================================= -->
<footer style="text-align:center; padding:40px 0; color:var(--text-3); font-size:0.8rem;">
  © 2024 Nuved Ahmad — All Rights Reserved.
</footer>



<!-- ===================================================
     JS — Navbar + Typing
======================================================= -->
<script>
/* Typing text */
const roles = [
  "Full-Stack Developer",
  "Machine Learning Engineer",
  "Problem Solver"
];
let index = 0, charIndex = 0;
const typingElem = document.getElementById("typing");

function typeEffect() {
  if (charIndex < roles[index].length) {
    typingElem.innerHTML += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(() => {
      typingElem.innerHTML = "";
      charIndex = 0;
      index = (index + 1) % roles.length;
      typeEffect();
    }, 1200);
  }
}
typeEffect();

/* Navbar Scroll Effect */
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

/* Mobile Menu */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
</script>

</body>
</html>
