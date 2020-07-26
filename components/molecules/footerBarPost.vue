<template class='footer'>
  <div>
    <span>
      <circleArrow :arrowDirection="'up'" class="footer-element" />
      <circleArrow :arrowDirection="'down'" class="footer-element" />
    </span>
    <span>
      <numberA :number="numbersBLQ" class="footer-element" />
      <textA :text="'BLQ'" class="footer-element" />
      <arrowA :direction="'down'" class="footer-element" />
    </span>
    <span>
      <numberA :number="votesNumber" class="footer-element" />
      <textA :text="'votos'" class="footer-element" />
      <arrowA :direction="'down'" class="footer-element" />
    </span>
    <span>
      <commentGlobe class="footer-element" />
      <numberA :number="votesNumber" class="footer-element" />
    </span>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import circleArrow from '~/components/molecules/circleArrow.vue'
import arrowA from '~/components/atoms/arrow.vue'
import numberA from '~/components/atoms/number.vue'
import commentGlobe from "~/components/atoms/commentGlobe.vue"
import textA from "~/components/atoms/text.vue"
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
    circleArrow,
    arrowA,
    numberA,
    commentGlobe,
    textA
  }
})
class footerBarPost extends Vue{
  @Prop() numbersBLQ : Number | undefined
  @Prop() votesNumber : Number | undefined
  @Prop() commentsNumber : Number | undefined
}
export default footerBarPost
</script>
  
<style>
  .footer-element {
    display: inline-block;
    font: normal 105% American Typewriter;
    background-color: white;
  }
  span +span {
    margin-left: 3%;
  }
  .footer {
    position: static;
  }

</style>
