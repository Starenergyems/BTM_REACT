import { createAsyncThunk } from "@reduxjs/toolkit";
import queryString from "query-string";
import { api } from "@/slices/api/setting";

const getOperationAndMaintenanceEventContent = createAsyncThunk(
  "operationAndMaintenance/getOperationAndMaintenanceEventContent",
  async ({ config } = {}) => {
    const fetchData = await api.get(
      "operation_and_maintenance/event_content",
      config
    );
    return fetchData.data;
  }
);
//暫時保留，未來將棄用，全面改成使用event_content
const getOperationAndMaintenanceEventType = createAsyncThunk(
  "operationAndMaintenance/getOperationAndMaintenanceEventType",
  async ({ config } = {}) => {
    const fetchData = await api.get(
      "operation_and_maintenance/event_type",
      config
    );
    return fetchData.data;
  }
);
const getOperationAndMaintenanceOrder = createAsyncThunk(
  "operationAndMaintenance/getOperationAndMaintenanceOrder",
  async ({ data, config }) => {
    const queryStringData = queryString.stringify(data);
    const fetchData = await api.get(
      `operation_and_maintenance/order?${queryStringData}`,
      config
    );
    return fetchData.data;
  }
);
const postOperationAndMaintenanceOrder = createAsyncThunk(
  "operationAndMaintenance/postOperationAndMaintenanceOrder",
  async ({ data, config }) => {
    const fetchData = await api.post(
      "operation_and_maintenance/order",
      data,
      config
    );
    return fetchData.data;
  }
);
const getOperationAndMaintenanceOrderLogsItem = createAsyncThunk(
  "operationAndMaintenance/getOperationAndMaintenanceOrderLogsItem",
  async ({ data, config }) => {
    const fetchData = await api.get(
      `operation_and_maintenance/order/logs/${data.uuid}`,
      config
    );
    return fetchData.data;
  }
);
const getOperationAndMaintenanceOrderItem = createAsyncThunk(
  "operationAndMaintenance/getOperationAndMaintenanceOrderItem",
  async ({ data, config }) => {
    const fetchData = await api.get(
      `operation_and_maintenance/order/${data.uuid}`,
      config
    );
    return fetchData.data;
  }
);
const patchOperationAndMaintenanceOrderItem = createAsyncThunk(
  "operationAndMaintenance/patchOperationAndMaintenanceOrderItem",
  async ({ data, config }) => {
    const { uuid, formData } = data;
    const patchConfig = {
      ...config,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const fetchData = await api.patch(
      `operation_and_maintenance/order/${uuid}`,
      formData,
      patchConfig
    );
    return fetchData.data;
  }
);
const deleteOperationAndMaintenanceOrderItem = createAsyncThunk(
  "operationAndMaintenance/deleteOperationAndMaintenanceOrderItem",
  async ({ data, config }) => {
    const fetchData = await api.delete(
      `operation_and_maintenance/order/${data.uuid}`,
      config
    );
    return fetchData.data;
  }
);

export {
  getOperationAndMaintenanceEventContent,
  getOperationAndMaintenanceEventType,
  getOperationAndMaintenanceOrder,
  getOperationAndMaintenanceOrderLogsItem,
  getOperationAndMaintenanceOrderItem,
  postOperationAndMaintenanceOrder,
  patchOperationAndMaintenanceOrderItem,
  deleteOperationAndMaintenanceOrderItem,
};
