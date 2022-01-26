/**
 * @module "SpinnerControl" class
 * @description Shows full screen spinner
  */

import Path from "path";

import { HtmlToolkit } from "../tools/htmlToolkit.mjs";

export class SpinnerControl {
    constructor(pParent) {
        const ejsPath = Path.join(__dirname, "../../ejs/spinner.ejs"); //TODO - This does not work (__dirname)
        const data = { dirName: __dirname }; //TODO - This does not work (__dirname)
        pParent.innerHTML = HtmlToolkit.applyTemplate(ejsPath, data);
    }
}
