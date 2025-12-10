<script setup></script>

<template>
  <div class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="true">
          <li>
            <a href="#"><i class="iconfont icon-user"></i>周杰伦</a>
          </li>
          <li>
            <el-popconfirm title="确定退出吗?" confirm-button-text="确定" cancel-button-text="取消">
              <template #reference>
                <a href="#">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="#">我的订单</a></li>
          <li><a href="#">会员中心</a></li>
        </template>
        <!--条件渲染模版如果登录-->

        <template v-else>
          <li><a href="#">请先登录</a></li>
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">关于我们</a></li>
        </template>
        <!--未登录时渲染该模版-->
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: end;
    align-items: center;

    li {
      a {
        color: #cdcdcd;
        padding: 0 15px;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: $xtxColor;
        }
      }

      ~ li {
        a {
          border-left: 2px solid #666;
        }
      } /* 选中第一个li后面的所有li*/
    }
  }
}
</style>
