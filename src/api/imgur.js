import qs from 'qs';
import axios from 'axios';
const CLIENT_ID = "4e37da2fc055535";
const ROOT_BASE_URL = "https://api.imgur.com";
export default({
  login(){
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    }
    window.location = `${ROOT_BASE_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  },
  fetchImages(token){
    let fetchUrl = `${ROOT_BASE_URL}/3/account/me/images`;
    let response = axios.get(fetchUrl,{
      headers: {
        Authorization: `Bearer ${token}`
      }        
    });
    console.log(response.data);
  }
})
//with export default what everwe pass is an object from here to the another place of the import