const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://kupim.com.ua';
const DIST_FOLDER = path.resolve(__dirname, 'dist/kupim/browser');

// Список маршрутов вашего приложения
const ROUTES = [
    '/?state=florida',
    '/contacts',
    '/laptop?state=florida',
    '/bike?state=florida',
    '/team'
];

const generateSitemap = () => {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n`;

    ROUTES.forEach(route => {
        sitemap += `  <url>\n`;
        sitemap += `    <loc>${SITE_URL}${route}</loc>\n`;
        sitemap += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
        sitemap += `    <changefreq>daily</changefreq>\n`;
        sitemap += `  </url>\n`;
    });

    sitemap += `</urlset>`;

    fs.writeFileSync(path.join(DIST_FOLDER, 'sitemap.xml'), sitemap);
    console.log('Sitemap generated successfully!');
};

generateSitemap();
