/**
 *  A wrapper for the native fetch API
 */

import Session from "../models/Session";
import { ToastError } from "../models/MyErrors";
 
const API_ROOT = process.env.VUE_APP_API_ROOT;

 export function api(url, data, method) {
    
    let promise;

    const headers = { authorization: `bearer ${Session.token}` };

    if (data) {
        promise = fetch(API_ROOT + url, {
            method: method ?? 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                ...headers,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
    } else {
        promise = fetch(API_ROOT + url, { headers });
    }
    return promise
        .then(x=> {
            if(x.ok) return x.json();
            else return x.json().then(y=> { throw y; })
        })
        .catch(err=>{
            console.log(err);
            //TODO: display better error
            const alternativeMessage = "Whoops! There was an error!";
            ToastError(err.msg || alternativeMessage);
        });
    
}