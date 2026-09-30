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
    })
  )
  .listen(port, '0.0.0.0', () => {
    console.log(`DSS Security Solutions running on port ${port}`);
  });
