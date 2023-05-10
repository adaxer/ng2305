import { inject } from "@angular/core";
import { CanMatchFn, Route, UrlSegment } from "@angular/router";

export const canLoadAdmin: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return true;
};
