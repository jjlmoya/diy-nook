<template>
    <div class="craft-card" :class="owned ? 'is-owned' : 'is-not-owned'">
        <div class="craft-card__name">
            {{ name }}
        </div>
        <div class="craft-card__corner">
          <img :src="`${assets}${owned ? 'star-full' : 'star-empty'}.png`" @click="toggleOwned(image)"/>
        </div>
        <img class="craft-card__image" :src="`${assets}ac/crafting/${image}`">
        <div class="craft-card__materials">
            <div v-for="material in materials" :key="material.name" class="material__wrap">
                <img class="material__image" :alt="material.name" :src="`${assets}ac/crafting/${material.image}`">
                <span>{{ material.quantity }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
  @import 'craftcard.scss';
</style>

<script>
export default {
  props: {
    materials: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    assets: {
      type: String,
      default: './statics/'
    }
  },
  data () {
    return {
      owned: this.isOwned() || false
    }
  },
  mounted () {
    let globalOwned = localStorage.owned
    if (globalOwned) {
      globalOwned = JSON.parse(globalOwned)
      this.owned = globalOwned.findIndex(e => e === this.image) > -1
    } else {
      localStorage.owned = '[]'
      this.owned = false
    }
  },
  methods: {
    isOwned () {
      let globalOwned = localStorage.owned
      if (globalOwned) {
        globalOwned = JSON.parse(globalOwned)
        return globalOwned.findIndex(e => e === this.image) > -1
      }
      return false
    },
    toggleOwned (id) {
      let globalOwned = localStorage.owned
      let count = 0
      if (globalOwned) {
        globalOwned = JSON.parse(globalOwned)
        const index = globalOwned.findIndex(e => e === id)
        if (index > -1) {
          globalOwned.splice(index, 1)
          count--
        } else {
          globalOwned.push(id)
          count++
        }
      } else {
        globalOwned = [id]
      }
      this.owned = !this.owned
      localStorage.owned = JSON.stringify(globalOwned)
      this.$emit('updateOwneds', count)
    }
  }
}
</script>
