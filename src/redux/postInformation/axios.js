import axios from 'axios';
let token = localStorage.getItem(   )
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
export const instance = axios.create({
    baseURL: 'https://example/api/student/update-current-student-info',
});

export const GET_USER = async () => {
    try {
        let response = await instance.get('user');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const POST_USER = async (newUser) => {
    await instance.post('users', newUser);
    return user;
};
