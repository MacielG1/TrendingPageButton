const targetDiv = document.querySelector('.dashboard-sidebar');

if (targetDiv) {
  const button = document.createElement('button');
  button.innerText = 'Trending';

  function setButtonStyle(styles) {
    for (const property in styles) {
      button.style[property] = styles[property];
    }
  }

  const defaultStyles = {
    margin: '-10px 0 6px 25px',
    padding: '4px 8px',
    backgroundColor: 'transparent',
    color: '#007BFF',
    textDecoration: 'none',
    borderRadius: '8px',
    border: '1px solid #007BFF',
    transition: 'background-color 0.3s, color 0.3s',
    maxWidth: '5rem',
  };

  const hoverStyles = {
    backgroundColor: '#007BFF',
    color: '#000',
  };

  const smallScreenStyles = {
    margin: '2px 3px 15px 3px',
    padding: '2px 4px',
  };

  setButtonStyle(defaultStyles);

  button.addEventListener('click', () => {
    window.open('https://github.com/trending', '_self');
  });

  button.addEventListener('mouseover', () => setButtonStyle(hoverStyles));

  button.addEventListener('mouseout', () => {
    setButtonStyle(defaultStyles);
    if (window.innerWidth < 768) setButtonStyle(smallScreenStyles);
  });

  targetDiv.appendChild(button);

  window.addEventListener('resize', handleResize);
  handleResize();

  function handleResize() {
    const element = document.querySelector('.d-block');
    if (window.innerWidth < 768) {
      setButtonStyle(smallScreenStyles);
      if (element) element.parentNode.insertBefore(button, element.nextSibling);
    } else {
      setButtonStyle(defaultStyles);
      targetDiv.appendChild(button);
    }
  }
}
