import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.show') isShow = false;
    /*@HostListener('click') toggleOpen() {
        this.isShow = !this.isShow;
    }*/

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isShow = this.elRef.nativeElement.contains(event.target) ? !this.isShow : false;
    }
    constructor(private elRef: ElementRef) {}
}
