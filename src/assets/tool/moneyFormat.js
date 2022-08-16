export function moneyFormat(value) {

    // (999999999).toLocaleString(); // 999,999,999
    // 还可以加参数，进行更优雅的做法
    const options = {
        style: 'currency',
        currency: 'CNY',
    };
    let response = (value).toLocaleString('zh-CN', options); // ¥999,999.00

    return response

}