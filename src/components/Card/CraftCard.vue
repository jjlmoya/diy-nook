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
            <div v-for="material in materials" :key="material.name" class="material__wrap" @click="toggleActiveMaterial">
                <img class="material__image" :alt="material.name" :src="`${assets}ac/crafting/${material.image}`">
               <span><span style="position: absolute;opacity:0; display:inline-block;width:0; height:0">{{material.name}}:</span>{{ material.quantity }}</span>
                <div class="popover">{{material.name}}</div>
            </div>
        </div>
        <div class="craft-card__menu" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
              <g>
                <g>
                  <circle cx="256" cy="256" r="64"/>
                  <circle cx="256" cy="448" r="64"/>
                  <circle cx="256" cy="64" r="64"/>
                </g>
              </g>
            </g>
          </svg>
      </div>
      <nav class="craft-card__menu-options">
        <div class="item" @click="copyToClipboard">Copiar</div>
         <div class="item" @click="copyToClipboardText">Copiar Texto</div>
        <div class="item" @click="copyToClipboard">+ Lista 1</div>
        <div class="item" @click="copyToClipboard">+ Lista 2</div>
      </nav>
    </div>
</template>

<style lang="scss">
  @import 'craftcard.scss';
</style>

<script>
window.twttr = (function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {}
  if (d.getElementById(id)) return t
  js = d.createElement(s)
  js.id = id
  js.src = 'https://platform.twitter.com/widgets.js'
  fjs.parentNode.insertBefore(js, fjs)

  t._e = []
  t.ready = function (f) {
    t._e.push(f)
  }

  return t
}(document, 'script', 'twitter-wjs'))
import domtoimage from 'dom-to-image'

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
    },
    activeMaterial: {
      type: String,
      default: ''
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
    copySerie () {
      const target = event.target.closest('.craft-card')
      target.classList.remove('is-menu')
      // const container = event.target.closest('.craft-card')
      domtoimage.toBlob(target)
        .then(function (dataUrl) {
          const item = new window.ClipboardItem({ 'image/png': dataUrl })
          navigator.clipboard.write([item])
        })
    },
    copyToClipboard (event) {
      const target = event.target.closest('.craft-card')
      target.classList.remove('is-menu')
      domtoimage.toBlob(target)
        .then(function (dataUrl) {
          const item = new window.ClipboardItem({ 'image/png': dataUrl })
          navigator.clipboard.write([item])
        })
    },
    copyToClipboardText (event) {
      console.log('click')
      const target = event.target.closest('.craft-card')
      target.classList.remove('is-menu')
      const text = target.innerText.replace('\t', '')
      console.log(target)
      navigator.clipboard.writeText(text)
      console.log(text)
    },
    isOwned () {
      let globalOwned = localStorage.owned
      if (globalOwned) {
        globalOwned = JSON.parse(globalOwned)
        return globalOwned.findIndex(e => e === this.image) > -1
      }
      return false
    },
    toggleActiveMaterial (event) {
      const target = event.target
      const parent = target.closest('.material__wrap')
      const active = document.querySelector('.material__wrap.is-active')
      if (parent === active) {
        active.classList.remove('is-active')
      } else {
        if (active) {
          active.classList.remove('is-active')
        }
        parent.classList.toggle('is-active')
      }
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
    },
    toggleMenu (event) {
      const target = event.target.closest('.craft-card')
      target.classList.toggle('is-menu')
    }
  }
}
</script>
