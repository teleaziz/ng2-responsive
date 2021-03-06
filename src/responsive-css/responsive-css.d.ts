import { DoCheck, Renderer, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ResponsiveState } from '../config/config';
export declare class ResponsiveClass implements OnInit, OnDestroy, DoCheck {
    private _responsiveState;
    private el;
    private _renderer;
    currentstate: string;
    private _subscription;
    private _noRepeat;
    private xlClass;
    private lgClass;
    private mdClass;
    private smClass;
    private xsClass;
    private xlActive;
    private lgActive;
    private mdActive;
    private smActive;
    private xsActive;
    private element;
    xl: string;
    lg: string;
    md: string;
    sm: string;
    xs: string;
    constructor(_responsiveState: ResponsiveState, el: ElementRef, _renderer: Renderer);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    private updateData(value);
    private _ifValueChanged(oldValue, newValue);
}
