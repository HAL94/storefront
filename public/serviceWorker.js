const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html', 'favicon.svg'];

// install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Opened Cache');
            return cache.addAll(urlsToCache);
        })

    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request) // we match all the requests
            .then(() => {
                return fetch(event.request) // if it cannot fetch data, it could mean that there is no internet connection
                    .catch(() => {
                        caches.match('offline.html')
                    })
            }) // in case of no internet, we return the offline.html page)
    )
})

// Activate the service worker
self.addEventListener('activate', (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all([cacheNames.map((cacheName) => {
                if (!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })])
        })
    )
})