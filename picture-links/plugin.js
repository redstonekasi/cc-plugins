(function(i,r,e,d){"use strict";let l=r.findByProps("relationshipButtons");var p=()=>e.findAndPatch(()=>r.findByDisplayName("UserProfileModalHeader",!1),n=>e.after("default",n,([{user:c}],s)=>{l||(l=r.findByProps("relationshipButtons"));const a=d.findInReactTree(s,t=>t?.props?.className==l.avatar),o=c?.getAvatarURL?.(!1,4096,!0)?.replace(".webp",".png");return a&&o&&(a.props.onClick=()=>open(o)),s})),f=()=>e.findAndPatch(()=>r.findByDisplayName("UserBanner",!1),n=>e.after("default",n,([{user:c,displayProfile:s}],a)=>{const o=d.findInReactTree(a.props.children,y=>y?.onClick),t=c.banner==="_"?a.props.style.backgroundImage?.match?.(/^url\((.*)\)$/)?.[1]:s?.getBannerURL({size:4096,canAnimate:!0})?.replace(".webp",".png");!o?.children&&t&&(a.props.onClick=()=>open(t),a.props.className=[a.props.className,"kasi-pl-clickable"].join(" "))})),u=()=>e.injectCSS(".kasi-pl-clickable{cursor:pointer}");const m=[p(),f(),u()],g=()=>_.forEachRight(m,n=>n());return i.onUnload=g,Object.defineProperty(i,"__esModule",{value:!0}),i})({},cumcord.modules.webpack,cumcord.patcher,cumcord.utils);