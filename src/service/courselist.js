import Fetch from './fetch.js'

let CListService = {
  viewCourse(page) {
    return Fetch('api/v1.0/courses/?sort=view&page=' + page)
  },
  viewSearch(page, txt) {
    return Fetch('/api/v1.0/search/?page=' + page + '&per_page=20&keywords=' + txt + '&sort=view')
  },
  getCourse(page) {
    return Fetch('api/v1.0/courses/?sort=view&page=' + page +'&pre_page=20&null=asc')
  }
}

export default CListService
