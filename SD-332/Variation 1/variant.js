// Add testimonials section at the bottom of the page
console.log('Adding testimonials section...');

// Create the testimonials container
const testimonialSection = document.createElement('div');
testimonialSection.style.position = 'static';
testimonialSection.style.marginTop = '-30px';
testimonialSection.style.paddingTop = '32px';
testimonialSection.style.paddingBottom = '16px';

const contentWrapper = document.createElement('div');
contentWrapper.style.maxWidth = '672px';
contentWrapper.style.margin = '0 auto';
contentWrapper.style.paddingLeft = '16px';
contentWrapper.style.paddingRight = '16px';

const reviewCard = document.createElement('div');
reviewCard.style.backgroundColor = '#ffffff';
reviewCard.style.border = '1px solid #cccccc';
reviewCard.style.padding = '24px';
reviewCard.style.borderRadius = '4px';
reviewCard.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';

const quote = document.createElement('p');
quote.textContent = '"Got 3 quotes in minutes. Saved $40/month vs going direct!"';
quote.style.color = '#000000';
quote.style.marginBottom = '16px';
quote.style.fontStyle = 'italic';
quote.style.lineHeight = '1.5';

const footer = document.createElement('div');
footer.style.display = 'flex';
footer.style.justifyContent = 'space-between';
footer.style.alignItems = 'center';

const authorInfo = document.createElement('div');
const authorName = document.createElement('p');
authorName.style.fontWeight = '600';
authorName.style.color = '#000000';

// Create spans for different text with different styling
const nameSpan = document.createElement('span');
nameSpan.textContent = 'Sarah M';
nameSpan.style.fontWeight = '600';
nameSpan.style.color = '#000000';

const commaSpan = document.createElement('span');
commaSpan.textContent = ', ';
commaSpan.style.fontWeight = '600';
commaSpan.style.color = '#000000';

const locationSpan = document.createElement('span');
locationSpan.textContent = 'Portland';
locationSpan.style.fontWeight = '400';
locationSpan.style.color = '#999999';

authorName.appendChild(nameSpan);
authorName.appendChild(commaSpan);
authorName.appendChild(locationSpan);

authorInfo.appendChild(authorName);

const stars = document.createElement('div');
stars.style.display = 'flex';
stars.style.gap = '4px';
for (let i = 0; i < 5; i++) {
  const star = document.createElement('span');
  star.textContent = '★';
  star.style.color = '#facc15';
  star.style.fontSize = '18px';
  stars.appendChild(star);
}

footer.appendChild(authorInfo);
footer.appendChild(stars);

reviewCard.appendChild(quote);
reviewCard.appendChild(footer);

contentWrapper.appendChild(reviewCard);

testimonialSection.appendChild(contentWrapper);

// Find the section with heading "Do you own or rent your apartment?"
let targetSection = null;
const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

for (const heading of allHeadings) {
  if (heading.textContent.includes('Do you own or rent your apartment?')) {
    targetSection = heading.closest('section') || heading.closest('div[class*="section"]') || heading.parentElement;
    break;
  }
}

if (targetSection) {
  // Insert after the target section
  targetSection.parentNode.insertBefore(testimonialSection, targetSection.nextSibling);
  console.log('Testimonials section added after apartment question section');
} else {
  // Fallback: try to find footer
  const footerEl = document.querySelector('footer');
  if (footerEl) {
    footerEl.parentNode.insertBefore(testimonialSection, footerEl);
    console.log('Testimonials section added before footer');
  } else {
    document.body.appendChild(testimonialSection);
    console.log('No target section found, testimonials appended to body');
  }
}

window.CFQ = window.CFQ || [];
window.CFQ.push({ emit: 'variantRendered' });
console.log('Testimonials section added successfully');