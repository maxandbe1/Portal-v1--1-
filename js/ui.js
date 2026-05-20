import { AppState } from './state.js';
import { loadGameIntoFrame } from './gameLoader.js';
import { triggerMonetization } from './hook.js';

const SURFACES = [
  { id: 'games', label: 'Micro-Games' },
  { id: 'tools', label: 'Tools' },
  { id: 'intel', label: 'Intelligence' }
];

const GAMES = [
  { id: 'game1', title: 'Game 1', meta: 'Micro-game' },
  { id: 'game2', title: 'Game 2', meta: 'Micro-game' }
];

function renderApp() {
  const root = document.getElementById('app-root');
  root.innerHTML = '';

  const header = document.createElement('div');
  header.className = 'header';
  header.innerHTML = `
    <div>Portal v1.1</div>
    <div>Status: ${AppState.system.status}</div>
  `;

  const main = document.createElement('div');
  main.className = 'main';

  const sidebar = document.createElement('div');
  sidebar.className = 'sidebar';

  SURFACES.forEach(surface => {
    const item = document.createElement('div');
    item.className = 'surface-item' + (AppState.currentSurface === surface.id ? ' active' : '');
    item.textContent = surface.label;
    item.onclick = () => import('./router.js').then(m => m.setSurface(surface.id));
    sidebar.appendChild(item);
  });

  const content = document.createElement('div');
  content.className = 'content';

  if (AppState.currentSurface === 'games') renderGames(content);
  if (AppState.currentSurface === 'tools') renderTools(content);
  if (AppState.currentSurface === 'intel') renderIntel(content);

  main.appendChild(sidebar);
  main.appendChild(content);

  root.appendChild(header);
  root.appendChild(main);

  if (AppState.currentSurface === 'games' && AppState.currentGameId) {
    loadGameIntoFrame(AppState.currentGameId);
  }
}

function renderGames(container) {
  const frame = document.createElement('div');
  frame.id = 'game-frame-container';
  frame.className = 'iframe-container';

  const list = document.createElement('div');

  GAMES.forEach(game => {
    const item = document.createElement('div');
    item.textContent = game.title;
    item.onclick = () => import('./router.js').then(m => m.openGame(game.id));
    list.appendChild(item);
  });

  container.appendChild(list);
  container.appendChild(frame);
}

function renderTools(container) {
  container.textContent = 'Tools surface coming soon.';
}

function renderIntel(container) {
  container.textContent = 'Intelligence surface coming soon.';
}

export { renderApp };

