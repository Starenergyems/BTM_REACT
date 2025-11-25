import abnormalEvents from "@/slices/api/main/abnormalEvents/index";
import accounts from "@/slices/api/main/accounts/index";
import bidPrediction from "@/slices/api/main/bidPrediction/index";
import dashboard from "@/slices/api/main/dashboard/index";
import enterpriseServices from "@/slices/api/main/enterpriseServices/index";
import investmentStrategy from "@/slices/api/main/investmentStrategy/index";
import operationAndMaintenance from "@/slices/api/main/operationAndMaintenance/index";
import revenue from "@/slices/api/main/revenue/index";
import resources from "@/slices/api/main/resources/index";
import system from "@/slices/api/main/system/index";
import token from "@/slices/api/main/token/index";
const reducers = {
  abnormalEvents,
  accounts,
  bidPrediction,
  dashboard,
  enterpriseServices,
  investmentStrategy,
  operationAndMaintenance,
  revenue,
  resources,
  system,
  token,
};
export default reducers;
