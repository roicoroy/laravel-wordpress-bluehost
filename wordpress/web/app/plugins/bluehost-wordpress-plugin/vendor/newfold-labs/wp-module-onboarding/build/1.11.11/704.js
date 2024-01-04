"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[704],{4401:(e,t,a)=>{a.d(t,{V:()=>i});var n=a(9307),o=a(5634),r=a(1526),l=a(950);const i=e=>{let{title:t,subtitle:a,error:i}=e;return(0,n.createElement)(o.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,n.createElement)(r.Z,{title:t,subtitle:a}),(0,n.createElement)("div",{className:"step-error-state__logo"}),(0,n.createElement)("h3",{className:"step-error-state__error"},i),(0,n.createElement)(l.Z,null))}},1760:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(9307),o=a(4184),r=a.n(o);const l=e=>{let{className:t="",size:a,colGap:o=0,children:l}=e;return(0,n.createElement)("div",{className:r()("nfd-onboarding-grid",t),style:{gridTemplateColumns:`repeat(${a}, 1fr)`,gridColumnGap:`${o}px`}},l)}},9291:(e,t,a)=>{a.d(t,{L:()=>l,Y:()=>n.Z});var n=a(35),o=a(9307),r=a(682);const l=()=>(0,o.createElement)("div",{className:"image-upload-loader--loading-box"},(0,o.createElement)(r.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},3124:(e,t,a)=>{a.d(t,{U:()=>C});var n=a(9307),o=a(9818),r=a(4333),l=a(5736),i=a(9291),s=a(2503),d=a(7625),u=a(2200),c=a(4401);var m=a(9250),h=a(4310),g=a(5609),p=a(4184),w=a.n(p),b=a(7207),_=a(7533),v=a(8395),S=a(8297),f=a(6342),E=a(3421),y=a(3568);const N=e=>{let{buttonText:t=(0,l.__)("Exit to WordPress","wp-module-onboarding"),showButtonIcon:a=!0,showButton:r=!0,buttonVariant:i="secondary",buttonClassName:d=!1,isModalOpen:c=!1,modalTitle:p=(0,l.__)("Exit without finishing?","wp-module-onboarding"),modalText:N=!1,modalPrimaryCloseButtonText:C=(0,l.__)("Continue","wp-module-onboarding"),modalOnClose:k=!1,modalExitButtonText:D=(0,l.__)("Exit","wp-module-onboarding")}=e;const[x,T]=(0,n.useState)(c),Z=()=>{"function"==typeof k&&k(),T(!1)},P=(0,m.TH)(),{currentData:B,brandName:V,socialData:O,currentStep:G}=(0,o.useSelect)((e=>({currentData:e(s.h).getCurrentOnboardingData(),brandName:e(s.h).getNewfoldBrandName(),socialData:e(s.h).getOnboardingSocialData(),currentStep:e(s.h).getCurrentStep()})),[]),{setOnboardingSocialData:H}=(0,o.useDispatch)(s.h);return N||(N=(0,l.sprintf)(
/* translators: %s: Brand */
(0,l.__)("You can restart onboarding from your %s Settings page.","wp-module-onboarding"),V)),(0,n.createElement)(n.Fragment,null,r&&(0,n.createElement)(g.Button,{icon:!!a&&h.Z,variant:i,onClick:()=>T(!0),className:w()("nfd-onboarding-etw__trigger",d)},t),x&&(0,n.createElement)(g.Modal,{title:p,onRequestClose:()=>Z()},(0,n.createElement)("p",null,N),(0,n.createElement)(g.ButtonGroup,{className:"nfd-onboarding-etw__buttons"},(0,n.createElement)(g.Button,{variant:"secondary",onClick:()=>Z()},C),(0,n.createElement)(g.Button,{variant:"primary",onClick:()=>async function(e){if(B){var t;if(B.hasExited=(new Date).getTime(),null!=e&&e.includes("basic-info")){const e=await async function(){const e=await(0,v.Gw)(),t=await(0,v.I2)(O);return null!==(null==t?void 0:t.error)?null==e?void 0:e.body:null==t?void 0:t.body}();e&&H(e)}(0,_.kB)(B),(0,y.a)(null==B||null===(t=B.data)||void 0===t?void 0:t.comingSoon)}(0,E.jd)(),(0,S.tH)(new S.Z_(f._C,G.title)),await b.v.dispatchEvents(f.En),window.location.replace(u.br)}(P.pathname)},D))))},C=e=>{let{children:t,navigationStateCallback:a=!1,refresh:m=!0}=e;const h=(0,r.useViewportMatch)("medium"),{storedThemeStatus:g,brandName:p}=(0,o.useSelect)((e=>({storedThemeStatus:e(s.h).getThemeStatus(),brandName:e(s.h).getNewfoldBrandName()})),[]),w=(e=>({loader:{title:(0,l.sprintf)(
/* translators: %s: Brand */
(0,l.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,l.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,l.sprintf)(
/* translators: %s: Brand */
(0,l.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,l.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,l.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(p),{updateThemeStatus:b,setIsDrawerOpened:_,setIsDrawerSuppressed:v,setIsHeaderNavigationEnabled:S}=(0,o.useDispatch)(s.h),f=()=>{switch(g){case u.Rq:case u.GV:return(()=>{if("function"==typeof a)return a();h&&_(!0),v(!1),S(!0)})();default:_(!1),v(!0),S(!1)}};(0,n.useEffect)((()=>{f(),g===u.a0&&(async()=>{const e=await(async()=>{const e=await(0,d.YL)(u.DY);return null!=e&&e.error?u.vv:e.body.status})();switch(e){case u.Zh:(async()=>{(await(0,d.sN)(u.DY)).error||!0!==m?E():window.location.reload()})();break;case u.GV:!0===m&&window.location.reload();break;default:b(e)}})()}),[g]);const E=async()=>{if(b(u.Zh),(await(0,d.N9)(u.DY,!0,!1)).error)return b(u.Rq);!0===m&&window.location.reload()};return(0,n.createElement)(n.Fragment,null,(()=>{switch(g){case u.vv:return(0,n.createElement)(N,{showButton:!1,isModalOpen:!0,modalTitle:(0,l.__)("It looks like you may have an existing website","wp-module-onboarding"),modalText:(0,l.__)("Going through this setup will change your active theme, WordPress settings, add content – would you like to continue?","wp-module-onboarding"),modalOnClose:E,modalExitButtonText:(0,l.__)("Exit to WordPress","wp-module-onboarding")});case u.Rq:return(0,n.createElement)(c.V,{title:w.errorState.title,subtitle:w.errorState.subtitle,error:w.errorState.error});case u.GV:return t;default:return(0,n.createElement)(i.Y,{title:w.loader.title,subtitle:w.loader.subtitle})}})())}},2704:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(9307),o=a(9818),r=a(9250),l=a(3595),i=a(2503),s=a(5634),d=a(1526),u=a(6690),c=a(6138),m=a(7625),h=a(8244),g=a(2200),p=a(3124),w=a(6332),b=a(9885),_=a(8297),v=a(6342),S=a(1760);const f=()=>{var e,t;const a=(0,l.Z)(),f=(0,r.TH)(),[E,y]=(0,n.useState)(),[N,C]=(0,n.useState)(),[k,D]=(0,n.useState)(),x=(0,r.s0)(),{currentStep:T,nextStep:Z,currentData:P,storedPreviewSettings:B,allSteps:V,themeStatus:O,themeVariations:G}=(0,o.useSelect)((e=>({currentStep:e(i.h).getStepFromPath(f.pathname),nextStep:e(i.h).getNextStep(),currentData:e(i.h).getCurrentOnboardingData(),storedPreviewSettings:e(i.h).getPreviewSettings(),allSteps:e(i.h).getAllSteps(),themeStatus:e(i.h).getThemeStatus(),themeVariations:e(i.h).getStepPreviewData()})),[]),{setDrawerActiveView:H,setSidebarActiveView:I,updatePreviewSettings:Y,setCurrentOnboardingData:W,updateThemeStatus:q,updateAllSteps:F}=(0,o.useDispatch)(i.h);return(0,n.useEffect)((()=>{I(g.Jq),H(g.Yl)}),[]),(0,n.useEffect)((()=>{O===g.GV&&(async()=>{var e;const t=await(0,c.C)(null==T||null===(e=T.data)||void 0===e?void 0:e.patternId,!0);if(null!=t&&t.error)return q(g.a0);const a=await(0,m.oC)(!0);if(null!=a&&a.error)return q(g.a0);D(P.data.theme.variation),y(null==t?void 0:t.body),C(null==a?void 0:a.body),D(P.data.theme.variation)})()}),[O]),(0,n.createElement)(p.U,null,(0,n.createElement)(s.Z,null,(0,n.createElement)("div",{className:"theme-styles-menu"},(0,n.createElement)(d.Z,{title:a.heading},(0,n.createElement)("h3",{className:"nfd-main-heading__subtitle"},`${a.subheading} `,(0,n.createElement)("button",{className:"theme-styles-menu__custom-pages-link",onClick:()=>{const e=(0,b.Lb)(V,h.c.conditionalSteps);F(e.allSteps),P.data.customDesign=!0,W(P),x(h.c.conditionalSteps[0].path)}},a.subheading_link))),(0,n.createElement)("div",{className:"theme-styles-menu__list"},(0,n.createElement)(S.Z,{size:3},(0,n.createElement)(w.r9,{className:"theme-styles-menu__list__item",count:null===(e=G[null==T||null===(t=T.data)||void 0===t?void 0:t.patternId])||void 0===e?void 0:e.previewCount,watch:E&&N,callback:()=>null==N?void 0:N.map(((e,t)=>(0,n.createElement)(w.H,{key:t,className:"theme-styles-menu__list__item",selected:e.title===k,blockGrammer:E,viewportWidth:900,styling:"custom",previewSettings:e,overlay:!0,onClick:()=>(e=>{const t=N[e];Y((0,u.NF)(t,B)),D(t.title),P.data.theme.variation=t.title,W(P),x(Z.path),(0,_.tH)(new _.Z_(v.Dv,t.title))})(t)}))),viewportWidth:900}))))))}},3595:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(5736);const o=()=>({heading:(0,n.__)("Lets tailor your theme for the perfect fit","wp-module-onboarding"),subheading:(0,n.__)("Start with a style preset or","wp-module-onboarding"),
/* translators: build a custom design is a link, this would be concatenated with "Start with a style preset or" making it
     "Start with a style preset or build a custom design."*/
subheading_link:(0,n.__)("build a custom design.","wp-module-onboarding"),checkbox_label:(0,n.__)("Customize Colors & Fonts?","wp-module-onboarding"),checkbox_hint:(0,n.__)("Check to customize in the next few steps (or leave empty and use the Site Editor later)","wp-module-onboarding")})}}]);