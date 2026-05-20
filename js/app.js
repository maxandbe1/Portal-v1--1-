import { renderApp } from './ui.js';
import { startWatchdog, heartbeat } from './watchdog.js';

function init() {
  startWatchdog();
  setInterval(heartbeat, 3000);
  renderApp();
}

window.addEventListener('DOMContentLoaded', init);

