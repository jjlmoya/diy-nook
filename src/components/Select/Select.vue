<template>
    <div class="filter-select">
        <div class="filter-select__tabs">
           <router-link :to="{ path: '/'}" class="filter-select__tab"  :class="[!selected? 'is-active' : '']">
            Todos
          </router-link>
          <router-link v-for="serie in series" :key="serie.id" :to="{ name: 'serie', params: { id: serie.id }}" :class="[selected === serie.id ? 'is-active' : '']" class="filter-select__tab">
            <span>{{ serie.name }}</span>
          </router-link>
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
    },
    onChangeSeries (event) {
      this.$router.push({ name: 'serie', params: { id: event.target.value } })
      this.selected = event.target.value
    }
  }
}
</script>
