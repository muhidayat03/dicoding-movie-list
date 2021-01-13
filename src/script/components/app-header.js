class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

  }

  set changeEvent(event) {
    this._changeEvent = event;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      .banner{
        text-align: center;
        color : white;
        padding : 40px 20px 0;  
        position: relative;
        overflow: hidden;
      }
      h1{ 
        font-family: Poppins, Helvetica, Sans-Serif; 
        font-size: 60px;
        color: red;
        margin: 0;
        line-height: 1;
      } 
    </style>
    <div style="display:inline" class="container ">
      <header>
        <div class="banner" id="wow">
          <h1>MOVIE LIST</h1>
        </div>
      </header> 
      <div style="position: sticky; top : 0; ">
        <search-bar></search-bar>
      </div>
    </div> 
    `;

    const asdf = this.shadowRoot.querySelector('search-bar'); 
    asdf.changeEvent = this._changeEvent;
  }
}


customElements.define('app-header', AppHeader);