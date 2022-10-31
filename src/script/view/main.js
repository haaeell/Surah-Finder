import '../component/surah-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const surahListElement = document.querySelector('surah-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchsurah(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    surahListElement.surahs = results;
  };

  const fallbackResult = message => {
    surahListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;