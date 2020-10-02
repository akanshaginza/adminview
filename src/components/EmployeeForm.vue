<template>
  <div id="employee-form">
    <form @submit.prevent="handleSubmit">
      <label>Employee name</label>
      <input v-model="employee.name" type="text" />
      <label>Employee Email</label>
      <input v-model="employee.email" type="text" />
      <button>Add Employee</button>
      <input v-model="employee.review" type="text" />
    </form>
  </div>
</template>
<script>
export default {
  name: 'employee-form',
  data() {
    return {
      employee: {
        name: '',
        email: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      console.log('testing handleSubmit')
      this.$emit('add:employee', this.employee)
    },
  },
  computed: {
  invalidName() {
    return this.employee.name === ''
  },
  invalidEmail() {
    return this.employee.email === ''
  },
  },
} 
</script>
<style scoped>
  form {
    margin-bottom: 2rem;
  }

  [class*='-message'] {
    font-weight: 500;
  }

  .error-message {
    color: #d33c40;
  }

  .success-message {
    color: #32a95d;
  }
</style>