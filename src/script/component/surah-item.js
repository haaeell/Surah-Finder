class surahItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set surah(surah) {
    this._surah = surah;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        .fan-art-surah {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        .surah-info {
          padding: 24px;
        }
        .surah-info > h2 {
          font-weight: lighter;
        }
        .surah-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      <div class="surah-info">
        <h2>${this._surah.nama}</h2>
        <p>${this._surah.arti}</p>        
        <p>Diturunkan di ${this._surah.type}</p>
        <p>${this._surah.keterangan}</p>
        <audio controls>
      <source src=${this._surah.audio} type="audio/mpeg">
    Your browser does not support the audio element.
    </audio>
    </div>
    `;
  }
}

customElements.define('surah-item', surahItem);