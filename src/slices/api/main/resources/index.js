import { createSlice } from "@reduxjs/toolkit";
import {
  getResourcesBmsData,
  getResourcesOperatingStatus,
  getResourcesOperationalIndicators,
  getResourcesPcsData,
  getResourcesType,
  getResourcesSiteInformation,
  getResourcesSiteType,
  postResourcesSite,
  getResourcesDeviceType,
  getResourcesEquipmentSupplier,
  getResourcesEquipmentSupplierEquipments,
} from "./indexHelper";

//初始值
const initialState = {
  bmsData: {
    avgSoc: 0,
    avgSoh: 0,
    gridStatus: 0,
    gridStatusStr: "",
    list: [],
    onlineQty: 0,
    systemCurrent: 0,
    systemVoltage: 0,
    totalQty: 0,
    workingStatus: 0,
    workingStatusStr: "",
  },
  deviceTypeList: [],
  equipmentSupplierList: [],
  EquipmentSupplierEquipmentList: [],
  operationalIndicators: {
    operatingIndicators: null,
    operationalIndicators: null,
    performanceIndicators: null,
    reliabilityIndicators: null,
  },
  operatingstatus: {},
  pcsData: {
    onlineQty: 0,
    totalQty: 0,
    totalActivePower: 0,
    totalReactivatePower: 0,
    totalRatedPower: 0,
    todayCharge: 0,
    todayDischarge: 0,
    totalCharge: 0,
    totalDischarge: 0,
    list: [],
  },
  serviceTypeList: [],
  sitesList: [],
  siteTypes: [],
  siteItem: {
    contract: "",
    image: "",
    info: "",
    sn: "",
  },
};

const apiResoucesSlice = createSlice({
  name: "apiResources",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getResourcesBmsData.fulfilled, (state, action) => {
      state.bmsData = action.payload;
    });
    builder.addCase(getResourcesOperatingStatus.fulfilled, (state, action) => {
      state.operatingstatus = action.payload;
    });
    builder.addCase(
      getResourcesOperationalIndicators.fulfilled,
      (state, action) => {
        const {
          operatingIndicators,
          operationalIndicators,
          performanceIndicators,
          reliabilityIndicators,
        } = action.payload;
        state.operationalIndicators.operatingIndicators = operatingIndicators;
        state.operationalIndicators.operationalIndicators =
          operationalIndicators;
        state.operationalIndicators.performanceIndicators =
          performanceIndicators;
        state.operationalIndicators.reliabilityIndicators =
          reliabilityIndicators;
      }
    );
    builder.addCase(getResourcesPcsData.fulfilled, (state, action) => {
      state.pcsData = action.payload;
    });
    builder.addCase(getResourcesType.fulfilled, (state, action) => {
      state.serviceTypeList = action.payload.types;
    });
    builder.addCase(getResourcesSiteInformation.fulfilled, (state, action) => {
      const { contract, image, info, sn } = action.payload;
      state.siteItem.contract = contract;
      state.siteItem.image = image;
      state.siteItem.info = info;
      state.siteItem.sn = sn;
    });
    builder.addCase(getResourcesSiteType.fulfilled, (state, action) => {
      state.siteTypes = action.payload.siteTypes;
    });
    builder.addCase(postResourcesSite.fulfilled, (state, action) => {
      state.sitesList = action.payload.sites;
    });
    builder.addCase(getResourcesDeviceType.fulfilled, (state, action) => {
      state.deviceTypeList = action.payload.result;
    });
    builder.addCase(
      getResourcesEquipmentSupplier.fulfilled,
      (state, action) => {
        state.equipmentSupplierList = action.payload.result;
      }
    );
    builder.addCase(
      getResourcesEquipmentSupplierEquipments.fulfilled,
      (state, action) => {
        state.EquipmentSupplierEquipmentList = action.payload.result;
      }
    );
  },
});

export default apiResoucesSlice.reducer;
