/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.saranateknikbali.com', // Ganti dengan domain Anda
    generateRobotsTxt: true, // Menghasilkan robots.txt secara otomatis
    outDir: './public', // Lokasi output file sitemap dan robots.txt
    exclude: ['/404'], // Mengecualikan halaman 404
  };
  