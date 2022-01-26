/**
 * @module "HtmlToolkit" class (static)
 * @description Class with a number of helping HTML functions
 */

"use strict";

export class HtmlToolkit {
    static async loadCssAsync(pHref) {
        await this.loadCss(pHref);
    }

    static loadCss(pHref) {
        return new Promise((lResolve, lReject) => {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = pHref;
            document.head.appendChild(link);
            link.onload = () => { lResolve(); }
            link.onerror = (lEvent) => { lReject(lEvent); }
        });
    }
}
