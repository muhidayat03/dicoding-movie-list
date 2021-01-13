
import axios from 'axios';

const API_KEY = 'faf7e5bb';
const BASE_URL = `https://www.omdbapi.com/`;

 
class DataSource {

    constructor(onSuccess, onFailed) {
        this.onSuccess = onSuccess;
        this.onFailed = onFailed;
    }

    static searchMovie(page, keyword) {
        if (!keyword) {
            keyword = 'batman'
        }
        return axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${keyword}&page=${page}&type=movie`) 
            .then(
                ({data}) => { 
                    if (data.Search) {
                        return Promise.resolve(data.Search);
                    } else {
                        return Promise.reject(`${keyword} is not found`);
                    }
                }
            )
    }

}


export default DataSource;