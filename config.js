// Deployed Worker (no domain purchased — ADR 0003). Swap to
// http://localhost:8787 locally if testing against `wrangler dev` instead.
const API_BASE_URL = "https://eventdesk-api.toddcampbell-eventdesk.workers.dev";

// ADR 0018 — every value from an API response that gets interpolated into
// an .innerHTML template string must be wrapped in this first. Loaded
// once here (config.js is included on every page) so there's exactly one
// copy, not one per page.
function escapeHtml(value) {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
