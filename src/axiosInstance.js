import Axios from 'axios';

export const axiosInstance = Axios.create({
    baseURL: 'http://localhost/demo_axios/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});


axiosInstance.interceptors.request.use(function (config) {
    alert("Gửi request thành công");
    return config;
}, function (error) {
    alert("Gửi request thất bại");
    return Promise.reject(error);
});


axiosInstance.interceptors.response.use(function (response) {
    alert("Nhận response thành công");
    return response;
}, function (error) {
    alert("Nhận response thất bại");
    return Promise.reject(error);
});


export const axiosInstance2 = Axios.create({
    baseURL: 'http://localhost:4000/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

