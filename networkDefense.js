// networkDefense.js
export function runNetworkDefense() {
  console.log("Nexus Matrix: Defense Layer Synchronized.");

  function auditHyperlinks() {
    const links = document.querySelectorAll('a');
    let suspiciousCount = 0;

    links.forEach(link => {
      const url = link.href.toLowerCase();
      const isSuspicious =
        url.startsWith('http://') ||
        url.includes('bit.ly') ||
        url.includes('.xyz') ||
        url.includes('.top');

      if (isSuspicious) {
        suspiciousCount++;
        link.style.outline = "2px solid #ff00ff";
        link.style.backgroundColor = "rgba(255, 0, 255, 0.1)";
        link.title = "[NEXUS WARNING] Potentially Unsafe Redirect";
      }
    });

    return { total: links.length, suspicious: suspiciousCount };
  }

  function analyzeJobListing() {
    const bodyText = document.body.innerText.toLowerCase();
    const isRemote = bodyText.includes('remote');
    const isBakersfield = bodyText.includes('bakersfield');

    const rateRegex = /\$?(\d{2})(\.\d{2})?\s*\/hr|(\d{2})k\+/i;
    const match = bodyText.match(rateRegex);
    const rate = match ? parseInt(match[1] || match[3]) : 0;

    let action = "IGNORE";
    if (isRemote && rate >= 27) action = "CONFIRM_RTR_REMOTE";
    else if (isBakersfield && rate >= 28) action = "CONFIRM_RTR_HYBRID";
    else if (!isRemote && rate >= 37) action = "CONFIRM_RTR_OFFICE";

    return { action, rate, isRemote };
  }

  return { auditHyperlinks, analyzeJobListing };
}
