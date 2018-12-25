import api from "./api"
import GlobalApiMonitorHandler from "./global-api-monitor-handler"
import { sampleTest } from "./sample"

const globalMonitor = (response: object) => {
  if (window.location.host === "localhost:3000") {
    /* tslint:disable-next-line */
    console.log("GLOBAL MONITOR ", response)
  }
  GlobalApiMonitorHandler(response)
}

api.addMonitor(globalMonitor)

export default {
  /* --- Test Requests ---*/
  sampleTest
}
