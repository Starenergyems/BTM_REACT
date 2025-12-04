import AwardStatus from "./awardStatus";
import ServiceProduct from "./serviceProduct";
import ScopeStyle from "./indexStyle";

function RealTimeSpinningReserve() {
  return (
    <ScopeStyle className="pd-y-30 pd-x-50">
      {/* 得標狀態 */}
      <AwardStatus />
      {/* 服務商品 */}
      <ServiceProduct />
    </ScopeStyle>
  );
}

export default RealTimeSpinningReserve;
