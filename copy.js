const panels = document.querySelectorAll('.color-panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    const content = panel.dataset.content;
    navigator.clipboard.writeText(content);
  });
});