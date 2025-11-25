function backOnClick(navigate, onClick) {
  if (typeof onClick === "function") {
    onClick();
  } else {
    navigate(-1);
  }
}

export { backOnClick };
