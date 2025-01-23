import { cn } from "@/lib/utils";

test("cn", () => {
  expect(cn("px-1", "mt-2")).toEqual("px-1 mt-2");
  expect(cn("px-1", true && "mt-2")).toEqual("px-1 mt-2");
  expect(cn("px-1", false && "mt-2")).toEqual("px-1");
});
