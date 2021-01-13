class MovieList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  get movies(){
    return this._movies
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .container {  
          width : 180px; 
          height: 200px;
          background-color : red;
        }
        .row{
          display : flex;
          flex-wrap : wrap; 
          align-items: stretch
        } 

      </style>
      <div class="row"></div>`;



    this._movies.forEach(movie => {
      const rowElement = this.shadowDOM.querySelector('.row'); 
      const movieItemElement = (document.createElement("movie-item"));
      movieItemElement.movie = movie;
      rowElement.appendChild(movieItemElement);
    });

  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style> 
      .placeholder {
          font-weight: lighter; 
          text-align: center;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
      }
    </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }





}



customElements.define("movie-list", MovieList); 