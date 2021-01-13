class ClubItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {

    this.shadowDOM.innerHTML = `
      <style>
        .container {  
          width : 180px; 
          margin-bottom: 40px; 
          height: 100%; 
        }

        img{ 
          object-fit:  cover;
          z-index : 2;
          display: block;
          width : 180px;
          height : 240px;   
          background-color: black;
          -webkit-box-shadow: 0px 0px 30px 8px rgba(0,0,0,1);
          -moz-box-shadow: 0px 0px 30px 8px rgba(0,0,0,1);
          box-shadow: 0px 0px 30px 8px rgba(0,0,0,1);     
        }

        p{
          margin: 0;
          color: white;
          text-align: center
        }

        h3{
          margin: 0;
          color: white;
          font-size: 18px;
          font-weight: 600;
          margin: 0;
          margin-top: 10px;
          font-family: Poppins, Helvetica, Sans-Serif;
          word-wrap: break-word;
          text-align: center;
        }

        .club-info {
          padding: 24px;
        }

        :host{
          width : calc(100% / 3);
          display: flex;
          justify-content: center; 
        }

        @media(max-width: 700px){
          :host{
            width : calc(100% / 2);
          }
        }
        @media(max-width: 480px){
          :host{
            width : 100%;
          }
        }
 
      </style>

      <div>
        <div class="container">
        <img class="fan-art-club" src="${this._movie.Poster}" alt="Fan Art">
        <div>
        <h3>${this._movie.Title}</h2>
        <p>${this._movie.Year}</p>
        </div>
        </div>
      </div>`;
  }

}

customElements.define("movie-item", ClubItem); 