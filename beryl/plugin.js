(function(v,r,y,_,C,a,u,z,O,g,N){"use strict";function R(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}function H(t){if(t&&t.__esModule)return t;var n=Object.create(null);return t&&Object.keys(t).forEach(function(l){if(l!=="default"){var o=Object.getOwnPropertyDescriptor(t,l);Object.defineProperty(n,l,o.get?o:{enumerable:!0,get:function(){return t[l]}})}}),n.default=t,Object.freeze(n)}var e=H(_),A=R(O);const h=r.findByProps("ModalCloseButton"),B=r.findByProps("Sizes","Tags"),I=r.findByDisplayName("Flex"),{openModal:U}=r.findByProps("openModal","openModalLazy");var V=(t,n)=>U(l=>e.createElement(h.ModalRoot,{transitionState:l.transitionState,size:"large",className:"cumcord-settings-modal"},e.createElement(C.ErrorBoundary,null,e.createElement(h.ModalHeader,{separator:!1},e.createElement(I.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},e.createElement(B,{tag:"h2",size:B.Sizes.SIZE_20},t)),e.createElement(I.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},e.createElement(h.ModalCloseButton,{onClick:l.onClose}))),e.createElement(h.ModalContent,null,typeof n=="function"?e.createElement(n):n))));const[$,S,k,D,K,[,W],b]=r.batchFind(({findByProps:t,findByDisplayName:n,findByDisplayNameAll:l})=>{n("Card"),n("Flex"),t("Sizes","Tags"),n("FormText"),n("Switch"),l("Markdown"),n("Tooltip")});var q=t=>{const n=a.installed.ghost[t.pluginId];return n?(u.useNest(a.loaded,!1,(l,o)=>o.path[0]===t.pluginId),e.createElement($,{className:"beryl-plugin-card",outline:!1,editable:!1},e.createElement(S,{justify:S.Justify.BETWEEN,align:S.Align.CENTER},e.createElement("div",{className:"beryl-card-header"},e.createElement(k,{className:"beryl-card-title"},n.manifest.name),e.createElement(D,{className:"beryl-card-author",tag:"h5"}," by ",e.createElement("strong",null,n.manifest.author))),e.createElement("div",{className:"beryl-card-right"},a.loaded.ghost[t.pluginId]&&a.loaded.ghost[t.pluginId].settings?e.createElement(b,{position:"top",text:"Open settings"},l=>e.createElement("svg",{...l,onClick:()=>g.persist.ghost.pluginSettingsModal?V(n.manifest.name,a.loaded.ghost[t.pluginId].settings):t.setSubPage({label:n.manifest.name,component:a.loaded.ghost[t.pluginId].settings}),viewBox:"0 0 24 24"},e.createElement("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}))):null,e.createElement(b,{position:"top",text:"Copy URL"},l=>e.createElement("svg",{...l,onClick:()=>{z.showToast({title:"Copied plugin URL to clipboard",duration:1500}),u.copyText(t.pluginId)},viewBox:"0 0 24 24"},e.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}))),e.createElement(b,{position:"top",text:"Toggle updates"},l=>e.createElement("svg",{...l,onClick:()=>{a.installed.store[t.pluginId].update=!a.installed.store[t.pluginId].update},viewBox:"0 0 24 24"},e.createElement("path",{d:n.update?"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z":"M8.67 5.84 7.22 4.39C8.6 3.51 10.24 3 12 3c2.74 0 5.19 1.23 6.84 3.16L21 4v6h-6l2.41-2.41C16.12 6.02 14.18 5 12 5c-1.2 0-2.34.31-3.33.84zM13 7h-2v1.17l2 2V7zm6.78 15.61-3-3C15.39 20.48 13.76 21 12 21c-4.97 0-9-4.03-9-9 0-1.76.51-3.4 1.39-4.78l-3-3L2.8 2.81l18.38 18.38-1.4 1.42zm-4.46-4.46L5.84 8.67C5.31 9.66 5 10.8 5 12c0 3.86 3.14 7 7 7 1.2 0 2.34-.31 3.32-.85zM20.94 13h-2.02c-.12.83-.39 1.61-.77 2.32l1.47 1.47c.7-1.12 1.17-2.41 1.32-3.79z"}))),e.createElement(b,{position:"top",text:"Delete"},l=>e.createElement("svg",{...l,onClick:()=>{N.showConfirmationModal({header:"Do you want to delete this plugin?",content:`All of ${n.manifest.name}'s data will be deleted and cannot be recovered`,type:"danger",confirmText:"Delete"},o=>{!o||(a.removePlugin(t.pluginId),A.default.del(`${t.pluginId}_CUMCORD_STORE`))})},viewBox:"0 0 24 24"},e.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}))),e.createElement(K,{checked:n.enabled,onChange:()=>{try{a.togglePlugin(t.pluginId)}catch{}}}))),e.createElement(W,{className:"beryl-card-description"},n.manifest.description))):null};const[M,x,G,J,P,T]=r.batchFind(({findByProps:t,findByDisplayName:n})=>{n("Flex"),n("FormItem"),n("FormDivider"),n("TextInput"),t("Sizes","Colors","Looks","DropdownSizes"),n("SearchBar")}),p={wrapper:r.findByProps("notchWidth").wrapper,margins:r.findByProps("height24")},w=(t,n)=>t.toLowerCase().split(n.toLowerCase()).length-1;var Q=t=>{const[n,l]=e.useState(""),[o,s]=e.useState("");u.useNest(a.installed);const c=()=>a.importPlugin(o).then(()=>s(""),d=>z.showToast({title:"Failed to import plugin",content:d.message,duration:3e3})),m=Object.keys(a.installed.ghost),oe=n?m.sort((d,ce)=>{const ie=Object.values(a.installed.ghost[d].manifest).join(""),se=Object.values(a.installed.ghost[ce].manifest).join("");return w(se,n)-w(ie,n)}):m;return e.createElement(e.Fragment,null,e.createElement(x,{title:"Add plugin"},e.createElement(M,{basis:"auto",grow:1,shrink:1},e.createElement(M.Child,{basis:"auto",grow:1,shrink:1},e.createElement(J,{className:p.wrapper,placeholder:"https://example.com/plugin",type:"text",value:o,onChange:s,onKeyDown:d=>{d.key==="Enter"&&c()}})),e.createElement(M.Child,{basis:"auto",grow:1,shrink:1},e.createElement(P,{color:P.Colors.BRAND,size:P.Sizes.MEDIUM,onClick:c},"Add plugin")))),e.createElement(G,{className:p.margins.marginTop20}),e.createElement(x,{title:"Installed",className:[p.margins.marginTop20,p.margins.marginBottom20].join(" ")},e.createElement(T,{query:n,onQueryChange:l,placeholder:"Search...",size:T.Sizes.MEDIUM})),oe.map(d=>e.createElement(q,{pluginId:d,...t})))};const Z=r.findByDisplayName("SwitchItem");var X=()=>(u.useNest(g.persist),e.createElement(Z,{value:g.persist.ghost.pluginSettingsModal,onChange:t=>g.persist.store.pluginSettingsModal=t},"Open plugin settings in modal"));const[F,Y,L,ee,de,me]=r.batchFind(({findByDisplayName:t})=>{t("LegacyHeader"),t("HeaderBarContainer"),t("TabBar"),t("Breadcrumbs"),t("PanelButton"),t("Retry")}),i={topPill:r.findByProps("topPill").topPill,topBar:r.findByProps("tabBar","nowPlayingColumn").tabBar,toolbar:r.findByProps("hamburger"),h1Margin:r.findByProps("h1").defaultMarginh1,...r.findByProps("size10"),breadcrumb:r.findByProps("breadcrumbActive")};let j=[{label:"Plugins",component:Q},{label:"Settings",component:X}];var te=()=>{const[t,n]=e.useState({label:"",component:null}),[l,o]=e.useState(0);u.useNest(a.loaded);const s=e.useMemo(()=>typeof t.component=="function"&&t.label,[t]);return e.createElement(C.ErrorBoundary,null,e.createElement("div",{className:i.toolbar.container},e.createElement("div",{className:[i.toolbar.children,i.h1Margin].join(" ")},s?e.createElement(ee,{activeId:s?1:0,breadcrumbs:[{id:0,label:"Cumcord"},{id:1,label:t.label}],onBreadcrumbClick:({id:c})=>{c===0&&n({label:"",component:null})},renderCustomBreadcrumb:({label:c},m)=>e.createElement(F,{size:i.size20,className:i.breadcrumb[m?"breadcrumbActive":"breadcrumbInactive"]},c)}):e.createElement(e.Fragment,null,e.createElement(F,{size:i.size20,className:i.toolbar.title},"Cumcord"),e.createElement(Y.Divider,null),e.createElement(L,{type:i.topPill,className:i.tabBar,selectedItem:l,onItemSelect:o},j.filter(c=>c?.predicate?c?.predicate():!0).map((c,m)=>e.createElement(L.Item,{id:m},c.label)))))),e.createElement(C.ErrorBoundary,null,s?e.createElement(t.component):e.createElement(j[l].component,{setSubPage:n})))},ne=()=>y.injectCSS(".beryl-plugin-card{padding:16px;background-color:var(--background-secondary);margin-bottom:10px}.beryl-plugin-card>div:nth-child(1){margin-bottom:3px}.beryl-card-header{display:inline-block}.beryl-card-author,.beryl-card-title{display:inline}.beryl-card-right{display:flex;align-items:center}.beryl-card-right>div{margin-left:3px}.beryl-card-right>svg{fill:var(--interactive-normal);cursor:pointer;width:24px}.beryl-subpage-label{color:var(--header-secondary)}");let E,f;const le=ne(),re=y.findAndPatch(()=>r.findByDisplayName("SettingsView"),t=>y.after("getPredicateSections",t.prototype,(n,l)=>{const o=l.findIndex(s=>s.section==="CUMCORD_PLUGINS");return o>0&&((E===void 0||f===void 0)&&(E=l[o],f=l[o].element),l[o].element=te),l},!0)),ae=()=>{le(),re(),E!==void 0&&f!==void 0&&(E.element=f)};return v.onUnload=ae,Object.defineProperty(v,"__esModule",{value:!0}),v})({},cumcord.modules.webpack,cumcord.patcher,cumcord.modules.common.React,cumcord.ui.components,cumcord.plugins,cumcord.utils,cumcord.ui.toasts,cumcord.modules.internal.idbKeyval,cumcord.pluginData,cumcord.ui.modals);