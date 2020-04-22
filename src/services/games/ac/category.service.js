import CATEGORIES from '../../../data/ac/category.data'

export default class CategoryService {
  constructor () {
    this.categories = Object.keys(CATEGORIES)
      .map(k => CATEGORIES[k])
      .sort((a, b) => (a.name > b.name) ? 1 : -1)
    console.log(this.categories)
  }

  getCategories () {
    return this.categories
  }
}
