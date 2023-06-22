const environmentUrls = new Map();

// local
environmentUrls.set('localhost', 'http://localhost:8080');

// prod
environmentUrls.set('bookstoreclient-mironmaksymiuk.b4a.run', 'https://bookstore-mironmaksymiuk.b4a.run/');

export default environmentUrls.get(window.location.hostname);