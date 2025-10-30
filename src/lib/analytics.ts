// Google Tag Manager Event Tracking
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    });
  }
};

export const trackClick = (elementName: string, elementType: string, destination?: string) => {
  trackEvent('click_event', {
    element_name: elementName,
    element_type: elementType,
    destination: destination,
  });
};

export const trackWhatsAppClick = (source: string) => {
  trackClick('WhatsApp Button', 'button', 'whatsapp');
  trackEvent('whatsapp_click', {
    source: source,
  });
};

export const trackPhoneClick = (source: string) => {
  trackClick('Phone Button', 'button', 'phone');
  trackEvent('phone_click', {
    source: source,
  });
};

export const trackAppointmentClick = (source: string) => {
  trackClick('Appointment Button', 'button', 'contact_section');
  trackEvent('appointment_click', {
    source: source,
  });
};
