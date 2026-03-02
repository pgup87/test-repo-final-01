import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const rows = [...block.children];
  const bgRow = rows[0];
  const contentRow = rows[1] || rows[0];

  // Handle background image
  const bgImage = bgRow.querySelector('img');
  if (bgImage) {
    const picture = bgImage.closest('picture');
    picture.classList.add('hero-bg');
    block.prepend(picture);
    bgRow.remove();
  }

  const overlay = document.createElement('div');
  overlay.classList.add('hero-overlay');

  const content = contentRow.querySelector('div');
  if (content) {
    [...content.children].forEach((child) => {
      if (child.tagName === 'H1') child.classList.add('hero-headline');
      if (child.tagName === 'P') child.classList.add('hero-subheadline');
      if (child.querySelector('a')) {
        const link = child.querySelector('a');
        link.classList.add('button', 'primary', 'hero-cta');
      }
      overlay.append(child);
    });
    contentRow.remove();
  }

  block.append(overlay);
}