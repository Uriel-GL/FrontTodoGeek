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

//fetch
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') {
        // Ignorar solicitudes que no son de tipo GET
        return fetch(event.request);
    }

    // Para contenido estático
    if (event.request.url.match(/\.(js|png|jpg|html|vue)$/)) {
        event.respondWith(
            caches.open('static').then((cache) => {
                return cache.match(event.request).then((response) => {
                    return response || fetch(event.request).then((newResponse) => {
                        cache.put(event.request, newResponse.clone());
                        return newResponse;
                    });
                });
            })
        );
    }

    // Para contenido dinámico de la API
    else if (event.request.url.startsWith('https://www.resenageek.somee.com/api')) {
        event.respondWith(
            caches.open('apiCache').then((cache) => {
                return cache.match(event.request).then((response) => {
                    return response || fetch(event.request).then((newResponse) => {
                        cache.put(event.request, newResponse.clone());
                        return newResponse;
                    });
                });
            })
        );
    }

    else {
        event.respondWith(
            caches.open('static').then((cache) => {
                return cache.match(event.request).then((response) => {
                    return response || fetch(event.request).then((newResponse) => {
                        cache.put(event.request, newResponse.clone());
                        return newResponse;
                    });
                });
            })
        );
    }
});
// self.addEventListener('fetch', (event) => {

//     // Para contenido estático
//     if (event.request.method === 'GET' && event.request.url.match(/\.(js|png|jpg|html|vue)$/)) {
//         event.respondWith(
//             caches.open('static').then((cache) => {
//                 return cache.match(event.request).then((response) => {
//                     return response || fetch(event.request).then((newResponse) => {
//                         cache.put(event.request, newResponse.clone());
//                         return newResponse;
//                     });
//                 });
//             })
//         );
//     }

//     // Para contenido dinámico de la API
//     else if (event.request.url.startsWith('https://localhost:7121/api')) {
//         event.respondWith(
//             caches.open('apiCache').then((cache) => {
//                 return cache.match(event.request).then((response) => {
//                     return response || fetch(event.request).then((newResponse) => {
//                         cache.put(event.request, newResponse.clone());
//                         return newResponse;
//                     });
//                 });
//             })
//         );
//     }

//     else {
//         event.respondWith(
//             caches.open('static').then((cache) => {
//                 return cache.match(event.request).then((response) => {
//                     return response || fetch(event.request).then((newResponse) => {
//                         cache.put(event.request, newResponse.clone());
//                         return newResponse;
//                     });
//                 });
//             })
//         );
//     }
// });
