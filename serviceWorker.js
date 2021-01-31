// Должно быть true в production
var doCache = true;

// Имя кэша
var CACHE_NAME = 'react-chat-cache';

// Очищает старый кэш
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(caches.keys().then(keyList =>
        Promise.all(keyList.map(key => {
            if (!cacheWhitelist.includes(key)) {
                console.log('Deleting cache: ' + key);
                return caches.delete(key);
            }
        }))
    ));
});

// 'install' вызывается, как только пользователь впервые открывает PWA
self.addEventListener('install', function(event) {
  if (doCache) {
      event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
                  // Получаем данные из манифеста (они кэшируются)
                  fetch('manifest/manifest.json').then(response => {
                          return response.json();
                      }).then(assets => {
                      // Открываем и кэшируем нужные страницы и файлы
                          const urlsToCache = [
                              '',
                              '/chat/*',
                          ];
                          cache.addAll(urlsToCache);
                          console.log('cached');
                      })
              })
      );
  }
});

self.addEventListener('push', function(event) {
    console.info('Event: Push');
    var title = 'Тут новый пуш прилетел!';
    var body = {
      'body': 'Нажми сюда, чтобы открыть',
      'tag': 'pwa',
      'icon': './manifest/logo-pwa-48.png'
    };
    event.waitUntil(
      self.registration.showNotification(title, body)
    );
});

// Когда приложение запущено, service worker перехватывает запросы и отвечает на них данными из кеша, если они есть
self.addEventListener('fetch', function(event) {
  if (doCache) {
      event.respondWith(
          caches.match(event.request).then(function(response) {
              return response || fetch(event.request);
          })
      );
  }
});