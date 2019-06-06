import Vue from 'vue'

export const state = () => ({
  addons: {list:{}},
  memberpackage: {},
  total: 0,
  currency: 'SEK'
})

export const mutations = {
  add (state, addon) {
    Vue.set(state.addons.list, addon.Id, addon)
    state.total+=addon.Article.DiscountedPrice
  },
  remove (state, addonId) {
    let element = state.addons.list[addonId];
    if (element) {
      state.total-=state.addons.list[addonId].Article.DiscountedPrice
      Vue.delete(state.addons.list, addonId)
    }
  },
  addmemberpackage (state, memberpackage) {
    state.total+=memberpackage.Price
    state.memberpackage = memberpackage
  }
}