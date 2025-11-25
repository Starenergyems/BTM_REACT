import { createAsyncThunk } from "@reduxjs/toolkit";
import queryString from "query-string";
import { api } from "@/slices/api/setting";

//取得BMS資訊
const getResourcesBmsData = createAsyncThunk(
  "resources/getResourcesBmsData",
  async ({ data, config }) => {
    const queryStringData = queryString.stringify(data);
    const fetchData = await api.get(
      `resources/bms_data?${queryStringData}`,
      config
    );
    return fetchData.data;
  }
);
//取得得標、調度、棄標狀態
const getResourcesOperatingStatus = createAsyncThunk(
  "resources/getResourcesPperatingStatus",
  async ({ data, config }) => {
    const queryStringData = queryString.stringify(data);
    const fetchData = await api.get(
      `resources/operating_status?${queryStringData}`,
      config
    );
    return fetchData.data;
  }
);
//取得案場營運指標資訊
const getResourcesOperationalIndicators = createAsyncThunk(
  "resources/getResourcesOperationalIndicators",
  async ({ data, config }) => {
    const queryStringData = queryString.stringify(data);
    const fetchData = await api.get(
      `resources/operational_indicators?${queryStringData}`,
      config
    );
    return fetchData.data;
  }
);
//取得PCS資訊
const getResourcesPcsData = createAsyncThunk(
  "resources/getResourcesPcsData",
  async ({ data, config }) => {
    const queryStringData = queryString.stringify(data);
    const fetchData = await api.get(
      `resources/pcs_data?${queryStringData}`,
      config
    );
    return fetchData.data;
  }
);
//根據輸入參數來取得案場資訊
const postResourcesSite = createAsyncThunk(
  "resources/postResourcesSite",
  async ({ data, config }) => {
    const fetchData = await api.post("resources/site", data, config);
    return fetchData.data;
  }
);
//取得全種類案場列表
const getResourcesSiteInformation = createAsyncThunk(
  "resources/getResourcesSiteInformation",
  async ({ data, config } = {}) => {
    const queryStringData = queryString.stringify(data);
    const fetchData = await api.get(
      `resources/site_information?${queryStringData}`,
      config
    );
    return fetchData.data;
  }
);
//新增全種類案場列表
const postResourcesSiteInformation = createAsyncThunk(
  "resources/postResourcesSiteInformation",
  async ({ data, config }) => {
    const { formData } = data;
    const fetchData = await api.post(
      "resources/site_information",
      formData,
      config
    );
    return fetchData.data;
  }
);
//編輯全種類案場列表
const putResourcesSiteInformation = createAsyncThunk(
  "resources/putResourcesSiteInformation",
  async ({ data, config }) => {
    const { siteId, formData } = data;
    const fetchData = await api.put(
      `resources/site_information/${siteId}`,
      formData,
      config
    );
    return fetchData.data;
  }
);
//取得案場類型(儲能、太陽能...)
const getResourcesSiteType = createAsyncThunk(
  "resources/getResourcesSiteType",
  async ({ config } = {}) => {
    const fetchData = await api.get("resources/site_type", config);
    return fetchData.data;
  }
);
//取得資源類型(dReg、E-dReg...)
const getResourcesType = createAsyncThunk(
  "resources/getResourcesType",
  async ({ config } = {}) => {
    const fetchData = await api.get("resources/type", config);
    return fetchData.data;
  }
);

/*----------------------------
以下為供應商管理的API
----------------------------*/
//下載設備商的設備型號資料
const getResourcesDeviceDownload = createAsyncThunk(
  "resources/getResourcesDeviceDownload",
  async ({ data, config }) => {
    const fetchData = await api.get(
      `resources/device/${data.deviceId}/download`,
      config
    );
    return fetchData.data;
  }
);
//取得設備類型(不分設備商)
const getResourcesDeviceType = createAsyncThunk(
  "resources/getResourcesDeviceType",
  async ({ config } = {}) => {
    const fetchData = await api.get("resources/device_type", config);
    return fetchData.data;
  }
);
//取得設備商列表
const getResourcesEquipmentSupplier = createAsyncThunk(
  "resources/getResourcesEquipmentSupplier",
  async ({ data, config } = {}) => {
    const queryStringData = queryString.stringify(data);
    const fetchData = await api.get(
      `resources/equipment_supplier?${queryStringData}`,
      config
    );
    return fetchData.data;
  }
);
//新增設備商
const postResourcesEquipmentSupplier = createAsyncThunk(
  "resources/postResourcesEquipmentSupplier",
  async ({ data, config }) => {
    const fetchData = await api.post(
      "resources/equipment_supplier",
      data,
      config
    );
    return fetchData.data;
  }
);
//編輯設備商
const putResourcesEquipmentSupplier = createAsyncThunk(
  "resources/putResourcesEquipmentSupplier",
  async ({ data, config }) => {
    const fetchData = await api.put(
      `resources/equipment_supplier/${data.supplierId}`,
      data.bodyData,
      config
    );
    return fetchData.data;
  }
);
//編輯設備商的設備
const putResourcesEquipmentSupplierEquipments = createAsyncThunk(
  "resources/putResourcesEquipmentSupplierEquipments",
  async ({ data, config }) => {
    const fetchData = await api.put(
      `resources/equipment_supplier/${data.supplierId}/equipment/${data.equipmentId}`,
      data.formData,
      config
    );
    return fetchData.data;
  }
);
//取得設備商的設備資訊
const getResourcesEquipmentSupplierEquipments = createAsyncThunk(
  "resources/getResourcesEquipmentSupplierEquipments",
  async ({ data, config }) => {
    const queryStringData = queryString.stringify(data);
    const fetchData = await api.get(
      `resources/equipment_supplier/${data.supplierId}/equipments?${queryStringData}`,
      config
    );
    return fetchData.data;
  }
);
//新增設備商的設備
const postResourcesEquipmentSupplierEquipments = createAsyncThunk(
  "resources/postResourcesEquipmentSupplierEquipments",
  async ({ data, config }) => {
    const fetchData = await api.post(
      `resources/equipment_supplier/${data.supplierId}/equipments`,
      data.formData,
      config
    );
    return fetchData.data;
  }
);

export {
  getResourcesBmsData,
  getResourcesDeviceDownload,
  getResourcesDeviceType,
  getResourcesEquipmentSupplier,
  getResourcesEquipmentSupplierEquipments,
  getResourcesOperatingStatus,
  getResourcesOperationalIndicators,
  getResourcesPcsData,
  getResourcesSiteInformation,
  getResourcesType,
  getResourcesSiteType,
  postResourcesEquipmentSupplier,
  postResourcesEquipmentSupplierEquipments,
  postResourcesSite,
  postResourcesSiteInformation,
  putResourcesSiteInformation,
  putResourcesEquipmentSupplier,
  putResourcesEquipmentSupplierEquipments,
};
