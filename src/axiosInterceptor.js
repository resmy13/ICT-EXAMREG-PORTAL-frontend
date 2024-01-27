import axios from 'axios';
const axiosInterceptor=axios.create({
    // baseURL:''
    baseURL:'http://localhost:4000'
})
axiosInterceptor.interceptors.request.use((config)=>{
    const accessToken=sessionStorage.getItem("userToken");
    const accessAdminToken=sessionStorage.getItem("adminToken");
    if(accessToken){
        if(config) config.headers.token=accessToken;
    }else if(accessAdminToken){
        if(config) config.headers.token=accessAdminToken;
    }
    return config;
},
    (error)=>{
        return Promise.reject(error);        
    }
);



axiosInterceptor.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 404) {
            alert('Invalid login credentials');
        }

        
        return Promise.resolve(error.response);
    }
);

















export default axiosInterceptor