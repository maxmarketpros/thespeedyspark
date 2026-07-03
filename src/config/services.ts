import { residentialServices } from "@/config/residential-services";
import { commercialServices } from "@/config/commercial-services";

export { residentialServices, commercialServices };

/** Aggregate list used by ServiceGrid defaults and sitewide lookups */
export const services = [...residentialServices, ...commercialServices];
