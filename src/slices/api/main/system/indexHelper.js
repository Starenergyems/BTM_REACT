import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/slices/api/setting";

//取得角色列表
const getSystemMenuFunctionList = createAsyncThunk(
  "system/getSystemMenuFunctionList",
  async ({ config } = {}) => {
    const fetchData = await api.get("system/menu_function_list", config);
    return fetchData.data;
  }
);
//取得角色列表
const getSystemRole = createAsyncThunk(
  "system/getSystemRole",
  async ({ config } = {}) => {
    const fetchData = await api.get("system/role", config);
    return fetchData.data;
  }
);
//新增角色權限資料
const postSystemRole = createAsyncThunk(
  "system/postSystemRole",
  async ({ data, config }) => {
    const fetchData = await api.post("system/role", data, config);
    return fetchData.data;
  }
);
//取得角色權限資料
const getSystemRoleItem = createAsyncThunk(
  "system/getSystemRoleItem",
  async ({ data, config }) => {
    const fetchData = await api.get(`system/role/${data.roleId}`, config);
    return fetchData.data;
  }
);
//編輯角色權限資料
const putSystemRole = createAsyncThunk(
  "system/putSystemRole",
  async ({ data, config }) => {
    const fetchData = await api.put(
      `system/role/${data.roldId}`,
      data.bodyData,
      config
    );
    return fetchData.data;
  }
);

export {
  getSystemMenuFunctionList,
  getSystemRole,
  getSystemRoleItem,
  postSystemRole,
  putSystemRole,
};
