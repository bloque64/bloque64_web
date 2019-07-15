<template>
    <div class="post-summary">
      <h3>{{ post.title }}</h3>
    </div>
</template>

<script>

export default {
  name: 'PostSummary', //this is the name of the component
  props: ['title', 'authorperm']
}
</script>
<style>
</style>