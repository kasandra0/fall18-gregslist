import RealEstatesService from "./real-estates-service.js";

let _estatesService = new RealEstatesService();
export default class RealEstatesContoller {
  constructor() {

  }
  getEstates() {
    return _estatesService.getEstates() // DELETE THIS METHOD
  }
  showRealEstate() {
    console.log('Real Estate Button')
    let estates = _estatesService.getEstates();
    let template = '';
    estates.forEach(estate => {
      template += `
      <div class="col-3 card">
        <img src="${estate.pic}" height="200px"/>
        <h5>$${estate.price}</h5>
        <p>${estate.beds}bed, ${estate.bath}bath, ${estate.size}sqft</p>
      </div>`
    })
    document.getElementById('main-content').innerHTML = template;
  }
  addEstate(event) {
    event.preventDefault();
    let form = event.target;
    let formData = {
      price: form.price.value,
      size: form.size.value,
      beds: form.beds.value,
      bath: form.bath.value,
      address: form.address.value,
      pic: form.pic.value
    }
    _estatesService.addEstate(formData);
    this.showRealEstate();
    form.reset();
    document.getElementById('form-id').innerHTML = '';
  }
  showForm() {
    let template = `
      <form onsubmit="app.controllers.realEstatesController.addEstate(event)">
        <div class="form-group"><label for="price">Price: </label><input type="number" name="price"></div>
        <div class="form-group"><label for="size">Size: </label><input type="number" name="size"></div>
        <div class="form-group"><label for="beds">Beds: </label><input type="number" name="beds"></div>
        <div class="form-group"><label for="bath">Bath: </label><input type="number" name="bath"></div>
        <div class="form-group"><label for="address">Address: </label><input type="text" name="address"></div>
        <div class="form-group"><label for="pic">Picture: </label><input type="url" name="pic"></div>
        <button type="submit">Add Real Estate</button>
        <button onclick="app.controllers.realEstatesController.closeForm()">Close Form</button>
      </form>`
    document.getElementById('form-id').innerHTML = template;
  }
  closeForm() {
    document.getElementById('form-id').innerHTML = '';
  }
}