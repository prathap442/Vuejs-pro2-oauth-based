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
    let fetchUrl = `https://api.imgur.com/3/account/me/images`;
    axios.get(fetchUrl,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log("this is the catch block")
      console.log(error);
    })
    .finally(function () {
      // always executed
    })          
  }
})
//with export default what everwe pass is an object from here to the another place of the import