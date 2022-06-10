(function(y,j,n,f,T,E,l,u,x,O,p,_){"use strict";function $(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}function k(t){if(t&&t.__esModule)return t;var r=Object.create(null);return t&&Object.keys(t).forEach(function(a){if(a!=="default"){var o=Object.getOwnPropertyDescriptor(t,a);Object.defineProperty(r,a,o.get?o:{enumerable:!0,get:function(){return t[a]}})}}),r.default=t,Object.freeze(r)}var e=k(j),F=$(O);const g=n.findByProps("ModalCloseButton"),z=n.findByProps("Sizes","Tags"),M=n.findByDisplayName("Flex"),{openModal:R}=n.findByProps("openModal","openModalLazy");var A=(t,r)=>R(a=>e.createElement(g.ModalRoot,{transitionState:a.transitionState,size:"large",className:"cumcord-settings-modal"},e.createElement(E.ErrorBoundary,null,e.createElement(g.ModalHeader,{separator:!1},e.createElement(M.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},e.createElement(z,{tag:"h2",size:z.Sizes.SIZE_20},t)),e.createElement(M.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},e.createElement(g.ModalCloseButton,{onClick:a.onClose}))),e.createElement(g.ModalContent,null,typeof r=="function"?e.createElement(r):r))));const[U,v,V,H,K,[,W],h]=n.batchFind(({findByProps:t,findByDisplayName:r,findByDisplayNameAll:a})=>{r("Card"),r("Flex"),t("Sizes","Tags"),r("FormText"),r("Switch"),a("Markdown"),r("Tooltip")});var q=t=>{const r=l.installed.ghost[t.pluginId];return r?(u.useNest(l.loaded,!1,(a,o)=>o.path[0]===t.pluginId),e.createElement(U,{className:"beryl-plugin-card",outline:!1,editable:!1},e.createElement(v,{justify:v.Justify.BETWEEN,align:v.Align.CENTER},e.createElement("div",{className:"beryl-card-header"},e.createElement(V,{className:"beryl-card-title"},r.manifest.name),e.createElement(H,{className:"beryl-card-author",tag:"h5"}," by ",e.createElement("strong",null,r.manifest.author))),e.createElement("div",{className:"beryl-card-right"},l.loaded.ghost[t.pluginId]&&l.loaded.ghost[t.pluginId].settings?e.createElement(h,{position:"top",text:"Open settings"},a=>e.createElement("svg",{...a,onClick:()=>p.persist.ghost.pluginSettingsModal?A(r.manifest.name,l.loaded.ghost[t.pluginId].settings):t.setSubPage({label:r.manifest.name,component:l.loaded.ghost[t.pluginId].settings}),viewBox:"0 0 24 24"},e.createElement("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}))):null,e.createElement(h,{position:"top",text:"Copy URL"},a=>e.createElement("svg",{...a,onClick:()=>{x.showToast({title:"Copied plugin URL to clipboard",duration:1500}),u.copyText(t.pluginId)},viewBox:"0 0 24 24"},e.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}))),e.createElement(h,{position:"top",text:"Toggle updates"},a=>e.createElement("svg",{...a,onClick:()=>{l.installed.store[t.pluginId].update=!l.installed.store[t.pluginId].update},viewBox:"0 0 24 24"},e.createElement("path",{d:r.update?"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z":"M8.67 5.84 7.22 4.39C8.6 3.51 10.24 3 12 3c2.74 0 5.19 1.23 6.84 3.16L21 4v6h-6l2.41-2.41C16.12 6.02 14.18 5 12 5c-1.2 0-2.34.31-3.33.84zM13 7h-2v1.17l2 2V7zm6.78 15.61-3-3C15.39 20.48 13.76 21 12 21c-4.97 0-9-4.03-9-9 0-1.76.51-3.4 1.39-4.78l-3-3L2.8 2.81l18.38 18.38-1.4 1.42zm-4.46-4.46L5.84 8.67C5.31 9.66 5 10.8 5 12c0 3.86 3.14 7 7 7 1.2 0 2.34-.31 3.32-.85zM20.94 13h-2.02c-.12.83-.39 1.61-.77 2.32l1.47 1.47c.7-1.12 1.17-2.41 1.32-3.79z"}))),e.createElement(h,{position:"top",text:"Delete"},a=>e.createElement("svg",{...a,onClick:()=>{_.showConfirmationModal({header:"Do you want to delete this plugin?",content:`All of ${r.manifest.name}'s data will be deleted and cannot be recovered`,type:"danger",confirmText:"Delete"},o=>{!o||(l.removePlugin(t.pluginId),F.default.del(`${t.pluginId}_CUMCORD_STORE`))})},viewBox:"0 0 24 24"},e.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}))),e.createElement(K,{checked:r.enabled,onChange:()=>{try{l.togglePlugin(t.pluginId)}catch{}}}))),e.createElement(W,{className:"beryl-card-description"},r.manifest.description))):null};const[B,P,G,J,C,N]=n.batchFind(({findByProps:t,findByDisplayName:r})=>{r("Flex"),r("FormItem"),r("FormDivider"),r("TextInput"),t("Sizes","Colors","Looks","DropdownSizes"),r("SearchBar")}),b={wrapper:n.findByProps("notchWidth").wrapper,margins:n.findByProps("height24")},S=(t,r)=>t.toLowerCase().split(r.toLowerCase()).length-1;var Q=t=>{const[r,a]=e.useState(""),[o,d]=e.useState("");u.useNest(l.installed);const i=()=>l.importPlugin(o).then(()=>d(""),s=>x.showToast({title:"Failed to import plugin",content:s.message,duration:3e3})),m=Object.keys(l.installed.ghost),oe=r?m.sort((s,ie)=>{const ce=Object.values(l.installed.ghost[s].manifest).join(""),de=Object.values(l.installed.ghost[ie].manifest).join("");return S(de,r)-S(ce,r)}):m;return e.createElement(e.Fragment,null,e.createElement(P,{title:"Add plugin"},e.createElement(B,{basis:"auto",grow:1,shrink:1},e.createElement(B.Child,{basis:"auto",grow:1,shrink:1},e.createElement(J,{className:b.wrapper,placeholder:"https://example.com/plugin",type:"text",value:o,onChange:d,onKeyDown:s=>{s.key==="Enter"&&i()}})),e.createElement(B.Child,{basis:"auto",grow:1,shrink:1},e.createElement(C,{color:C.Colors.BRAND,size:C.Sizes.MEDIUM,onClick:i},"Add plugin")))),e.createElement(G,{className:b.margins.marginTop20}),e.createElement(P,{title:"Installed",className:[b.margins.marginTop20,b.margins.marginBottom20].join(" ")},e.createElement(N,{query:r,onQueryChange:a,placeholder:"Search...",size:N.Sizes.MEDIUM})),oe.map(s=>e.createElement(q,{pluginId:s,...t})))};const Z=n.findByDisplayName("SwitchItem");var X=()=>(u.useNest(p.persist),e.createElement(Z,{value:p.persist.ghost.pluginSettingsModal,onChange:t=>p.persist.store.pluginSettingsModal=t},"Open plugin settings in modal"));const[I,Y,w,ee,se,me]=n.batchFind(({findByDisplayName:t})=>{t("LegacyHeader"),t("HeaderBarContainer"),t("TabBar"),t("Breadcrumbs"),t("PanelButton"),t("Retry")}),c={topPill:n.findByProps("topPill").topPill,topBar:n.findByProps("tabBar","nowPlayingColumn").tabBar,toolbar:n.findByProps("hamburger"),h1Margin:n.findByProps("h1").defaultMarginh1,...n.findByProps("size10"),breadcrumb:n.findByProps("breadcrumbActive")};let D=[{label:"Plugins",component:Q},{label:"Settings",component:X}];var te=()=>{const[t,r]=e.useState({label:"",component:null}),[a,o]=e.useState(0);u.useNest(l.loaded);const d=e.useMemo(()=>typeof t.component=="function"&&t.label,[t]);return e.createElement(E.ErrorBoundary,null,e.createElement("div",{className:c.toolbar.container},e.createElement("div",{className:[c.toolbar.children,c.h1Margin].join(" ")},d?e.createElement(ee,{activeId:d?1:0,breadcrumbs:[{id:0,label:"Cumcord"},{id:1,label:t.label}],onBreadcrumbClick:({id:i})=>{i===0&&r({label:"",component:null})},renderCustomBreadcrumb:({label:i},m)=>e.createElement(I,{size:c.size20,className:c.breadcrumb[m?"breadcrumbActive":"breadcrumbInactive"]},i)}):e.createElement(e.Fragment,null,e.createElement(I,{size:c.size20,className:c.toolbar.title},"Cumcord"),e.createElement(Y.Divider,null),e.createElement(w,{type:c.topPill,className:c.tabBar,selectedItem:a,onItemSelect:o},D.filter(i=>i?.predicate?i?.predicate():!0).map((i,m)=>e.createElement(w.Item,{id:m},i.label)))))),e.createElement(E.ErrorBoundary,null,d?e.createElement(t.component):e.createElement(D[a].component,{setSubPage:r})))},re=()=>f.injectCSS(".beryl-plugin-card{padding:16px;background-color:var(--background-secondary);margin-bottom:10px}.beryl-plugin-card>div:nth-child(1){margin-bottom:3px}.beryl-card-header{display:inline-block}.beryl-card-author,.beryl-card-title{display:inline}.beryl-card-right{display:flex;align-items:center}.beryl-card-right>div{margin-left:3px}.beryl-card-right>svg{fill:var(--interactive-normal);cursor:pointer;width:24px}.beryl-subpage-label{color:var(--header-secondary)}.beryl-error-handler{font-family:var(--font-display);color:var(--text-normal);background-color:var(--background-secondary);padding:8px;border-radius:4px;display:block}.beryl-error-handler-header{margin-bottom:8px;display:flex;align-items:center;justify-content:space-between}.beryl-error-handler-header>div{display:flex}.beryl-error-handler-header>button{color:#fff;background-color:var(--brand-experiment);border:none;border-radius:3px;height:24px;transition:background-color .17s ease,color .17s ease}.beryl-error-handler-header>button:hover{background-color:var(--brand-experiment-560)}.beryl-error-handler-icon{fill:var(--status-warning);width:24px}.beryl-error-handler-title{font-weight:bold;font-size:24px;margin-left:8px}.beryl-error-handler-code{background-color:var(--background-secondary);font-family:var(--font-code);user-select:text;display:block}");let L;const ae=re(),ne=f.findAndPatch(()=>n.findByDisplayName("SettingsView"),t=>f.after("getPredicateSections",t.prototype,(r,a)=>{const o=a.findIndex(d=>d.section==="CUMCORD_PLUGINS");return o>0&&(L=a[o].element,a[o].element=te),a})),le=()=>{ae(),ne();const t=document.getElementById("cumcord_plugins-tab");t&&T.ReactDOM.render(e.createElement(L),t)};return y.onUnload=le,Object.defineProperty(y,"__esModule",{value:!0}),y})({},cumcord.modules.common.React,cumcord.modules.webpack,cumcord.patcher,cumcord.modules.common,cumcord.ui.components,cumcord.plugins,cumcord.utils,cumcord.ui.toasts,cumcord.modules.internal.idbKeyval,cumcord.pluginData,cumcord.ui.modals);
