const https = require('https');
https.get('https://zeracreative.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/gi;
    let match;
    const urls = new Set();
    while ((match = imgRegex.exec(data)) !== null) {
      if (match[1].includes('client') || match[1].includes('logo') || data.substring(Math.max(0, match.index - 500), match.index + 500).toLowerCase().includes('client')) {
        urls.add(match[1]);
      }
    }
    console.log(Array.from(urls).join('\n'));
  });
});
