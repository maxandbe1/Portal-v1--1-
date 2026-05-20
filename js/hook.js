import { AppState } from './state.js';
import { setSystemStatus } from './router.js';

function triggerMonetization() {
  AppState.monetization.totalEvents++;
  AppState.monetization.lastEvent = new Date().toISOString();

  setSystemStatus('LOADING');
  setTimeout(() => setSystemStatus('READY'), 300);
}

export { triggerMonetization };

