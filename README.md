<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gustavo Funchal — PhD Researcher</title>
<meta name="description" content="Gustavo Funchal — PhD Researcher in distributed intrusion detection for the Industrial IoT using Multi-Agent Systems across the edge–cloud continuum.">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Hanken+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

<style>
:root{
  --bg:        #070b14;
  --bg-soft:   #0c1322;
  --panel:     #0f1828;
  --line:      rgba(120,160,200,.12);
  --ink:       #e8eef6;
  --ink-soft:  #9fb0c6;
  --ink-faint: #5e708a;
  --accent:    #4fe0c4;   /* teal-cyan */
  --accent-2:  #7aa2ff;   /* electric blue */
  --glow:      rgba(79,224,196,.16);
  --serif: "Fraunces", Georgia, serif;
  --sans:  "Hanken Grotesk", system-ui, sans-serif;
  --mono:  "JetBrains Mono", monospace;
}

*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  background:var(--bg);
  color:var(--ink);
  font-family:var(--sans);
  font-size:17px;
  line-height:1.7;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}

/* ---------- animated network background ---------- */
#net{
  position:fixed; inset:0;
  width:100%; height:100%;
  z-index:0;
  display:block;
}
.bg-veil{
  position:fixed; inset:0; z-index:1; pointer-events:none;
  background:
    radial-gradient(900px 600px at 78% -5%, var(--glow), transparent 60%),
    radial-gradient(700px 500px at 5% 30%, rgba(122,162,255,.10), transparent 60%),
    linear-gradient(180deg, rgba(7,11,20,.30), rgba(7,11,20,.86) 60%, var(--bg) 100%);
}

.wrap{position:relative; z-index:2; max-width:1040px; margin:0 auto; padding:0 28px}

/* ---------- nav ---------- */
nav{
  position:fixed; top:0; left:0; right:0; z-index:20;
  display:flex; align-items:center; justify-content:space-between;
  padding:18px 32px;
  backdrop-filter:blur(10px);
  background:linear-gradient(180deg, rgba(7,11,20,.72), rgba(7,11,20,0));
  border-bottom:1px solid transparent;
  transition:border-color .4s, background .4s;
}
nav.scrolled{ border-bottom:1px solid var(--line); background:rgba(7,11,20,.82);}
nav .brand{ font-family:var(--mono); font-size:.82rem; letter-spacing:.04em; color:var(--ink); text-decoration:none}
nav .brand b{ color:var(--accent); font-weight:500}
nav .links{ display:flex; gap:26px; align-items:center}
nav .links a{
  font-family:var(--mono); font-size:.74rem; letter-spacing:.05em; text-transform:uppercase;
  color:var(--ink-soft); text-decoration:none; transition:color .25s; position:relative;
}
nav .links a::after{
  content:""; position:absolute; left:0; bottom:-5px; height:1px; width:0; background:var(--accent); transition:width .3s;
}
nav .links a:hover{ color:var(--ink)} nav .links a:hover::after{ width:100%}
@media(max-width:720px){ nav .links a:not(.cta){display:none} nav{padding:14px 20px} }

/* ---------- hero ---------- */
header{
  min-height:100vh; display:flex; align-items:center;
  padding:120px 0 80px;
}
.kicker{
  font-family:var(--mono); font-size:.78rem; letter-spacing:.22em; text-transform:uppercase;
  color:var(--accent); margin-bottom:22px; display:flex; align-items:center; gap:12px;
}
.kicker .dot{ width:7px; height:7px; border-radius:50%; background:var(--accent); box-shadow:0 0 12px var(--accent); animation:pulse 2.4s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.7)}}

h1{
  font-family:var(--serif); font-weight:400;
  font-size:clamp(3rem, 8vw, 5.8rem); line-height:.98; letter-spacing:-.02em;
  margin-bottom:26px;
}
h1 em{ font-style:italic; color:var(--accent)}
.lead{
  font-size:clamp(1.05rem,2.2vw,1.32rem); color:var(--ink-soft); max-width:620px; line-height:1.65;
}
.lead b{ color:var(--ink); font-weight:600}
.affil{
  margin-top:30px; display:flex; flex-wrap:wrap; gap:10px 22px; font-family:var(--mono);
  font-size:.8rem; color:var(--ink-faint);
}
.affil span{display:flex; align-items:center; gap:8px}
.affil svg{width:15px; height:15px; opacity:.8; flex:none}

