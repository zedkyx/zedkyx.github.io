// This standalone paper page is outside the exported Next.js route tree.
// Use a document navigation instead of the framework's client-side router.
document.addEventListener('click', function (event) {
  const link = event.target.closest && event.target.closest('a');
  if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin || url.pathname !== '/papers/nodal-measure/') return;
  event.preventDefault();
  event.stopImmediatePropagation();
  window.location.assign(url.href);
}, true);
