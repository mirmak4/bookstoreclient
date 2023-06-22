const environmentUrls = new Map();

// local
environmentUrls.set('localhost', 'http://localhost:8080');

// dev
environmentUrls.set('bookstoreclientdev-mironmaksymiuk.b4a.run', 'https://bookstoredev-mironmaksymiuk.b4a.run/');

// prod
environmentUrls.set('bookstoreclient-mironmaksymiuk.b4a.run', 'https://bookstore-mironmaksymiuk.b4a.run/');

export default environmentUrls.get(window.location.hostname);