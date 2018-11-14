export default class Auto {
  constructor(data) {
    if (!data.make || !data.model || !data.year || !data.price) {
      throw new Error("Invalid Auto Creation")
    }
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl || 'http://placehold.it/200x200'
    this.year = data.year
    this.price = data.price
    this.description = data.description || 'No Description'
    this.miles = data.miles || -1
  }
}