import HTTP from '@/network/request.js'
import API from '@/network/api.js'

// 1.获取基本配置
export async function basisconfig() {
    let response = await HTTP.get(API.basisconfig)
    return response
}


// 2.修改基本配置
export async function updatebasisconfig(params) {

    let response = await HTTP.post(API.updatebasisconfig, {
        title: params.title,
        address: params.address,
        swipeNotic: params.swipeNotic,
        popupNotic: params.popupNotic,
        withdrawalState: params.withdrawalState
    })
    return response
}


// 3.获取广告图
export async function imageAd() {
    let response = await HTTP.get(API.imageAd)
    return response
}


// 4.上传广告图
export async function uploadSwipeImg(params) {
    let response = await HTTP.post(API.uploadSwipeImg, params)
    return response
}


// 5.休息广告文字和状态
export async function updateAdtext(params) {
    let response = await HTTP.put(API.updateAdtext, params)
    return response
}

// 6.删除某条广告
export async function deleteAd(params) {
    console.log("方法拦截", params)
    let response = await HTTP.delete(API.deleteAd, {
        data: {
            id: params
        }
    })
    return response
}

// 7.分页获取用户充值记录
export async function adminPageRecharge(params) {
    let response = await HTTP.post(API.adminPageRecharge, params)
    return response
}

// 8.获取用户充值记录
export async function getUserInfo(params) {
    let response = await HTTP.get(API.getUserInfo, {
        params: params
    })
    return response
}

// 9.审核用户充值状态
export async function updateRecharge(params) {
    let response = await HTTP.put(API.updateRecharge, params)
    return response
}


// 10.管理员登录
export async function adminLogin(params) {
    let response = await HTTP.post(API.adminLogin, params)
    return response
}

// 11.分页获取用户提现记录
export async function adminPageWithdrawal(params) {
    let response = await HTTP.post(API.pageWithdrawal, params)
    return response
}

// 12.管理员审核提现
export async function checkWithdrawal(params) {
    let response = await HTTP.post(API.checkWithdrawal, params)
    return response
}

// 13.获取会员列表
export async function getAlluser(params) {
    let response = await HTTP.post(API.getAlluser, params)
    return response
}

// 14.更新会员账号状态
export async function updateUserState(params) {
    let response = await HTTP.put(API.updateUserState, params)
    return response
}

// 15.管理员删除某个会员
export async function deleteUser(params) {
    let response = await HTTP.delete(API.deleteUser, {
        data: {
            id: params
        }
    })
    return response
}

// 16.管理员修改会员密码
export async function updateUserPwd(params) {
    let response = await HTTP.put(API.updateUserPwd, params)
    return response
}