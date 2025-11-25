import { createSlice } from "@reduxjs/toolkit";
import { omRole } from "@/slices/api/main/accounts";
import { getAccountsInfo } from "@/slices/api/main/accounts/indexHelper";
import {
  getOperationAndMaintenanceEventType,
  getOperationAndMaintenanceOrder,
} from "./indexHelper";
import { managerOrderStatus, operatorOrderStatus } from "./indexConfig";

// enum methodStatus {
//   unProcessed = 0,
//   reject = 1,
//   transfer = 2,
//   inProgress = 3,
//   completed = 4,
//   reviewPass = 5,
//   reviewReject = 6,
// }

// enum managerOrderStatus {
//   unProcessed,
//   returned,
//   assigned,
//   pending,
//   completed,
// }
// enum operatorOrderStatus {
//   unProcessed,
//   inProgress,
//   pending,
//   completed,
// }

//初始值
const operationAndMaintenanceState = {
  eventTypeList: [],
  tabOrders: {
    unProcessed: [],
    returned: [],
    assigned: [],
    pending: [],
    completed: [],
    inProgress: [],
  },
  omRole: null,
  omRoleStr: "",
};

const operationAndMaintenanceSlice = createSlice({
  name: "accounts",
  initialState: operationAndMaintenanceState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getOperationAndMaintenanceEventType.fulfilled,
      (state, action) => {
        const { eventTypes } = action.payload;
        state.eventTypeList = eventTypes;
      }
    );
    builder.addCase(
      getOperationAndMaintenanceOrder.fulfilled,
      (state, action) => {
        const {
          meta: {
            arg: { status },
          },
        } = action;
        const { orders } = action.payload;
        if (state.omRole === omRole.normal || state.omRole === omRole.manager) {
          state.tabOrders[managerOrderStatus[status]] = orders;
        } else {
          state.tabOrders[operatorOrderStatus[status]] = orders;
        }
      }
    );
    builder.addCase(getAccountsInfo.fulfilled, (state, action) => {
      const { omRole, omRoleStr } = action.payload;
      state.omRole = omRole;
      state.omRoleStr = omRoleStr;
    });
  },
});

export default operationAndMaintenanceSlice.reducer;
