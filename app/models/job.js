export default class Job {
  constructor(data) {
    if (
      !data.hasOwnProperty('company') ||
      !data.hasOwnProperty('jobTitle') ||
      !data.hasOwnProperty('hours') ||
      !data.hasOwnProperty('rate')
    ) {
      throw new Error("Invalid job input")
    }
    this.company = data.company;
    this.jobTitle = data.jobTitle;
    this.hours = data.hours;
    this.rate = data.rate;
    this.description = data.description

  }
}