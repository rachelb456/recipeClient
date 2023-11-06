import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowtxt]'
})
export class ShowtxtDirective {
  // @Input("appShowtxt") tooltipText: string = "";
   

  
 tooltipElement: HTMLElement=document.createElement('div');
  constructor(public el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    
  //  this.tooltipElement = 
    this.tooltipElement.innerText = "click me!"//this.tooltipText;
    this.tooltipElement.style.color="red"
    this.tooltipElement.classList.add('tooltip');
    this.el.nativeElement.appendChild(this.tooltipElement);
  }

  private hideTooltip() {
   // if (this.tooltipElement!="null") {
      this.el.nativeElement.removeChild(this.tooltipElement);
      //this.tooltipElement = "null";
    }

  }


