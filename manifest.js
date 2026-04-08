import { watchUser } from './authProvider.js';
import { requireRole, ROLES } from './adminKeys.js';
import { initOwnerUI, initRedeemUI } from './adminKeys-ui.js';
import { initArcadeUI } from './arcade-ui.js';
import { initCertificatesUI } from './certificates-ui.js';

watchUser(async user => {
  const body = document.body;

  if (!user) {
    body.dataset.role = 'guest';
    showSection('login');
    return;
  }

  body.dataset.role = 'user';
  initArcadeUI(user);
  initCertificatesUI(user);

  if (await requireRole(user, [ROLES.ADMIN, ROLES.SUPER_ADMIN])) {
    showSection('dashboard');
  }

  if (await requireRole(user, [ROLES.SUPER_ADMIN])) {
    initRedeemUI(user);
  }

  if (await requireRole(user, [ROLES.OWNER])) {
    initOwnerUI(user);
  }
});

function showSection(id) {
  document.querySelectorAll('[data-section]').forEach(el => {
    el.classList.toggle('hidden', el.dataset.section !== id);
  });
}
