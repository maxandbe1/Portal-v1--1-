import { AppState } from './state.js';
import { renderApp } from './ui.js';
import { resetGameFrame } from './gameLoader.js';

function setSurface(surfaceId) {
  AppState.currentSurface = surfaceId;
  AppState.currentGameId = null;
  resetGameFrame();
  renderApp();
}

function openGame(gameId) {
  AppState.currentSurface = 'games';
  AppState.currentGameId = gameId;
  renderApp();
}

function setSystemStatus(status, error = null) {
  AppState.system.status = status;
  AppState.system.lastError = error;
  renderApp();
}

export { setSurface, openGame, setSystemStatus };
