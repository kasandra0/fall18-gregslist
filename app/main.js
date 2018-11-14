import AutosController from "./components/autos/autos-controller.js";
import RealEstatesController from "./components/real-estate/real-estates-controller.js";

class App {
  constructor() {
    this.controllers = {
      autosController: new AutosController(),
      realEstatesController: new RealEstatesController()
      // JobsController
    }
  }
}


window.app = new App()
