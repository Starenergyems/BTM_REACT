import { pagesPathName } from "@/router";
import { PageBox } from "@/components/units";
import ScopeStyle from "./indexStyle";

function StorageBill () {
  const routeName = pagesPathName.bill.storageBill.pathName
  return (
    <ScopeStyle>
      <PageBox headerTitle={routeName}>
      </PageBox>
    </ScopeStyle>
  );
}

export default StorageBill;
