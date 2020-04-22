import CLOTH from './categories/cloth.category'
import FURNITURE from './categories/furniture.category'
import OBJECT from './categories/object.category'

export default {
  ...CLOTH,
  ...FURNITURE,
  ...OBJECT
}
