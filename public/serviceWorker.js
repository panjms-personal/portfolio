let PORTFOLIO_CACHE = 'PORTFOLIO';
const urlsToCache = ['/', '/index.html'];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(PORTFOLIO_CACHE).then(function (cache) {
      console.log('Portfolio cache is open.');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
