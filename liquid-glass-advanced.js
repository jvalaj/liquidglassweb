/**
 * Advanced Liquid Glass Effect
 * Based on SVG displacement mapping and chromatic aberration
 * Inspired by Lyra Rebane's CSS/SVG Liquid Glass technique
 */

class LiquidGlassAdvanced {
  constructor() {
    this.components = new Map();
    this.init();
  }

  init() {
    // Create shared SVG filters (only 3 filters total)
    this.createSharedFilters();
    
    // Initialize all glass components
    this.initializeComponents();
    
    // Watch for new components
    this.observeDOM();
  }

  createSharedFilters() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('id', 'lg-advanced-filters');
    svg.style.cssText = 'position: absolute; width: 0; height: 0; pointer-events: none;';
    
    // Create only 3 shared filters: subtle, medium, heavy
    svg.innerHTML = `
      <defs>
        ${this.createSharedFilter('lg-advanced-subtle', 10, 3, 15)}
        ${this.createSharedFilter('lg-advanced-medium', 15, 5, 20)}
        ${this.createSharedFilter('lg-advanced-heavy', 20, 7, 25)}
      </defs>
    `;
    
    document.body.appendChild(svg);
  }

  createSharedFilter(id, darkness, blur, iridescence) {
    return `
      <filter id="${id}" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="0.7" in="SourceGraphic" result="preblur" />
        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" result="noise" />
        <feDisplacementMap in="preblur" in2="noise" scale="${iridescence}" xChannelSelector="R" yChannelSelector="G" result="distorted" />
        <feColorMatrix type="saturate" values="1.2" in="distorted" result="saturated" />
        <feGaussianBlur stdDeviation="${blur/10}" in="saturated" result="blurred" />
      </filter>
    `;
  }

  initializeComponents() {
    // Disable advanced effects - too performance intensive
    // Components will use the existing turbulence-based filters from main.js
    console.log('⚠️ Advanced liquid glass disabled for performance');
    return;
  }

  applyAdvancedGlass(element) {
    // Disabled for performance
    return;

    // Disabled - too performance intensive
    return;

  observeDOM() {
    // Disabled for performance
    return;
  }
}

// Disable advanced effects - they cause too much lag
// The existing turbulence-based filters in main.js provide good liquid glass effects
console.log('⚠️ Advanced chromatic aberration disabled for performance - using lightweight turbulence filters instead');
