(function(i,n,a,d){"use strict";let l=n.findByProps("relationshipButtons");var p=()=>a.findAndPatch(()=>n.findByDisplayName("UserProfileModalHeader",!1),r=>a.after("default",r,([{user:o}],e)=>{l||(l=n.findByProps("relationshipButtons"));const t=d.findInReactTree(e,c=>c?.props?.className==l.avatar),s=o?.getAvatarURL?.(!1,4096,!0)?.replace(".webp",".png");return t&&s&&(t.props.onClick=()=>open(s)),e}));const f=n.findByProps("getUserBannerURL");var u=()=>a.findAndPatch(()=>n.findByDisplayName("UserBanner",!1),r=>a.after("default",r,([{user:o}],e)=>{const t=d.findInReactTree(e.props.children,c=>c?.onClick),s=o.banner==="_"?e.props.style.backgroundImage?.match?.(/^url\((.*)\)$/)?.[1]:f.getUserBannerURL({...o,canAnimate:!0})?.replace(/(?:\?size=\d{3,4})?$/,"?size=4096")?.replace(".webp",".png");!t?.children&&s&&(e.props.onClick=()=>open(s)),e.props.className=[e.props.className,"kasi-pl-clickable"].join(" ")})),m=()=>a.injectCSS(".kasi-pl-clickable{cursor:pointer}");const B=[p(),u(),m()],g=()=>_.forEachRight(B,r=>r());return i.onUnload=g,Object.defineProperty(i,"__esModule",{value:!0}),i})({},cumcord.modules.webpack,cumcord.patcher,cumcord.utils);
