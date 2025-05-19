// Google Analytics utility functions

export const initGA = (measurementId) => {
  if (typeof window === 'undefined') return;
  
  // Add Google Analytics script dynamically
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', measurementId);
  
  // Make gtag accessible
  window.gtag = gtag;
};

// Track page views
export const trackPageView = (path) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('config', window.gaId, {
    page_path: path,
  });
};

// Track custom events
export const trackEvent = (category, action, label, value) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
