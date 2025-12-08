import request from "@/utils/request";

export const getCategory = () => {
  return request({
    url: 'home/category/head'
  })
}