export default function decorate(block) {
  [...block.children].forEach((row) => {
    const title = row.children[0];
    const content = row.children[1];
    
    title.classList.add('accordion-title');
    content.classList.add('accordion-content');
    
    title.addEventListener('click', () => {
      const isActive = title.classList.contains('active');
      block.querySelectorAll('.accordion-title').forEach(t => t.classList.remove('active'));
      block.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
      
      if (!isActive) {
        title.classList.add('active');
        content.style.display = 'block';
      }
    });
  });
}