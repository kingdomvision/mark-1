console.log('Ramp Thank You Section Variant');

// Find the footer element
const footer = document.querySelector('footer');

if (footer) {
  console.log('Found footer, inserting thank you section');
  
  // Create the thank you section
  const thankYouSection = (
    <section className="cf:bg-white cf:pb-[50px]">
      <div className="cf:mx-auto cf:w-full cf:max-w-screen-2xl cf:px-4 cf:md:px-8 cf:lg:px-12 cf:xl:px-16">
        <div className="cf:flex cf:flex-col cf:items-center cf:text-center cf:gap-6">
          <h2 className="cf:text-[48px] cf:leading-[50px] cf:font-normal cf:-tracking-[0.48px] cf:text-[oklch(0.1465_0.0057_69.2)] cf:max-w-[640px]">
            🎉 Limited-Time Offer!
          </h2>
          <p className="cf:text-[20px] cf:leading-[30px] cf:text-[oklch(0.1465_0.0057_69.2_/_0.6)] cf:max-w-[540px]">
            Get 3 Months of Ramp Premium — Free when you join today and streamline your company's finances with the leading spend management platform.
          </p>
          <p className="cf:text-[18px] cf:leading-[20px] cf:text-[oklch(0.1465_0.0057_69.2)] cf:max-w-[540px] cf:font-medium">
            Hurry — this offer is available for a limited time only.
          </p>
        </div>
      </div>
    </section>
  );
  
  // Insert before footer
  footer.parentNode.insertBefore(thankYouSection, footer);
  
  // Emit success
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  console.error('Footer not found');
}