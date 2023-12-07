<script setup lang="ts"></script>

<template>
  <div class="content">
    <img src="@/assets/logo.svg" class="logo" alt="">
    <div class="el-header">
      i cant auto change for fontsize and element size
    </div>
    <div class="body">i can auto change for fontsize and element size</div>
    <div class="tip">Please drag or zoom the browser window </div>
  </div>
</template>

<style scoped>
.logo{
  width: 100px;
  margin-bottom: 40px;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  height: 100vh;
}
.el-header {
  width: 100%;
  font-size: 16px;
  color: #cecece;
  font-weight: bold;
  text-align: center;
}
.body {
  font-size: 20px;
  width: 100%;
  font-weight: bold;
  color: #328d53;
  text-align: center;
}
.tip{
  font-size: 30px;
  text-align: center;
  line-height:60px;
  color: rgb(81, 81, 193);
}
</style>
