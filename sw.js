// intalacion serviceWorker

const CACHE_ELEMENTS = [
    './',
    'https://unpkg.com/react@17/umd/react.development.js',
    'https://unpkg.com/react-dom@17/umd/react-dom.development.js',
    'https://unpkg.com/@babel/standalone/babel.min.js',
    './style.css',
    './components/Contador.js',
    './index.js',
    './register.js',
]

const CACHE_NAME = 'v3_cache_contador_react'
//self es lo mismo que this pero nose porque se utiliza
self.addEventListener('install', (e) => {
    //console.log(e)
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(CACHE_ELEMENTS)
            self.skipWaiting()
        }).catch(console.log)
    )

}
);

self.addEventListener('activate', (e) => {

    const cacheWhiteList = [CACHE_NAME]

    e.waitUntil(
        caches.keys().then(cacheNames => {
            //console.log(cacheNames)
            return Promise.all(cacheNames.map(cacheName => {
                return cacheWhiteList.indexOf(cacheName) === -1 && caches.delete(cacheName)
            }))
        }).then(() => self.clients.claim())
    )

})
// evento fetch
self.addEventListener('fetch', (e) => {
    // console.log(e.request) 
    e.respondWith(
        caches.match(e.request).then((res) => {
            if (res) {
                return res;
            }
            return fetch(e.request)


        })
    )


})

