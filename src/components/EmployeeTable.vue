<template>
  <div id="employee-table">
    <p v-if="employees.length < 1" class="empty-table">No employees</p>
    <table v-else>
      <!-- ...thead... -->
      <tbody>
      <tr v-for="employee in employees" :key="employee.id">
      <td v-if="editing === employee.id">
      <input type="text" v-model="employee.name" />
      </td>
      <td v-else>{{employee.name}}</td>
      <td v-if="editing === employee.id">
      <input type="text" v-model="employee.email" />
      </td>
      <td v-else>{{employee.email}}</td>
      <td v-if="editing === employee.id">
      <button @click="editEmployee(employee)">Save</button>
      <button class="muted-button" @click="editing = null">Cancel</button>
      </td>
      <td v-else>
      <button @click="editMode(employee.id)">Edit</button>
      <button @click="$emit('', employee.id)">Delete</button>
      <button @click="$addreview('', employee.id)">addReview</button>     
      </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
   name: 'employee-table',
   data() {
    return {
    editing: '',
   }
  },
  props: ['employees'],
  methods: {
    editMode(id) {
    this.editing = id
  },
  editEmployee(employee) {
    if (employee.name === '' || employee.email === '') return
    this.$emit('edit:employee', employee.id, employee)
    this.editing = null
  },
  addreview(employee){
    if(employee.name === '' || employee.email === '') return
    this.$addreview('addreview:employee', employee.id, employee)
    this.editing = null 
  }
  }
  }
</script>

<style scoped>
  button {
    margin: 0 0.5rem 0 0;
  }
</style>