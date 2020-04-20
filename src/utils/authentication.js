import httpClient from '../helpers/loginHttpClient'
export default  {
    login(data) {
        return httpClient.post('/auth/token', data).then(res=>res.data);
    },
    // register(data) {
    //     return httpClient.post('/auth/register', data).then(res=>res.data);
    // },
}