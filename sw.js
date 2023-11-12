// Instalación
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('static')
        .then((cache) => {
            return cache.addAll([
                '/',
                'index.html',
                'src/main.js',
                'public/icons/LOGO.png',
                'src/App.vue'
            ]);
        })
    );
});

// Activación
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activando SW ', event);

    // Reclamar el control de todas las páginas abiertas por el Service Worker
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

