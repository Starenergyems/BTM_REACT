import { pagesPathName } from "@/router";
import { PageBox } from "@/components/units";
import ScopeStyle from "./indexStyle";

function DemandRp () {
  const routeName = pagesPathName.setting.demandRp.pathName
  return (
    <ScopeStyle>
      <PageBox headerTitle={routeName}>
      </PageBox>
    </ScopeStyle>
  );
}

export default DemandRp;
