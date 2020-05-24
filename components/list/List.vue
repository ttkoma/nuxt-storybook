<template>
  <div class="list p-5 rounded">
    I'm a {{ source }} list
    <div v-for="(item, i) in entities" :key="i">
      <p class="text-purple-600">{{ item.name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'List',
  props: {
    source: {
      type: String,
      default: 'users'
    }
  },
  data() {
    return {
      entities: []
    }
  },
  mounted() {
    switch (this.source) {
      default:
      case 'users':
        this.loadUsers()
        break
      case 'comments':
        this.loadComments()
        break
    }
  },
  methods: {
    loadUsers() {
      this.$store
        .dispatch('GET_USERS', { count: 5 })
        .then((res) => {
          this.entities = res
        })
        .catch((err) => {
          alert('API error', err)
        })
    },
    loadComments() {
      this.$store
        .dispatch('GET_COMMENTS', { count: 10 })
        .then((res) => {
          this.entities = res
        })
        .catch((err) => {
          alert('API error', err)
        })
    }
  }
}
</script>
<style lang="postcss" scoped>
.list {
  @apply bg-gray-200;
}
</style>
