<template>
    <div class="p-ac p-ac--crafting">
        <Layout>
            <div class="crafting-counter">
              <span class="crafting-counter__owned">{{this.owneds}}</span>/<span class="crafting-counter__current">{{this.current}}</span>
            </div>
            <div class="crafting-result">
                <CraftCard @updateOwneds="updateOwneds"
                    v-for="craft in crafts"
                    :key="craft.name"
                    :image="craft.image"
                    :name="craft.name"
                    :materials="craft.materials"
                    :owneds="owneds"
                />
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
    const crafting = this.getCrafts(this.$route.params.id)
    return {
      crafts: crafting.crafts,
      maxItems: crafting.max,
      current: crafting.current,
      owneds: crafting.owneds
    }
  },
  methods: {
    getCrafts (id) {
      const craftObjet = new CraftingService({ serie: id })
      return {
        crafts: craftObjet.getCrafts(),
        max: craftObjet.getMaxObjets(),
        current: craftObjet.getCurrentObjets(),
        owneds: craftObjet.getOwneds()
      }
    },
    updateOwneds (value) {
      this.owneds += value
    }
  },
  watch: {
    '$route.params.id' (newId, oldId) {
      const crafting = this.getCrafts(newId)
      this.crafts = crafting.crafts
      this.id = newId
      this.maxItems = crafting.max
      this.current = crafting.current
      this.owneds = crafting.owneds
    }
  }
}
</script>
