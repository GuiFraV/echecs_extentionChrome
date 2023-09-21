document.getElementById('analyser').addEventListener('click', function() {
    console.log('Analyser la page')
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "detecterPartieEchecs"}, function(response) {
        if (response) {
            // alert('Une partie d’échecs est détectée sur cette page.')
          console.log('Une partie d’échecs est détectée sur cette page.');
        } else {
            // alert('Aucune partie d’échecs n’est détectée sur cette page.')

          console.log('Aucune partie d’échecs n’est détectée sur cette page.');
        }
      });
    });
  });