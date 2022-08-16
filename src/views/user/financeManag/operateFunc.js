import { adminPageRecharge, adminPageWithdrawal } from '@/network/apiFunc'
import { moneyFormat } from "@/assets/tool/moneyFormat";

// 1.分页获取用户充值记录
export async function PageRecharge(pageSize, pageNum) {
    let data = {
        pageSize: pageSize,
        pageNum: pageNum,
    };


    let response = await adminPageRecharge(data).then(res => {

        if (res.code == 1) {

            res.pages = res.pages * 10;
            res.moneyTotal = 0


            // 金额格式化
            for (let i in res.data) {

                res.moneyTotal = res.data[i].amount + res.moneyTotal
                res.data[i].amount = moneyFormat(res.data[i].amount);

            }

            return res
        } else {

            return res
        }
    })

    return response

}


// 2.分页获取用户提现记录
export async function pageWithdrawal(pageSize, pageNum) {
    let data = {
        pageSize: pageSize,
        pageNum: pageNum,
    };


    let response = await adminPageWithdrawal(data).then(res => {

        if (res.code == 1) {

            res.pages = res.pages * 10;
            res.moneyTotal = 0
            res.tipTotal = 0
            res.arriveMoneyTotal = 0

            // 金额格式化需要int类型
            for (let i in res.data) {


                // 出金总计
                res.moneyTotal = res.data[i].outMoney + res.moneyTotal
                // 手续费总计
                res.tipTotal = res.data[i].tip + res.tipTotal
                // 到账总计
                res.arriveMoneyTotal = res.data[i].arriveMoney + res.arriveMoneyTotal

                res.data[i].outMoney = moneyFormat(res.data[i].outMoney);

                res.data[i].tip = moneyFormat(res.data[i].tip);

                res.data[i].arriveMoney = moneyFormat(res.data[i].arriveMoney);

            }

            return res
        } else {

            return res
        }
    })

    return response

}