import { setSystemStatus } from './router.js';

function appIdToPath(id) {
  return `apps/${id}/index.html`;
}

function loadAppIntoFrame(id) {
  const container = document.getElementById('app-frame-container');
  container.innerHTML = '';
  setSystemStatus('LOADING');

  const iframe = document.createElement('iframe');
  iframe.src = appIdToPath(id);

  iframe.onload = () => setSystemStatus('READY');
  iframe.onerror = () => setSystemStatus('ERROR', 'Failed to load app');

  container.appendChild(iframe);
}

function resetAppFrame() {
  const container = document.getElementById('app-frame-container');
  if (container) container.innerHTML = '';
}

export { loadAppIntoFrame, resetAppFrame };

