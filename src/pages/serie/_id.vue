<template>
    <div class="p-ac p-ac--crafting">
        <Layout :selected="this.id" :category="this.category">
            <div class="crafting-counter">
              <span class="crafting-counter__owned">{{this.owneds}}</span>/<span class="crafting-counter__current">{{this.current}}</span>
            </div>
            <div class="crafting-result"  >
                <CraftCard @updateOwneds="updateOwneds"
                    v-for="craft in crafts"
                    :key="craft.name"
                    :image="craft.image"
                    :name="craft.name"
                    :materials="craft.materials"
                    :owneds="owneds"
                />
                <div class="crafting-result__empty" v-if="crafts.length===0">
                  No hay resultados con esta combinación de serie y categoría. <router-link :to="{ query: {category: ''}}" > Eliminar Categoría</router-link>
                   <router-link
                :to="{ path: '/',  query: {category: category}}"> Eliminar Serie</router-link>
                </div>
            </div>
        </layout>
    </div>
</template>

<style lang="scss">
  @import '../crafting.scss';
</style>

<script>
import Layout from '../../layouts/Default.vue'
import CraftCard from '../../components/Card/CraftCard.vue'
import CraftingService from '../../services/games/ac/crafting.service'

export default {
  name: 'Home',
  components: {
    Layout,
    CraftCard
  },
  data () {
    const crafting = this.getCrafts(this.$route.params.id, this.$route.query.category)
    return {
      crafts: crafting.crafts,
      id: this.$route.params.id,
      maxItems: crafting.max,
      current: crafting.current,
      owneds: crafting.owneds,
      category: this.$route.query.category
    }
  },
  methods: {
    getCrafts (id, category) {
      const craftObjet = new CraftingService({ serie: id, category: category })
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
    onUpdatePage (id, category) {
      const crafting = this.getCrafts(id, this.$route.query.category)
      this.crafts = crafting.crafts
      this.id = id
      this.maxItems = crafting.max
      this.current = crafting.current
      this.owneds = crafting.owneds
      this.category = this.$route.query.category
    }
  },
  watch: {
    '$route.params.id' (newId, oldId) {
      this.onUpdatePage(newId, this.$route.query.category)
    },
    '$route.query.category' (newCategory, oldCategory) {
      this.onUpdatePage(this.id, this.$route.query.category)
    }
  }
}
</script>
