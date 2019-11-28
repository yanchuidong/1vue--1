import axios from "axios";
axios.defaults.baseURL="/static/静态文件";
axios.interceptors.request.use((config)=>{
  console.log("加载");
  return config
});

axios.interceptors.response.use((response)=>{
  return response.data;
});
export let getpinglun=()=>{
  return axios.get("pingjiaye.json")
};
