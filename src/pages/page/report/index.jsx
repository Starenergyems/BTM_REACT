import { pagesPathName } from "@/router";
import { PageBox } from "@/components/units";
import ScopeStyle from "./indexStyle";

function Report () {
  const routeName = pagesPathName.bill.report.pathName
  return (
    <ScopeStyle>
      <PageBox headerTitle={routeName}>
      </PageBox>
    </ScopeStyle>
  );
}

export default Report;
