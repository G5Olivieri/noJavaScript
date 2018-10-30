for(let copies of document.querySelectorAll('.copy')) {
  copies.addEventListener('click', (event) => {
    console.log(copies.parentElement.childNodes[3]);
    const code = copies.parentElement.childNodes[3].innerText;
    console.log(code);
  })
}
