export default function decorate(block) {
  const link = block.querySelector('a');
  const poster = block.querySelector('img');
  
  if (link) {
    const url = link.href;
    block.textContent = '';
    
    const container = document.createElement('div');
    container.classList.add('video-container');
    
    if (poster) {
       container.append(poster);
       poster.addEventListener('click', () => {
         container.innerHTML = `<iframe src="${url}" frameborder="0" allowfullscreen></iframe>`;
       });
    } else {
       container.innerHTML = `<iframe src="${url}" frameborder="0" allowfullscreen></iframe>`;
    }
    block.append(container);
  }
}