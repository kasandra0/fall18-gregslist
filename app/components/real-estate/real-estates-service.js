import Estate from "../../models/estate.js";
let _estates = []
let _api = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/houses'
})

export default class RealEstatesService {
  constructor() {
  }

  addEstate(formData) {
    let newEstate = new Estate(formData);
    _estates.push(newEstate);
  }
  get estates() {
    return _estates;
  }
  getEstates(callback) {
    _api.get('')
      .then(res => {
        _estates = res.data.data.map(item => new Estate(item))
        callback()
      })
      .catch(error => { throw new Error(error) })
  }
}