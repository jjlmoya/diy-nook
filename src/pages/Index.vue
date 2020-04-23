<template>
    <div class="p-ac p-ac--crafting">
        <Layout :category="category">
            <form class="crafting-search" :class="this.search ? 'is-active' : ''">
              <div class="close" @click="deleteResult"><img src="/statics/close.svg" /></div>
              <input class="crafting-search__searcher" type="text"  @keyup="onSearch" :v-model="search" placeholder="¿Qué buscas?">
            </form>
            <div class="crafting-counter">
              <span class="crafting-counter__owned">{{this.owneds}}</span>/<span class="crafting-counter__current">{{this.current}}</span>
            </div>
            <div class="crafting-result">
                <CraftCard @updateOwneds="updateOwneds"
                    v-for="craft in crafts.slice(0, limit)"
                    :key="craft.name"
                    :image="craft.image"
                    :name="craft.name"
                    :materials="craft.materials"
                    :owneds="owneds"
                />
                <div @click="expendLimits" class="craft-card craft-card__see-more" v-if="crafts.length > limit">
                  <span class="text">Ver todos</span>
                </div>
            </div>
        </layout>
    </div>
</template>

<style lang="scss">
  @import 'crafting.scss';
</style>

<script>
import Layout from '../layouts/Default.vue'
import CraftCard from '../components/Card/CraftCard.vue'
import CraftingService from '../services/games/ac/crafting.service'

export default {
  name: 'Home',
  components: {
    Layout,
    CraftCard
  },
  data () {
    const crafting = this.getCrafts(this.$route.query.category)
    return {
      crafts: crafting.crafts,
      maxItems: crafting.max,
      current: crafting.current,
      owneds: crafting.owneds,
      category: this.$route.query.category,
      limit: 99,
      search: ''
    }
  },
  methods: {
    getCrafts (category, search) {
      const craftObjet = new CraftingService({ category: category, search: search })
      return {
        crafts: craftObjet.getCrafts(),
        max: craftObjet.getMaxObjets(),
        current: craftObjet.getCurrentObjets(),
        owneds: craftObjet.getOwneds()
      }
    },
    updateOwneds (value) {
      this.owneds += value
    },
    expendLimits () {
      this.limit = this.limit + 500
    },
    onUpdatePage (category, search) {
      const crafting = this.getCrafts(category, search)
      this.crafts = crafting.crafts
      this.maxItems = crafting.max
      this.current = crafting.current
      this.owneds = crafting.owneds
      this.category = category
    },
    onSearch (event) {
      this.search = event.target.value.trim().toLowerCase()
      this.onUpdatePage(this.category, this.search)
    },
    deleteResult () {
      this.search = ''
      document.querySelector('.crafting-search__searcher').value = ''
      this.onUpdatePage(this.id, this.category, this.search)
    }
  },
  watch: {
    '$route.query.category' (newCategory, oldCategory) {
      this.onUpdatePage(this.$route.query.category)
    }
  }
}
</script>
