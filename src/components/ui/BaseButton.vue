<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode"> <slot> </slot></router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #4b8ce2;
  border: 1px solid #4b8ce2;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  margin-top: 0.5rem;

}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #4b8ce2;
  border-color: #2275e2;
}

.flat {
  background-color: #2275e2;
  color: #ffffff;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #4b8ce2;
  color: #4b8ce2;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #88acdb;
}
</style>
