import httpClient from '../helpers/loginHttpClient'
export default  {
    login(data) {
        return httpClient.get('/auth/token', data).then(res=>res.data);
    },
    // register(data) {
    //     return httpClient.post('/auth/register', data).then(res=>res.data);
    // },
}