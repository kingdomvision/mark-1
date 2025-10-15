console.log('Adding bullet list below BIGGEST IMPROVEMENT section');

// Wait for the target element to be available
const targetElement = document.querySelector('#lp-pom-text-421');
if (targetElement) {
  console.log('Found target element', targetElement);
  
  // Get the parent container
  const parentContainer = targetElement.closest('#lp-pom-box-415');
  
  if (parentContainer) {
    // Create the bullet list using JSX with absolute positioning
    const bulletList = (
      <div className="cf:absolute cf:left-[623px] cf:top-[460px] cf:w-[436px] cf:z-[211]">
        <ul className="cf:list-disc cf:ml-6 cf:text-black">
          <li className="cf:text-base cf:mb-2">
            ❄️ <strong>Instant Cooling</strong> – Cools your room within minutes.
          </li>
          <li className="cf:text-base cf:mb-2">
            🌬️ <strong>Energy Efficient</strong> – Saves power while keeping you comfortable.
          </li>
          <li className="cf:text-base">
            💧 <strong>Large Water Tank</strong> – Enjoy hours of uninterrupted cooling.
          </li>
        </ul>
      </div>
    );
    
    // Insert into the parent container
    parentContainer.appendChild(bulletList);
    
    // Move the button below down to avoid overlap
    const buttonBelow = document.querySelector('#lp-pom-button-423');
    if (buttonBelow) {
      buttonBelow.style.top = '618px'; // Move down by about 80px to make room for bullet list
      buttonBelow.style.marginTop = '50px';
    }
    
    // Add margin-top to text element below for better spacing
    const textBelow = document.querySelector('#lp-pom-text-422');
    if (textBelow) {
      textBelow.style.marginTop = '140px';
    }
    
    // Must emit variantRendered event
    window.CFQ = window.CFQ || [];
    window.CFQ.push({ emit: 'variantRendered' });
  } else {
    console.error('Parent container not found');
  }
} else {
  console.error('Target element #lp-pom-text-421 not found');
}