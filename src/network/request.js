import axios from "axios";
// import Qs from 'qs'
import store from './../store/index'
import router from '../router/index'

import { Modal } from 'ant-design-vue';


let BASEURL = 'http://localhost:3000/';

let HTTP = axios.create({
    baseURL: BASEURL,
    timeout: 8000,
    headers: {
        // Authorization: TOKEN,
        'Content-Type': 'application/json'
        // 'content-type': ' application/x-www-form-urlencoded; charset=UTF-8'
        // 'content-type': 'multipart/form-data'
    },
})

// 请求拦截
HTTP.interceptors.request.use(config => {


    // console.log("请求拦截器", config);

    store.commit("openLoading")

    let token = localStorage.getItem('Btoken');
    if (token) {

        config.headers.Authorization = token

    }

    // 上传图片需要为form-data格式
    if (config.url == '/Api/web/uploadSwipeImg') {
        config.headers = {
            'content-type': 'multipart/form-data'
        }
    }


    return config
})

// 响应拦截器
HTTP.interceptors.response.use(response => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // console.log("响应拦截器", response);

    // 关闭loading动画
    if (response.status === 200) {
        setTimeout(() => {
            store.commit("closeLoading")
        }, 886);
    }


    return response.data;
}, error => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    // router.replace("/login");
    console.log("响应拦截错误", error);

    if (error.response.status == "401") {

        Modal.warning({
            title: '提示',
            content: '身份验证失败请重新登录',
            okText: '确定',
            cancelText: 'No',
            onOk() {
                console.log('OK');

                router.replace("/adminLogin");
            },
            onCancel() {
                console.log('Cancel');
            },
        });

    }

    setTimeout(() => {
        store.commit("closeLoading")
    }, 1000)


    return Promise.reject(error);
});


export default HTTP