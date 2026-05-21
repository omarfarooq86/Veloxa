const fs = require('fs');
const html = fs.readFileSync('zera.html', 'utf8');

try {
  const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/gi;
  let match;
  const urls = new Set();
  const lowerHtml = html.toLowerCase();
  
  const clientsSection = lowerHtml.indexOf('our clients');
  if (clientsSection !== -1) {
    const relevantHtml = html.substring(clientsSection, clientsSection + 8000);
    while ((match = imgRegex.exec(relevantHtml)) !== null) {
        if (!match[1].includes('data:image')) {
            urls.add(match[1]);
        }
    }
  }
  
  // also let's just find the marquee div if possible
  const marqueeSection = lowerHtml.indexOf('marquee');
  if (marqueeSection !== -1) {
    const relevantHtml = html.substring(marqueeSection - 1000, marqueeSection + 8000);
    while ((match = imgRegex.exec(relevantHtml)) !== null) {
        if (!match[1].includes('data:image')) {
            urls.add(match[1]);
        }
    }
  }

  // Find images containing 'client', 'logo' that are not empty
  while ((match = imgRegex.exec(html)) !== null) {
    const url = match[1];
    if ((url.includes('client') || url.includes('logo')) && !url.includes('data:image')) {
      urls.add(url);
    }
  }

  console.log('Found Images:');
  console.log(Array.from(urls).join('\n'));
} catch (e) {
  console.error(e);
}
