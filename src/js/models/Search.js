// Find a food API in order to make the recipe app works
import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    getResults(query) {
        
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }  
    }
}


// From rapidAPI
/* 

fetch("https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "mycookbook-io1.p.rapidapi.com",
		"x-rapidapi-key": "142ed31e65msh89a1814f8244311p1a1289jsn728ed500b1ca",
		"content-type": "text/plain",
		"accept": "text/plain"
	},
	"body": "https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/"
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
}); */