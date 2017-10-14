import { Component, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

/*
For more information on this component see documentation: submit-status-button.md
*/
@Component({
    selector: 'buildmotion-forms-submit-status-button',
    template: `<button #submitButton *ngIf="!showSubmittingTemplate" type="submit" [disabled]="!canSubmit" [class]="className ||''" (click)="onSubmit()">
    <span #submitTemplateContent><ng-content select="submitTemplate"></ng-content></span> 
    <span *ngIf="submitTemplateContent.children.length === 0">
        <i class="glyphicon glyphicon-save"></i>&nbsp;Submit
    </span>
</button>
<button #submittingButton *ngIf="showSubmittingTemplate" type="button" [disabled]="true" [class]="className ||''">
    <span #submittingTemplateContent><ng-content select="submittingTemplate"></ng-content></span>
    <span *ngIf="submittingTemplateContent.children.length === 0">
        <i class="fa fa-refresh fa-spin"></i>&nbsp;Submitting...
    </span>
</button>`
})
export class SubmitStatusButtonComponent implements AfterViewInit {
    @Input() canSubmit: boolean = true;
    @Input() showSubmittingTemplate: boolean;
    @Input() className: string;
    @Input() tabIndex: number;
    @Output() click: EventEmitter<{}> = new EventEmitter();
    @ViewChild('submitButton') private submitButton: ElementRef;
    @ViewChild('submittingButton') private submittingButton: ElementRef;

    constructor() { }

    ngAfterViewInit(): void {
        if (this.tabIndex) {
            if (this.submitButton && this.submitButton.nativeElement instanceof HTMLButtonElement) {
                this.submitButton.nativeElement.tabIndex = this.tabIndex;
            } else if (this.submittingButton && this.submittingButton.nativeElement instanceof HTMLButtonElement) {
                this.submittingButton.nativeElement.tabIndex = this.tabIndex;
            }
        }
    }


    /**
     * Reset to initial state; not submitting and not submit-able.
     */
    public reset(): void {
        this.canSubmit = true;
        this.showSubmittingTemplate = false;
    }

    private onSubmit(stateName: string): void {
        this.click.emit();
    }

}
