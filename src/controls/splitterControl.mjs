/**
 * @module "SplitterControl" class
 * @description Has the logic of splitter container based on 4 DIVs (container, left pane, divider, right pane)
 */

import Path from "path";

import { HtmlToolkit } from "../tools/htmlToolkit.mjs";

export class SplitterControl {
    get container() { return this.mContainer; }
    set container(pValue) { this.mContainer = pValue; }
    get leftPane() { return this.mLeftPane; }
    set leftPane(pValue) { this.mLeftPane = pValue; }
    get divider() { return this.mDivider; }
    set divider(pValue) { this.mDivider = pValue; }
    get rightPane() { return this.mRightPane; }
    set rightPane(pValue) { this.mRightPane = pValue; }
    get isMouseDown() { return this.mIsMouseDown; }
    set isMouseDown(pValue) { this.mIsMouseDown = Boolean.verify(pValue); }
    get isMouseDown() { return this.mIsMouseDown; }
    set isMouseDown(pValue) { this.mIsMouseDown = Boolean.verify(pValue); }

    constructor(pParent, pContainerId, pLeftPaneId, pRightPaneId, pLeftPaneWidth) {
        const ejsPath = Path.join(__dirname, "../../ejs/splitter.ejs"); //TODO - This does not work (__dirname)
        const data = { containerId: pContainerId, leftPaneId: pLeftPaneId, rightPaneId: pRightPaneId, leftPaneWidth: pLeftPaneWidth };
        pParent.innerHTML = HtmlToolkit.applyTemplate(ejSPath, data);
        this.container = document.getElementById(pContainerId);
        this.leftPane = document.getElementById(pLeftPaneId);
        this.divider = pParent.getElementsByClassName("splitterDivider")[0];
        this.rightPane = document.getElementById(pRightPaneId);
        this.isMouseDown = false;
        const __this = this;
        this.divider.addEventListener('mousedown', (lEvent) => { __this.onDividerMouseDown(lEvent); });
    }
    
    onDividerMouseDown(pEvent) {
        this.isMouseDown = true;
        const __this = this;
        document.body.addEventListener('mousemove', (lEvent) => { __this.onDocumentMouseMove(lEvent); });
        document.body.addEventListener('mouseup', (lEvent) => { __this.onDocumentMouseUp(lEvent); })
    }

    onDocumentMouseMove(pEvent) {
        if (this.isMouseDown)
            this.leftPane.style.flexBasis = pEvent.clientX + "px"
        else
            this.onDocumentMouseUp(pEvent);
    }

    onDocumentMouseUp(pEvent) {
        this.isMouseDown = false;
        const __this = this;
        document.body.removeEventListener('mouseup', (lEvent) => { __this.onDocumentMouseUp(lEvent); });
        document.body.removeEventListener('mousemove', (lEvent) => { __this.onDocumentMouseMove(lEvent); })
    }    
}
