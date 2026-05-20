import { setSystemStatus } from './router.js';

let lastBeat = Date.now();

function heartbeat() {
  lastBeat = Date.now();
}

function startWatchdog() {
  setInterval(() => {
    if (Date.now() - lastBeat > 20000) {
      setSystemStatus('ERROR', 'Watchdog reset');
      location.reload();
    }
  }, 5000);
}

export { heartbeat, startWatchdog };

