// CHANGEME: Below is the initial example template.
// Must start by replacing all example lines with your own code.
// Example hypothetical demo variant code below.

// Example: Can use console.* for logging/debugging
console.log('Welcome to Coframe!');

const targetH2 = document.querySelector('.section---learning-pathways h2.title.text-extra-bold');
if (targetH2 && targetH2.textContent.includes('Learning pathways to keep you on track')) {
  console.log('Found target h2 element');
  targetH2.textContent = 'Structured journeys from "Where do I start?" to "I can play that!"';

  // Must emit variantRendered event
  // *only* after successfully applying *all* of the desired changes
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  // Important to either use MutationObserver or strongly assert the element exists
  // Must never emit the variantRendered event in error cases
  console.error('Target h2 element not found');
}