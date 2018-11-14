import JobsService from "./jobs-service.js";

let _jobsService = new JobsService();
export default class JobsController {
  constructor() {
  }
  showJobs() {
    let jobs = _jobsService.jobs
    let template = ""
    jobs.forEach(job => {
      template += `
      <div class="col-3">
          <div class="card">
            <h3>${job.jobTitle}</h3>
            <h5>${job.company}</h5>
            <h5>${job.rate}</h5>
          </div>
        </div>
      `
    })
  }
}
