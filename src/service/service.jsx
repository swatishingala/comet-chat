import axios from "axios";

const url = 'https://255583813f842d09.api-in.cometchat.io/v3/';

const appID = "255583813f842d09";
const apiKey = "c23d4e29faeb959c31bd901af75d6b31ba5dc1df";

const headers = {
    'Content-Type': 'application/json',
    appid: appID,
    apikey: apiKey,
  
  };

const getAPI = (key, type) => {
    if(type === 'get'){
        return axios.get(url + key, {headers});
    }
}

export const GetMessages = getAPI('messages', 'get');

export const messages = {url} + 'messages';
