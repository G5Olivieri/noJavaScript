for(let copies of document.querySelectorAll('.copy')) {
  copies.addEventListener('click', () => {
    const code = copies.parentElement.childNodes[3].innerText;
    const el = document.createElement('textarea');
    el.value = code;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  })
}
