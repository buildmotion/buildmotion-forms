import { EventEmitter, AfterViewInit } from '@angular/core';
export declare class SubmitStatusButtonComponent implements AfterViewInit {
    canSubmit: boolean;
    showSubmittingTemplate: boolean;
    className: string;
    tabIndex: number;
    click: EventEmitter<{}>;
    private submitButton;
    private submittingButton;
    constructor();
    ngAfterViewInit(): void;
    /**
     * Reset to initial state; not submitting and not submit-able.
     */
    reset(): void;
    private onSubmit(stateName);
}
