<template>
  <el-form
    :model="loginForm"
    status-icon
    :rules="rules"
    ref="loginForm"
    label-width="100px"
    class="demo-loginForm"
  >
    <el-form-item label="用户名" prop="username">
      <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password">
      <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
      <el-button @click="resetForm('loginForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "login",
  layout: "blank",
  data () {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!")
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
};
</script>

<style lang="scss">
.demo-loginForm {
  width: 500px;
  margin: 200px auto;
}
</style>
