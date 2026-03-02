export default function decorate(block) {
  const header = document.createElement('div');
  header.classList.add('isi-header');
  header.innerHTML = '<h3>IMPORTANT SAFETY INFORMATION</h3><button class="isi-toggle">Expand +</button>';
  
  const content = document.createElement('div');
  content.classList.add('isi-content');
  content.append(...block.children);

  block.textContent = '';
  block.append(header, content);

  header.querySelector('.isi-toggle').addEventListener('click', () => {
    block.classList.toggle('expanded');
    header.querySelector('.isi-toggle').textContent = block.classList.contains('expanded') ? 'Collapse -' : 'Expand +';
  });
}