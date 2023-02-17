<template>
  <span class="badge" :class="type"> {{ text }}</span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
}

.frontend {
  background-color: #226ec4;
  color: white;
}

.backend {
  background-color: #22c4a9;
  color: white;
}

.database {
  background-color: #568bc9;
  color: white;
}

.other {
  background-color: #4dc09e;
  color: white;
}
</style>
