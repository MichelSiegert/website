
const CACHE_NAME = 'siegert-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/assets/sintro.webm',
  '/assets/dart.webp',
  '/assets/go.webp',
  '/assets/java.webp',
  '/assets/js.webp',
  '/assets/kotlin.webp',
  '/assets/python.webp',
  '/assets/ts.webp',
  "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap",
  "assets/portrait.webp"
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  //font case:
  const url = event.request.url;
  if (url.startsWith('https://fonts.googleapis.com') || url.startsWith('https://fonts.gstatic.com')) {
    event.respondWith(
      caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      }));
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

self.addEventListener('sync', function(event) {
  if (event.tag === 'form-sync') {
    event.waitUntil(syncFormSubmissions());
  }
});


async function syncFormSubmissions() {
  const db = await openDatabase();
  const submissions = await getAllSubmissions(db);
  const keys = getAllKeys(db);
  console.log(submissions);

  for (let i = 0; i < submissions.length; i++) {
    try {
      const response = await fetch('https://formspree.io/f/meoqggyn', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissions[i]),
      });

      if (response.ok) {
        const deleteTx = db.transaction('formSubmissions', 'readwrite');
        deleteTx.objectStore('formSubmissions').delete(keys[i]);
        await deleteTx.done;
      }
    } catch (err) {
      console.error('Failed to sync submission', err);
    }
  }
}

function getAllSubmissions(db) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction('formSubmissions', 'readonly');
    const store = tx.objectStore('formSubmissions');
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
 
function getAllKeys(db){
      return new Promise((resolve, reject) => {
        const tx = db.transaction('formSubmissions', 'readonly');
        const store = tx.objectStore('formSubmissions');
        const request = store.getAllKeys();

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
  }


function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('FormDatabase');

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}