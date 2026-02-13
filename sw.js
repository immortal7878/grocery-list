const CACHE_NAME = "grocery-v1";
const ASSETS = ["./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  if (e.request.url.includes("googleapis.com") || e.request.url.includes("gstatic.com") || e.request.url.includes("firebaseio.com")) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
