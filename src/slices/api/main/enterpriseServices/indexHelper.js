import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/slices/api/setting";

//取得企業管理列表
const getEnterpriseServicesCompanies = createAsyncThunk(
  "enterpriseServices/getEnterpriseServicesCompanies",
  async ({ config } = {}) => {
    const fetchData = await api.get("enterprise_services/companies", config);
    return fetchData.data;
  }
);
//新增企業管理列表項目
const postEnterpriseServicesCompanies = createAsyncThunk(
  "enterpriseServices/postEnterpriseServicesCompanies",
  async ({ data, config }) => {
    const fetchData = await api.post(
      "enterprise_services/companies",
      data,
      config
    );
    return fetchData.data;
  }
);
//取得企業管理列表單一項目資料
const getEnterpriseServicesCompany = createAsyncThunk(
  "enterpriseServices/getEnterpriseServicesCompany",
  async ({ data, config }) => {
    const fetchData = await api.get(
      `enterprise_services/company/${data.companyId}`,
      config
    );
    return fetchData.data;
  }
);
//編輯企業管理列表項目
const putEnterpriseServicesCompanies = createAsyncThunk(
  "enterpriseServices/putEnterpriseServicesCompanies",
  async ({ data, config }) => {
    const { companyId, data: bodyData } = data;
    const fetchData = await api.put(
      `enterprise_services/company/${companyId}`,
      bodyData,
      config
    );
    return fetchData.data;
  }
);
//刪除企業管理列表項目
const deleteEnterpriseServicesCompanies = createAsyncThunk(
  "enterpriseServices/deleteEnterpriseServicesCompanies",
  async ({ data, config }) => {
    const fetchData = await api.delete(
      `enterprise_services/company/${data.companyId}`,
      config
    );
    return fetchData.data;
  }
);

export {
  deleteEnterpriseServicesCompanies,
  getEnterpriseServicesCompany,
  getEnterpriseServicesCompanies,
  postEnterpriseServicesCompanies,
  putEnterpriseServicesCompanies,
};
