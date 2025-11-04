// Google Tag Manager Event Tracking
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function pushDL(event: string, params: Record<string, any> = {}) {
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({ event, ...params });
}

export function trackClick(
  type: 'whatsapp' | 'phone' | 'email' | 'schedule',
  e?: React.MouseEvent,
  context: string = ''
) {
  try {
    const target = (e?.currentTarget as HTMLElement) || (document.activeElement as HTMLElement);
    const a = target?.closest?.('a');
    const href =
      (a?.getAttribute('href') || a?.getAttribute('data-href') || a?.getAttribute('data-url') || '').trim();
    const text = (target?.textContent || target?.innerText || '').trim();

    pushDL(`click_${type}`, { link_url: href, link_text: text, context });
  } catch {
    pushDL(`click_${type}`, { context });
  }
}
