const button = document.createElement('button');
button.innerText = 'Trending';

function setButtonStyle(styles) {
  for (const property in styles) {
    button.style[property] = styles[property];
  }
}

const defaultStyles = {
  padding: '4px 8px',
  backgroundColor: 'transparent',
  color: '#8d96a0',
  textDecoration: 'none',
  borderRadius: '8px',
  border: '1px solid #30363d',
  transition: 'background-color 0.3s, color 0.3s',
  maxWidth: '5rem',
};

const hoverStyles = {
  backgroundColor: '#b1bac41f',
  color: '#8d96a0',
};

const smallScreenStyles = {
  padding: '2px 4px',
};

setButtonStyle(defaultStyles);

button.addEventListener('click', () => {
  window.open('https://github.com/trending', '_self');
});

button.addEventListener('mouseover', () => setButtonStyle(hoverStyles));

button.addEventListener('mouseout', () => {
  setButtonStyle(defaultStyles);
  if (window.innerWidth < 400) setButtonStyle(smallScreenStyles);
});

window.addEventListener('resize', handleResize);
handleResize();

function handleResize() {
  const appHeaderSearch = document.querySelector('.AppHeader-search');
  const dBlockElement = document.querySelector('.d-block');

  if (window.innerWidth < 300) {
    setButtonStyle(smallScreenStyles);
    if (dBlockElement) {
      dBlockElement.parentNode.insertBefore(button, dBlockElement.previousSibling);
    }
  } else {
    setButtonStyle(defaultStyles);
    if (appHeaderSearch) {
      appHeaderSearch.parentNode.insertBefore(button, appHeaderSearch);
    }
  }
}

handleResize();
