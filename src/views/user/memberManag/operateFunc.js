import { getAlluser } from '@/network/apiFunc'
import { moneyFormat } from "@/assets/tool/moneyFormat";


// 1.获取会员列表
export async function PageAlluser(pageSize, pageNum) {

    let data = {
        pageSize: pageSize,
        pageNum: pageNum,
    };


    let response = await getAlluser(data).then(res => {

        if (res.code == 1) {

            res.pages = res.pages * 10;
            res.moneyTotal = 0

            // 金额格式化
            for (let i in res.data) {

                res.moneyTotal = res.data[i].account + res.moneyTotal
                res.data[i].account = moneyFormat(res.data[i].account);

            }
            res.moneyTotal = moneyFormat(res.moneyTotal);

            return res
        } else {

            return res
        }
    })

    return response

}