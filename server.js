// Production server for Railway: serves the built site from dist/ and
// falls back to index.html so client-side routes (/About, /Contact, ...) work.
import http from 'node:http';
import handler from 'serve-handler';

const port = process.env.PORT || 3000;

http
  .createServer((req, res) =>
    handler(req, res, {
      public: 'dist',
      rewrites: [{ source: '**', destination: '/index.html' }],
      // Online checkers (e.g. WAVE) re-host the page on their own domain, and the
      // browser only runs our module scripts from there if CORS allows it.
      headers: [{ source: '**', headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }] }],
    })
  )
  .listen(port, '0.0.0.0', () => {
    console.log(`DSS Security Solutions running on port ${port}`);
  });
