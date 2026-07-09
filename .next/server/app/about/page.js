(()=>{var e={};e.id=301,e.ids=[301],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7927:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>c,routeModule:()=>g,tree:()=>d}),t(2358),t(9568),t(5866);var i=t(3191),s=t(8716),r=t(7922),n=t.n(r),o=t(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(a,l);let d=["",{children:["about",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,2358)),"/Users/aditya/Downloads/biopharma-llp/app/about/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,9568)),"/Users/aditya/Downloads/biopharma-llp/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/aditya/Downloads/biopharma-llp/app/about/page.tsx"],p="/about/page",x={require:t,loadChunk:()=>Promise.resolve()},g=new i.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/about/page",pathname:"/about",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5556:(e,a,t)=>{Promise.resolve().then(t.bind(t,8569))},8569:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>p});var i=t(326),s=t(7577),r=t(5047),n=t(725);function o(e=.12){let a=(0,s.useRef)(null),[t,i]=(0,s.useState)(!1);return{ref:a,visible:t}}function l({children:e,delay:a=0,className:t=""}){let{ref:s,visible:r}=o();return i.jsx("div",{ref:s,className:t,style:{opacity:r?1:0,transform:r?"none":"translateY(36px)",transition:`opacity 0.75s ease ${a}s, transform 0.75s ease ${a}s`},children:e})}function d(e,a=0){return{opacity:e?1:0,transform:e?"none":"translateY(32px)",transition:`opacity .7s ease ${a}s, transform .7s ease ${a}s`}}let c=`
  .about-page *,
  .about-page *::before,
  .about-page *::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}

  /* ── HERO ── */
  .hero{
    position:relative;overflow:hidden;min-height:80vh;
    display:flex;flex-direction:column;justify-content:center;align-items:center;
    text-align:center;padding:140px 48px 100px;
  }
  .hero-inner{position:relative;z-index:4;max-width:860px}

  .badge{
    display:inline-flex;align-items:center;gap:10px;
    background:rgba(255,255,255,0.08);
    border:1px solid rgba(56,189,248,0.35);
    border-radius:999px;padding:10px 22px;margin-bottom:32px;
    font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;
    color:rgba(255,255,255,0.8);backdrop-filter:blur(12px);
  }
  .badge-dot{
    width:7px;height:7px;border-radius:50%;
    background:#38bdf8;box-shadow:0 0 8px #38bdf8;
    animation:pulse 2.2s ease-in-out infinite;
  }
  @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.3;transform:scale(.65)}}

  .hero-title{
    font-size:clamp(40px,5.5vw,76px);font-weight:800;
    line-height:1.08;letter-spacing:-1.5px;margin-bottom:24px;color:#fff;
  }
  .grad{
    background:linear-gradient(135deg,#38bdf8 0%,#34d399 100%);
    -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  }
  .hero-sub{
    font-size:clamp(15px,2vw,18px);color:rgba(255,255,255,0.7);
    line-height:1.85;max-width:680px;margin:0 auto 0;
  }

  /* ── SHARED SECTION ── */
  .sec{padding:96px 72px;display:flex;flex-direction:column;align-items:center;text-align:center}
  .inner{width:100%;max-width:1200px}

  /* backgrounds */
  .bg-white{background:#ffffff}
  .bg-light{background:#f0f6ff}
  .bg-blue{background:#1565c0}
  .bg-dark{background:#050f1e}

  /* section tag */
  .sec-tag{
    display:inline-flex;align-items:center;gap:12px;
    font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;
    margin-bottom:18px;justify-content:center;
  }
  .tag-bar{width:26px;height:2px;border-radius:999px}

  /* titles */
  .sec-title{font-size:clamp(28px,3.5vw,46px);font-weight:800;line-height:1.15;margin-bottom:14px;letter-spacing:-.5px}
  .on-dark{color:#fff}
  .on-light{color:#0c1e30}
  .sec-sub{font-size:15px;line-height:1.85;max-width:680px;margin:0 auto 52px}
  .on-dark-sub{color:rgba(255,255,255,0.68)}
  .on-light-sub{color:#4a6380}

  /* ── STORY ── */
  .story-grid{
    display:grid;grid-template-columns:1.2fr 0.8fr;gap:28px;
    align-items:start;text-align:left;
  }
  .story-txt{
    background:#f8fafc;border:1px solid #e2e8f0;
    border-radius:24px;padding:32px;
    box-shadow:0 12px 30px rgba(15,23,42,0.05);
  }
  .story-txt h3{font-size:20px;font-weight:800;color:#0f172a;margin-bottom:16px}
  .story-txt p{font-size:15px;color:#334155;line-height:1.9;margin-bottom:14px}
  .story-txt p:last-child{margin-bottom:0}
  .fact-pill{
    background:#fff;border:1px solid #e2e8f0;
    border-radius:16px;padding:16px 20px;
    box-shadow:0 4px 14px rgba(15,23,42,0.05);
  }
  .fact-pill-label{font-size:11px;font-weight:700;color:#0284c7;letter-spacing:.1em;text-transform:uppercase;margin-bottom:5px}
  .fact-pill-val{font-size:14px;color:#0f172a;font-weight:500;line-height:1.55}

  /* ── MISSION / VISION (blue bg) ── */
  .mv-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;width:100%;max-width:1200px;margin-top:48px}
  .mv-card{
    background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.18);
    border-radius:20px;padding:36px 32px;text-align:left;
    position:relative;overflow:hidden;transition:all .3s ease;
  }
  .mv-card:hover{background:rgba(255,255,255,0.17);transform:translateY(-6px)}
  .mv-icon{font-size:36px;margin-bottom:18px;display:block}
  .mv-title{font-size:20px;font-weight:800;color:#fff;margin-bottom:12px}
  .mv-text{font-size:14px;color:rgba(255,255,255,0.78);line-height:1.85}
  .mv-bar{position:absolute;top:0;left:0;right:0;height:3px}

  /* ── CORE VALUES (light bg) ── */
  .vals-grid{
    display:grid;grid-template-columns:repeat(5,1fr);gap:18px;
    width:100%;max-width:1200px;margin-top:44px;
  }
  .val{
    background:#fff;border:1px solid #dce8fa;border-radius:18px;
    padding:28px 18px;text-align:center;
    box-shadow:0 2px 16px rgba(21,101,192,0.07);
    transition:all .3s ease;
  }
  .val:hover{transform:translateY(-6px);box-shadow:0 10px 32px rgba(21,101,192,0.14);border-color:#1565c0}
  .val-emoji{font-size:34px;margin-bottom:12px;display:block}
  .val-name{font-size:14px;font-weight:800;color:#0c1e30;margin-bottom:7px}
  .val-desc{font-size:12px;color:#4a6380;line-height:1.6}

  /* ── AQUACULTURE STANDARDS (white bg) ── */
  .banner{
    width:100%;max-width:1200px;
    background:#f0f6ff;border:1px solid #dce8fa;border-left:4px solid #1565c0;
    border-radius:18px;padding:30px 34px;margin-bottom:28px;text-align:left;
  }
  .banner h3{font-size:17px;font-weight:800;color:#0c1e30;margin-bottom:10px}
  .banner p{font-size:14px;color:#4a6380;line-height:1.85;margin-bottom:10px}
  .banner p:last-child{margin-bottom:0}

  .std-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;width:100%;max-width:1200px;text-align:left}
  .std{
    background:#fff;border:1px solid #dce8fa;border-radius:16px;
    padding:26px 24px;transition:all .3s ease;
    box-shadow:0 2px 12px rgba(21,101,192,0.06);
  }
  .std:hover{border-color:#1565c0;transform:translateY(-4px);box-shadow:0 10px 28px rgba(21,101,192,0.12)}
  .std-icon{font-size:26px;margin-bottom:12px}
  .std-title{font-size:15px;font-weight:700;color:#0c1e30;margin-bottom:9px}
  .std-text{font-size:13px;color:#4a6380;line-height:1.8}
  .std-note{
    margin-top:12px;padding:9px 13px;
    background:#f0f6ff;border:1px solid #dce8fa;border-left:3px solid #1565c0;
    border-radius:9px;font-size:12px;color:#1565c0;line-height:1.6;
  }

  /* ── TIMELINE (light bg) ── */
  .timeline{width:100%;max-width:900px;margin-top:48px;text-align:left}
  .tl{display:grid;grid-template-columns:90px 20px 1fr;gap:0 22px;align-items:start;padding-bottom:32px}
  .tl:last-child{padding-bottom:0}
  .tl-year{font-size:17px;font-weight:800;color:#1565c0;padding-top:3px}
  .tl-spine{display:flex;flex-direction:column;align-items:center}
  .tl-dot{
    width:14px;height:14px;border-radius:50%;
    background:#1565c0;box-shadow:0 0 0 4px rgba(21,101,192,0.15);
    margin-top:4px;flex-shrink:0;
  }
  .tl-line{width:2px;background:#dce8fa;flex:1;margin-top:6px;min-height:24px}
  .tl:last-child .tl-line{display:none}
  .tl-h{font-size:15px;font-weight:700;color:#0c1e30;margin-bottom:5px}
  .tl-p{font-size:13px;color:#4a6380;line-height:1.75}

  /* ── TEAM (blue bg) ── */
  .team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;width:100%;max-width:1200px;margin-top:44px}
  .team-card{
    background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.18);
    border-radius:20px;padding:32px 24px;text-align:center;
    transition:all .3s ease;
  }
  .team-card:hover{background:rgba(255,255,255,0.18);transform:translateY(-6px)}
  .av{
    width:72px;height:72px;border-radius:16px;
    display:flex;align-items:center;justify-content:center;
    font-size:32px;margin:0 auto 16px;
    background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.2);
  }
  .av-name{font-size:16px;font-weight:800;color:#fff;margin-bottom:4px}
  .av-role{font-size:11px;font-weight:600;color:rgba(255,255,255,0.6);margin-bottom:10px;letter-spacing:.06em;text-transform:uppercase}
  .av-bio{font-size:13px;color:rgba(255,255,255,0.7);line-height:1.65}

  /* ── CTA (white bg) ── */
  .cta-inner{max-width:640px;margin:0 auto}
  .cta-inner h2{font-size:clamp(26px,3.5vw,42px);font-weight:800;color:#0c1e30;margin-bottom:16px;letter-spacing:-.5px}
  .cta-inner p{font-size:15px;color:#4a6380;margin-bottom:32px;line-height:1.8}
  .btn-cta{
    display:inline-flex;align-items:center;gap:10px;
    background:linear-gradient(135deg,#1565c0,#0ea5e9);color:#fff;
    border:none;border-radius:999px;padding:15px 36px;
    font-size:15px;font-weight:700;cursor:pointer;font-family:inherit;
    box-shadow:0 8px 28px rgba(21,101,192,0.3);transition:all .3s ease;
  }
  .btn-cta:hover{transform:translateY(-3px);box-shadow:0 14px 38px rgba(21,101,192,0.42)}
  .btn-cta svg{width:18px;height:18px}

  /* ── RESPONSIVE ── */
  @media(max-width:1024px){
    .story-grid,.mv-grid,.team-grid{grid-template-columns:1fr}
    .vals-grid{grid-template-columns:repeat(3,1fr)}
    .std-grid{grid-template-columns:1fr}
    .sec{padding:72px 36px}
  }
  @media(max-width:768px){
    .hero{padding:110px 24px 72px}
    .sec{padding:64px 24px}
    .vals-grid{grid-template-columns:repeat(2,1fr)}
    .tl{grid-template-columns:70px 18px 1fr;gap:0 14px}
  }
  @media(max-width:480px){
    .vals-grid{grid-template-columns:1fr}
    .tl{display:flex;flex-direction:column;gap:6px;padding-bottom:28px}
    .tl-spine{display:none}
  }
`;function p(){let e=(0,r.useRouter)(),a=o(),t=o();o(),o();let s=o(),p=o();return(0,i.jsxs)("div",{className:"about-page",style:{fontFamily:"'DM Sans',sans-serif",overflowX:"hidden"},children:[i.jsx("style",{children:c}),(0,i.jsxs)("section",{className:"hero",style:{position:"relative",overflow:"hidden",minHeight:"80vh"},children:[i.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,backgroundImage:'url("/images/about_us_q.png")',backgroundSize:"cover",backgroundPosition:"center"}}),i.jsx("div",{style:{position:"absolute",inset:0,zIndex:1,background:"rgba(0,0,0,0.65)"}}),i.jsx("div",{className:"hero-inner",children:(0,i.jsxs)(l,{children:[(0,i.jsxs)("div",{className:"badge",children:[i.jsx("div",{className:"badge-dot"}),"Innovare Biopharma LLP — Hyderabad, India"]}),(0,i.jsxs)("h1",{className:"hero-title",children:["About ",i.jsx("span",{className:"grad",children:"Us"})]}),i.jsx("p",{className:"hero-sub",children:"India's growing manufacturer and exporter of Aqua Healthcare products and Feed supplement products — founded in 2020 with a state-of-the-art processing plant in Hyderabad, Telangana, India."})]})})]}),i.jsx("section",{className:"sec bg-white",children:(0,i.jsxs)(l,{className:"inner",children:[(0,i.jsxs)("div",{className:"sec-tag",style:{color:"#0284c7"},children:[i.jsx("span",{className:"tag-bar",style:{background:"#0284c7"}}),"OUR STORY",i.jsx("span",{className:"tag-bar",style:{background:"#0284c7"}})]}),(0,i.jsxs)("h2",{className:"sec-title on-light",children:["About ",i.jsx("span",{style:{color:"#0284c7"},children:"Innovare Biopharma LLP"})]}),(0,i.jsxs)("div",{className:"story-grid",style:{marginTop:48},children:[(0,i.jsxs)("div",{className:"story-txt",children:[i.jsx("h3",{children:"Born from a Passion for Aquaculture"}),i.jsx("p",{children:"Innovare Biopharma LLP, founded in 2020, is India's growing manufacturer and exporter of Aqua Healthcare products and Feed supplement products, which includes Growth Promoters, Minerals, Sanitizers, Vitamins, Water & Soil Probiotics, Zeolite and more — all manufactured in our own state-of-the-art processing plant."}),i.jsx("p",{children:"INNOVARE BIOPHARMA LLP is strong & dynamic where its expertise lies in developing, producing and marketing QUALITY products from 'concept to fruition' and beyond. Our constant focus on \"INNOVATION\" has helped us emerge as a trendsetter in various Aqua markets and be known in India and worldwide for our unbeatable range of Aquaculture products."}),i.jsx("p",{children:"This passion has driven us to set up a state-of-the-art manufacturing facility at HYDERABAD in Telangana state in India with extreme operational efficiencies in record times."})]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[{label:"Headquarters",val:"Hyderabad, Telangana, India"},{label:"Founded",val:"2020 — by aquaculture scientists & pharma experts"},{label:"Products",val:"33+ Aqua Healthcare & Feed supplement products"},{label:"Manufacturing",val:"Own GMP-certified processing plant"},{label:"Certifications",val:"GMP \xb7 ISO 9001 \xb7 CAA Approved"},{label:"Product Range",val:"Feed Supplements \xb7 Sanitizers \xb7 Vitamins & Minerals \xb7 Water Treatments \xb7 Growth Promoters \xb7 Gut Probiotics \xb7 Immunity"}].map(e=>(0,i.jsxs)("div",{className:"fact-pill",children:[i.jsx("div",{className:"fact-pill-label",children:e.label}),i.jsx("div",{className:"fact-pill-val",children:e.val})]},e.label))})]})]})}),i.jsx("section",{className:"sec bg-blue",children:(0,i.jsxs)("div",{ref:a.ref,className:"inner",style:d(a.visible),children:[(0,i.jsxs)("div",{className:"sec-tag",style:{color:"rgba(255,255,255,0.65)"},children:[i.jsx("span",{className:"tag-bar",style:{background:"rgba(255,255,255,0.5)"}}),"PURPOSE & DIRECTION",i.jsx("span",{className:"tag-bar",style:{background:"rgba(255,255,255,0.5)"}})]}),(0,i.jsxs)("h2",{className:"sec-title on-dark",children:["Our Mission ",i.jsx("span",{style:{color:"rgba(255,255,255,0.75)"},children:"& Vision"})]}),(0,i.jsxs)("div",{className:"mv-grid",children:[(0,i.jsxs)("div",{className:"mv-card",children:[i.jsx("div",{className:"mv-bar",style:{background:"linear-gradient(90deg,#fbbf24,transparent)"}}),i.jsx("span",{className:"mv-icon",children:"\uD83C\uDFAF"}),i.jsx("h3",{className:"mv-title",children:"Our Mission"}),i.jsx("p",{className:"mv-text",children:"To deliver innovative, science-backed biopharma solutions that enhance aquaculture health, boost productivity, and promote sustainability. We empower farmers with tools and knowledge to build thriving, sustainable aquatic farms while protecting our planet's precious water resources."})]}),(0,i.jsxs)("div",{className:"mv-card",children:[i.jsx("div",{className:"mv-bar",style:{background:"linear-gradient(90deg,#38bdf8,transparent)"}}),i.jsx("span",{className:"mv-icon",children:"\uD83D\uDC41️"}),i.jsx("h3",{className:"mv-title",children:"Our Vision"}),i.jsx("p",{className:"mv-text",children:"To become the world's most trusted provider of eco-friendly, high-performance aquaculture health solutions — where technology and nature work in harmony, creating healthier aquatic ecosystems, prosperous farming communities, and a sustainable food supply chain for generations to come."})]})]})]})}),i.jsx("section",{className:"sec bg-light",children:(0,i.jsxs)("div",{ref:t.ref,className:"inner",style:d(t.visible),children:[(0,i.jsxs)("div",{className:"sec-tag",style:{color:"#1565c0"},children:[i.jsx("span",{className:"tag-bar",style:{background:"#1565c0"}}),"CORE VALUES",i.jsx("span",{className:"tag-bar",style:{background:"#1565c0"}})]}),(0,i.jsxs)("h2",{className:"sec-title on-light",children:["What ",i.jsx("span",{style:{color:"#1565c0"},children:"Drives Us"})]}),i.jsx("p",{className:"sec-sub on-light-sub",children:"Our core values are the foundation of everything we do — guiding decisions, shaping culture, and defining our commitment to excellence."}),i.jsx("div",{className:"vals-grid",children:[{emoji:"\uD83D\uDCA1",name:"Innovation",desc:"Concept to fruition and beyond"},{emoji:"\uD83C\uDFC6",name:"Quality",desc:"GMP & ISO standards always"},{emoji:"\uD83C\uDF3F",name:"Sustainability",desc:"Eco-conscious solutions"},{emoji:"\uD83E\uDD1D",name:"Partnership",desc:"Farmer success is ours"},{emoji:"\uD83D\uDD2C",name:"Science",desc:"Evidence-based products"}].map((e,a)=>(0,i.jsxs)("div",{className:"val",style:d(t.visible,.08*a),children:[i.jsx("span",{className:"val-emoji",children:e.emoji}),i.jsx("h4",{className:"val-name",children:e.name}),i.jsx("p",{className:"val-desc",children:e.desc})]},e.name))})]})}),i.jsx("section",{className:"sec bg-blue",children:(0,i.jsxs)("div",{ref:s.ref,className:"inner",style:d(s.visible),children:[(0,i.jsxs)("div",{className:"sec-tag",style:{color:"rgba(255,255,255,0.65)"},children:[i.jsx("span",{className:"tag-bar",style:{background:"rgba(255,255,255,0.5)"}}),"LEADERSHIP",i.jsx("span",{className:"tag-bar",style:{background:"rgba(255,255,255,0.5)"}})]}),(0,i.jsxs)("h2",{className:"sec-title on-dark",children:["Meet Our ",i.jsx("span",{style:{color:"rgba(255,255,255,0.75)"},children:"Expert Team"})]}),i.jsx("p",{className:"sec-sub on-dark-sub",children:"Our team brings decades of combined experience in aquaculture science, pharmaceutical manufacturing, and Pan-India market operations."}),i.jsx("div",{className:"team-grid",children:[{emoji:"\uD83D\uDC68‍\uD83D\uDD2C",name:"Research & Development",role:"R&D Division",bio:"Marine biologists and pharmaceutical scientists developing science-backed aquaculture health solutions."},{emoji:"\uD83C\uDFED",name:"Manufacturing",role:"Production Division",bio:"GMP-certified production team ensuring every product meets international quality standards."},{emoji:"\uD83E\uDD1D",name:"Sales & Support",role:"Field Operations",bio:"Pan-India field team providing farm visits, product guidance, and ongoing technical support."}].map((e,a)=>(0,i.jsxs)("div",{className:"team-card",style:d(s.visible,.1*a),children:[i.jsx("div",{className:"av",children:e.emoji}),i.jsx("h4",{className:"av-name",children:e.name}),i.jsx("p",{className:"av-role",children:e.role}),i.jsx("p",{className:"av-bio",children:e.bio})]},a))})]})}),i.jsx("section",{className:"sec bg-white",children:i.jsx("div",{ref:p.ref,style:d(p.visible),children:(0,i.jsxs)("div",{className:"cta-inner",children:[(0,i.jsxs)("div",{className:"sec-tag",style:{color:"#1565c0",justifyContent:"center",marginBottom:18},children:[i.jsx("span",{className:"tag-bar",style:{background:"#1565c0"}}),"GET IN TOUCH",i.jsx("span",{className:"tag-bar",style:{background:"#1565c0"}})]}),i.jsx("h2",{children:"Ready to Transform Your Farm?"}),i.jsx("p",{children:"Join thousands of farmers who trust Innovare Biopharma for science-backed, sustainable aquaculture solutions. Let's build healthier aquatic ecosystems together."}),(0,i.jsxs)("button",{className:"btn-cta",onClick:()=>e.push("/contact"),children:["Contact Us",i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:i.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})})}),i.jsx(n.Z,{})]})}},2358:(e,a,t)=>{"use strict";t.r(a),t.d(a,{$$typeof:()=>n,__esModule:()=>r,default:()=>o});var i=t(8570);let s=(0,i.createProxy)(String.raw`/Users/aditya/Downloads/biopharma-llp/app/about/page.tsx`),{__esModule:r,$$typeof:n}=s;s.default;let o=(0,i.createProxy)(String.raw`/Users/aditya/Downloads/biopharma-llp/app/about/page.tsx#default`)}};var a=require("../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),i=a.X(0,[948,483,655,725],()=>t(7927));module.exports=i})();