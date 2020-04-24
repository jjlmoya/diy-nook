<template>
    <div class="filter" @click="click">
      <button class="filter__button"><img
      :src="`${assets}nook-leaf.png`">
      </button>
      <div class="filter-select">
          <div class="filter-select__tabs">
            <router-link
                :to="{ path: '/',  query: {category: category}}" class="filter-select__tab"
                :class="[!selected? 'is-active' : '']">
              Todos
            </router-link>
            <router-link
              v-for="serie in series"
              :key="serie.id"
              :to="{ name: 'serie', params: { id: serie.id},  query: {category: category}}"
              :class="[selected === serie.id ? 'is-active' : '']" class="filter-select__tab">
              <span>{{ serie.name }}</span>
            </router-link>
          </div>
      </div>
    </div>
</template>

<style lang="scss">
  @import 'select.scss';
</style>
<script>
import SeriesService from '../../services/games/ac/series.service'

export default {
  name: 'SelectFilter',
  components: {},
  props: {
    selected: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    click: {
      type: Function
    },
    assets: {
      type: String,
      default: './statics/'
    }
  },
  data () {
    return {
      series: this.getSeries()
    }
  },
  methods: {
    getSeries () {
      return new SeriesService().getSeries()
    }
  }
}
</script>
