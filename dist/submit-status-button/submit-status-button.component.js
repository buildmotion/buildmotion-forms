import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
/*
For more information on this component see documentation: submit-status-button.md
*/
var SubmitStatusButtonComponent = /** @class */ (function () {
    function SubmitStatusButtonComponent() {
        this.canSubmit = true;
        this.click = new EventEmitter();
    }
    SubmitStatusButtonComponent.prototype.ngAfterViewInit = function () {
        if (this.tabIndex) {
            if (this.submitButton && this.submitButton.nativeElement instanceof HTMLButtonElement) {
                this.submitButton.nativeElement.tabIndex = this.tabIndex;
            }
            else if (this.submittingButton && this.submittingButton.nativeElement instanceof HTMLButtonElement) {
                this.submittingButton.nativeElement.tabIndex = this.tabIndex;
            }
        }
    };
    /**
     * Reset to initial state; not submitting and not submit-able.
     */
    SubmitStatusButtonComponent.prototype.reset = function () {
        this.canSubmit = true;
        this.showSubmittingTemplate = false;
    };
    SubmitStatusButtonComponent.prototype.onSubmit = function (stateName) {
        this.click.emit();
    };
    SubmitStatusButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'buildmotion-forms-submit-status-button',
                    template: "<button #submitButton *ngIf=\"!showSubmittingTemplate\" type=\"submit\" [disabled]=\"!canSubmit\" [class]=\"className ||''\" (click)=\"onSubmit()\">\n    <span #submitTemplateContent><ng-content select=\"submitTemplate\"></ng-content></span> \n    <span *ngIf=\"submitTemplateContent.children.length === 0\">\n        <i class=\"glyphicon glyphicon-save\"></i>&nbsp;Submit\n    </span>\n</button>\n<button #submittingButton *ngIf=\"showSubmittingTemplate\" type=\"button\" [disabled]=\"true\" [class]=\"className ||''\">\n    <span #submittingTemplateContent><ng-content select=\"submittingTemplate\"></ng-content></span>\n    <span *ngIf=\"submittingTemplateContent.children.length === 0\">\n        <i class=\"fa fa-refresh fa-spin\"></i>&nbsp;Submitting...\n    </span>\n</button>"
                },] },
    ];
    /** @nocollapse */
    SubmitStatusButtonComponent.ctorParameters = function () { return []; };
    SubmitStatusButtonComponent.propDecorators = {
        'canSubmit': [{ type: Input },],
        'showSubmittingTemplate': [{ type: Input },],
        'className': [{ type: Input },],
        'tabIndex': [{ type: Input },],
        'click': [{ type: Output },],
        'submitButton': [{ type: ViewChild, args: ['submitButton',] },],
        'submittingButton': [{ type: ViewChild, args: ['submittingButton',] },],
    };
    return SubmitStatusButtonComponent;
}());
export { SubmitStatusButtonComponent };
//# sourceMappingURL=submit-status-button.component.js.map