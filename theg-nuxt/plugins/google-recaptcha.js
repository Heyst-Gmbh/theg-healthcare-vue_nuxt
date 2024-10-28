import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6LfBXFsqAAAAAI2SDvpDfsk5EDqxHIM4VVo3RsES',
    });
});
