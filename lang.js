// Simple i18n manager for this static site
(function(){
  const translations = {
    en: {
      nav_about: 'about',
      nav_research: 'research',
      nav_works: 'works',
      nav_contact: 'contact',
      title_sub: 'Researcher & Composer',
      download_pdf: 'Download DUALIS (PDF)',
      download_mp3: 'Download MP3',
      recording: 'Recording — DUALIS',
      contact_heading: 'Contact',
      about_heading: 'About',
      works_heading: 'Works',
      works_text: 'All the scores and recordings that are attached here are free to use and download.',
      audio_fallback: 'Your browser does not support the audio element. You can <a href="DUALIS - Elena Andreyev.mp3">download the MP3</a>.',
      pdf_preview_error: 'Unable to load PDF for preview — please download the file.',
      research_heading: 'Research',
      research_text: 'Placeholder for research description and projects. Add your texts, links, and publications here.',
      about_text: 'Eliot Guenin is a French composer, researcher and pianist based in Paris. Currently studying composition with Aurélien Dumont and Laurent Durupt in the Créteil Conservatory, he also is a student of the Arts, Litteratures & Languages Master of the EHESS, Ecole des Hautes Etudes en Sciences Sociales under the mentoring of Esteban Buch, where he continues his cursus after his Musicology Bachelor from the Lyon II University.<br><br>His works, standing at the intersection of theoretical research and sonic experimentation, are inherently interdisciplinary and include a piece for solo Cello for Elena Andreyev or an open work for L\'Instant Donn\u00e9.<br><br>On the research side, he explores the theme of "Sonic Biopolitics in the Streaming Era: Subjectivation of Individual Somatheques through Sound to the Capitalocene." He aims to examine how the algorithmic flows of streaming platforms serve not merely as vehicles for distribution, but as mechanisms of power that shape individual subjectivities. The project will involve a biopolitical interrogation of contemporary music and the ways in which it is consumed via streaming.',
      form_firstName: 'First Name',
      form_lastName: 'Last Name',
      form_email: 'Email',
      form_subject: 'Subject',
      form_message: 'Message',
      form_submit: 'Send Message',
      form_required: 'Please complete all required fields.',
      sending: 'Sending…',
      sent_success: 'Message sent — thank you!',
      submission_failed: 'Submission failed.',
      network_error: 'Network error. Please try again later.',
      form_not_configured: 'Form not configured. Set endpoint to enable sending.',
      open_pdf: 'Open PDF',
      download_audio: 'Download MP3'
    },
    fr: {
      nav_about: 'à propos',
      nav_research: 'recherche',
      nav_works: 'œuvres',
      nav_contact: 'contact',
      title_sub: 'Chercheur et Compositeur',
      download_pdf: 'Télécharger DUALIS (PDF)',
      download_mp3: 'Télécharger MP3',
      recording: 'Enregistrement — DUALIS',
      contact_heading: 'Contact',
      about_heading: 'À propos',
      works_heading: 'Œuvres',
      research_heading: 'Recherches',
      research_text: 'Espace réservé pour la description des recherches et des projets. Ajoutez vos textes, liens et publications ici.',
      works_text: 'Partitions, enregistrements et performances. Ajoutez des liens ou intégrez des lecteurs ici.',
      audio_fallback: 'Votre navigateur ne supporte pas l\'élément audio. Vous pouvez <a href="DUALIS - Elena Andreyev.mp3">télécharger le MP3</a>.',
      pdf_preview_error: 'Impossible de prévisualiser le PDF — veuillez télécharger le fichier.',
      about_text: 'Eliot Guenin est un compositeur, chercheur et pianiste fran\u00e7ais bas\u00e9 \u00e0 Paris. Actuellement, il \u00e9tudie la composition avec Aur\u00e9lien Dumont et Laurent Durupt au Conservatoire de Cr\u00e9teil. Il est \u00e9galement\u00a0\u00e9tudiant en master Arts, Litt\u00e9ratures & Langages \u00e0 l\'EHESS, sous la direction d\'Esteban Buch, apr\u00e8s avoir obtenu une licence de musicologie \u00e0 l\'universit\u00e9 Lyon II.<br><br>Ses œuvres, situ\u00e9es \u00e0 l\'intersection de la recherche th\u00e9orique et de l\'exp\u00e9rimentation sonore, sont interdisciplinaires et incluent une pi\u00e8ce pour violoncelle solo pour Elena Andreyev ainsi qu\'une œuvre ouverte pour L\'Instant Donn\u00e9.<br><br>Sur le plan de la recherche, il explore le th\u00e8me de « Biopolitique sonore \u00e0 l\'\u00e8re du streaming : Une subjectivation par les sons des somath\u00e8ques individuelles au capitaloc\u00e8ne. » Le projet examine comment les flux algorithmiques des plateformes de streaming façonnent les subjectivit\u00e9s individuelles. Le projet impliquera une interrogation biopolitique de la musique contemporaine et des fa\u00e7ons dont elle est consomm\u00e9e via le streaming.',
      form_firstName: 'Prénom',
      form_lastName: 'Nom',
      form_email: 'Email',
      form_subject: 'Sujet',
      form_message: 'Message',
      form_submit: 'Envoyer',
      form_required: 'Veuillez remplir tous les champs requis.',
      sending: 'Envoi…',
      sent_success: 'Message envoyé — merci !',
      submission_failed: 'Échec de l’envoi.',
      network_error: 'Erreur réseau. Veuillez réessayer plus tard.',
      form_not_configured: 'Formulaire non configuré. Définissez le endpoint pour activer l’envoi.',
      open_pdf: 'Ouvrir le PDF',
      download_audio: 'Télécharger MP3'
    }
  };

  function apply(lang){
    document.documentElement.lang = lang === 'fr' ? 'fr' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      const key = el.dataset.i18n;
      const txt = (translations[lang] && translations[lang][key]) || '';
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.placeholder !== undefined) el.placeholder = txt;
      } else if (el.tagName === 'OPTION') {
        el.textContent = txt;
      } else if (el.dataset && el.dataset.i18nHtml) {
        el.innerHTML = txt;
      } else {
        el.textContent = txt;
      }
    });
    // update any status defaults
    window.__i18n = {lang: lang, t: function(k){ return (translations[lang] && translations[lang][k]) || ''; }};
    const toggle = document.getElementById('lang-toggle');
    // Show the other language on the button (so clicking it switches to that language)
    if (toggle) toggle.textContent = lang === 'fr' ? 'EN' : 'FR';
  }

  function setLanguage(lang){
    localStorage.setItem('siteLang', lang);
    apply(lang);
  }

  // Click handler used for both created and pre-existing toggle buttons
  function handleToggleClick(){
    // Toggle language in-place and persist preference
    const next = (window.__i18n && window.__i18n.lang === 'fr') ? 'en' : 'fr';
    setLanguage(next);
  }

  const stored = localStorage.getItem('siteLang');
  var defaultLang = stored || (navigator.language && navigator.language.startsWith('fr') ? 'fr' : 'en');
  // If this page is a *_fr.html file, prefer French by default so the French pages display French.
  try {
    var curr = (window.location.pathname || '').split('/').pop() || '';
    if (curr && /_fr\.html$/.test(curr)) defaultLang = 'fr';
  } catch (e) {}
  document.addEventListener('DOMContentLoaded', function(){
    // insert toggle if not present, and ensure click handler is attached to any existing toggle
    document.querySelectorAll('header').forEach(function(header){
      var existing = header.querySelector('#lang-toggle');
      if (!existing){
        const btn = document.createElement('button');
        btn.id = 'lang-toggle';
        btn.type = 'button';
        btn.setAttribute('aria-label','Toggle language');
        btn.style.marginLeft = '0.5rem';
        header.appendChild(btn);
        btn.addEventListener('click', handleToggleClick);
        btn.dataset.i18nBound = '1';
      } else {
        if (!existing.dataset.i18nBound) {
          existing.addEventListener('click', handleToggleClick);
          existing.dataset.i18nBound = '1';
        }
      }
    });
    apply(defaultLang);
  });

  // expose API
  window.setLanguage = setLanguage;
  window.t = function(k){ return window.__i18n ? window.__i18n.t(k) : ''; };
})();
