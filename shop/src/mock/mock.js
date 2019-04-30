import Mock from 'mockjs';
let Random = Mock.Random;
let productData = () => {
    let productList = [];
    for(let i = 0; i < 100; i++){
        let product = {
            name : Random.ctitle(10,20),
            img : Random.dataImage('125x125','农机',Random.integer(1,100)),
            price : Random.integer(1000,10000)
        };
        productList.push(product);
    }
    return productList;
}
Mock.mock('http://www.liulang.com/getVarietyItem',productData);