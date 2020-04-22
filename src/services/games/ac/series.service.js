import SERIES from '../../../data/ac/series.data'

export default class SeriesService {
  constructor () {
    this.series = Object.keys(SERIES)
      .map(k => SERIES[k])
      .sort((a, b) => (a.name > b.name) ? 1 : -1)
  }

  getSeries () {
    return this.series
  }
}
