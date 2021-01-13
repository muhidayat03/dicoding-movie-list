import _ from 'lodash';

class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this.onScroll = this.onScroll.bind(this); 
  }


  set changeEvent(event) {
    document.addEventListener("scroll", this.onScroll);
    this._changeEvent = event;
    this.render();
  }



  render() {
    this.shadowDOM.innerHTML = `
    <style> 
      .search-container{
        width:100%; 
        z-index: 10;
        margin-bottom : 40px; 
        width: 100%;  
        margin : auto; 
      }
      input{
        box-sizing: border-box;
        margin: 24px auto;  
        width: 90%;
        max-width: 800px;
        color: white; 
        position: absolute;  
        transform: translateX(-50%);
        left : 50%;
        padding: 10px;
        border-radius: 4px;
        z-index: 5;  
        border: 2px solid white;
        box-shadow: none;
        display: inline-block;  
        outline: none;
        font-weight: 300;
        font-size: 18px;
        background-color : transparent;
        font-family: Poppins, Helvetica, Sans-Serif;
      } 
      .header-background{
        position : absolute;
        top : 0;
        left : 0;
        height : 180px;
        width : 100%;
        background-color : black;  
        z-index : 3;
        background: rgb(0,0,0); 
        background: linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 44%, rgba(0,0,0,0) 100%);  
      }
      .header-background.show{
        opacity : 1;
        transition : 0.4s;
      }
      .header-background.hide{
        opacity : 0;
        transition : 0s;
      }
    </style>

    <div class="search-container">
      <input id="search-input" placeholder="Search ex: Batman"> 
      
      <div class="header-background hide"></div>
    </div>
  `;

    this.shadowDOM.querySelector('input').addEventListener('keyup', this._changeEvent);

  }






  onScroll() {
    var scroll = window.scrollY; 
    if (scroll > 120) {
      this.shadowDOM.querySelector(".header-background").classList.add('show');
      this.shadowDOM.querySelector(".header-background").classList.remove('hide');
    } else {
      this.shadowDOM.querySelector(".header-background").classList.add('hide');
      this.shadowDOM.querySelector(".header-background").classList.remove('show');

    }
  }

  disconnectedCallback() {
    document.removeEventListener("scroll", this.onScroll);

  }
}



customElements.define('search-bar', AppBar);