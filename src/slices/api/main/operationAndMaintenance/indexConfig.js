const managerOrderStatus = [
  "unProcessed",
  "returned",
  "assigned",
  "pending",
  "completed",
];
const operatorOrderStatus = [
  "unProcessed",
  "returned",
  "assigned",
  "pending",
  "completed",
];
const actionStatus = {
  unProcessed: 0,
  assigned: 1,
  transfer: 2,
  reject: 3,
  returned: 4,
  inProgress: 5,
  operatorWaitReview: 6, //派工人員視角，等待主管審核
  operatorReviewPass: 7, //派工人員視角，主管審核通過(派工人員已完成)
  operatorReviewReject: 8, //派工人員視角，主管審核不通過(派工人員已完成)
  waitReview: 9, //主管待審核
  reviewReject: 10, //主管審核不通過
  completed: 11, //已結案
};
const methodStatus = {
  unProcessed: 0,
  reject: 1,
  transfer: 2,
  inProgress: 3,
  completed: 4,
  reviewPass: 5,
  reviewReject: 6,
};

export { actionStatus, managerOrderStatus, methodStatus, operatorOrderStatus };
