const colorPicker = document.getElementById('colorPicker');
const body = document.body;

colorPicker.addEventListener('input', () => {
  const selectedColor = colorPicker.value;
  body.style.backgroundColor = selectedColor;
});