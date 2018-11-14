import Estate from "../../models/estate.js";

let _estates = [
  new Estate({ price: 200000, size: 1540, beds: 3, bath: 2, address: '123 Willow Ln', pic: 'http://www.nakshewala.com/map/gallery/large/5611Individual_House_Design.jpg' }),
  new Estate({ price: 190000, size: 1600, beds: 3, bath: 2, address: '123 Willow Ln', pic: 'https://diyfamily.files.wordpress.com/2010/02/loghouse-lamp2.jpg' }),
  new Estate({ price: 130000, size: 840, beds: 1, bath: 1, address: '123 Willow Ln', pic: 'http://2.bp.blogspot.com/_7sheff73Ky8/TUEHCT7E6KI/AAAAAAAAAI0/6jaV1ww1S8s/s1600/nestle-down-lake-residence-house-design1.jpg' }),
  new Estate({ price: 200000, size: 1540, beds: 3, bath: 2, address: '123 Willow Ln', pic: 'http://www.nakshewala.com/map/gallery/large/5611Individual_House_Design.jpg' }),
  new Estate({ price: 600000, size: 1840, beds: 4, bath: 3, address: '123 Willow Ln', pic: 'https://larryfire.files.wordpress.com/2008/07/smallest-house-2.jpg' })
];

export default class RealEstatesService {
  constructor() {
  }

  addEstate(formData) {
    let newEstate = new Estate(formData);
    _estates.push(newEstate);
  }
  getEstates() {
    return _estates; // BREAK THIS REFERENCE
  }
}