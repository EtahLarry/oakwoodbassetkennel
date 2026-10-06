(function () {
  'use strict';

  const CONTACT_EMAIL = 'oakwoodbasset@gmail.com';

  const image = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
  const photos = {
    hero: image('photo-1558788353-f76d92427f16', 1600),
    puppyA: image('photo-1517849845537-4d257902454a'),
    puppyB: image('photo-1548199973-03cce0bbc87b'),
    puppyC: image('photo-1583337130417-3346a1be7dee'),
    puppyD: image('photo-1583511655826-05700d52f4d9'),
    puppyE: image('photo-1591769225440-811ad7d6eab2'),
    puppyF: image('photo-1601758174114-e711c0cbaa69'),
    puppyG: image('photo-1605568427561-40dd23c2acea'),
    kennel: image('photo-1551963831-b3b1ca40c98e'),
    garden: image('photo-1588943211346-0908a1fb0b01')
  };

  const puppies = [
    { id: 'maple', name: 'Luna', gender: 'Female', status: 'Reserved', litter: 'Current litter', age: '6 weeks old', price: '$1,000', reservationDeposit: '$400', healthDetails: ['Vet health checked', 'All vaccines up to date', 'Deworming completed', 'AKC Registered', 'Microchipped'], personality: 'Sweet, affectionate, and growing into a wonderful family companion.', description: 'Luna\'s parents are health tested with no known genetic defects. She has started potty training and will come with a 2-year health guarantee, health record, and registration papers.', photos: ['images/maple-1.jpg', 'images/maple-2.jpg'] },
    { id: 'walter', name: 'Walter', gender: 'Male', status: 'Available', litter: 'Current litter', age: '6 weeks old', price: '$1,000', reservationDeposit: '$400', healthDetails: ['Vet health checked', 'All vaccines up to date', 'Deworming completed', 'AKC Registered', 'Microchipped'], personality: 'A gentle, affectionate boy with a playful spirit and a happy, easygoing nature.', description: 'Walter\'s parents are health tested with no known genetic defects. He is potty trained and will come with a 2-year health guarantee, health record, and registration papers.', photos: ['images/walter-1.jpeg', 'images/walter-2.jpeg'] },
    { id: 'penny', name: 'Penny', gender: 'Female', status: 'Available', litter: 'Current litter', age: '7 weeks old', price: '$1,000', reservationDeposit: '$400', healthDetails: ['Vet health checked', 'All vaccines up to date', 'Deworming completed', 'AKC Registered', 'Microchipped'], personality: 'A sweet and confident little girl with a loving personality. She enjoys cuddles, gentle play, and being around people. She will make a wonderful companion for a loving family.', description: 'Penny\'s parents are health tested with no known genetic defects. She has started potty training and will come with a 2-year health guarantee, health record, and registration papers.', photos: ['images/penny-1.jpeg', 'images/penny-2.jpeg'] },
    { id: 'archie', name: 'Bruno', gender: 'Male', status: 'Reserved', litter: 'Current litter', age: '6 weeks old', price: '$1,000', reservationFee: '$400', healthDetails: ['Veterinary health checked', 'Vaccinations up to date', 'Deworming completed', 'Microchipped', 'AKC Registered', 'Parents health tested', 'No known genetic defects reported in the parents', 'Almost fully potty trained', '2-year health guarantee', 'Health and vaccination records included', 'Registration papers included'], personality: 'Handsome, affectionate, and growing into a wonderful family companion.', description: 'Meet Bruno, an adorable male Basset Hound puppy with a beautiful brown-and-white coat and a sweet personality. He has been raised with care and is making excellent progress with his early training. Bruno is healthy, well-cared-for, and ready to bring joy to his forever family with health records and registration documentation.', photos: ['images/archie-1.jpeg', 'images/archie-2.jpeg'] },
    { id: 'clover', name: 'Buster', gender: 'Male', status: 'Available', litter: 'Current litter', age: '7 weeks old', price: '$1,000', reservationDeposit: '$400', healthDetails: ['Vet health checked', 'All vaccines up to date', 'Deworming completed', 'AKC Registered', 'Microchipped'], personality: 'A handsome, affectionate boy with a gentle temperament and a playful spirit.', description: 'Buster is a wonderful young male Basset Hound raised with care and plenty of gentle human interaction. He is affectionate, curious, and developing into a confident family companion. His early socialization and thoughtful daily care are helping him build a happy foundation for life in his new home. Buster will leave with appropriate health records and continued support for his family.', photos: ['images/clover-1.jpeg', 'images/clover-2.jpeg'] },
    { id: 'rudy', name: 'Adam', gender: 'Male', status: 'Available', litter: 'Current litter', age: '6 weeks old', price: '$1,000', reservationDeposit: '$400', healthDetails: ['Vet health checked', 'All vaccines up to date', 'Deworming completed', 'AKC Registered', 'Microchipped'], personality: 'Sociable, silly, and exceptionally committed to snack research.', description: 'Adam\'s parents are health tested with no known genetic defects. He is almost done with potty training and will come with a 2-year health guarantee, health record, and registration papers.', photos: ['images/rudy-1.jpeg', 'images/rudy-2.jpeg'] },
    { id: 'gigi', name: 'Ollie', gender: 'Male', status: 'Available', litter: 'Current litter', age: '9 weeks old', price: '$1,000', reservationDeposit: '$400', healthDetails: ['Vet health checked', 'All vaccines up to date', 'Deworming completed', 'AKC Registered', 'Microchipped'], personality: 'Gentle, affectionate, and growing into a confident young companion.', description: 'Ollie\'s parents are health tested with no known genetic defects. He has started potty training and will come with a 2-year health guarantee, health record, and registration papers.', photos: ['images/gigi-1.jpg', 'images/gigi-2.jpg'] },
    { id: 'verity', name: 'Milo', gender: 'Male', status: 'Reserved', litter: 'Current litter', age: '9 weeks old', price: '$1,000', reservationDeposit: '$400', healthDetails: ['Vet health checked', 'All vaccines up to date', 'Deworming completed', 'AKC Registered', 'Microchipped'], personality: 'Sweet, healthy, well-cared-for, and growing into a wonderful family companion.', description: 'This beautiful male puppy is a sweet, healthy, and well-cared-for companion with a wonderful temperament. His parents have been health tested with no known genetic defects, and he has received excellent care from an early age. He has started potty training and is continuing to learn and develop into a happy, well-mannered family companion. He will leave for his new home with a 2-Year Health Guarantee, complete health and vaccination records, and registration papers, giving his new family peace of mind and confidence in his health and care.', photos: ['images/verity-1.jpg', 'images/verity-2.jpg'] },
    { id: 'winston', name: 'Winston', gender: 'Male', status: 'Available', litter: 'Current litter', age: '7 weeks old', price: '$1,000', reservationDeposit: '$400', healthDetails: ['Vet health checked', 'All vaccinations up to date', 'Deworming completed', 'AKC Registered', 'Microchipped'], personality: 'Adorable, affectionate, and ready to become a loyal family companion.', description: 'This adorable Basset Hound puppy is healthy, affectionate, and well-socialized. Raised with care, Winston is potty trained and comes from health-tested parents with no known genetic defects. He will go to his new home with a 2-year health guarantee, complete health records, and AKC registration papers. With his signature long ears, gentle personality, and loyal nature, he is ready to become a wonderful companion for his forever family.', photos: ['images/winston-1.jpg', 'images/winston-2.jpg'] },
    { id: 'beau', name: 'Rosie', gender: 'Male', status: 'Available', litter: 'Current litter', age: '8 weeks old', price: '$1,000', reservationDeposit: '$400', healthDetails: ['Veterinary health checked', 'Vaccinations up to date', 'Deworming completed', 'Microchipped', 'AKC Registered', 'Parents health tested', 'No known genetic defects reported in the parents', 'Almost fully potty trained', '2-Year Health Guarantee', 'Health and vaccination records included', 'Registration papers included'], personality: 'Handsome, affectionate, and ready to find his loving forever home.', description: 'This handsome male puppy has been raised with care and is ready to find his loving forever home. His parents have been health tested with no known genetic defects, giving him a healthy start in life. He has started potty training and is making great progress with his early training and socialization. Rosie will come with a 2-Year Health Guarantee, complete health and vaccination records, and official registration papers. He has been carefully checked and prepared to join a responsible and loving family.', photos: ['images/beau-1.jpeg', 'images/beau-2.jpeg'] },
    { id: 'daisy', name: 'Daisy', gender: 'Female', status: 'Available', litter: 'Current litter', age: '8 weeks old', price: '$1,000', reservationDeposit: '$400', healthDetails: ['Vet health checked', 'All vaccines up to date', 'Deworming completed', 'AKC Registered', 'Microchipped'], personality: 'Sweet, affectionate, and ready to become a loving family companion.', description: 'Daisy\'s parents are health tested with no known genetic defects. She has started potty training and will come with a 2-year health guarantee, health record, and registration papers.', photos: ['images/daisy-1.jpg', 'images/daisy-2.jpg'] },
    { id: 'harvey', name: 'Harvey', gender: 'Male', status: 'Available', litter: 'Current litter', age: '9 weeks old', price: '$1,000', reservationDeposit: '$400', healthDetails: ['Vet health checked', 'All Vaccines up to date', 'Deworming completed', 'AKC Registered', 'Micro Chipped'], personality: 'A gentle, handsome boy with a calm presence, soulful eyes, and an affectionate nature.', description: 'Harvey is a handsome male Basset Hound with beautiful tri-color markings, long floppy ears, and a sweet, thoughtful expression. At 9 weeks old, he is growing into a gentle and loving companion with a calm personality and plenty of charm. Harvey has been raised with care and is ready to find a responsible family who will give him a lifetime of affection, patience, and companionship.', photos: ['images/harvey.jpg'] },
    { id: 'teddy', name: 'Teddy', gender: 'Male', status: 'Available', litter: 'Current litter', age: '9 weeks old', price: '$1,000', reservationDeposit: '$400', healthDetails: ['Vet health checked', 'All Vaccines up to date', 'Deworming completed', 'AKC Registered', 'Micro Chipped'], personality: 'A sweet, affectionate boy with a gentle nature and an easygoing family temperament.', description: 'Parents health tested (No known genetic defects), has started potty training, will come with a 2 yr Health Guarantee, Health record and Registration papers.', photos: ['images/teddy.jpg'] },
  ];

  const dogs = [
    { id: 'leo', name: 'Leo', role: 'Male', age: '7 weeks old', color: 'Tri-color', photo: 'images/maple-1.jpg', price: '$1,000', reservationDeposit: '$400', temperament: 'A sweet, affectionate boy with a gentle nature and a calm, loving personality.', healthDetails: ['Vet health checked', 'All Vaccines up to date', 'Deworming completed', 'AKC Registered', 'Micro Chipped'], health: ['Vet health checked', 'All Vaccines up to date', 'Deworming completed'], description: 'Parents health tested (No known genetic defects), has started potty training, will come with a 2 yr Health Guarantee, Health record and Registration papers.', pedigree: 'Leo is a promising young male with classic tri-color markings, a gentle temperament, and the affectionate character that makes Basset Hounds such wonderful companions.', photos: ['images/maple-1.jpg', 'images/maple-2.jpg', 'images/maple-3.jpg'] },
    { id: 'finn', name: 'Finn', role: 'Male', age: '8 weeks old', color: 'Tri-color', photo: 'images/finn.jpg', price: '$1,000', reservationDeposit: '$400', temperament: 'A gentle, affectionate boy with a sweet expression and a calm, easygoing nature.', healthDetails: ['Vet health checked', 'All Vaccines up to date', 'Deworming completed', 'AKC Registered', 'Micro Chipped'], health: ['Vet health checked', 'All Vaccines up to date', 'Deworming completed'], description: 'Parents health tested (No known genetic defects), has started potty training, will come with a 2 yr Health Guarantee, Health record and Registration papers.', pedigree: 'Finn is a promising young male with classic tri-color markings, a gentle temperament, and the affectionate character that makes Basset Hounds such wonderful companions.', photos: ['images/finn.jpg'] },
    { id: 'hazel', name: 'Hazel', role: 'Female', age: '8 weeks old', color: 'Red & white', photo: 'images/hazel.jpg', price: '$1,000', reservationDeposit: '$400', temperament: 'A sweet, affectionate young female with a gentle nature and a calm, expressive personality.', healthDetails: ['Vet health checked', 'All Vaccines up to date', 'Deworming completed', 'AKC Registered', 'Micro Chipped'], health: ['Vet health checked', 'All Vaccines up to date', 'Deworming completed'], description: 'Parents health tested (No known genetic defects), has started potty training, will come with a 2 yr Health Guarantee, Health record and Registration papers.', pedigree: 'Hazel is a promising young female with a gentle expression, beautiful coloring, and the affectionate nature that makes Basset Hounds such wonderful companions.', photos: ['images/hazel.jpg'] }
  ];

  const getOverrides = () => JSON.parse(localStorage.getItem('bassetStatusOverridesV2') || '{}');
  const getPuppy = (id) => {
    const puppy = puppies.find((item) => item.id === id);
    if (!puppy) return null;
    const override = getOverrides()[id];
    return override ? { ...puppy, status: override } : puppy;
  };
  const statusClass = (status) => `status-${status.toLowerCase()}`;
  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));

  function puppyCard(puppy, admin) {
    return `<article class="puppy-card reveal" data-puppy-card data-puppy-id="${puppy.id}" tabindex="0" role="button" aria-label="View ${escapeHtml(puppy.name)}'s details">
      <div class="card-image"><img src="${puppy.photos[0]}" alt="Placeholder photo of ${escapeHtml(puppy.name)}, a Basset Hound puppy" loading="lazy"><span class="status-badge ${statusClass(puppy.status)}">${puppy.status}</span></div>
      <div class="card-body"><div class="card-title-row"><h3>${escapeHtml(puppy.name)}</h3><span class="eyebrow">${escapeHtml(puppy.gender)}</span></div>
      <p class="card-meta">${puppy.age ? ` Â· ${escapeHtml(puppy.age)}` : ''}</p><p class="card-copy">${escapeHtml(puppy.personality)}</p>
      <div class="card-footer"><span>View profile →${puppy.price ? ` Â· ${escapeHtml(puppy.price)}` : ''}</span>${admin ? `<button class="admin-action" type="button" data-cycle-status="${puppy.id}" aria-label="Change ${escapeHtml(puppy.name)} status">Change status</button>` : ''}</div></div></article>`;
  }

  function puppyDetailExtras(puppy) {
    const reservation = puppy.reservationDeposit || puppy.reservationFee;
    const summary = puppy.age || puppy.price || reservation ? `<div class="modal-section puppy-summary">${puppy.age ? `<p class="modal-meta"><strong>Current Age:</strong> ${escapeHtml(puppy.age)}</p>` : ''}${puppy.price ? `<p class="modal-meta"><strong>Price:</strong> ${escapeHtml(puppy.price)}</p>` : ''}${reservation ? `<p class="modal-meta"><strong>${puppy.reservationFee ? 'Reservation Fee:' : 'Reservation Deposit:'}</strong> ${escapeHtml(reservation)}</p>` : ''}</div>` : '';
    const health = puppy.healthDetails?.length ? `<div class="modal-section"><strong>Health & included</strong><ul class="health-list">${puppy.healthDetails.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div>` : '';
    return `${summary}${health}`;
  }

  function renderPuppies(container, options = {}) {
    const admin = localStorage.getItem('bassetAdminMode') === 'true';
    const status = options.status || 'All';
    const gender = options.gender || 'All';
    const query = (options.query || '').toLowerCase().trim();
    const filtered = puppies.map((item) => getPuppy(item.id)).filter((puppy) => {
      const matchesStatus = status === 'All' || puppy.status === status;
      const matchesGender = gender === 'All' || puppy.gender === gender;
      const searchable = `${puppy.name} ${puppy.personality} ${puppy.litter}`.toLowerCase();
      return matchesStatus && matchesGender && searchable.includes(query);
    });
    container.innerHTML = filtered.length ? filtered.map((puppy) => puppyCard(puppy, admin)).join('') : '<p class="empty-state">No puppies match these filters. Try a different search or check back soon.</p>';
    container.setAttribute('aria-busy', 'false');
    bindReveal();
  }

  function renderFeatured() {
    const container = document.querySelector('[data-featured-puppies]');
    if (!container) return;
    const available = puppies.map((item) => getPuppy(item.id)).filter((item) => item.status === 'Available').slice(0, 3);
    container.innerHTML = available.map((puppy) => puppyCard(puppy, false)).join('');
    bindReveal();
  }

  function renderDogs() {
    const container = document.querySelector('[data-dogs-grid]');
    if (!container) return;
    container.innerHTML = dogs.map((dog) => `<article class="dog-card reveal" data-dog-id="${dog.id}" tabindex="0" role="button" aria-label="View ${escapeHtml(dog.name)}'s profile"><div class="card-image"><img src="${dog.photo}" alt="Placeholder photo of ${escapeHtml(dog.name)}, ${escapeHtml(dog.role)} Basset Hound" loading="lazy"></div><div class="card-body"><span class="dog-role">${escapeHtml(dog.role)}</span><div class="card-title-row"><h3>${escapeHtml(dog.name)}</h3><span class="eyebrow">${escapeHtml(dog.age)}</span></div><p class="card-meta">${escapeHtml(dog.color)}</p><ul class="health-list">${dog.health.slice(0, 3).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul><div class="card-footer"><span>View full profile →</span></div></div></article>`).join('');
    bindReveal();
  }

  function openModal(content, type = 'modal') {
    const backdrop = document.querySelector('[data-modal-backdrop]');
    const body = document.querySelector('[data-modal-body]');
    if (!backdrop || !body) return;
    body.innerHTML = content;
    backdrop.dataset.modalType = type;
    backdrop.classList.add('is-open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    const firstFocusable = body.querySelector('button, a, input');
    if (firstFocusable) firstFocusable.focus();
  }

  function closeModal() {
    const backdrop = document.querySelector('[data-modal-backdrop]');
    if (!backdrop) return;
    backdrop.classList.remove('is-open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function openPuppyModal(id) {
    const puppy = getPuppy(id);
    if (!puppy) return;
    openModal(`<div class="modal-layout"><div><img class="modal-main-image" data-gallery-main src="${puppy.photos[0]}" alt="Placeholder photo of ${escapeHtml(puppy.name)}"><div class="modal-thumbs">${puppy.photos.map((photo, index) => `<button type="button" class="${index === 0 ? 'is-active' : ''}" data-gallery-thumb="${photo}" aria-label="View ${escapeHtml(puppy.name)} photo ${index + 1}"><img src="${photo}" alt=""></button>`).join('')}</div></div><div class="modal-info"><span class="status-badge ${statusClass(puppy.status)}">${puppy.status}</span><h2>${escapeHtml(puppy.name)}</h2><p class="modal-meta">${escapeHtml(puppy.gender)}</p><p class="modal-description">${escapeHtml(puppy.description)}</p>${puppyDetailExtras(puppy)}<div class="modal-section"><a class="button button-primary" href="contact.html?interest=${encodeURIComponent(puppy.name)}">Inquire about ${escapeHtml(puppy.name)} →</a></div></div></div>`);
  }

  function openDogModal(id) {
    const dog = dogs.find((item) => item.id === id);
    if (!dog) return;
    openModal(`<div class="modal-layout"><div><img class="modal-main-image" data-gallery-main src="${dog.photos[0]}" alt="Placeholder photo of ${escapeHtml(dog.name)}"><div class="modal-thumbs">${dog.photos.map((photo, index) => `<button type="button" class="${index === 0 ? 'is-active' : ''}" data-gallery-thumb="${photo}" aria-label="View ${escapeHtml(dog.name)} photo ${index + 1}"><img src="${photo}" alt=""></button>`).join('')}</div></div><div class="modal-info"><span class="dog-role">${escapeHtml(dog.role)} · ${escapeHtml(dog.age)}</span><h2>${escapeHtml(dog.name)}</h2><p class="modal-meta">${escapeHtml(dog.color)}</p><p class="modal-description">${escapeHtml(dog.description || dog.temperament)}</p>${dog.price || dog.reservationDeposit ? `<div class="modal-section puppy-summary">${dog.price ? `<p class="modal-meta"><strong>Price:</strong> ${escapeHtml(dog.price)}</p>` : ''}${dog.reservationDeposit ? `<p class="modal-meta"><strong>Reservation Deposit:</strong> ${escapeHtml(dog.reservationDeposit)}</p>` : ''}</div>` : ''}<div class="modal-section"><strong>Health testing</strong><ul class="health-list">${dog.health.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div><div class="modal-section"><strong>Pedigree notes</strong><p class="modal-meta">${escapeHtml(dog.pedigree)}</p></div><div class="modal-section"><a class="button button-primary" href="contact.html?interest=${encodeURIComponent(dog.name)}">Send a message about ${escapeHtml(dog.name)} →</a></div></div></div>`);
  }

  function openLightbox(src, alt) {
    openModal(`<img class="lightbox-image" src="${src}" alt="${escapeHtml(alt || 'Gallery image')}">`, 'lightbox');
  }

  function cycleStatus(id) {
    const order = ['Available', 'Reserved', 'Sold'];
    const puppy = getPuppy(id);
    if (!puppy) return;
    const next = order[(order.indexOf(puppy.status) + 1) % order.length];
    const overrides = getOverrides();
    overrides[id] = next;
    localStorage.setItem('bassetStatusOverridesV2', JSON.stringify(overrides));
    const page = document.querySelector('[data-puppy-grid]');
    if (page) applyFilters();
  }

  function applyFilters() {
    const grid = document.querySelector('[data-puppy-grid]');
    if (!grid) return;
    renderPuppies(grid, { status: document.querySelector('[data-status-filter].is-active')?.dataset.value || 'All', gender: document.querySelector('[data-gender-filter].is-active')?.dataset.value || 'All', query: document.querySelector('[data-puppy-search]')?.value || '' });
  }

  function setupForms() {
    document.querySelectorAll('form[data-form]').forEach((form) => {
      const select = form.querySelector('[data-interest-select]');
      if (select) {
        puppies.map((item) => getPuppy(item.id)).filter((item) => item.status !== 'Sold').forEach((puppy) => {
          const option = document.createElement('option');
          option.value = puppy.name;
          option.textContent = `${puppy.name} · ${puppy.status}`;
          select.appendChild(option);
        });
        dogs.forEach((dog) => {
          const option = document.createElement('option');
          option.value = dog.name;
          option.textContent = `${dog.name} · ${dog.role}`;
          select.appendChild(option);
        });
        const params = new URLSearchParams(window.location.search); const requested = params.get('interest') || params.get('puppy');
        if (requested) select.value = requested;
      }
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        let valid = true;
        form.querySelectorAll('[required]').forEach((field) => {
          const error = form.querySelector(`[data-error-for="${field.name}"]`);
          if (!field.value.trim() || (field.type === 'email' && !/^\S+@\S+\.\S+$/.test(field.value))) {
            valid = false;
            field.setAttribute('aria-invalid', 'true');
            if (error) error.textContent = field.type === 'email' ? 'Please enter a valid email address.' : 'This field is required.';
          } else {
            field.removeAttribute('aria-invalid');
            if (error) error.textContent = '';
          }
        });
        if (!valid) return;
        const submission = Object.fromEntries(new FormData(form).entries());
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton?.textContent || 'Send message';
        const mailtoBody = Object.entries(submission).map(([key, value]) => `${key}: ${value}`).join('\n');
        const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('New Basset Hound inquiry')}&body=${encodeURIComponent(mailtoBody)}`;
        let emailSent = false;
        let deliveryError = false;
        if (submitButton) { submitButton.disabled = true; submitButton.textContent = 'Sending...'; }
        try {
          if (form.dataset.emailDelivery === 'true') {
            const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ ...submission, _subject: 'New Basset Hound inquiry', _template: 'table' }) });
            if (!response.ok) throw new Error('Email delivery failed');
            emailSent = true;
          }
        } catch (error) {
          deliveryError = true;
        }
        const saved = JSON.parse(localStorage.getItem('bassetInquiries') || '[]');
        saved.push({ ...submission, delivery: emailSent ? 'emailed' : 'saved locally', submittedAt: new Date().toISOString() });
        localStorage.setItem('bassetInquiries', JSON.stringify(saved));

        form.reset();
        const message = form.querySelector('[data-form-message]');
        if (message) {
          message.textContent = emailSent ? 'Your message was sent. Thank you, we will be in touch soon.' : deliveryError ? 'Your message was saved in this browser. ' : 'Your message has been saved for the breeder demo.';
          if (deliveryError) { const emailLink = document.createElement('a'); emailLink.href = mailtoUrl; emailLink.textContent = 'Open your email app to send it.'; emailLink.className = 'text-link'; message.append(' ', emailLink); }
          message.classList.add('is-visible');
        }
        if (deliveryError && window.location.protocol === 'file:') window.location.href = mailtoUrl;
        if (submitButton) { submitButton.disabled = false; submitButton.textContent = originalButtonText; }
      });
    });
  }

  function setupNavigation() {
    const toggle = document.querySelector('[data-nav-toggle]');
    const nav = document.querySelector('[data-site-nav]');
    if (toggle && nav) toggle.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', String(open)); });
    const page = document.body.dataset.page;
    document.querySelectorAll('[data-nav-link]').forEach((link) => { if (link.dataset.navLink === page) link.classList.add('is-active'); });
  }

  function setupGreenBackgroundVideos() {
    document.querySelectorAll('.page-hero, .band').forEach((section) => {
      section.classList.add('video-bg-section');
      const video = document.createElement('video');
      video.className = 'section-bg-video';
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.setAttribute('aria-hidden', 'true');
      const source = document.createElement('source');
      source.src = 'dogs-green-bg.mp4';
      source.type = 'video/mp4';
      video.appendChild(source);
      section.prepend(video);
    });
  }

  function setupAdmin() {
    const button = document.querySelector('[data-admin-toggle]');
    const bar = document.querySelector('[data-admin-bar]');
    if (!button) return;
    const refresh = () => { const active = localStorage.getItem('bassetAdminMode') === 'true'; button.textContent = active ? 'Exit admin mode' : 'Owner admin'; if (bar) bar.hidden = !active; applyFilters(); };
    button.addEventListener('click', () => {
      const active = localStorage.getItem('bassetAdminMode') === 'true';
      if (!active) { const password = window.prompt('Demo admin password:'); if (password !== 'happy-ears') return; localStorage.setItem('bassetAdminMode', 'true'); } else localStorage.removeItem('bassetAdminMode');
      refresh();
    });
    refresh();
  }

  function bindReveal() {
    const items = document.querySelectorAll('.reveal:not([data-reveal-bound])');
    if (!('IntersectionObserver' in window)) { items.forEach((item) => item.classList.add('is-visible')); return; }
    const observer = new IntersectionObserver((entries, current) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); entry.target.dataset.revealBound = 'true'; current.unobserve(entry.target); } }), { threshold: .1 });
    items.forEach((item) => observer.observe(item));
  }

  document.addEventListener('click', (event) => {
    const puppyCardElement = event.target.closest('[data-puppy-card]');
    const dogCardElement = event.target.closest('[data-dog-id]');
    const cycle = event.target.closest('[data-cycle-status]');
    const thumb = event.target.closest('[data-gallery-thumb]');
    const close = event.target.closest('[data-modal-close]');
    if (cycle) { event.stopPropagation(); cycleStatus(cycle.dataset.cycleStatus); return; }
    if (puppyCardElement && !event.target.closest('button')) { openPuppyModal(puppyCardElement.dataset.puppyId); return; }
    if (dogCardElement) { openDogModal(dogCardElement.dataset.dogId); return; }
    if (thumb) { const main = document.querySelector('[data-gallery-main]'); if (main) main.src = thumb.dataset.galleryThumb; thumb.parentElement.querySelectorAll('button').forEach((item) => item.classList.remove('is-active')); thumb.classList.add('is-active'); return; }
    if (close || event.target.matches('[data-modal-backdrop]')) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    const card = event.target.closest('[data-puppy-card], [data-dog-id]');
    if (card && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); card.click(); }
    if (event.key === 'Escape') closeModal();
  });

  document.addEventListener('click', (event) => {
    const galleryImage = event.target.closest('[data-gallery-main]');
    if (galleryImage && document.querySelector('[data-modal-backdrop]')?.dataset.modalType !== 'lightbox') openLightbox(galleryImage.src, galleryImage.alt);
  });

  document.querySelectorAll('[data-faq-question]').forEach((button) => button.addEventListener('click', () => { const answer = document.getElementById(button.getAttribute('aria-controls')); const open = button.getAttribute('aria-expanded') === 'true'; button.setAttribute('aria-expanded', String(!open)); answer.classList.toggle('is-open', !open); }));

  document.querySelectorAll('[data-status-filter], [data-gender-filter]').forEach((button) => button.addEventListener('click', () => { button.parentElement.querySelectorAll('button').forEach((item) => item.classList.remove('is-active')); button.classList.add('is-active'); applyFilters(); }));
  document.querySelector('[data-puppy-search]')?.addEventListener('input', applyFilters);

  const backTop = document.querySelector('[data-back-top]');
  window.addEventListener('scroll', () => backTop?.classList.toggle('is-visible', window.scrollY > 500));
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  document.querySelector('[data-year]')?.appendChild(document.createTextNode(String(new Date().getFullYear())));
  setupGreenBackgroundVideos();
  setupNavigation();
  setupAdmin();
  renderFeatured();
  const puppyGrid = document.querySelector('[data-puppy-grid]');
  if (puppyGrid) { puppyGrid.setAttribute('aria-busy', 'true'); requestAnimationFrame(() => renderPuppies(puppyGrid)); }
  renderDogs();
  setupForms();
  bindReveal();
})();
