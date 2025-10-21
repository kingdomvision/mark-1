console.log('Updating effectiveness section text');

// Find the paragraph containing the text to replace
const paragraphs = document.querySelectorAll('p.effectiveness---subheadline');
let found = false;

for (const p of paragraphs) {
  if (p.textContent.includes('of guitarists improve their playing after joining Pickup Music')) {
    p.textContent = 'of members say they finally feel like a guitarist again';
    found = true;
    console.log('Successfully updated paragraph text');
    break;
  }
}

if (found) {
  // Emit success only after changes are confirmed
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  console.error('Paragraph with target text not found');
}