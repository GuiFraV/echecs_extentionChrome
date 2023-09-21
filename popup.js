document.getElementById('analyser').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "detecterPartieEchecs"}, function(response) {
        if (response) {
          console.log('Une partie d’échecs est détectée sur cette page.');
        } else {
          console.log('Aucune partie d’échecs n’est détectée sur cette page.');
        }
      });
    });
  });