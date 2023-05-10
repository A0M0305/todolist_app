const App = document.getElementById('App');

function closeDiv(event) {
  if (!App.contains(event.target)) {
    App.style.display = 'none';
    document.removeEventListener('click', closeDiv);
  }
}

export default closeDiv;