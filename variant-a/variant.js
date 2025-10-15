console.log('Ramp headline variant starting...');

// Find the main headline
const headline = document.querySelector('h1.headline-xl');

if (headline) {
  console.log('Found headline element', headline);
  
  // Change the headline text
  headline.textContent = 'This is Your Test Site';
  
  // Emit variantRendered event after successful change
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
  
  console.log('Headline changed successfully');
} else {
  console.error('Headline element not found');
}