import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import Card from 'primevue/card';

import PrimeVue from 'primevue/config'

// directives
import BadgeDirective from 'primevue/badgedirective'
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'
import Tooltip from 'primevue/tooltip'

// services
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp
  // directives

  app.directive('badge', BadgeDirective)
  app.directive('ripple', Ripple)
  app.directive('tooltip', Tooltip)
  app.directive('styleclass', StyleClass)

  // components
  app.component('InputText', InputText)
  app.component('Textarea', Textarea)
  app.component('Button', Button)
  app.component('Card', Card)

  app.use(PrimeVue, { ripple: true })

  // services
  app.use(ConfirmationService)
  app.use(ToastService)
})
