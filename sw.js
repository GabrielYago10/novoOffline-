const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  '/img/valete.png',
  '/img/dama.png',
  '/img/rei.png'
];

// Durante a instalação, o Service Worker irá fazer o cache das URLs especificadas.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aberto e armazenando arquivos');
        return cache.addAll(urlsToCache);
      })
  );
});

// Durante a ativação, o Service Worker irá excluir caches antigos.
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercepta as requisições de rede e tenta obter os arquivos em cache primeiro.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
