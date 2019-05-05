const MOCKURL = 'http://www.liulang.com/';
const SERVERURL = 'http://localhost:3000/';
const URL = {
    getVarietyItem : MOCKURL + 'getVarietyItem',
    registUser: SERVERURL + 'user/registUser',
    loginUser: SERVERURL + 'user/loginUser',
    getTypes: SERVERURL + 'type/getTypes',
    getProductsByType: SERVERURL + 'product/getProductsByType',
    getDetail: SERVERURL + 'product/getDetail',
    addCart: SERVERURL + 'cart/addCart',
    getCart: SERVERURL + 'cart/getCart'
}

export default URL;