export default class Estate {
  constructor(data) {
    if (!data.hasOwnProperty('bedrooms') ||
      !data.hasOwnProperty('bathrooms') ||
      !data.hasOwnProperty('imgUrl') ||
      !data.hasOwnProperty('levels') ||
      !data.hasOwnProperty('year') ||
      !data.hasOwnProperty('price')
    ) {
      throw new Error('Invalid Estate Input')
    }
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.imgUrl = data.imgUrl;
    this.levels = data.levels;
    this.year = data.year;
    this.price = data.price;
    this.description = data.description || 'No Description'
    this.size = data.size || 11
  }
}