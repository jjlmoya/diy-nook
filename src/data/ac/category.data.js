import CLOTH from './crafts/categories/cloth.category'
import FURNITURE from './crafts/categories/furniture.category'
import OBJECT from './crafts/categories/object.category'

export default {
  ...CLOTH,
  ...FURNITURE,
  ...OBJECT
}
