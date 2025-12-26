import { pagesPathName } from "@/router";
import { PageBox } from "@/components/units";
import ScopeStyle from "./indexStyle";

function Solar () {
  const routeName = pagesPathName.solar.pathName
  return (
    <ScopeStyle>
      <PageBox headerTitle={routeName}>
      </PageBox>
    </ScopeStyle>
  );
}

export default Solar;
