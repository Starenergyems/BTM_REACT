import ScopeStyle from "./indexStyle";

function HomeBox({ title, children }) {
  return (
    <ScopeStyle>
      <div className="home-box-title">
        {title && <h2 className="">{title}</h2>}
      </div>

      <div className="mb-10">{children}</div>
    </ScopeStyle>
  );
}

export default HomeBox;
