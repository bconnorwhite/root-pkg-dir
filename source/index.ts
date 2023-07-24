import path from "node:path";
import { rootPkgJSON, Options } from "root-pkg-json";

export async function rootPkgDir(options: Options = {}) {
  const pkgJSON = await rootPkgJSON(options);
  if(pkgJSON) {
    return path.dirname(pkgJSON);
  } else {
    return undefined;
  }
}

export type {
  Options
};
