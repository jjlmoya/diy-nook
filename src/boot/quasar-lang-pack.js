// for when you don't specify quasar.conf.js > framework: 'all'
import { Quasar } from 'quasar'
import VueI18n from 'vue-i18n'

export default async () => {
  const langIso = new VueI18n({
    // locale: 'en-us',
    locale: Quasar.lang.getLocale(),
    fallbackLocale: 'en-us'
  })
  // const langIso = Quasar.lang.getLocale() // ... some logic to determine it (use Cookies Plugin?)

  try {
    await import(
      /* webpackInclude: /(de|en-us)\.js$/ */
      'quasar/lang/' + langIso
    )
      .then(lang => {
        // Quasar.lang.set(lang.default)
        Quasar.lang.set(Quasar.lang.getLocale())
      })
  } catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
  }
}
