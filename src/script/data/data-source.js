class DataSource {
  static searchsurah(keyword) {
    return fetch(`https://api-alquranid.herokuapp.com/surah/search/${keyword}`)
      .then(response => {
        return response.json();
      })

      .then(responseJson => {
        if (responseJson.data) {
          return Promise.resolve(responseJson.data);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
