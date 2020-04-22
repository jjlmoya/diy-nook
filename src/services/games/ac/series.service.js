import SERIES from '../../../data/ac/series.data'

export default class SeriesService {
  constructor () {
    this.series = Object.keys(SERIES).map(k => SERIES[k])
  }

  getSeries () {
    return this.series
  }
}
