class Loading extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this._isLoading = true;
  }


  set isloading(value) { 
    this._isLoading = value;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        h3 {
            padding: 16px;
            color: white;
            text-align: center; 
            font-weight: 600;
        }
    </style>
    <h3>Loading...</h3>`;
    const Element = this.shadowDOM.querySelector('h3');

    if (this._isLoading) {
      Element.style.visibility = 'visible';
    } else {
      Element.style.visibility = 'hidden';
    }
  }
}


customElements.define('loading-item', Loading);