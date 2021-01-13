import DataSource from '../data/data-source.js';
import _ from 'lodash';



const main = () => {

    let page = 1;
    let request = true;

    const AppHeaderElement = document.querySelector("app-header");
    const MovieListElement = document.querySelector("movie-list");
    const LoadingElement = document.querySelector("loading-item");

    const renderResult = (results) => {
        LoadingElement.isloading = false;

        MovieListElement.movies = results;
    };

    const fallbackResult = (message) => {
        LoadingElement.isloading = false;
        MovieListElement.renderError(message)
    };

    const delayedQuery = _.debounce((value) => {
        LoadingElement.isloading = true;
        page = 1;
        MovieListElement.movies = [];
        DataSource.searchClub(page, value).then(renderResult, fallbackResult);
    }, 600);

    const onSearchChange = (e) => {
        delayedQuery(e.target.value)
    }

    const onScrollMovies = (value) => {
        LoadingElement.isloading = false;

        const curentMovies = MovieListElement.movies;
        const result = [...curentMovies, ...value]
        request = true;
        renderResult(result);
    }

    const isInViewport = () => {
        const rowElement = MovieListElement.shadowRoot.querySelector('.row');

        if (rowElement && request) {
            const lastChild = rowElement.lastChild.getBoundingClientRect();
            if (lastChild) {
                const rect = rowElement.lastChild.getBoundingClientRect();
                const SearchElement = document.querySelector("app-header").shadowRoot.querySelector('search-bar').shadowRoot.querySelector('input');
                const value = SearchElement.value
                if (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                ) {
                    page += 1;
                    request = false;
                    LoadingElement.isloading = true;
                    DataSource.searchClub(page, value).then(onScrollMovies, () => { LoadingElement.isloading = false; });
                };
            }

        }
    }

    document.addEventListener("scroll", isInViewport);


    AppHeaderElement.changeEvent = onSearchChange
    delayedQuery();




};


export default main;