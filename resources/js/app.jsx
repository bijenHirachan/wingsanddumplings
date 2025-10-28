import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
  setup({ el, App, props }) {
    createRoot(el).render(
      <GoogleReCaptchaProvider
        reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        scriptProps={{ async: true, defer: true, appendTo: 'head' }}
      >
        <App {...props} />
      </GoogleReCaptchaProvider>
    );
  },
});
