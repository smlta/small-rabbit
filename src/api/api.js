import request from "@/utils/request";

export const getCategory = () => {
  return request({
    url: 'home/category/head'
  })
}

//获取轮播图数据
export const getBannerList = () => {
  return request({
    url: '/home/banner'
  })
}