<template>
  <CircleA>
    <ArrowA :direction="arrowDirection" />
  </CircleA>
</template>

<script lang="ts">
import 'reflect-metadata'
import CircleA from '../atoms/circle.vue'
import ArrowA from '../atoms/arrow.vue'
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
    CircleA,
    ArrowA
  }
})
class circleArrow extends Vue{
  @Prop() arrowDirection : 'up' | 'down' | undefined
}
export default circleArrow
</script>
