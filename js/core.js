var core = (function ($){
  const defaultLang = 'en-US';

  function setLanguage(language) {
    let langData = {};
    $.ajax('content/' + language + '.json').then((data) => {
      langData = data;
    }).catch(() => {
      return $.ajax('content/' + defaultLang + '.json').then((data) => {
        langData = data;
      });
    }).then(() => {
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
    setLanguage
  };
}($));