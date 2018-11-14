import AutosController from "./components/autos/autos-controller.js";
import RealEstatesController from "./components/real-estate/real-estates-controller.js";
import JobsController from "./components/jobs/jobs-controller.js";

class App {
  constructor() {
    this.controllers = {
      autosController: new AutosController(),
      realEstatesController: new RealEstatesController(),
      JobsController: new JobsController()
    }
  }
}


window.app = new App()
