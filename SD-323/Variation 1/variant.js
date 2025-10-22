// Find the h3 element with class hip-lp__card-dscrptn
const h3Element = document.querySelector('.hip-lp__card-dscrptn');

if (h3Element) {
  // Update the text inside the b element
  const bElement = h3Element.querySelector('b');
  if (bElement) {
    bElement.textContent = 'What type of property are you protecting?';
  }

  // Update the text node that follows the b element
  // Iterate through child nodes to find and replace the text
  for (let node of h3Element.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('Confirm to get prices')) {
      node.textContent = 'Get 3 free quotes from top-rated security companies in minutes';
      break;
    }
  }

  // Emit variantRendered event after successful changes
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  console.error('h3.hip-lp__card-dscrptn not found');
}