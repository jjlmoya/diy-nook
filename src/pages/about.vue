<template>
    <div class="p-ac p-ac--about about">
        <div class="back">
          <a href="javascript:history.go(-1)">
              Volver
            </a>
        </div>
        <div class="about__content">
          <h2 class="about__title">Gracias</h2>
          <div class="about__description">
            <p>Mi nombre es JJ y me dedicado (me medio-dedico o dedicaba, es complicado hoy en día) a crear portales de turismo.</p>
            <p>Gracias al tiempo libre que nos está tocando a todos vivir he podido decirle tiempo a la creación de esta APP.</p>
            <p>Espero que en esta situación estéis todos lo mejor posible, mi apoyo a todos desde aquí y espero que este pequeño grano de arena os sirve de entretenimiento o ayuda.</p>
            <p>En mis planes está subsistir y seguir desarrollando esta y otras aplicaciones, si estás en una situación que os resulte fácil aportar os estaré eternamente agradecido.</p>
          </div>
          <a @click="open('https://www.paypal.me/jjlmoya')" class="form">
            <img alt="" border="0" :src="'./statics/beggar.png'" />
            <span>Donar</span>
          </a>
        </div>
        <h2 class="about__title">Agradecimientos</h2>
        <div class="about__description">
            <p>La gran colección de datos que tiene esta aplicación ha sido conseguida con una gran celeridad gracias a la comunidad de <strong>Discord de ACSpainWeb (NoRyKo, Virgina1990, Khaleesi, Aroa, redbelcebu, Karaphan, JerryG, Zissecko, elpilla, Chimpoko, DaniSkyWalker86 y perdón si me olvido alguno) </strong></p>
            <p>Gracias también a los <strong>consejos de UX de Albert_90 y principio de la idea de Mario</strong></p>
            <p>Y en especial un agradecimiento profundo a <strong>Pesadilla, webmaster de <a @click="open('https://acspainweb.es/')">AC Spain Web</a>
            </strong> por todas las horas dedicadas a la información, imágenes, ideas, promoción y un largo, etc.</p>
             <p>A <strong>Seru, SrKyzher y Kirei</strong> por sus 300 correcciones que han subido la calidad y la exactitud.</p>
            <p>A <strong>Nintendo</strong> por su juego y por sus assets.</p>
          </div>
    </div>
</template>

<style lang="scss">
  @import 'about.scss';
</style>

<script>
import { openURL } from 'quasar'

export default {
  name: 'About',
  components: {
  },
  methods: {
    open (url) {
      openURL(url)
    }
  }
}
</script>
