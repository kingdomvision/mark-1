console.log('Enhanced Ramp Product Suite - Initializing');

// Wait for the target section to be available
function waitForElement(selector, callback, timeout = 10000) {
  const startTime = Date.now();
  
  const checkElement = () => {
    const element = document.querySelector(selector);
    if (element) {
      callback(element);
      return;
    }
    
    if (Date.now() - startTime > timeout) {
      console.error(`Timeout waiting for element: ${selector}`);
      return;
    }
    
    requestAnimationFrame(checkElement);
  };
  
  checkElement();
}

// Enhanced Product Card Component
function EnhancedProductCard({ icon, category, title, description, href, index }) {
  return (
    <a 
      href={href}
      className="cf:group cf:relative cf:flex cf:flex-col cf:gap-6 cf:p-6 cf:rounded-2xl cf:bg-white cf:border cf:border-[#e5e5e5] cf:transition-all cf:duration-300 cf:hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] cf:hover:border-[#f6fab2] cf:hover:-translate-y-1 cf:overflow-hidden"
      style={`animation-delay: ${index * 0.1}s`}
    >
      {/* Gradient accent on hover */}
      <div className="cf:absolute cf:inset-0 cf:bg-gradient-to-br cf:from-[#f6fab2] cf:to-transparent cf:opacity-0 cf:group-hover:opacity-10 cf:transition-opacity cf:duration-300"></div>
      
      <div className="cf:relative cf:flex cf:items-start cf:gap-4">
        <div className="cf:flex cf:items-center cf:justify-center cf:w-16 cf:h-16 cf:md:w-14 cf:md:h-14 cf:rounded-xl cf:bg-[#f4f2f0] cf:flex-shrink-0 cf:group-hover:bg-[#f6fab2] cf:transition-colors cf:duration-300">
          <div className="cf:text-3xl cf:md:text-2xl cf:leading-none">{icon}</div>
        </div>
        
        <div className="cf:flex-1 cf:min-w-0">
          <div className="cf:text-xs cf:font-medium cf:text-[#666] cf:mb-2 cf:uppercase cf:tracking-wide">
            {category}
          </div>
          <h3 className="cf:text-lg cf:font-medium cf:text-[#010518] cf:mb-2 cf:leading-tight">
            {title}
          </h3>
          <p className="cf:text-sm cf:text-[#666] cf:leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {/* Arrow indicator */}
      <div className="cf:relative cf:flex cf:items-center cf:justify-end cf:mt-auto">
        <div className="cf:flex cf:items-center cf:gap-2 cf:text-sm cf:font-medium cf:text-[#010518] cf:group-hover:gap-3 cf:transition-all cf:duration-300">
          Learn more
          <svg className="cf:size-4 cf:transition-transform cf:group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}

// Enhanced Section Header Component
function SectionHeader() {
  return (
    <div className="cf:mx-auto cf:max-w-3xl cf:text-center cf:mb-12 cf:md:mb-16">
      <div className="cf:inline-flex cf:items-center cf:gap-2 cf:px-4 cf:py-2 cf:rounded-full cf:bg-[#f6fab2] cf:mb-4 cf:md:mb-6 cf:animate-[fadeIn_0.6s_ease-out]">
        <span className="cf:text-xs cf:md:text-sm cf:font-medium cf:text-[#010518] cf:uppercase cf:tracking-wide">
          Ramp Product Suite
        </span>
      </div>
      
      <h2 className="cf:text-3xl cf:md:text-4xl cf:lg:text-5xl cf:font-normal cf:text-[#010518] cf:mb-4 cf:md:mb-6 cf:leading-tight cf:animate-[fadeIn_0.8s_ease-out] cf:px-4">
        Get to know Ramp
      </h2>
      
      <p className="cf:text-base cf:md:text-lg cf:lg:text-xl cf:text-[#666] cf:leading-relaxed cf:max-w-2xl cf:mx-auto cf:animate-[fadeIn_1s_ease-out] cf:px-4">
        Replace multiple broken tools with Ramp, the only platform designed to make your finance team faster—and happier.
      </p>
      
      {/* Decorative elements - hidden on mobile, visible on tablet+ */}
      <div className="cf:hidden cf:md:flex cf:items-center cf:justify-center cf:flex-wrap cf:gap-4 cf:md:gap-6 cf:lg:gap-8 cf:mt-8 cf:md:mt-10">
        <div className="cf:flex cf:items-center cf:gap-2">
          <div className="cf:size-2 cf:rounded-full cf:bg-[#f6fab2]"></div>
          <span className="cf:text-xs cf:md:text-sm cf:text-[#666] cf:whitespace-nowrap">All-in-one platform</span>
        </div>
        <div className="cf:flex cf:items-center cf:gap-2">
          <div className="cf:size-2 cf:rounded-full cf:bg-[#f6fab2]"></div>
          <span className="cf:text-xs cf:md:text-sm cf:text-[#666] cf:whitespace-nowrap">Easy integration</span>
        </div>
        <div className="cf:flex cf:items-center cf:gap-2">
          <div className="cf:size-2 cf:rounded-full cf:bg-[#f6fab2]"></div>
          <span className="cf:text-xs cf:md:text-sm cf:text-[#666] cf:whitespace-nowrap">Save time & money</span>
        </div>
      </div>
    </div>
  );
}

// Main enhancement function
function enhanceProductSection() {
  const targetSection = document.querySelector('section.bg-white.spacer-p-t-l');
  
  if (!targetSection) {
    console.error('Target section not found');
    return;
  }
  
  console.log('Enhancing product section...');
  
  // Product data
  const products = [
    {
      icon: '🧠',
      category: 'AI-Powered',
      title: 'Ramp Intelligence',
      description: 'Put Ramp AI to work for you with intelligent insights and automation.',
      href: '/intelligence'
    },
    {
      icon: '💳',
      category: 'Spend Management',
      title: 'Corporate Cards',
      description: 'Control spend before it happens with smart corporate cards.',
      href: '/corporate-cards'
    },
    {
      icon: '📊',
      category: 'Automation',
      title: 'Expense Management',
      description: 'Expenses that submit themselves with automatic categorization.',
      href: '/expense-management'
    },
    {
      icon: '✈️',
      category: 'Travel',
      title: 'Business Travel',
      description: 'Travel that\'s always in policy with integrated booking.',
      href: '/travel'
    },
    {
      icon: '💰',
      category: 'Payments',
      title: 'Accounts Payable',
      description: 'Process bills in seconds with automated AP workflows.',
      href: '/accounts-payable'
    },
    {
      icon: '🛒',
      category: 'Procurement',
      title: 'Procurement',
      description: 'Run intake-to-pay without delay using streamlined processes.',
      href: '/procurement'
    },
    {
      icon: '📈',
      category: 'Finance',
      title: 'Accounting Automation',
      description: 'Accelerate your monthly close with smart automation.',
      href: '/accounting-automation-software'
    },
    {
      icon: '🏦',
      category: 'Banking',
      title: 'Ramp Treasury',
      description: 'Business accounts that earn more with competitive rates.',
      href: '/treasury'
    }
  ];
  
  // Create enhanced section
  const enhancedSection = (
    <div className="cf:relative">
      {/* Background gradient */}
      <div className="cf:absolute cf:inset-0 cf:bg-gradient-to-b cf:from-white cf:via-[#fafafa] cf:to-white cf:pointer-events-none"></div>
      
      <div className="cf:relative cf:mx-auto cf:w-full cf:max-w-screen-2xl cf:px-4 cf:md:px-8 cf:lg:px-12 cf:xl:px-16 cf:py-12 cf:md:py-16 cf:lg:py-20">
        <SectionHeader />
        
        {/* Products Grid */}
        <div className="cf:grid cf:grid-cols-1 cf:md:grid-cols-2 cf:lg:grid-cols-4 cf:gap-4 cf:md:gap-6 cf:animate-[fadeIn_1.2s_ease-out]">
          {products.map((product, index) => (
            <EnhancedProductCard key={index} {...product} index={index} />
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="cf:mt-12 cf:md:mt-16 cf:text-center cf:animate-[fadeIn_1.4s_ease-out] cf:px-4">
          <a 
            href="/see-a-demo"
            className="cf:inline-flex cf:items-center cf:gap-2 cf:px-6 cf:md:px-8 cf:py-3 cf:md:py-4 cf:rounded-xl cf:bg-[#010518] cf:text-white cf:text-sm cf:md:text-base cf:font-medium cf:transition-all cf:duration-300 cf:hover:bg-[#1a1f3a] cf:hover:scale-105 cf:hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
          >
            See Ramp in action
            <svg className="cf:size-4 cf:md:size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
  
  // Replace the content
  const container = targetSection.querySelector('.mx-auto.w-full.max-w-screen-2xl');
  if (container) {
    container.replaceWith(enhancedSection);
    console.log('Section enhanced successfully');
    
    // Emit success event
    window.CFQ = window.CFQ || [];
    window.CFQ.push({ emit: 'variantRendered' });
  } else {
    console.error('Container not found within section');
  }
}

// Add custom animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Wait for section and enhance
waitForElement('section.bg-white.spacer-p-t-l', enhanceProductSection); 