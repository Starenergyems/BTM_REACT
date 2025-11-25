import {
  combineReducers,
  configureStore,
  createAction,
} from "@reduxjs/toolkit";
import { apiReducer, layoutReducer, menuReducer } from "@/slices/index";

const resetStore = createAction("reset");

const combinedReducer = combineReducers({
  apiAbnormalEvents: apiReducer.abnormalEvents,
  apiAccounts: apiReducer.accounts,
  apiBidPrediction: apiReducer.bidPrediction,
  apiDashboard: apiReducer.dashboard,
  apiEnterpriseServices: apiReducer.enterpriseServices,
  apiInvestmentStrategy: apiReducer.investmentStrategy,
  apiOperationAndMaintenance: apiReducer.operationAndMaintenance,
  apiResources: apiReducer.resources,
  apiRevenue: apiReducer.revenue,
  apiSystem: apiReducer.system,
  apiToken: apiReducer.token,
  layout: layoutReducer,
  menu: menuReducer,
});

const rootReducer = (state, action) => {
  if (action.type === resetStore.type) {
    // 返回 undefined，Redux 會將 state 重置為 initialState
    return undefined;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // 忽略特定 action (reduxToolkit不允許非序列式的資料，而blob即是)
        ignoredActions: ["resources/getResourcesDeviceDownload/fulfilled"],
      },
    }),
});
