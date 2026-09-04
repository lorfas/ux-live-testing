export const SCREENS = [
  { id: 'home', label: 'Home' },
  { id: 'page1', label: 'Page 1' },
  { id: 'page2', label: 'Page 2' },
  { id: 'page3', label: 'Page 3' }
];

export function genCode(len) {
  len = len || 5;
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = '';
  for (let i = 0; i < len; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

export function screensMarkup(prefix) {
  return SCREENS.map(function (s) {
    if (s.id === 'home') {
      return '<div class="screen" data-screen="home" id="' + prefix + '-home">' +
        '<div class="page-badge">Home</div>' +
        '<h3>Pick a page</h3>' +
        '<p class="desc">Tap a button to navigate.</p>' +
        '<div class="tap-target primary" data-goto="page1" data-label="Button 1 (Home)">Go to Page 1</div>' +
        '<div class="tap-target primary" data-goto="page2" data-label="Button 2 (Home)">Go to Page 2</div>' +
        '<div class="tap-target primary" data-goto="page3" data-label="Button 3 (Home)">Go to Page 3</div>' +
        '</div>';
    }
    const n = s.id.slice(-1);
    return '<div class="screen" data-screen="' + s.id + '" id="' + prefix + '-' + s.id + '">' +
      '<div class="page-badge">Page ' + n + '</div>' +
      '<h3>This is page ' + n + '</h3>' +
      '<p class="desc">Some placeholder content for page ' + n + '.</p>' +
      '<div class="tap-target back" data-goto="home" data-label="Back (Page ' + n + ')">&larr; Back</div>' +
      '</div>';
  }).join('');
}
