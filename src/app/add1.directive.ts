import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appAdd1]', // Selector to use this directive in templates
  standalone: true, // Mark this as a standalone directive
})
export class Add1Directive implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Applying styles when the directive is initialized
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    this.el.nativeElement.style.backgroundColor = 'green';
    // thisYou can add more styles or logic as needed
  }
}
