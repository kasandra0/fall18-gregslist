export default class Auto {
  constructor(data) {
    if (!data.make || !data.model || !data.year || !data.miles || !data.price || !data.description) {
      throw new Error("Invalid Auto Creation")
    }
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.miles = data.miles
    this.price = data.price
    this.description = data.description
    this.img = data.img
  }
}