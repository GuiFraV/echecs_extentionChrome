function detecterPartieEchecs() {
    // Analyser le DOM pour détecter une partie d'échecs sur chess.com
    // Vous devrez inspecter la page pour identifier les éléments, classes ou ID spécifiques à une partie d'échecs
    if (document.querySelector('.board')) {
      return true;
    }

    if(document.getElementById('board-single')) {
        return true;
    }

    return false;
  }
  
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action === "detecterPartieEchecs") {
        sendResponse(detecterPartieEchecs());
      }
    }
  );