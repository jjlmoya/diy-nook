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

export default {
  name: 'DefaultLayout',
  components: {
    Select,
    Footer,
    Category
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
      activeSeries: false
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
    }
  }
}
</script>
