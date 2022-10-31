import './surah-item.js';

class surahList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    set surahs(surahs) {
        this._surahs = surahs;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.shadowDOM.innerHTML = '';
        this._surahs.forEach(surah => {
            const surahItemElement = document.createElement('surah-item');
            surahItemElement.surah = surah;
            this.shadowDOM.appendChild(surahItemElement);
        });
    }
}

customElements.define('surah-list', surahList);