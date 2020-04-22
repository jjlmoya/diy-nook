<template>
    <div class="p-ac p-ac--crafting">
        <Layout :category="category">
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
                  <span class="text">Ver más</span>
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
      limit: 99
    }
  },
  methods: {
    getCrafts (category) {
      const craftObjet = new CraftingService({ category: category })
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
      this.limit = this.limit + 300
    },
    onUpdatePage (category) {
      const crafting = this.getCrafts(category)
      this.crafts = crafting.crafts
      this.maxItems = crafting.max
      this.current = crafting.current
      this.owneds = crafting.owneds
      this.category = category
    }
  },
  watch: {
    '$route.query.category' (newCategory, oldCategory) {
      this.onUpdatePage(this.$route.query.category)
    }
  }
}
</script>
