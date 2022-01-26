/**
 * @module "EjsToolkit" class
 * @description Class with basic EJS tools
 */

"use strict";

import Ejs from "ejs";
import FileSystem from "fs";

export class EjsToolkit {
    constructor() {
    }

    static applyTemplate(pTemplateFilePath, pData) {
        const template = FileSystem.readFileSync(pTemplateFilePath, "utf-8");
        const html = Ejs.render(template, pData);
        return html;
    }
}