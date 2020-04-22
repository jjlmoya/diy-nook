import CRAFTS from '../../../data/ac/craft.data'

export default class CraftingService {
  constructor ({ category, serie, ownedFilter }) {
    this.crafts = CRAFTS
    this.maxItem = CRAFTS.length
    this.category = category
    this.serie = serie
    if (this.serie) {
      const filtered = this.crafts.filter(craft => craft.serie && craft.serie.id === this.serie)
      this.crafts = filtered
    }
    if (this.category) {
      this.crafts = this.crafts.filter(craft => this.hasCategory(this.category, craft.category))
    }
    this.ownedsCrafts = this.getOwnedsByCrafts()
    this.ownedCount = this.getOwnedsByCrafts().length
    this.crafts = ownedFilter ? this.getOwnedsByCrafts() : this.crafts
    this.currentMaxItems = this.filtered ? this.filtered.length : this.maxItem
  }

  hasOwn (entry, owneds, property) {
    return !!owneds.find(owned => owned === entry)
  }

  hasCategory (entry, owneds) {
    return !!owneds.find(owned => owned && owned.id === entry)
  }

  getOwnedsByCrafts () {
    let owneds = localStorage.owned
    if (owneds) {
      owneds = JSON.parse(owneds)
      return this.crafts.filter(craft => this.hasOwn(craft.image, owneds))
    }
    return []
  }

  getCrafts () {
    return this.crafts
  }

  getOwneds () {
    return this.ownedCount
  }

  getOwnedsCrafts () {
    return this.ownedsCrafts
  }

  getMaxObjets () {
    return this.maxItem
  }

  getCurrentObjets () {
    return this.crafts.length
  }
}
