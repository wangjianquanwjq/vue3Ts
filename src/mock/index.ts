import Mock from "mockjs";
import { MockParams } from "./typing";
import token from "./token";
const mocks = [...token];
//设置延时时间
Mock.setup({
  timeout: "300",
});

export function mockXHR() {
  let i: MockParams;
  for (i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || "get", i.response);
  }
}