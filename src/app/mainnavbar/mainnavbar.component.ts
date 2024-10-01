import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-mainnavbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mainnavbar.component.html',
  styleUrl: './mainnavbar.component.css',
})
export class MainnavbarComponent {
  menuList = [
    {
      name: 'Angular Components',
      isExpanded: false,
      options: [
        {
          name: 'A Simple Component',
          url: '/simple-component',
        },
        {
          name: 'String Interpolation',
          url: '/string-interpolation',
        },
        {
          name: 'Multiple Components',
          url: '/multiple-components',
        },
        {
          name: 'Inputs to Components',
          url: '/input-data-components',
        },
        {
          name: 'Outputs to Components',
          url: '/output-data-components',
        },
        {
          name: 'Property Binding',
          url: '/property-binding',
        },
        {
          name: 'Event Binding',
          url: '/event-binding',
        },
        {
          name: 'Template Refs',
          url: '/template-refs',
        },
      ],
    },
    {
      name: 'Angular Directives',
      isExpanded: false,
      options: [
        {
          name: 'Rendering Lists of Data',
          url: '/list-rendering',
        },
        {
          name: 'Conditional Rendering',
          url: '/conditional-rendering',
        },
        {
          name: 'Single Slot Projection',
          url: '/ss-projection',
        },
        {
          name: 'Custom Structural Directive',
          url: '/structural-directive',
        },
      ],
    },
    {
      name: 'Component Lifecycle',
      isExpanded: false,
      options: [
        {
          name: 'Lifecycle Demo',
          url: '/lifecycle-demo',
        },
      ],
    },
    {
      name: 'Forms',
      isExpanded: false,
      options: [
        {
          name: 'Template Form',
          url: '/template-form-init',
        },
        {
          name: 'Reactive Form',
          url: '/reactive-form-init',
        },
      ],
    },
    {
      name: 'Services',
      isExpanded: false,
      options: [
        {
          name: 'Service Basic',
          url: '/service-init',
        },
      ],
    },
    {
      name: 'Observables',
      isExpanded: false,
      options: [
        {
          name: 'Observable Basic',
          url: '/observable-init',
        },
      ],
    },
  ];

  onClickChapter(name: string) {
    this.menuList = this.menuList.map((menu) => {
      if (menu.name !== name) menu.isExpanded = false;
      return menu;
    });

    let chapterObj = this.menuList.find((menu) => menu.name === name);

    chapterObj!.isExpanded = !chapterObj!.isExpanded;
  }
}