.hero-actions{ margin-top:40px; display:flex; flex-wrap:wrap; gap:14px; align-items:center}

/* ---------- buttons / social ---------- */
.cta{
  font-family:var(--mono); font-size:.78rem; letter-spacing:.04em;
  padding:12px 22px; border-radius:999px; text-decoration:none;
  background:var(--accent); color:#04110d; font-weight:500;
  transition:transform .25s, box-shadow .25s; box-shadow:0 0 0 rgba(79,224,196,0);
}
.cta:hover{ transform:translateY(-2px); box-shadow:0 10px 30px -8px var(--accent)}
.ghost{ background:transparent; color:var(--ink); border:1px solid var(--line)}
.ghost:hover{ border-color:var(--accent); box-shadow:none}

.social{ display:flex; gap:10px}
.social a{
  width:42px; height:42px; display:grid; place-items:center;
  border:1px solid var(--line); border-radius:12px; color:var(--ink-soft);
  transition:all .25s; background:rgba(255,255,255,.01);
}
.social a:hover{ color:var(--accent); border-color:var(--accent); transform:translateY(-3px); background:var(--glow)}
.social svg{ width:19px; height:19px}

/* ---------- sections ---------- */
section{ padding:90px 0; position:relative}
.sec-head{ display:flex; align-items:baseline; gap:18px; margin-bottom:48px}
.sec-num{ font-family:var(--mono); font-size:.8rem; color:var(--accent); letter-spacing:.1em}
.sec-head h2{
  font-family:var(--serif); font-weight:400; font-size:clamp(1.8rem,4vw,2.6rem); letter-spacing:-.01em;
}
.sec-head .rule{ flex:1; height:1px; background:linear-gradient(90deg,var(--line),transparent)}

.prose{ font-size:1.08rem; color:var(--ink-soft); max-width:680px; line-height:1.8}
.prose b{ color:var(--ink); font-weight:600}
.prose a{ color:var(--accent); text-decoration:none; border-bottom:1px solid rgba(79,224,196,.3)}
.prose a:hover{ border-color:var(--accent)}

/* research tags */
.tags{ display:flex; flex-wrap:wrap; gap:12px; margin-top:8px}
.tag{
  font-family:var(--mono); font-size:.82rem; padding:9px 16px; border-radius:10px;
  border:1px solid var(--line); color:var(--ink-soft); background:var(--panel);
  transition:all .3s;
}
.tag:hover{ color:var(--accent); border-color:var(--accent); transform:translateY(-2px)}

/* publications */
.pub{
  display:grid; grid-template-columns:auto 1fr; gap:24px;
  padding:26px 0; border-top:1px solid var(--line);
}
.pub:last-child{ border-bottom:1px solid var(--line)}
.pub .yr{ font-family:var(--mono); font-size:.8rem; color:var(--accent); padding-top:4px}
.pub .venue{ font-family:var(--mono); font-size:.72rem; letter-spacing:.05em; text-transform:uppercase; color:var(--ink-faint); margin-bottom:6px}
.pub h3{ font-family:var(--serif); font-weight:500; font-size:1.22rem; line-height:1.35; margin-bottom:8px}
.pub p{ color:var(--ink-soft); font-size:.96rem; max-width:640px}
.pub .links{ margin-top:12px; display:flex; flex-wrap:wrap; gap:16px}
.pub .links a{ font-family:var(--mono); font-size:.74rem; color:var(--accent); text-decoration:none; letter-spacing:.03em}
.pub .links a:hover{ text-decoration:underline}
.pub .links a.disabled{ color:var(--ink-faint); pointer-events:none}

