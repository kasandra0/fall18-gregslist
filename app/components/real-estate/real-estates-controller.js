import RealEstatesService from "./real-estates-service.js";

let _estatesService = new RealEstatesService();
export default class RealEstatesContoller {
  constructor() {
    _estatesService.getEstates(this.showRealEstate)
  }

  showRealEstate() {
    console.log('Real Estate Button')

    let estates = _estatesService.estates
    let template = '';
    estates.forEach(estate => {
      template += `
      <div class="col-3 card">
        <img src="${estate.imgUrl}" height="200px"/>
        <h5>$${estate.price}</h5>
        <p>${estate.bedrooms}bed, ${estate.bathrooms}bath, ${estate.size}sqft</p>
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
      bedrooms: form.beds.value,
      bathrooms: form.bath.value,
      levels: form.levels.value,
      year: form.year.value,
      imgUrl: form.pic.value,
      description: form.description.value
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
        <div class="form-group"><label for="levels">Levels: </label><input type="number" name="levels"></div>
        <div class="form-group"><label for="year">Year: </label><input type="number" name="year"></div>
        <div class="form-group"><label for="description">Description: </label><input type="text" name="description"></div>
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