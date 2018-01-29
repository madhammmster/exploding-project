import axios from 'axios';

export async function loginUser(userName, password) {

    let response = await axios.request(
        {
            url: 'http://localhost/app/app.php/token',
            method: 'post',
            auth: {
                username: 'test',
                password: 'test'
            }
        }
    )

    console.log('--response');
    console.log(response.data);
    console.log('--response');

    return response;

}