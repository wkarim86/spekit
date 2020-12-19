import { httpClient } from "../../http-client";

export const serviceSearchAlbum = (term, callback) => {
    httpClient.get("", {
        params : {
            term : term,
            limit : 10
        }
     }
    ).then( response => {
        callback(response);
    }).catch(error => { callback(error)})
}
/* export const serviceSearchAlbum = (term) =>{
    return httpClient.get("", {
        params : {
            term : term,
            limit : 10
        }
    });
} */