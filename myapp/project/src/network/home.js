import { request } from "./request";


export function tiyudata(pages){
    return request({
        url:"toutiao/index?",
        params:{
            type:"top",
            key:"b2d5f763ab9d6032ea061354e0c00fa8",
            page:pages,
        }
    })
}

// export function lsdata(rq){
//     return request({
//         url:"todayOnhistory/queryEvent.php?",
//         params:{
//             key:"5f9da8a7ee8b6c6d81752701660a2703",
//             date:rq
//         }
//     })
// }

