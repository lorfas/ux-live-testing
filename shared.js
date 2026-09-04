export function genCode(len) {
  len = len || 5;
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = '';
  for (let i = 0; i < len; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

export function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

export function basename(path) {
  const clean = String(path).split('?')[0].split('#')[0];
  const parts = clean.split('/').filter(Boolean);
  return parts.length ? parts[parts.length - 1] : clean;
}
