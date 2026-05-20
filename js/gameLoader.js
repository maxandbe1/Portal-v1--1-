import { setSystemStatus } from './router.js';

function gameIdToPath(id) {
  return `games/${id}/index.html`;
}

function loadGameIntoFrame(id) {
  const container = document.getElementById('game-frame-container');
  container.innerHTML = '';
  setSystemStatus('LOADING');

  const iframe = document.createElement('iframe');
  iframe.src = gameIdToPath(id);

  iframe.onload = () => setSystemStatus('READY');
  iframe.onerror = () => setSystemStatus('ERROR', 'Failed to load game');

  container.appendChild(iframe);
}

function resetGameFrame() {
  const container = document.getElementById('game-frame-container');
  if (container) container.innerHTML = '';
}

export { loadGameIntoFrame, resetGameFrame };

