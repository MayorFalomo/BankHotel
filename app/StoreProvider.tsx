"use client";
import { Provider } from "react-redux";
import store from "./GlobalRedux/store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
