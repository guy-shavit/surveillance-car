self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('surveillance-robot').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/about.html',
          '/main.html',
          '/signup.html',
          '/User Manual.html',
          '/css/styles.css',
          '/css/stylesMain.css',
          '/css/table.css',
          '/images/a.png',
          '/images/back.png',
          '/images/clockwise.png',
          '/images/d.png',
          '/images/discord-black.png',
          '/images/e.png',
          '/images/forward.png',
          '/images/GitHub-logo.png',
          '/images/github.jpg',
          '/images/icon.png',
          '/images/leftDrift.png',
          '/images/lowerRight.png',
          '/images/lowLeft.png',
          '/images/q.png',
          '/images/rightDrift.png',
          '/images/s.png',
          '/images/topLeft.png',
          '/images/topRight.png',
          '/images/w.png',
          '/js/authCheck.js',
          '/js/cameraView.js',
          '/js/firebase.js',
          '/js/login.js',
          '/js/navigation.js',
          '/js/signup.js',
          '/js/table.js',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  