/* project cards */
.grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:20px}
.card{
  background:var(--panel); border:1px solid var(--line); border-radius:18px; padding:28px;
  position:relative; overflow:hidden; transition:transform .35s, border-color .35s;
  text-decoration:none; display:block; color:inherit;
}
.card::before{
  content:""; position:absolute; inset:0; background:radial-gradient(400px 200px at var(--mx,50%) var(--my,0%), var(--glow), transparent 70%);
  opacity:0; transition:opacity .4s;
}
.card:hover{ transform:translateY(-5px); border-color:rgba(79,224,196,.4)}
.card:hover::before{ opacity:1}
.card .ico{ width:36px; height:36px; border-radius:9px; display:grid; place-items:center; background:var(--glow); color:var(--accent); margin-bottom:18px}
.card h3{ font-family:var(--serif); font-weight:500; font-size:1.2rem; margin-bottom:10px; position:relative}
.card p{ color:var(--ink-soft); font-size:.94rem; position:relative}
.card .more{ margin-top:16px; font-family:var(--mono); font-size:.74rem; color:var(--accent); display:inline-flex; gap:7px; align-items:center; position:relative}
.card:hover .more svg{ transform:translateX(4px)}
.card .more svg{ width:13px; height:13px; transition:transform .3s}

/* contact */
.contact-card{
  background:linear-gradient(135deg, var(--panel), var(--bg-soft));
  border:1px solid var(--line); border-radius:24px; padding:48px;
  text-align:center; position:relative; overflow:hidden;
}
.contact-card::after{
  content:""; position:absolute; inset:0; pointer-events:none;
  background:radial-gradient(500px 300px at 50% -20%, var(--glow), transparent 65%);
}
.contact-card h2{ font-family:var(--serif); font-weight:400; font-size:clamp(1.8rem,4vw,2.6rem); margin-bottom:14px; position:relative}
.contact-card p{ color:var(--ink-soft); max-width:480px; margin:0 auto 28px; position:relative}
.contact-card .social{ justify-content:center; position:relative}

footer{ padding:50px 0 60px; text-align:center; border-top:1px solid var(--line); margin-top:40px}
footer p{ font-family:var(--mono); font-size:.74rem; color:var(--ink-faint)}

/* reveal animation */
.reveal{ opacity:0; transform:translateY(28px); transition:opacity .8s cubic-bezier(.2,.6,.2,1), transform .8s cubic-bezier(.2,.6,.2,1)}
.reveal.in{ opacity:1; transform:none}
.d1{transition-delay:.08s}.d2{transition-delay:.16s}.d3{transition-delay:.24s}.d4{transition-delay:.32s}.d5{transition-delay:.40s}

@media (prefers-reduced-motion: reduce){
  .reveal{opacity:1;transform:none;transition:none}
  .kicker .dot{animation:none}
  html{scroll-behavior:auto}
}
</style>
</head>
<body>

<canvas id="net"></canvas>
<div class="bg-veil"></div>

<nav id="nav">
  <a href="#top" class="brand">gustavo<b>.funchal</b></a>
  <div class="links">
    <a href="#about">About</a>
    <a href="#research">Research</a>
    <a href="#publications">Publications</a>
    <a href="#projects">Projects</a>
    <a href="#contact" class="cta">Contact</a>
  </div>
</nav>

<div class="wrap" id="top">

<!-- ===================== HERO ===================== -->
<header>
  <div>
    <div class="kicker reveal"><span class="dot"></span> PhD Researcher · Industrial IoT Security</div>
    <h1 class="reveal d1">Gustavo <em>Funchal</em></h1>
    <p class="lead reveal d2">
      I design <b>distributed intrusion detection systems</b> for the Industrial IoT,
      built on <b>multi-agent systems</b> that reason and adapt across the
      <b>edge–cloud continuum</b>.
    </p>

    <div class="affil reveal d3">
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01"/></svg>
        CeDRI · Instituto Politécnico de Bragança
      </span>
      <span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18"/></svg>
        BISITE · University of Salamanca
      </span>
    </div>

    <div class="hero-actions reveal d4">
      <a href="#publications" class="cta">View publications</a>
      <a href="#" class="cta ghost" id="cv-link">Download CV</a>
      <div class="social">
        <!-- Google Scholar -->
        <a id="scholar" href="#" title="Google Scholar" aria-label="Google Scholar">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 9l11 7 9-5.7V17h2V9L12 2zM5 14.5V18c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.5l-7 4.5-7-4.5z"/></svg>
        </a>
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/gustavo-silva-funchal-bba32014a/" title="LinkedIn" aria-label="LinkedIn" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.08 1.4-2.08 2.85V21H9z"/></svg>
        </a>
        <!-- GitHub -->
        <a href="https://github.com/GustavoFunchal" title="GitHub" aria-label="GitHub" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.9c-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9l-.01 2.81c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>
        </a>
        <!-- ORCID -->
        <a id="orcid" href="#" title="ORCID" aria-label="ORCID">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8.2 7.4a.92.92 0 1 1 0 1.84.92.92 0 0 1 0-1.84zM7.3 10.3h1.8v6.4H7.3zM11 10.3h1.73v.87h.02c.24-.45.83-.93 1.71-.93 1.83 0 2.17 1.2 2.17 2.77v3.7h-1.8v-3.28c0-.78-.01-1.79-1.09-1.79s-1.26.85-1.26 1.73v3.34H11z"/></svg>
        </a>
        <!-- Email -->
        <a href="mailto:gustavofunchal@ipb.pt" title="Email" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
        </a>
      </div>
    </div>
  </div>
