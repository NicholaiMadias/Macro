// job-tools-init.js
import { runNetworkDefense } from './networkDefense.js';

export async function initJobTools(db, uid) {
  const snap = await db.ref(`users/${uid}/tools/networkDefense`).get();
  if (snap.exists() && snap.val() === true) {
    const defense = runNetworkDefense();
    // Example: run link audit immediately
    const report = defense.auditHyperlinks();
    console.log("Link audit report:", report);
  }
}
