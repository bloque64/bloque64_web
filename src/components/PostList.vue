<template>
  <div>
    <h1>{{ category }}</h1>
    <p>...</p>
  </div>
</template>

<script>
export default {
  name: 'PostList', //this is the name of the component,
  props: ["category", "sort_by"]
}
</script>
<style>
</style>