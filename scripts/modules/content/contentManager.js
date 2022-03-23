const contentElements = [];

[...document.body.children].forEach((element) => {
  if (element.classList.contains('content')) {
    contentElements.push(element);
  }
});

contentElements.forEach((item) => {
  document.getElementById(`${item.id}-button`).addEventListener('click', () => {
    [...contentElements].forEach((element) => {
      element.style.display = 'none';
    });

    item.style.display = 'block';
  });
});
