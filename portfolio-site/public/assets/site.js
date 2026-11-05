
(() => {
  const menu = document.querySelector('[data-menu]');
  const nav = document.querySelector('[data-nav]');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }));
  }
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = String(new Date().getFullYear());
  });

  const audio = document.querySelector('[data-album-audio]');
  const rows = [...document.querySelectorAll('[data-track]')];
  const nowPlaying = document.querySelector('[data-now-playing]');
  if (audio && rows.length && nowPlaying) {
    rows.forEach(row => row.addEventListener('click', () => {
      const src = row.getAttribute('data-src');
      const title = row.getAttribute('data-title');
      if (!src || !title) return;
      rows.forEach(other => other.setAttribute('aria-pressed', 'false'));
      row.setAttribute('aria-pressed', 'true');
      audio.pause();
      audio.setAttribute('src', src);
      audio.load();
      nowPlaying.textContent = title;
    }));
  }

  const dialog = document.querySelector('[data-lightbox]');
  const galleryItems = [...document.querySelectorAll('[data-gallery-item]')];
  if (dialog && galleryItems.length && typeof dialog.showModal === 'function') {
    const img = dialog.querySelector('[data-lightbox-image]');
    const title = dialog.querySelector('[data-lightbox-caption]');
    const count = dialog.querySelector('[data-lightbox-count]');
    let active = 0;
    let previousFocus = null;
    const display = index => {
      active = (index + galleryItems.length) % galleryItems.length;
      const item = galleryItems[active];
      img.src = item.getAttribute('data-full') || item.querySelector('img')?.src || '';
      img.alt = item.querySelector('img')?.alt || 'Selected campaign artwork';
      title.textContent = item.getAttribute('data-caption') || 'Campaign still';
      count.textContent = String(active + 1).padStart(2,'0') + ' / ' + String(galleryItems.length).padStart(2,'0');
    };
    galleryItems.forEach((item, i) => item.addEventListener('click', () => {
      previousFocus = document.activeElement;
      display(i);
      dialog.showModal();
    }));
    dialog.querySelector('[data-lightbox-close]')?.addEventListener('click', () => dialog.close());
    dialog.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => display(active - 1));
    dialog.querySelector('[data-lightbox-next]')?.addEventListener('click', () => display(active + 1));
    dialog.addEventListener('click', e => {if (e.target === dialog) dialog.close();});
    dialog.addEventListener('close', () => {img.removeAttribute('src'); previousFocus?.focus?.();});
    document.addEventListener('keydown', e => {
      if (!dialog.open) return;
      if (e.key === 'ArrowRight') {e.preventDefault();display(active + 1);}
      if (e.key === 'ArrowLeft') {e.preventDefault();display(active - 1);}
    });
  }
})();
