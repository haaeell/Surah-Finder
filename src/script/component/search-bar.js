class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
        <div id="search-container" class="search-container">
             <input placeholder="Search surah" id="searchElement" type="search">
             <button id="searchButtonElement" type="submit">Search</button>
        </div>

        <style>
        .search-container {
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 10px;
            border-radius: 16px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: white;
            margin: auto;
          }
          
          .search-container > input {
            width: 75%;
            padding: 16px;
            border: 0;
            font-weight: bold;
            border-radius: 16px;
          }
          
          .search-container > input:focus {
            outline: 0;
            
            border: 1px solid #25db4d;
          }
          
          .search-container > input:focus::placeholder {
            font-weight: bold;
          }
          
          .search-container > input::placeholder {
            color: #25db4d;
            font-weight: normal;
          }
          
          .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: #25db4d;
            color: white;
            border: 0;
            text-transform: uppercase;
            border-radius: 16px;
          }
          
          @media screen and (max-width: 550px) {
            .search-container {
              flex-direction: column;
              position: static;
            }
          
            .search-container > input {
              width: 100%;
              margin-bottom: 12px;
            }
          
            .search-container > button {
              width: 100%;
            }
          }
        </style>
        `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);