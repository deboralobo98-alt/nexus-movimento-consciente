/**
 * Script para sincronização de navegação do iframe com a janela pai.
 * Detecta mudanças de rota e envia o novo caminho da URL para a janela pai.
 */

function sendIframeUrlToParent() {
  try {
    const currentPath = window.location.pathname + window.location.search + window.location.hash;
    window.parent.postMessage({
      type: 'iframe-navigation',
      path: currentPath
    }, '*');
    console.log('Lovable: URL do iframe enviada para o pai:', currentPath);
  } catch (error) {
    console.error('Lovable: Erro ao enviar URL para o pai:', error);
  }
}

export function initIframeSync() {
  // Sobrescrever pushState e replaceState para capturar mudanças de rota
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  history.pushState = function(state, title, url) {
    const result = originalPushState.apply(history, [state, title, url]);
    sendIframeUrlToParent();
    return result;
  };

  history.replaceState = function(state, title, url) {
    const result = originalReplaceState.apply(history, [state, title, url]);
    sendIframeUrlToParent();
    return result;
  };

  // Escutar evento popstate para navegação via botões voltar/avançar
  window.addEventListener('popstate', sendIframeUrlToParent);

  // Enviar URL inicial quando carregar
  sendIframeUrlToParent();

  // MutationObserver para detectar mudanças no DOM
  let timeoutId: number;
  const observer = new MutationObserver(() => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      sendIframeUrlToParent();
    }, 100);
  });

  observer.observe(document.body, { 
    childList: true, 
    subtree: true, 
    attributes: true 
  });

  console.log('Lovable: Sincronização de iframe inicializada');
}
