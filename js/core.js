var core = (function ($){
  const defaultLang = 'en-US';

  function setLanguage(language) {
    let langData = {};
    $.ajax('content/' + language + '.json').then(function(data) {
      langData = data;
    }).catch(function() {
      return $.ajax('content/' + defaultLang + '.json').then(function(data) {
        langData = data;
      });
    }).then(function() {
      for(let i = 0; i < Object.keys(langData).length; i++) {
        let key = Object.keys(langData)[i];
        let text = langData[key];

        let elem = document.getElementById(key)
        
        if(elem) elem.innerText = text;
      }
    });

  }

  function init() {
    setLanguage(navigator.language);
  }

  init();

  return {
    setLanguage: setLanguage
  };
}($));