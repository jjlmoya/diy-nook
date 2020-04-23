import CRAFTS from '../../../data/ac/craft.data'

export default class CraftingService {
  constructor ({ category, serie, search }) {
    this.crafts = CRAFTS
    this.maxItem = CRAFTS.length
    this.category = category
    this.serie = serie
    this.search = search
    if (this.serie) {
      const filtered = this.crafts.filter(craft => craft.serie && craft.serie.id === this.serie)
      this.crafts = filtered
    }
    if (this.category) {
      this.crafts = this.crafts.filter(craft => this.hasCategory(this.category, craft.category))
    }
    this.crafts = this.search ? this.filterByName() : this.crafts
    this.ownedCount = this.getOwnedsByCrafts().length
    this.currentMaxItems = this.filtered ? this.filtered.length : this.maxItem
  }

  normalizeString (string) {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase()
  }

  filterByName (name) {
    return this.crafts.filter(craft => this.normalizeString(craft.name).indexOf(this.normalizeString(this.search)) > -1)
  }

  hasOwn (entry, owneds) {
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

  getMaxObjets () {
    return this.maxItem
  }

  getCurrentObjets () {
    return this.crafts.length
  }
}
