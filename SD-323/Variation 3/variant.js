// CHANGEME: Below is the initial example template.
// Must start by replacing all example lines with your own code.
// Example hypothetical demo variant code below.

// Example: Can use console.* for logging/debugging
console.log('Welcome to Coframe!');

// Select the h3.hip-lp__card-dscrptn element
const h3 = document.querySelector('.hip-lp__card-dscrptn');
if (h3) {
  // Update the text inside the <b> element
  const bElement = h3.querySelector('b');
  if (bElement) {
    bElement.textContent = 'Ready to protect your home?';
  }
  
  // Update the text after the <b> element (text node)
  for (let i = 0; i < h3.childNodes.length; i++) {
    const node = h3.childNodes[i];
    if (node.nodeType === 3) { // Text node
      if (node.textContent.includes('Confirm to get prices')) {
        node.textContent = '\nCompare top security systems and save money in Boardman, Oregon';
      }
    }
  }
  
  // Emit variantRendered event after successfully applying changes
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  console.error('h3.hip-lp__card-dscrptn not found');
}