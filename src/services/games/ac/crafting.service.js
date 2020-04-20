import CRAFTS from '../../../data/ac/craft.data'

export default class CraftingService {
  constructor ({ category, serie }) {
    this.crafts = CRAFTS
    this.maxItem = CRAFTS.length
    this.category = category
    this.serie = serie
    if (this.serie) {
      const filtered = this.crafts.filter(craft => craft.serie && craft.serie.id === this.serie)
      this.crafts = filtered
    }
    this.ownedCount = this.getOwnedsByCrafts()
    this.currentMaxItems = this.filtered ? this.filtered.length : this.maxItem
  }

  hasOwn (entry, owneds) {
    return !!owneds.find(owned => owned === entry)
  }

  getOwnedsByCrafts () {
    let owneds = localStorage.owned
    if (owneds) {
      owneds = JSON.parse(owneds)
      return this.crafts.filter(craft => this.hasOwn(craft.image, owneds)).length
    }
    return 0
  }

  getCrafts () {
    return this.crafts
  }

  getOwneds () {
    return this.ownedCount
  }

  getMaxObjets () {
    return this.maxItem
  }

  getCurrentObjets () {
    return this.crafts.length
  }
}
