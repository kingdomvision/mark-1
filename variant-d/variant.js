console.log('Replacing image in #lp-pom-box-417-color-overlay');

const targetSection = document.querySelector('#lp-pom-box-417-color-overlay');

if (targetSection) {
  console.log('Found target section', targetSection);
  
  // Check if there's already an image inside
  let imgElement = targetSection.querySelector('img');
  
  if (!imgElement) {
    // If no image exists, create one using JSX
    const newImage = <img 
      src="https://static.vecteezy.com/system/resources/previews/011/883/284/non_2x/colorful-star-logo-good-for-technology-logo-vintech-logo-company-logo-browser-logo-dummy-logo-bussiness-logo-free-vector.jpg" 
      alt="Colorful star logo"
      className="cf:w-full cf:h-auto cf:max-w-full"
    />;
    targetSection.appendChild(newImage);
  } else {
    // Replace existing image src
    imgElement.src = 'https://static.vecteezy.com/system/resources/previews/011/883/284/non_2x/colorful-star-logo-good-for-technology-logo-vintech-logo-company-logo-browser-logo-dummy-logo-bussiness-logo-free-vector.jpg';
    imgElement.alt = 'Colorful star logo';
  }
  
  console.log('Image replaced successfully');
  
  // Emit variant rendered event
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  console.error('Target section #lp-pom-box-417-color-overlay not found');
}