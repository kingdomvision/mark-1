console.log('Starting text replacement variant...');

// Helper function to find and replace text
function replaceTextInElements(selector, oldText, newText) {
  const elements = document.querySelectorAll(selector);
  for (const el of elements) {
    if (el.textContent.trim() === oldText.trim()) {
      el.textContent = newText;
      console.log(`Replaced: "${oldText}" with "${newText}"`);
      return true;
    }
  }
  return false;
}

// Apply text replacements
const replacements = [
  { 
    selector: '._200-bold.mbp-font-16px', 
    oldText: 'Follow day-by-day lessons', 
    newText: 'Practice with purpose every day — and actually feel yourself getting better' 
  },
  { 
    selector: '._200-bold.mbp-font-16px', 
    oldText: 'Get a personalized learning plan', 
    newText: 'We map your path to your first song — or your comeback' 
  },
  { 
    selector: '._200-bold.mbp-font-16px', 
    oldText: 'Tell us about your guitar goals', 
    newText: 'Tell us what you\'re dreaming of playing' 
  }
];

let successCount = 0;
for (const { selector, oldText, newText } of replacements) {
  if (replaceTextInElements(selector, oldText, newText)) {
    successCount++;
  } else {
    console.warn(`Could not find text: "${oldText}"`);
  }
}

if (successCount === replacements.length) {
  console.log('All text replacements successful');
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  console.error(`Only ${successCount}/${replacements.length} replacements successful`);
}