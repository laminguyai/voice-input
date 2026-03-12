const CACHE_NAME = 'cantonese-voice-v2';
const ASSETS = [
  'voice.html',    // 確保這裡名稱與你的 HTML 檔案一致
  'manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
