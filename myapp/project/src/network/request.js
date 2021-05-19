import axios from "axios"
// export function request(config){
    
//         const instance=axios.create({
//             baseURL:"/api/",
//             timeout:5000
//         })

//         instance.interceptors.request.use(config=>{
//             return config
//         },err=>{}
//         )
//         instance.interceptors.response.use(res=>{
//             return res//拦截器必须返回，不然拿不到值,一般可以拿到拦截的内容做修改请求头等操作。还可以添加页面加载转动图像，在request中加载图片，response后去掉图片
//         },err=>{
//             console.log(err)
//         })

//         return instance(config)
// }



export function request(config){

    const instance2=axios.create({
        baseURL:"/api/",
        timeout:5000
    })

    instance2.interceptors.request.use(config=>{
        return config
    },err=>{}
    )
    instance2.interceptors.response.use(res=>{
        return res//拦截器必须返回，不然拿不到值,一般可以拿到拦截的内容做修改请求头等操作。还可以添加页面加载转动图像，在request中加载图片，response后去掉图片
    },err=>{
        console.log(err)
    })

    return instance2(config)
}