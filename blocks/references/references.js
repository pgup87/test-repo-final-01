export default function decorate(block) {
  const ol = document.createElement('ol');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.innerHTML = row.firstElementChild.innerHTML;
    ol.append(li);
  });
  block.textContent = '';
  block.append(ol);
}