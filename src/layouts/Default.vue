<template>
    <div class="l-default l-default--background">
        <div class="l-default__main">
            <div class="l-default__content">
                <div class="l-default__filters" style="margin: 10px 18px;">
                  <Select :selected="selected"
                          :category="category"
                          :click="toggleSeries"
                          :fold="activeSeries ? 'is-active' : ''"/>
                  <Category :click="toggleCategories"
                    :selected="selected"
                    :cat="category"
                    :fold="activeCategories ? 'is-active' : ''" />
                  <Owneds :click="toggleOwneds"
                    :selected="selected"
                    :cat="category"
                    :fold="activeOwneds ? 'is-active' : ''" />
                </div>
                <slot />
            </div>
        </div>
        <Footer />
    </div>
</template>
<style lang="scss">@import 'default.scss';
</style>
<script>
import Footer from '../components/Footer/Default.vue'
import Select from '../components/Select/Select.vue'
import Category from '../components/Filter/Category.vue'
import Owneds from '../components/Filter/Owneds.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Select,
    Footer,
    Category,
    Owneds
  },
  props: {
    selected: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      activeCategories: false,
      activeSeries: false,
      activeOwneds: false
    }
  },
  methods: {
    toggleSeries () {
      this.activeCategories = false
      this.activeSeries = !this.activeSeries
      document.body.classList.toggle('overflow', this.activeSeries || this.activeCategories)
    },
    toggleCategories () {
      this.activeSeries = false
      this.activeCategories = !this.activeCategories
      document.body.classList.toggle('overflow', this.activeSeries || this.activeCategories)
    },
    toggleOwneds () {
      console.log('hola')
      this.activeOwneds = !this.activeOwneds
      document.body.classList.toggle('own-filter', this.activeOwneds)
    }
  }
}
</script>
