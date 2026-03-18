<?php

$uri = $_SERVER['REQUEST_URI'];
$uri = strtok($uri, '?'); // enlève les query strings

// Fichiers statiques (css, js, images, pdf...)
$file = __DIR__ . $uri;
if ($uri !== '/' && file_exists($file) && !is_dir($file)) {
    return false; // laisse le serveur servir le fichier directement
}

// Routing simple
$routes = [
    '/'              => 'index.html',
    '/index.html'    => 'index.html',
    '/projets.html'  => 'projets.html',
    '/contact.html'  => 'contact.html',
];

$page = $routes[$uri] ?? null;

if ($page && file_exists(__DIR__ . 'index.php/' . $page)) {
    include __DIR__ . 'index.php/' . $page;
} else {
    http_response_code(404);
    echo "<h1>404 — Page non trouvée</h1>";
}