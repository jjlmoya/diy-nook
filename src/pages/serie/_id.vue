<template>
    <div class="p-ac p-ac--crafting">
        <Layout :selected="this.id" :category="this.category">
            <form class="crafting-search" :class="this.search ? 'is-active' : ''">
              <div class="close" @click="deleteResult">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <g>
                      <path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M359.54,329.374
                        c4.167,4.165,4.167,10.919,0,15.085L344.46,359.54c-4.167,4.165-10.919,4.165-15.086,0L256,286.167l-73.374,73.374
                        c-4.167,4.165-10.919,4.165-15.086,0l-15.081-15.082c-4.167-4.165-4.167-10.919,0-15.085l73.374-73.375l-73.374-73.374
                        c-4.167-4.165-4.167-10.919,0-15.085l15.081-15.082c4.167-4.165,10.919-4.165,15.086,0L256,225.832l73.374-73.374
                        c4.167-4.165,10.919-4.165,15.086,0l15.081,15.082c4.167,4.165,4.167,10.919,0,15.085l-73.374,73.374L359.54,329.374z"/>
                    </g>
                 </svg>
              </div>
              <router-link
              :to="{ name: 'about'}"
               class="promo">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 426.667 426.667" style="enable-background:new 0 0 426.667 426.667;" xml:space="preserve">
                <g>
                  <g>
                    <g>
                      <rect x="192" y="192" width="42.667" height="128"/>
                      <path d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333
                        S331.2,0,213.333,0z M213.333,384c-94.08,0-170.667-76.587-170.667-170.667S119.253,42.667,213.333,42.667
                        S384,119.253,384,213.333S307.413,384,213.333,384z"/>
                      <rect x="192" y="106.667" width="42.667" height="42.667"/>
                    </g>
                  </g>
                </g>
                </svg>
              </router-link>
              <input class="crafting-search__searcher" type="text"  @keyup="onSearch" :v-model="search" placeholder="¿Qué buscas?">
            </form>
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
                 <a @click="deleteResult">Eliminar Búsqueda</a>
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
      category: this.$route.query.category,
      search: ''
    }
  },
  methods: {
    getCrafts (id, category, search) {
      const craftObjet = new CraftingService({ serie: id, category: category, search: search })
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
    onUpdatePage (id, category, search) {
      const crafting = this.getCrafts(id, this.$route.query.category, this.search)
      this.crafts = crafting.crafts
      this.id = id
      this.maxItems = crafting.max
      this.current = crafting.current
      this.owneds = crafting.owneds
      this.category = this.$route.query.category
    },
    onSearch (event) {
      this.search = event.target.value.trim().toLowerCase()
      this.onUpdatePage(this.id, this.category, this.search)
    },
    deleteResult () {
      this.search = ''
      document.querySelector('.crafting-search__searcher').value = ''
      this.onUpdatePage(this.id, this.category, this.search)
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