</header>

<!-- ===================== ABOUT ===================== -->
<section id="about">
  <div class="sec-head reveal"><span class="sec-num">01</span><h2>About</h2><span class="rule"></span></div>
  <p class="prose reveal d1">
    I'm a final-year PhD researcher at <b>CeDRI</b> (Research Centre in Digitalization and Intelligent
    Robotics), Instituto Politécnico de Bragança, Portugal, and affiliated with the <b>BISITE</b> group
    at the University of Salamanca. My work is supported by an <b>FCT</b> PhD grant.
  </p>
  <p class="prose reveal d2" style="margin-top:18px">
    My research sits at the intersection of <b>cybersecurity</b>, <b>multi-agent systems</b> and
    <b>machine learning</b>: I build collaborative intrusion detection architectures where lightweight
    local agents run on edge devices while global agents coordinate, learn, and adapt in the cloud.
    So, the system keeps improving against new and evolving threats in industrial environments.
  </p>
</section>

<!-- ===================== RESEARCH ===================== -->
<section id="research">
  <div class="sec-head reveal"><span class="sec-num">02</span><h2>Research interests</h2><span class="rule"></span></div>
  <p class="prose reveal d1" style="margin-bottom:26px">
    Themes I work on, from the edge sensor up to the cloud coordination layer:
  </p>
  <div class="tags reveal d2">
    <span class="tag">Intrusion Detection Systems</span>
    <span class="tag">Industrial IoT (IIoT)</span>
    <span class="tag">Industry 4.0 (I4.0)</span>
    <span class="tag">Multi-Agent Systems</span>
    <span class="tag">Edge–Cloud Continuum</span>
    <span class="tag">Machine Learning</span>
    <span class="tag">Reinforcement Learning</span>
    <span class="tag">Cyber-Physical Systems</span>
    <span class="tag">Adaptive Security</span>
    <span class="tag">Agent Trust &amp; Collaboration</span>
  </div>
</section>

