<template>
	<div class="form-wrapper">
    <h2>Register a new User</h2>
		<form @submit.prevent="registerUser" class="form">
      <label>
        Email:
        <input type="text" v-model="formData.email" class="form-input" />
      </label>
      <br/>
      <label>
        Password:
        <input type="text" v-model="formData.password" class="form-input" />
      </label>
      <br/>
      <button type="submit" class="button-submit">Submit</button>
    </form>
	</div>
</template>

<script lang="ts">
import AuthenticationService from "@/services/AuthenticationService";
import { defineComponent, reactive } from "vue";


interface FormData {
  email: string;
  password: string;
}
export default defineComponent({
	name: "RegisterUser",
	components: {},

  setup(){
    const formData = reactive <FormData>({
      email: '',
      password: ''
    })

    const registerUser = () =>{
console.log('form submitted',formData.email,formData.password);
AuthenticationService.register({
  email: formData.email,
  password: formData.password
})
    }
    return{
      formData,
      registerUser
    }
  }
});
</script>

<style scoped>
.form-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form{
  height: 400px;
  width: 300px;
  padding: 15px;
  border: 3px solid black;
  background-color: rgb(188, 207, 203);
}
.form-input{
  height: 30px;
  width: 200px;
  padding: 5px;
  margin-bottom: 12px;
  border: 2px solid gray;
}
.button-submit{
  height: 40px;
  width: 85px;
  font-size: 17px;
  font-weight: 500;
  background-color:rgb(205, 205, 236);
  cursor: pointer;
  
}

</style>