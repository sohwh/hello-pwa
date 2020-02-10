var cacheName = 'hello-PWAContactUs';

var FilesToCache = [
    '/',
    '/index.html',
    '/contactus.html',
    '/css/style.css',
    '/js/main.js'   
];


self.addEventListener('install', function(e){
   e.waitUntil(
     caches.open(cacheName).then(
      function(cache){
         return cache.addAll(FilesToCache);
      }
     )
   ); 
    
});


self.addEventListener('fetch', function(e){
   e.respondWith(
     caches.match(e.request).then(
      function(response) {
          return response || fetch(e.request);
                    
         }
         
     )
   ); 
    
});