<!-- ===================== PUBLICATIONS ===================== -->
<section id="publications">
  <div class="sec-head reveal"><span class="sec-num">03</span><h2>Selected publications</h2><span class="rule"></span></div>

  <div class="pub reveal">
    <div class="yr">2026</div>
    <div>
      <div class="venue">Springer Nature Computer Science</div>
      <h3>A Cloud-Driven Support Layer for Enhancing Distributed IDS in IoT Networks</h3>
      <p>Introduces a cloud layer where global agents use reinforcement learning to adaptively tune the collaborative detection process across heterogeneous local agents.</p>
      <div class="links">
        <a href="#" class="disabled">[DOI](https://doi.org/10.1007/s42979-026-04750-x)</a>
        <a href="#scholar">Cite</a>
      </div>
    </div>
  </div>

  <div class="pub reveal">
    <div class="yr">2025</div>
    <div>
      <div class="venue">ICISSP · 11th Int. Conf. on Information Systems Security and Privacy</div>
      <h3>Distributed Machine Learning Strategies and Agent Collaboration for IIoT Intrusion Detection</h3>
      <p>Explores distributed ML strategies and how local agents collaborate to improve detection performance under class-imbalanced, real-world network traffic.</p>
      <div class="links">
        <a href="#" class="disabled">[DOI](https://www.scitepress.org/Papers/2025/131544/131544.pdf)</a>
        <a href="#scholar">Cite</a>
      </div>
    </div>
  </div>

  <div class="pub reveal">
    <div class="yr">2024</div>
    <div>
      <div class="venue">IEEE ICPS · Int. Conf. on Industrial Cyber-Physical Systems</div>
      <h3>An Edge Multi-Agent Architecture for Intrusion Detection in Industrial Systems</h3>
      <p>Proposes a multi-agent IDS architecture deployed at the edge, with local agents running ML models on resource-constrained devices such as the Raspberry Pi.</p>
      <div class="links">
        <a href="#" class="disabled">[DOI](https://10.1109/ICPS59941.2024.10639952)</a>
        <a href="#scholar">Cite</a>
      </div>
    </div>
  </div>

  <p class="prose reveal" style="margin-top:30px; font-size:.96rem; color:var(--ink-faint)">
    A full list is available on
    <a id="scholar-inline" href="#">Google Scholar</a>. ↑ Titles above are descriptive placeholders —
    swap in your exact titles &amp; DOIs.
  </p>
</section>

<!-- ===================== PROJECTS ===================== -->
<section id="projects">
  <div class="sec-head reveal"><span class="sec-num">04</span><h2>Projects &amp; resources</h2><span class="rule"></span></div>
  <div class="grid">

    <a class="card reveal d1" href="https://cybersec.ipb.pt/ctf-ieee-ies" target="_blank" rel="noopener">
      <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 22V4l8-2 8 2v18M4 8h16M4 14h16"/><circle cx="12" cy="11" r="2"/></svg></div>
      <h3>IEEE IES International CTF</h3>
      <p>Capture the Flag competition on cybersecurity in IoT-based applications.</p>
      <span class="more">Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </a>

    <a class="card reveal d2" href="https://dados.ipb.pt/dataset.xhtml?persistentId=doi:10.34620/dadosipb/JLONBO" target="_blank" rel="noopener">
      <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg></div>
      <h3>IDS Dataset — Conveyor System</h3>
      <p>Network- and agent-level data under normal operation, DoS attacks, and malicious-agent attacks in a multi-agent cyber-physical conveyor.</p>
      <span class="more">View dataset <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </a>

    <a class="card reveal d3" href="https://bibliotecadigital.ipb.pt/bitstream/10198/22980/1/Funchal_Gustavo.pdf" target="_blank" rel="noopener">
      <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg></div>
      <h3>Master's Thesis</h3>
      <p>Security mechanisms for a multi-agent cyber-physical conveyor system using machine learning.</p>
      <span class="more">Read thesis <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </a>

    <a class="card reveal d4" href="https://github.com/GustavoFunchal" target="_blank" rel="noopener">
      <div class="ico"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.9c-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9l-.01 2.81c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg></div>
      <h3>Code on GitHub</h3>
      <p>Implementations, experiments and tooling behind the IDS and multi-agent work.</p>
      <span class="more">All repositories <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </a>

  </div>
</section>

<!-- ===================== CONTACT ===================== -->
<section id="contact">
  <div class="contact-card reveal">
    <h2>Let's collaborate</h2>
    <p>Open to research collaborations, discussions on IIoT security and multi-agent systems, and academic exchange. Reach out anytime.</p>
    <div class="social">
      <a id="scholar-2" href="#" title="Google Scholar" aria-label="Google Scholar"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 9l11 7 9-5.7V17h2V9L12 2zM5 14.5V18c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.5l-7 4.5-7-4.5z"/></svg></a>
      <a href="https://www.linkedin.com/in/gustavo-silva-funchal-bba32014a/" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.08 1.4-2.08 2.85V21H9z"/></svg></a>
      <a href="https://github.com/GustavoFunchal" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.9c-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9l-.01 2.81c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg></a>
      <a id="orcid-2" href="#" title="ORCID" aria-label="ORCID"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8.2 7.4a.92.92 0 1 1 0 1.84.92.92 0 0 1 0-1.84zM7.3 10.3h1.8v6.4H7.3zM11 10.3h1.73v.87h.02c.24-.45.83-.93 1.71-.93 1.83 0 2.17 1.2 2.17 2.77v3.7h-1.8v-3.28c0-.78-.01-1.79-1.09-1.79s-1.26.85-1.26 1.73v3.34H11z"/></svg></a>
      <a href="mailto:gustavofunchal@ipb.pt" title="Email" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></a>
    </div>
  </div>
</section>

<footer>
  <p>© <span id="yr"></span> Gustavo Funchal · Built with curiosity in Bragança, Portugal</p>
</footer>

</div>

<script>
/* ---------- footer year ---------- */
document.getElementById('yr').textContent = new Date().getFullYear();

/* ---------- sticky nav ---------- */
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40));

/* ---------- scroll reveal ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
}, { threshold:.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ---------- card glow follows cursor ---------- */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
});

