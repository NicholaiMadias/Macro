// admin-tools-assign.js
function setUserTool(db, uid, toolKey, enabled) {
  return db.ref(`users/${uid}/tools/${toolKey}`).set(enabled);
}
