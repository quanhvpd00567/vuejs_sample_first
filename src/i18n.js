import Vue from 'vue'
import VueI18n from 'vue-i18n'
import lang_vi from './langs/vi.json'
import lang_en from './langs/en.json'
Vue.use(VueI18n)

const langs = {
    vi: lang_vi,
    en: lang_en,
}

const i18n = new VueI18n({
    locale: 'vi',
    messages: langs,
    // fallbackLocale: 'vi',
})

export default i18n