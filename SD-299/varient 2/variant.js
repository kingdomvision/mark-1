// Replace year grid with dropdown and add benefits section

console.log('Initializing year grid to dropdown conversion...');

// Helper function to find the vehicle year container
function initializeYearDropdown() {
  const vehicleYearContainer = document.querySelector('.hr-ele-icn--vehicle-year');
  const fieldsContainer = document.querySelector('.qf-24__flds');
  
  if (!vehicleYearContainer || !fieldsContainer) {
    console.error('Required containers not found');
    return false;
  }

  // Get all year options from existing radios
  const yearInputs = Array.from(vehicleYearContainer.querySelectorAll('input[name="year"]'));
  const years = yearInputs.map(input => input.value);

  // Create dropdown component
  function YearDropdown() {
    return (
      <div className="cf:w-full">
        <div className="cf:relative cf:w-full">
          {/* Dropdown Button */}
          <button 
            type="button"
            className="cf:w-full cf:p-4 cf:text-left cf:border cf:border-[#e4e8ec] cf:rounded-lg cf:bg-white cf:text-[#178aa6] cf:font-medium cf:text-base cf:cursor-pointer cf:hover:bg-[#f5f5f5] cf:transition"
            data-dropdown-trigger
          >
            <span data-dropdown-label>Select Year</span>
            <span className="cf:float-right">▼</span>
          </button>

          {/* Dropdown Menu */}
          <div 
            data-dropdown-menu
            className="cf:hidden cf:absolute cf:top-full cf:left-0 cf:right-0 cf:mt-2 cf:bg-white cf:border cf:border-[#e4e8ec] cf:rounded-lg cf:shadow-lg cf:z-10 cf:max-h-48 cf:overflow-y-auto"
          >
            {years.map((year) => (
              <button
                type="button"
                key={year}
                data-year={year}
                className="cf:w-full cf:p-4 cf:text-left cf:hover:bg-[#f0f0f0] cf:border-b cf:border-[#e4e8ec] last:cf:border-b-0 cf:text-[#178aa6] cf:font-medium cf:text-base cf:cursor-pointer cf:transition"
                data-year-option
              >
                {year}
              </button>
            ))}
          </div>

          {/* Hidden radio to maintain form compatibility */}
          <input type="hidden" name="year" data-hidden-year-input />
        </div>

        {/* Benefit Bullets */}
        <div className="cf:mt-2 cf:space-y-3 cf:lg:space-y-1">
          <div className="cf:flex cf:items-center cf:gap-3">
            <span className="cf:text-lg cf:font-bold cf:text-[#178aa6] cf:flex-shrink-0">✓</span>
            <p className="cf:text-sm cf:text-[#061617] cf:font-medium cf:lg:leading-[0.5]">Compare top-rated warranty plans in 60 seconds</p>
          </div>
          <div className="cf:flex cf:items-center cf:gap-3">
            <span className="cf:text-lg cf:font-bold cf:text-[#178aa6] cf:flex-shrink-0">✓</span>
            <p className="cf:text-sm cf:text-[#061617] cf:font-medium cf:lg:leading-[0.5]">Free quote - no spam calls, no obligation</p>
          </div>
          <div className="cf:flex cf:items-center cf:gap-3">
            <span className="cf:text-lg cf:font-bold cf:text-[#178aa6] cf:flex-shrink-0">✓</span>
            <p className="cf:text-sm cf:text-[#061617] cf:font-medium cf:lg:leading-[0.5]">Peace of mind: Be fully covered for unexpected repairs</p>
          </div>
          <div className="cf:flex cf:items-center cf:gap-3">
            <span className="cf:text-lg cf:font-bold cf:text-[#178aa6] cf:flex-shrink-0">✓</span>
            <p className="cf:text-sm cf:text-[#061617] cf:font-medium cf:lg:leading-[0.5]">Smart investment: Warranties can pay for themselves 5-9X over</p>
          </div>
        </div>

        {/* Time Text */}
        <div className="cf:mt-6 cf:w-full cf:text-center">
          <p className="cf:text-xs cf:text-[#5d5d5d]">⏱️ It only takes a minute</p>
        </div>
      </div>
    );
  }

  // Replace the vehicle year grid with dropdown
  vehicleYearContainer.replaceWith(<YearDropdown />);

  // Attach dropdown event listeners after DOM update
  setTimeout(() => {
    const trigger = document.querySelector('[data-dropdown-trigger]');
    const menu = document.querySelector('[data-dropdown-menu]');
    const yearOptions = document.querySelectorAll('[data-year-option]');
    const label = document.querySelector('[data-dropdown-label]');
    const hiddenInput = document.querySelector('[data-hidden-year-input]');

    if (trigger && menu && yearOptions.length > 0) {
      // Toggle dropdown menu
      trigger.addEventListener('click', () => {
        menu.classList.toggle('cf:hidden');
      });

      // Handle year selection
      yearOptions.forEach(option => {
        option.addEventListener('click', (e) => {
          e.preventDefault();
          const year = option.getAttribute('data-year');
          label.textContent = year;
          if (hiddenInput) hiddenInput.value = year;
          menu.classList.add('cf:hidden');

          // Trigger form change or Next button visibility if needed
          const form = document.querySelector('.js-q-flow-form');
          if (form) form.dispatchEvent(new Event('change', { bubbles: true }));
        });
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!trigger.contains(e.target) && !menu.contains(e.target)) {
          menu.classList.add('cf:hidden');
        }
      });
    }
  }, 0);

  return true;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (initializeYearDropdown()) {
      window.CFQ = window.CFQ || [];
      window.CFQ.push({ emit: 'variantRendered' });
    }
  });
} else {
  if (initializeYearDropdown()) {
    window.CFQ = window.CFQ || [];
    window.CFQ.push({ emit: 'variantRendered' });
  }
}