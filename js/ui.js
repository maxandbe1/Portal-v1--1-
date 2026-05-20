import { AppState } from './state.js';
import { loadGameIntoFrame } from './gameLoader.js';
import { triggerMonetization } from './hook.js';

const SURFACES = [
  { id: 'apps', label: 'Apps' },
  { id: 'games', label: 'Micro-Games' },
  { id: 'tools', label: 'Tools' },
  { id: 'intel', label: 'Intelligence' }
];


const GAMES = [
  { id: 'game1', title: 'Game 1', meta: 'Micro-game' },
  { id: 'game2', title: 'Game 2', meta: 'Micro-game' }
];

function renderApps(container) {
  const frame = document.createElement('div');
  frame.id = 'app-frame-container';
  frame.className = 'iframe-container';
if (AppState.currentSurface === 'apps') renderApps(content);

  const list = document.createElement('div');

  const APPS = [
    { id: 'chess', title: 'Chess App' },
    { id: 'sports', title: 'Sports App' },
    { id: 'notes', title: 'Notes App' }
  ];

  APPS.forEach(app => {
    const item = document.createElement('div');
    item.textContent = app.title;
    item.onclick = () => import('./router.js').then(m => {
      m.setSurface('apps');
      AppState.currentAppId = app.id;
      import('./appLoader.js').then(loader => loader.loadAppIntoFrame(app.id));
    });
    list.appendChild(item);
  });

  container.appendChild(list);
  container.appendChild(frame);
}



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

