export default class Estate {
  constructor(data) {
    if (!data.price || !data.size || !data.beds || !data.bath || !data.address || !data.pic) {
      throw new Error('Invalid Estate Input')
    } // 6 pieces of data
    this.price = data.price;
    this.size = data.size;
    this.beds = data.beds;
    this.bath = data.bath;
    this.address = data.address;
    this.pic = data.pic;
  }
}