import Auto from "../../models/auto.js";
let _autos = []
let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/cars/"
})
export default class AutosService {
  constructor() {
  }
  addAuto(formData, callback) {
    let newAuto = new Auto(formData)
    // _autos.push(newAuto)
    if (!formData) {
      throw new Error('Input Form Data')
    }
    if (typeof callback != 'function') {
      throw new Error('Provide Callback Function')
    }
    _api.post('', formData)
      .then(res => {
        this.getAutos(callback)
      })
      .catch(err => { throw new Error(err) })
  }

  getAutos(callback) {
    _api.get('')
      .then(res => {
        _autos = res.data.data.map(item => new Auto(item))
        callback()
      })
      .catch(error => {
        throw new Error(error)
      })
  }
  get autos() {
    return _autos
  }


}