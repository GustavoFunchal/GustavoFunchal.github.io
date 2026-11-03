/* ==========================================================================
   Site assistant — simple FAQ bot for gustavofunchal's GitHub Pages site
   No backend, no API keys, no third parties. Everything runs in the browser.
   To edit answers: change CONFIG and the KB array below.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------------- 1. Config ---------------- */
  const CONFIG = {
    email:    'gustavofunchal@ipb.pt',
    scholar:  'https://scholar.google.com/citations?user=eegfgI4AAAAJ&hl=pt-PT&oi=ao',
    orcid:    'https://orcid.org/0000-0002-9691-9956',
    linkedin: 'https://www.linkedin.com/in/gustavo-silva-funchal-bba32014a/',
    github:   'https://github.com/GustavoFunchal',
    cv:       'https://www.cienciavitae.pt/9416-F3F1-B3EF',
    cedri:    'https://cedri.ipb.pt/',
    bisite:   'https://bisite.usal.es/en',
    title:    'Ask about Gustavo',
    subtitle: 'Quick answers about this page',
    greeting: "Hi! I can answer quick questions about Gustavo's research, publications, projects and how to get in touch. What would you like to know?",
    chips:    ['Research', 'Publications', 'Collaboration', 'Contact']
  };

  const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;
  const mail = (text, subject, body) =>
    `<a href="mailto:${CONFIG.email}?subject=${encodeURIComponent(subject || 'Question from your website')}` +
    (body ? `&body=${encodeURIComponent(body)}` : '') + `">${text}</a>`;

  /* ---------------- 2. Knowledge base ----------------
     keys: words or phrases (any language; accents/case are ignored).
     Single words also match longer words that start with them
     (e.g. "publication" matches "publications").                       */
  const KB = [
    { id: 'bot', keys: ['who are you', 'are you a bot', 'bot', 'what can you do', 'help', 'ajuda', 'ayuda'],
      answer: () => `I'm a simple assistant that answers questions about this page: research, publications, projects, CV and contact. For anything more specific, ${mail('email Gustavo directly')}.` },

    { id: 'about', keys: ['who', 'gustavo', 'yourself', 'background', 'introduce', 'tell me about him', 'quem', 'quien'],
      answer: () => `Gustavo Funchal is a final-year PhD researcher at ${a(CONFIG.cedri, 'CeDRI')} (Instituto Politécnico de Bragança, Portugal), also affiliated with the ${a(CONFIG.bisite, 'BISITE')} group at the University of Salamanca. He works on distributed intrusion detection for the Industrial IoT, using multi-agent systems across the edge–cloud continuum.` },

    { id: 'research', keys: ['research', 'interest', 'topic', 'intrusion', 'detection', 'ids', 'iiot', 'iot', 'industry 4 0', 'multi agent', 'multiagent', 'agent', 'edge cloud', 'continuum', 'cybersecurity', 'security', 'machine learning', 'cyber physical', 'trust', 'investigacao', 'pesquisa', 'investigacion', 'seguranca', 'seguridad'],
      answer: () => `His research combines cybersecurity, multi-agent systems and machine learning. He builds collaborative intrusion detection architectures where lightweight local agents run on edge devices, while global agents in the cloud coordinate, learn and adapt, so detection keeps improving against new and evolving threats in industrial environments.<br><br>Related themes: IIoT, Industry 4.0, reinforcement learning, cyber-physical systems, adaptive security, and agent trust &amp; collaboration.` },

    { id: 'rl', keys: ['reinforcement', 'rl', 'reinforcement learning', 'aprendizagem por reforco', 'aprendizaje por refuerzo'],
      answer: () => `Yes. In the 2026 paper in <i>SN Computer Science</i>, global agents in a cloud layer use reinforcement learning to adaptively tune the collaborative detection process across heterogeneous local agents. ${a('https://doi.org/10.1007/s42979-026-04750-x', 'Read the paper')}.` },

    { id: 'edge', keys: ['edge', 'raspberry', 'edge device', 'constrained', 'embedded'],
      answer: () => `At the edge, local agents run ML models directly on resource-constrained devices such as the Raspberry Pi. This architecture is described in the 2024 IEEE ICPS paper: ${a('https://doi.org/10.1109/ICPS59941.2024.10639952', 'Edge Multi-agent IDS Architecture for IoT Devices with Cloud Continuum')}.` },

    { id: 'master', keys: ['master', 'msc', 'mestrado', 'master s thesis', 'masters thesis', 'dissertation', 'dissertacao', 'maestria'],
      answer: () => `His Master's thesis is about security mechanisms for a multi-agent cyber-physical conveyor system using machine learning. ${a('https://bibliotecadigital.ipb.pt/bitstream/10198/22980/1/Funchal_Gustavo.pdf', 'Read the thesis (PDF)')}.` },

    { id: 'phd', keys: ['phd', 'doctoral', 'doctorate', 'doutoramento', 'doutorado', 'doctorado', 'thesis', 'tese', 'tesis'],
      answer: () => `Gustavo is in the final year of his PhD, carried out at CeDRI (IPB) with BISITE (University of Salamanca) and supported by an FCT PhD grant. The thesis focuses on distributed, multi-agent intrusion detection for the Industrial IoT across the edge–cloud continuum. For details such as timeline or defense, ${mail('send him an email', 'Question about your PhD')}.` },

    { id: 'affiliation', keys: ['cedri', 'bisite', 'salamanca', 'braganca', 'ipb', 'university', 'institution', 'affiliation', 'based', 'located', 'location', 'portugal', 'universidade', 'universidad', 'instituto'],
      answer: () => `He is based at ${a(CONFIG.cedri, 'CeDRI')}, the Research Centre in Digitalization and Intelligent Robotics of the Instituto Politécnico de Bragança, Portugal, and is affiliated with the ${a(CONFIG.bisite, 'BISITE')} group at the University of Salamanca, Spain.` },

    { id: 'funding', keys: ['fct', 'grant', 'fund', 'scholarship', 'bolsa', 'financiamento', 'financiacion', 'beca'],
      answer: () => `His PhD work is supported by an FCT (Fundação para a Ciência e a Tecnologia) PhD grant.` },

    { id: 'publications', keys: ['publication', 'paper', 'article', 'publish', 'journal', 'conference', 'doi', 'springer', 'icissp', 'icps', 'ieee', 'artigo', 'publicacao', 'publicacoes', 'publicacion', 'articulo', 'cite', 'citation'],
      answer: () => `Selected publications:<ul>` +
        `<li><b>2026</b> · ${a('https://doi.org/10.1007/s42979-026-04750-x', 'A Cloud-Driven Support Layer for Enhancing Distributed IDS in IoT Networks')} (SN Computer Science)</li>` +
        `<li><b>2025</b> · ${a('https://www.scitepress.org/Papers/2025/131544/131544.pdf', 'Distributed Machine Learning and Multi-Agent Systems for Enhanced Attack Detection and Resilience in IoT Networks')} (ICISSP)</li>` +
        `<li><b>2024</b> · ${a('https://doi.org/10.1109/ICPS59941.2024.10639952', 'Edge Multi-agent Intrusion Detection System Architecture for IoT Devices with Cloud Continuum')} (IEEE ICPS)</li>` +
        `</ul>The full list is on ${a(CONFIG.scholar, 'Google Scholar')}.` },

    { id: 'dataset', keys: ['dataset', 'data', 'conveyor', 'dados', 'datos'],
      answer: () => `He published an IDS dataset collected on a multi-agent cyber-physical conveyor system, with network- and agent-level data under normal operation, DoS attacks and malicious-agent attacks. ${a('https://dados.ipb.pt/dataset.xhtml?persistentId=doi:10.34620/dadosipb/JLONBO', 'View the dataset')}.` },

    { id: 'ctf', keys: ['ctf', 'capture the flag', 'competition', 'ies', 'challenge', 'competicao', 'competicion'],
      answer: () => `He is involved in the IEEE IES International CTF, a Capture the Flag competition on cybersecurity in IoT-based applications. ${a('https://cybersec.ipb.pt/projects/', 'More information')}.` },

    { id: 'code', keys: ['code', 'github', 'repository', 'repo', 'source', 'implementation', 'software', 'codigo', 'repositorio'],
      answer: () => `Implementations, experiments and tooling behind the IDS and multi-agent work are on ${a(CONFIG.github, 'GitHub')}.` },

    { id: 'cv', keys: ['cv', 'resume', 'curriculum', 'vitae', 'ciencia vitae', 'curriculo', 'experience', 'experiencia'],
      answer: () => `You can see his CV on ${a(CONFIG.cv, 'Ciência Vitae')}.` },

    { id: 'profiles', keys: ['linkedin', 'orcid', 'scholar', 'profile', 'social', 'perfil'],
      answer: () => `Profiles: ${a(CONFIG.scholar, 'Google Scholar')}, ${a(CONFIG.orcid, 'ORCID')}, ${a(CONFIG.linkedin, 'LinkedIn')} and ${a(CONFIG.github, 'GitHub')}.` },

    { id: 'collab', keys: ['collaborat', 'collab', 'partner', 'work together', 'joint', 'cooperation', 'visit', 'exchange', 'colaborar', 'colaboracao', 'colaboracion', 'parceria'],
      answer: () => `Gustavo is open to research collaborations, discussions on IIoT security and multi-agent systems, and academic exchange. The best way to start is to ${mail('send him an email', 'Research collaboration')} with a short description of your idea.` },

    { id: 'contact', keys: ['contact', 'email', 'mail', 'reach', 'talk', 'message', 'contacto', 'contato', 'correo'],
      answer: () => `You can reach Gustavo at ${mail(CONFIG.email)}. He's also on ${a(CONFIG.linkedin, 'LinkedIn')}.` },

    /* small talk: only used when nothing else matches */
    { id: 'hello', smalltalk: true, keys: ['hi', 'hello', 'hey', 'ola', 'oi', 'hola', 'good morning', 'good afternoon', 'bom dia', 'boa tarde', 'buenos dias'],
      answer: () => CONFIG.greeting },

    { id: 'thanks', smalltalk: true, keys: ['thanks', 'thank you', 'thx', 'obrigado', 'obrigada', 'gracias', 'great', 'perfect', 'ok'],
      answer: () => `You're welcome! Anything else, just ask, or ${mail('email Gustavo')}.` }
  ];

  const FALLBACK = (q) =>
    `I don't have an answer for that one. Please ask Gustavo directly: ${mail('send an email', 'Question from your website', q)} (${CONFIG.email}).`;

  /* ---------------- 3. Matching ---------------- */
  const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ').trim();

  KB.forEach((it) => { it.keys = it.keys.map(norm); });

  function keyScore(text, tokens, key) {
    if (key.includes(' ')) return (' ' + text + ' ').includes(' ' + key + ' ') ? 3 : 0;
    let s = 0;
    for (const t of tokens) {
      if (t === key) return 2;
      if (key.length >= 4 && t.startsWith(key)) s = 1.5;
    }
    return s;
  }

  function best(text, tokens, items) {
    let top = null, topScore = 0;
    for (const it of items) {
      let s = 0;
      for (const k of it.keys) s += keyScore(text, tokens, k);
      if (s > topScore) { top = it; topScore = s; }
    }
    return { top, topScore };
  }

  function answer(q) {
    const text = norm(q);
    if (!text) return null;
    const tokens = text.split(' ');
    const main = best(text, tokens, KB.filter((it) => !it.smalltalk));
    if (main.topScore >= 1.5) return { id: main.top.id, html: main.top.answer(q) };
    const small = best(text, tokens, KB.filter((it) => it.smalltalk));
    if (small.topScore >= 2) return { id: small.top.id, html: small.top.answer(q) };
    return { id: 'fallback', html: FALLBACK(q) };
  }

  /* expose for testing in Node */
  if (typeof module !== 'undefined' && module.exports) module.exports = { answer };
  if (typeof document === 'undefined') return;

  /* ---------------- 4. Styles ---------------- */
  const css = `
  .gfbot-launch{position:fixed;right:22px;bottom:22px;z-index:60;width:56px;height:56px;border-radius:50%;
    border:1px solid rgba(79,224,196,.45);background:var(--accent,#4fe0c4);color:#04110d;cursor:pointer;
    display:grid;place-items:center;box-shadow:0 10px 30px -8px var(--accent,#4fe0c4);transition:transform .25s}
  .gfbot-launch:hover{transform:translateY(-3px)}
  .gfbot-launch svg{width:24px;height:24px}
  .gfbot-launch[aria-expanded="true"] .gfbot-i-open,.gfbot-launch[aria-expanded="false"] .gfbot-i-close{display:none}
  .gfbot-panel{position:fixed;right:22px;bottom:90px;z-index:60;width:min(380px,calc(100vw - 24px));
    height:min(560px,calc(100dvh - 120px));display:flex;flex-direction:column;overflow:hidden;
    background:var(--panel,#0f1828);color:var(--ink,#e8eef6);border:1px solid var(--line,rgba(120,160,200,.12));
    border-radius:18px;box-shadow:0 30px 80px -20px rgba(0,0,0,.8),0 0 60px -20px var(--glow,rgba(79,224,196,.16));
    font-family:var(--sans,system-ui,sans-serif);font-size:15px;line-height:1.55;
    opacity:0;transform:translateY(14px) scale(.98);pointer-events:none;transition:opacity .25s,transform .25s}
  .gfbot-panel.open{opacity:1;transform:none;pointer-events:auto}
  .gfbot-head{display:flex;align-items:center;gap:12px;padding:16px 18px;border-bottom:1px solid var(--line,rgba(120,160,200,.12));
    background:linear-gradient(135deg,rgba(79,224,196,.08),transparent)}
  .gfbot-dot{width:8px;height:8px;border-radius:50%;background:var(--accent,#4fe0c4);box-shadow:0 0 10px var(--accent,#4fe0c4);flex:none}
  .gfbot-head h2{font-family:var(--serif,Georgia,serif);font-weight:500;font-size:1.05rem;margin:0}
  .gfbot-head p{font-family:var(--mono,monospace);font-size:.68rem;letter-spacing:.05em;color:var(--ink-faint,#5e708a);margin:0}
  .gfbot-x{margin-left:auto;background:none;border:0;color:var(--ink-soft,#9fb0c6);cursor:pointer;padding:6px;border-radius:8px}
  .gfbot-x:hover{color:var(--ink,#e8eef6);background:rgba(255,255,255,.05)}
  .gfbot-x svg{width:18px;height:18px;display:block}
  .gfbot-log{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth}
  .gfbot-msg{max-width:88%;padding:10px 14px;border-radius:14px;word-wrap:break-word}
  .gfbot-bot{align-self:flex-start;background:var(--bg-soft,#0c1322);border:1px solid var(--line,rgba(120,160,200,.12));
    color:var(--ink-soft,#9fb0c6);border-bottom-left-radius:4px}
  .gfbot-user{align-self:flex-end;background:rgba(79,224,196,.14);color:var(--ink,#e8eef6);border-bottom-right-radius:4px}
  .gfbot-msg a{color:var(--accent,#4fe0c4);text-decoration:none;border-bottom:1px solid rgba(79,224,196,.3)}
  .gfbot-msg a:hover{border-color:var(--accent,#4fe0c4)}
  .gfbot-msg b{color:var(--ink,#e8eef6);font-weight:600}
  .gfbot-msg ul{margin:8px 0 8px 18px;padding:0}
  .gfbot-msg li{margin-bottom:6px}
  .gfbot-typing{display:flex;gap:4px;padding:14px}
  .gfbot-typing span{width:6px;height:6px;border-radius:50%;background:var(--ink-faint,#5e708a);animation:gfbotb 1s infinite}
  .gfbot-typing span:nth-child(2){animation-delay:.15s}.gfbot-typing span:nth-child(3){animation-delay:.3s}
  @keyframes gfbotb{0%,80%,100%{opacity:.3;transform:none}40%{opacity:1;transform:translateY(-3px)}}
  .gfbot-chips{display:flex;flex-wrap:wrap;gap:8px;padding:0 18px 12px}
  .gfbot-chip{font-family:var(--mono,monospace);font-size:.72rem;padding:6px 12px;border-radius:999px;cursor:pointer;
    background:transparent;color:var(--ink-soft,#9fb0c6);border:1px solid var(--line,rgba(120,160,200,.12));transition:all .2s}
  .gfbot-chip:hover{color:var(--accent,#4fe0c4);border-color:var(--accent,#4fe0c4)}
  .gfbot-form{display:flex;gap:8px;padding:12px 14px;border-top:1px solid var(--line,rgba(120,160,200,.12))}
  .gfbot-form input{flex:1;min-width:0;background:var(--bg,#070b14);color:var(--ink,#e8eef6);font:inherit;font-size:15px;
    border:1px solid var(--line,rgba(120,160,200,.12));border-radius:10px;padding:10px 12px;outline:none}
  .gfbot-form input:focus{border-color:var(--accent,#4fe0c4)}
  .gfbot-form button{background:var(--accent,#4fe0c4);color:#04110d;border:0;border-radius:10px;width:42px;cursor:pointer;display:grid;place-items:center}
  .gfbot-form button svg{width:18px;height:18px}
  .gfbot-note{font-family:var(--mono,monospace);font-size:.64rem;color:var(--ink-faint,#5e708a);text-align:center;padding:0 14px 10px}
  .gfbot-note a{color:inherit}
  @media(max-width:520px){.gfbot-launch{right:16px;bottom:16px}.gfbot-panel{right:12px;bottom:82px}}
  @media(prefers-reduced-motion:reduce){.gfbot-panel,.gfbot-launch{transition:none}.gfbot-typing span{animation:none}.gfbot-log{scroll-behavior:auto}}
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /* ---------------- 5. Markup ---------------- */
  const ICON_CHAT = '<svg class="gfbot-i-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01"/></svg>';
  const ICON_X = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  const ICON_SEND = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  const launch = document.createElement('button');
  launch.className = 'gfbot-launch';
  launch.setAttribute('aria-label', 'Open quick questions chat');
  launch.setAttribute('aria-expanded', 'false');
  launch.setAttribute('aria-controls', 'gfbot-panel');
  launch.innerHTML = ICON_CHAT + ICON_X.replace('<svg', '<svg class="gfbot-i-close"');

  const panel = document.createElement('div');
  panel.className = 'gfbot-panel';
  panel.id = 'gfbot-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', CONFIG.title);
  panel.innerHTML = `
    <div class="gfbot-head">
      <span class="gfbot-dot"></span>
      <div><h2>${CONFIG.title}</h2><p>${CONFIG.subtitle}</p></div>
      <button class="gfbot-x" aria-label="Close chat">${ICON_X}</button>
    </div>
    <div class="gfbot-log" aria-live="polite"></div>
    <div class="gfbot-chips"></div>
    <form class="gfbot-form" autocomplete="off">
      <input type="text" placeholder="Type a question…" aria-label="Your question" maxlength="300">
      <button type="submit" aria-label="Send">${ICON_SEND}</button>
    </form>
    <div class="gfbot-note">Automatic FAQ assistant · for anything else, ${mail('email Gustavo')}</div>`;

  document.body.appendChild(panel);
  document.body.appendChild(launch);

  const log = panel.querySelector('.gfbot-log');
  const chips = panel.querySelector('.gfbot-chips');
  const form = panel.querySelector('.gfbot-form');
  const input = form.querySelector('input');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- 6. Behaviour ---------------- */
  function add(content, who) {
    const el = document.createElement('div');
    el.className = 'gfbot-msg gfbot-' + who;
    if (who === 'user') el.textContent = content;   // user text is never parsed as HTML
    else el.innerHTML = content;                     // bot answers come from the KB above
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
    return el;
  }

  function botReply(q) {
    const typing = document.createElement('div');
    typing.className = 'gfbot-msg gfbot-bot gfbot-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    log.appendChild(typing);
    log.scrollTop = log.scrollHeight;
    setTimeout(() => {
      typing.remove();
      const r = answer(q);
      add(r ? r.html : FALLBACK(q), 'bot');
    }, reduce ? 0 : 450);
  }

  function ask(q) {
    q = q.trim();
    if (!q) return;
    add(q, 'user');
    botReply(q);
  }

  CONFIG.chips.forEach((label) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'gfbot-chip';
    b.textContent = label;
    b.addEventListener('click', () => ask(label));
    chips.appendChild(b);
  });

  let started = false;
  function setOpen(open) {
    panel.classList.toggle('open', open);
    launch.setAttribute('aria-expanded', String(open));
    launch.setAttribute('aria-label', open ? 'Close chat' : 'Open quick questions chat');
    if (open) {
      if (!started) { add(CONFIG.greeting, 'bot'); started = true; }
      setTimeout(() => input.focus(), 50);
    }
  }

  launch.addEventListener('click', () => setOpen(!panel.classList.contains('open')));
  panel.querySelector('.gfbot-x').addEventListener('click', () => { setOpen(false); launch.focus(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) { setOpen(false); launch.focus(); }
  });
  form.addEventListener('submit', (e) => { e.preventDefault(); ask(input.value); input.value = ''; });
})();
