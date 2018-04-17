import axios from 'axios'
import qs from 'qs'
/* eslint-disable */
const service = axios.create({
  baseURL: 'http://huoke.chinabyte.net/index.php/',
  timeout: 15000,
  method: 'post',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  transformRequest: [
    function(data) {
      return qs.stringify(data)
    }
  ]
})
export default service
