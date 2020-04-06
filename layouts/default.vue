<template>
  <el-container class="layout-default">
    <el-header height="60px">Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "defaultLayout",
  data () {
    return {}
  }
}
</script>

<style>
</style>