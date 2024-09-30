import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ComponentBasicsComponent } from './components/component-basics/component-basics.component';
import { SimpleLabelComponent } from './simple-label/simple-label.component';
import { StringInterpolationLabelComponent } from './components/string-interpolation-label/string-interpolation-label.component';
import { MultipleLabelsComponent } from './components/multiple-labels/multiple-labels.component';
import { InputDataLabelsComponent } from './components/input-data-labels/input-data-labels.component';
import { PropertyBindingLabelComponent } from './components/property-binding-label/property-binding-label.component';
import { EventBindingLabelComponent } from './components/event-binding-label/event-binding-label.component';
import { NgforComponent } from './conditionalrendering/loopngfor/ngfor/ngfor.component';
import { NgifComponent } from './conditionalrendering/condif/ngif/ngif.component';
import { SingleslotprojectionComponent } from './conditionalrendering/contentprojection/singleslotprojection/singleslotprojection.component';
import { LifecycleDemoAppComponent } from './lifecycle/lifecycle-demo-app/lifecycle-demo-app.component';
import { TemplaterefsComponent } from './components/templaterefs/templaterefs.component';
import { StructuraldirectiveComponent } from './directives/structuraldirective/structuraldirective.component';
export const routes: Routes = [
  {
    path: '', // Home
    component: HomePageComponent,
  },
  {
    path: 'simple-component', // Simple Component
    component: SimpleLabelComponent,
  },
  {
    path: 'string-interpolation', // String Interpolation
    component: StringInterpolationLabelComponent,
  },
  {
    path: 'multiple-components', // String Interpolation
    component: MultipleLabelsComponent,
  },
  {
    path: 'input-data-components', // String Interpolation
    component: InputDataLabelsComponent,
  },
  {
    path: 'property-binding', // String Interpolation
    component: PropertyBindingLabelComponent,
  },
  {
    path: 'event-binding', // String Interpolation
    component: EventBindingLabelComponent,
  },
  {
    path: 'template-refs', // Template Ref examples
    component: TemplaterefsComponent,
  },
  {
    path: 'list-rendering', // String Interpolation
    component: NgforComponent,
  },
  {
    path: 'conditional-rendering', // String Interpolation
    component: NgifComponent,
  },
  {
    path: 'ss-projection', // String Interpolation
    component: SingleslotprojectionComponent,
  },
  {
    path: 'structural-directive',
    component: StructuraldirectiveComponent,
  },
  {
    path: 'lifecycle-demo', // String Interpolation
    component: LifecycleDemoAppComponent,
  },
];
