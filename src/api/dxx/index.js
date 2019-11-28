import axios from 'axios';
axios.defaults.baseURL="/static/dxx/mock";

axios.interceptors.request.use((config)=>{
    return config;
 })
axios.interceptors.response.use((response)=>{
   return response.data;
})

export let  getBanner=()=>{
    return axios.get('banner.json');
}
export let  getBanner2=()=>{
  return axios.get('swiper.json');
}
export let  getBanner3=()=>{
  return axios.get('hotlist.json');
}
export let  getBanner4=()=>{
  return axios.get('banner.json');
}
export let  getHotList=()=>{
    return axios.get('hotlist.json');
}
export let  getHotListb=()=>{
  return axios.get('hotlist2.json');
}
