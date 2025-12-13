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

// 获取新鲜好物数据
export const getFreshData = () => {
  return request({
    url: '/home/new'
  })
}

// 获取人气推荐数据

export const getHotHuman = () => {
  return request({
    url: '/home/hot'
  })
}