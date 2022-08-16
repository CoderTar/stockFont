<template>
  <div class="settlementPage">
    <div class="settlementTop">
      <div>
        <div class="uploadBtn">
          <div class="fakeUpBtn">添加广告</div>
          <input
            name="file"
            type="file"
            accept="image/png,image/jpeg"
            @change="uploadImg"
          />
        </div>
      </div>
    </div>
    <div class="settlementDown">
      <!-- 表头操作 -->
      <div
        style="
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin: 0.5rem 0;
          color: #333333;
          padding: 0 3rem;
        "
      >
        <p>共有数据：</p>
        <p style="font-weight: bold">12312条</p>
      </div>
      <!-- 表格数据 -->
      <div class="tabData">
        <a-table
          bordered
          :columns="columns"
          :data-source="data"
          :pagination="false"
          :rowKey="(record, index) => record.id"
        >
          <!-- 1.图片插槽 -->
          <div slot="adImg" slot-scope="text, record">
            <a @click="priveImg(text, record)">[预览图片]</a>
          </div>
          <!-- 2.状态插槽 -->
          <div slot="adState" slot-scope="text, record">
            <a-switch
              :defaultChecked="text == 1 ? true : false"
              @change="onChange(record)"
            />
            <!-- <a-tag color="green" v-show="value === 0">显示</a-tag> -->
            <!-- <a-tag color="red" v-show="value === 1">隐藏</a-tag> -->
          </div>
          <!-- 3.操作插槽 -->
          <div slot="operation" slot-scope="text, record">
            <a-button type="primary" size="small" @click="showModal(record)"
              >编辑</a-button
            >
            <a-button
              type="danger"
              size="small"
              @click="deleteAd(record)"
              style="margin-left: 6px"
            >
              删除
            </a-button>
          </div>
        </a-table>
      </div>

      <!-- 图片预览弹框 -->
      <div>
        <a-modal v-model="showDialog" :footer="null" centered :closable="false">
          <div
            style="
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
            "
          >
            <h1>图片预览</h1>
            <img style="height: 50%; width: 80%" :src="previewImgUrl" />
          </div>
        </a-modal>
      </div>

      <!-- 修改文字弹框 -->
      <div>
        <a-modal
          v-model="showAdtext"
          centered
          :closable="false"
          cancelText="取消"
          okText="确定"
          @ok="confirmOk"
        >
          <div
            style="
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
            "
          >
            <h2>广告语</h2>
            <a-input placeholder="输入广告语言" size="small" v-model="adText" />
          </div>
        </a-modal>
      </div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "ID",
    align: "center",
    width: "3rem",
  },
  {
    title: "图片",
    dataIndex: "image",
    key: "adImg",
    align: "center",
    width: "8rem",
    scopedSlots: { customRender: "adImg" },
  },
  {
    title: "文字",
    dataIndex: "title",
    key: "adText",
    align: "center",
    width: "8rem",
  },
  {
    title: "状态",
    dataIndex: "show_state",
    key: "adState",
    align: "center",
    width: "6rem",
    scopedSlots: { customRender: "adState" },
  },
  {
    title: "操作",
    dataIndex: "operation",
    key: "operation",
    align: "center",
    width: "8rem",
    scopedSlots: { customRender: "operation" },
  },
];

import {
  imageAd,
  uploadSwipeImg,
  updateAdtext,
  deleteAd,
} from "@/network/apiFunc";

// import axios from "axios";
export default {
  data() {
    return {
      data: [],
      columns,

      showDialog: false,
      previewImgUrl: "",

      adText: "",
      showAdtext: false,

      // 中间间
      tempData: "",
    };
  },
  mounted() {
    // 获取广告图片
    imageAd().then((res) => {
      if (res.code == 1) {
        console.log(res);
        this.data = res.data;
      }
    });
  },
  methods: {
    // 点击预览图片
    priveImg(text, record) {
      this.previewImgUrl = record.location + record.image;
      console.log(this.previewImgUrl);
      this.showDialog = true;
    },

    // 上传图片
    uploadImg(e) {
      let file = e.target.files[0];
      let param = new FormData(); // 创建form对象
      param.append("img", file); // 通过append向form对象添加数据
      param.append("ip", "http://10.10.0.5:3000/"); //其他参数
      console.log(param.get("file")); // FormData私有类对象，访问不到，可以通过get判断值是否
      uploadSwipeImg(param).then((res) => {
        if (res.code == 1) {
          // 添加成功后重新请求
          imageAd().then((res) => {
            if (res.code == 1) {
              console.log(res);
              this.data = res.data;
            } else {
              this.data = res.data;
            }
          });
        }
      });
    },

    // 打开弹框
    showModal(record) {
      console.log("record", record);
      this.showAdtext = true;
      this.tempData = record;
      this.adText = "";
    },

    // 用户提交修改
    confirmOk() {
      console.log("用户提交确定", this.adText);

      if (this.adText != "") {
        let data = {
          id: this.tempData.id,
          text: this.adText,
          state: this.tempData.show_state,
        };
        updateAdtext(data).then((res) => {
          if (res.code == 1) {
            console.log("修改成功", res);
            this.showAdtext = false;
            this.$message.success("修改成功");
            // 修改后重新获取
            imageAd().then((res) => {
              if (res.code == 1) {
                console.log(res);
                this.data = res.data;
              } else {
                this.data = res.data;
              }
            });
          } else {
            this.$message.warning("修改失败");
          }
        });
      } else {
        this.showAdtext = false;
      }
    },

    // 广告状态修改
    onChange(record) {
      console.log(record);
      if (record.show_state == 1) {
        record.show_state = 0;
      } else {
        record.show_state = 1;
      }
      let data = {
        id: record.id,
        text: record.title,
        state: record.show_state,
      };

      updateAdtext(data).then((res) => {
        if (res.code == 1) {
          console.log(res);
        }
      });
    },
    // 删除某条广告
    deleteAd(record) {
      console.log("删除广告", record.id);
      deleteAd(record.id).then((res) => {
        if (res.code == 1) {
          console.log("删除成功", res);
          this.$message.success("删除成功");
          imageAd().then((res) => {
            if (res.code == 1) {
              console.log(res);
              this.data = res.data;
            } else {
              this.data = res.data;
            }
          });
        }
      });
    },
  },
};
</script>

<style>
.ant-table-tbody > tr > td {
  padding: 0.3rem;
}

.ant-table-thead > tr > th {
  padding: 0.5rem;
}
.settlementPage {
  border: 1px solid rgb(47, 0, 255);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.settlementTop {
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  background-color: #ffffff;
  flex: 0 0 5%;
}

.tabtopRight {
  /* border: 1px solid green; */
  display: flex;
}

.tabtopRight > div {
  /* border: 1px solid tomato; */
  display: flex;
  margin: 0 0.2rem;
}

.settlementDown {
  margin-top: 10px;
  border: 1px solid red;
  flex: 0 0 90%;
  background-color: #f5fafe;
}

.uploadBtn {
  position: relative;
}
.uploadBtn > input {
  opacity: 1;
  position: absolute;
  overflow: hidden;
  right: 0;
  top: 0;
}

.fakeUpBtn {
  background: rgb(125, 228, 125);
  padding: 4px 10px;
  margin-left: 0.5rem;
}
</style>