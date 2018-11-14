import Job from "../../models/job.js";

let _jobs = []
let _api = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/jobs'
})
export default class JobsService {
  constructor() {
  }
  get jobs() {
    return _jobs;
  }
  addJob(formData, callback) {
    if (!formData) {
      throw new Error('Input Form Data')
    }
    if (typeof callback != 'function') {
      throw new Error('Provide Callback Function')
    }
    _api.post('', formData)
      .then(res => {
        _getJobs(callback)
      })
      .catch(err => { throw new Error(err) })
  }
}
function _getJobs(callback) {
  _api.get('')
    .then(res => {
      _jobs = res.data.data.map(item => new Job(item))
    })
    .catch(err => { throw new Error(err) })
  callback()
}
