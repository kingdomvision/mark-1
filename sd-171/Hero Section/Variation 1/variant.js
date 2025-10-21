// CHANGEME: Below is the initial example template.
// Must start by replacing all example lines with your own code.
// Example hypothetical demo variant code below.

// Example: Can use console.* for logging/debugging
console.log('Welcome to Coframe!');

// Target the first p.welcome-text element in the hero section
const welcomeElement = document.querySelector('p.welcome-text');
if (welcomeElement) {
  console.log('Found welcome element', welcomeElement);
  // Apply the text change
  welcomeElement.textContent = '👋 Just starting out?';

  // Target the h1 element and change its text
  const heroHeading = document.querySelector('h1.title.home-hero-h1-2024');
  if (heroHeading) {
    console.log('Found hero heading', heroHeading);
    heroHeading.textContent = 'Step-by-step lessons + a little 1-on-1 help to get you playing your first song — we\'ll make it fun!';
    // Apply font-size and line-height styles
    heroHeading.style.fontSize = '2rem';
    heroHeading.style.lineHeight = '3rem';
  } else {
    console.error('hero heading not found');
  }

  // Find and change the paragraph text
  const paragraphs = document.querySelectorAll('p.paragraph-8');
  let foundParagraph = false;
  paragraphs.forEach(p => {
    if (p.textContent.includes('Unlock your fretboard')) {
      console.log('Found paragraph to update', p);
      p.textContent = 'Pick Up Guitar with Confidence — Your First Song Starts Today';
      foundParagraph = true;
    }
  });
  if (!foundParagraph) {
    console.warn('Paragraph with "Unlock your fretboard" text not found');
  }

  // Must emit variantRendered event
  // *only* after successfully applying *all* of the desired changes
  window.CFQ = window.CFQ || [];
  // Clear any existing events to ensure only one emit
  window.CFQ = [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  // Important to either use MutationObserver or strongly assert the element exists
  // Must never emit the variantRendered event in error cases
  console.error('welcome element not found');
}