// Find and replace text in the "How it works" section cards
const textReplacements = {
  'Tell us about your guitar goals': 'Get your plan',
  'Get a personalized learning plan': 'Feel progress',
  'Follow day-by-day lessons': 'Play your first song'
};

let replacedCount = 0;

// Find all elements containing the target text
const elements = document.querySelectorAll('._200-bold.mbp-font-16px');

elements.forEach(el => {
  const currentText = el.textContent.trim();
  if (textReplacements[currentText]) {
    el.textContent = textReplacements[currentText];
    replacedCount++;
  }
});

if (replacedCount === 3) {
  console.log('Successfully replaced all 3 text items in the How it works section');
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  console.error(`Only replaced ${replacedCount} out of 3 expected text items`);
}