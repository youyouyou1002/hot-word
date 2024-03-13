import request from '../utils/request'

export default {
    getHundredWord() {
        return request({
            url: `/word/hundred`,
            method: 'get'
        })
    },
}