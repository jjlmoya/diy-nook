import CATEGORIES from '../../../data/ac/category.data'

export default class CategoryService {
  constructor () {
    this.categories = Object.keys(CATEGORIES).map(k => CATEGORIES[k]).sort(e => e.name)
    console.log(this.categories)
  }

  getCategories () {
    return this.categories
  }
}
