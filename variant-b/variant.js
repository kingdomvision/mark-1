console.log('Adding How it works section to Ramp homepage');

// Wait for hero section to be available
const heroSection = document.querySelector('#hero-section');
if (heroSection && heroSection.parentElement) {
  // Create the How it works section
  const howItWorksSection = (
    <section className="cf:bg-white cf:py-16 cf:md:py-24 cf:lg:py-32 cf:px-4">
      <div className="cf:mx-auto cf:w-full cf:max-w-screen-2xl cf:px-4 cf:md:px-8 cf:lg:px-12 cf:xl:px-16">
        <div className="cf:mx-auto cf:max-w-[674px] cf:text-center">
          <h2 className="cf:text-[34px] cf:leading-[38px] cf:font-normal cf:text-[oklch(0.1465_0.0057_69.2)]">
            How it works
          </h2>
          <p className="cf:mt-6 cf:text-base cf:leading-6 cf:text-[oklch(0.1465_0.0057_69.2_/_0.6)]">
            Get started with Ramp in three simple steps and start saving time and money today.
          </p>
        </div>
        
        <div className="cf:mt-16 cf:grid cf:grid-cols-1 cf:md:grid-cols-3 cf:gap-8 cf:md:gap-6">
          <StepCard 
            number="1"
            title="Sign up in minutes"
            description="Create your account and connect your existing tools. No lengthy onboarding process required."
          />
          <StepCard 
            number="2"
            title="Set up your controls"
            description="Configure spend policies, approval workflows, and issue cards to your team with built-in limits."
          />
          <StepCard 
            number="3"
            title="Start saving"
            description="Automate expense management, accelerate accounting, and gain real-time visibility into your spending."
          />
        </div>
      </div>
    </section>
  );

  // Insert after hero section's parent div using appendChild
  const parent = heroSection.parentElement.parentElement;
  const heroParent = heroSection.parentElement;
  const nextSibling = heroParent.nextElementSibling;
  
  if (nextSibling) {
    parent.insertBefore(howItWorksSection, nextSibling);
  } else {
    parent.appendChild(howItWorksSection);
  }

  console.log('How it works section added successfully');
  
  // Emit success event
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
} else {
  console.error('Hero section not found');
}

// Step card component
function StepCard({ number, title, description }) {
  return (
    <div className="cf:flex cf:flex-col cf:items-center cf:text-center cf:p-8 cf:rounded-xl cf:bg-[oklch(0.9621_0.0034_67.78)] cf:border cf:border-[rgba(33,33,33,0.1)]">
      <div className="cf:flex cf:items-center cf:justify-center cf:w-12 cf:h-12 cf:rounded-full cf:bg-[oklch(0.9199_0.2009_113.99)] cf:text-[oklch(0.1465_0.0057_69.2)] cf:text-xl cf:font-normal cf:mb-6">
        {number}
      </div>
      <h3 className="cf:text-[17px] cf:leading-[21px] cf:font-normal cf:text-[oklch(0.1465_0.0057_69.2)] cf:mb-4">
        {title}
      </h3>
      <p className="cf:text-base cf:leading-6 cf:text-[oklch(0.1465_0.0057_69.2_/_0.6)]">
        {description}
      </p>
    </div>
  );
}