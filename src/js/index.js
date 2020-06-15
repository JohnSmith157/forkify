// https://food2fork.com/ It is necessary to find another API for the site
// http://food2fork.com/api/search
// API UIOGFHIBGNHà"I3°0U47YH

import axios from 'axios';

async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = 'FalseAPIkey';
    try {
        const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
    
}
getResults('pizza');