/* ---------- animated agent network ---------- */
(function(){
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.getElementById('net');
  const ctx = canvas.getContext('2d');
  let w, h, nodes = [], mouse = {x:-999,y:-999}, dpr = Math.min(devicePixelRatio||1, 2);

  function resize(){
    w = canvas.width = innerWidth * dpr;
    h = canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth+'px';
    canvas.style.height = innerHeight+'px';
    const count = Math.min(90, Math.floor(innerWidth*innerHeight/16000));
    nodes = Array.from({length:count}, () => ({
      x: Math.random()*w, y: Math.random()*h,
      vx: (Math.random()-.5)*0.18*dpr, vy: (Math.random()-.5)*0.18*dpr,
      r: (Math.random()*1.6+0.8)*dpr,
      pulse: Math.random()*Math.PI*2
    }));
  }
  resize(); addEventListener('resize', resize);
  addEventListener('pointermove', e => { mouse.x = e.clientX*dpr; mouse.y = e.clientY*dpr; });
  addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });

  const LINK = 150*dpr;
  function draw(){
    ctx.clearRect(0,0,w,h);

    // links
    for (let i=0;i<nodes.length;i++){
      const a = nodes[i];
      for (let j=i+1;j<nodes.length;j++){
        const b = nodes[j];
        const dx=a.x-b.x, dy=a.y-b.y, d=Math.hypot(dx,dy);
        if (d < LINK){
          const o = (1 - d/LINK)*0.5;
          ctx.strokeStyle = `rgba(79,224,196,${o})`;
          ctx.lineWidth = 0.6*dpr;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
      // link to cursor
      const mdx=a.x-mouse.x, mdy=a.y-mouse.y, md=Math.hypot(mdx,mdy);
      if (md < LINK*1.4){
        const o = (1 - md/(LINK*1.4))*0.7;
        ctx.strokeStyle = `rgba(122,162,255,${o})`;
        ctx.lineWidth = 0.8*dpr;
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(mouse.x,mouse.y); ctx.stroke();
      }
    }
    // nodes
    for (const n of nodes){
      n.x += n.vx; n.y += n.vy; n.pulse += 0.02;
      if (n.x<0||n.x>w) n.vx*=-1;
      if (n.y<0||n.y>h) n.vy*=-1;
      const glow = 0.6 + Math.sin(n.pulse)*0.4;
      ctx.fillStyle = `rgba(120,210,200,${0.5+glow*0.4})`;
      ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2); ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  if (reduce){
    // draw a single static frame
    draw = function(){ ctx.clearRect(0,0,w,h);
      for(const n of nodes){ ctx.fillStyle='rgba(120,210,200,.5)'; ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2); ctx.fill(); } };
    draw();
  } else {
    draw();
  }
})();

/* ---------- placeholder links (edit these once) ---------- */
const SCHOLAR = "https://scholar.google.com/citations?user=eegfgI4AAAAJ&hl=pt-PT&oi=ao"; 
const ORCID   = "https://orcid.org/0000-0002-9691-9956"; 
const CV      = "https://www.cienciavitae.pt/9416-F3F1-B3EF"; 
['scholar','scholar-2','scholar-inline'].forEach(id=>{ const el=document.getElementById(id); if(el&&SCHOLAR!=="#") el.href=SCHOLAR; });
['orcid','orcid-2'].forEach(id=>{ const el=document.getElementById(id); if(el&&ORCID!=="#") el.href=ORCID; });
const cv=document.getElementById('cv-link'); if(cv&&CV!=="#") cv.href=CV;
</script>
</body>
</html>
