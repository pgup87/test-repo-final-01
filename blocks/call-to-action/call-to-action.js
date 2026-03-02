export default function decorate(block) {
  const container = block.firstElementChild.firstElementChild;
  block.classList.add('cta-banner');
  
  const anchor = container.querySelector('a');
  if (anchor) anchor.classList.add('button', 'accent');
}