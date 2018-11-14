import AutosService from "./autos-service.js";

let _autosService = new AutosService()


export default class AutosController {
  constructor() {
    _autosService.getAutos(this.showAutos)
  }
  showAutos() {
    let autos = _autosService.autos
    let template = ""
    autos.forEach(auto => {
      template += `
        <div class="col-3">
          <div class="card">
            <img src="${auto.imgUrl}" height="200px">
            <h5>${auto.make} - ${auto.model} ${auto.year}</h5>
            <p>Price: ${auto.price}</p>
            <p>Miles: ${auto.miles}</p>
          </div>
        </div>
      `
    })
    document.getElementById('main-content').innerHTML = template
  }

  addAuto(event) {
    event.preventDefault(); //prevents the page from reloading
    let form = event.target // the element that triggers the event
    let formData = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      miles: form.miles.value,
      description: form.description.value,
      imgUrl: form.img.value
    }
    _autosService.addAuto(formData, this.showAutos)
    this.showAutos()
    form.reset()
    document.getElementById('form-id').innerHTML = '';
  }
  showForm() {
    let template = `
        <form onsubmit="app.controllers.autosController.addAuto(event)">
      <div class="form-group">
        <label for="make">Make</label>
        <input type="text" name="make" />
      </div>
      <div class="form-group">
        <label for="model">Model:</label>
        <input type="text" name="model" />
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input type="number" name="year" />
      </div>
      <div class="form-group">
        <label for="miles">Miles:</label>
        <input type="number" name="miles" />
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" name="price" />
      </div>
      <div class="form-group">
        <label for="img">Image:</label>
        <input type="url" name="img" />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea type="text" name="description"></textarea>
      </div>
      <button type="submit">Add Auto</button>
      <button onclick="app.controllers.autosController.closeForm()">Close Form</button>
    </form>
`
    document.getElementById('form-id').innerHTML = template;
  }
  closeForm() {
    document.getElementById('form-id').innerHTML = '';
  }

}