!function(e,t,r){"use strict";var n,o,a={get:function(){return U},init:function(e){return U||new V(e)},VERSION:"0.6.29"},l=Object.prototype.hasOwnProperty,i=e.Math,s=e.getComputedStyle,c="touchstart",f="touchmove",u="touchcancel",d="touchend",m="skrollr",p="no-"+m,v=m+"-desktop",g=m+"-mobile",h=.004,y="skrollr-body",b=200,T=/^(?:input|textarea|button|select)$/i,k=/^\s+|\s+$/g,S=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,w=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,x=/^(@?[a-z\-]+)\[(\w+)\]$/,_=/-([a-z0-9_])/g,E=function(e,t){return t.toUpperCase()},A=/[\-+]?[\d]*\.?[\d]+/g,F=/\{\?\}/g,C=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,H=/[a-z\-]+-gradient/g,D="",I="",P=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(s){var t=s(o,null);for(var r in t)if(D=r.match(e)||+r==r&&t[r].match(e))break;D?"-"===(D=D[0]).slice(0,1)?(I=D,D={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[D]):I="-"+D.toLowerCase()+"-":D=I=""}},N=function(){var t=e.requestAnimationFrame||e[D.toLowerCase()+"RequestAnimationFrame"],r=be();return!He&&t||(t=function(t){var n=be()-r,o=i.max(0,1e3/60-n);return e.setTimeout(function(){r=be(),t()},o)}),t},O={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-i.cos(e*i.PI)/2+.5},sqrt:function(e){return i.sqrt(e)},outCubic:function(e){return i.pow(e-1,3)+1},bounce:function(e){var t;if(e<=.5083)t=3;else if(e<=.8489)t=9;else if(e<=.96208)t=27;else{if(!(e<=.99981))return 1;t=91}return 1-i.abs(3*i.cos(e*t*1.028)/t)}};function V(r){if(n=t.documentElement,o=t.body,P(),U=this,J=(r=r||{}).constants||{},r.easing)for(var a in r.easing)O[a]=r.easing[a];ae=r.edgeStrategy||"set",W={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},(Z=!1!==r.forceHeight)&&(Se=r.scale||1),Q=r.mobileDeceleration||h,te=!1!==r.smoothScrolling,re=r.smoothScrollingDuration||b,ne={targetTop:U.getScrollTop()},(He=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})())?((j=t.getElementById(r.skrollrBody||y))&&R(),z(),ge(n,[m,g],[p])):ge(n,[m,v],[p]),U.refresh(),se(e,"resize orientationchange",function(){var e=n.clientWidth,t=n.clientHeight;t===Ae&&e===Ee||(Ae=t,Ee=e,Fe=!0)});var l=N();return function e(){q(),ie=l(e)}(),U}V.prototype.refresh=function(e){var r,n,o=!1;for(void 0===e?(o=!0,X=[],Ce=0,e=t.getElementsByTagName("*")):void 0===e.length&&(e=[e]),r=0,n=e.length;r<n;r++){var a=e[r],l=a,i=[],s=te,c=ae,f=!1;if(o&&"___skrollable_id"in a&&delete a.___skrollable_id,a.attributes){for(var u,d,m,p=0,v=a.attributes.length;p<v;p++){var g=a.attributes[p];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var h=g.name.match(S);if(null!==h){var y={props:g.value,element:a,eventType:g.name.replace(_,E)};i.push(y);var b=h[1];b&&(y.constant=b.substr(1));var T=h[2];/p$/.test(T)?(y.isPercentage=!0,y.offset=(0|T.slice(0,-1))/100):y.offset=0|T;var k=h[3],w=h[4]||k;k&&"start"!==k&&"end"!==k?(y.mode="relative",y.anchors=[k,w]):(y.mode="absolute","end"===k?y.isEnd=!0:y.isPercentage||(y.offset=y.offset*Se))}}else f=!0;else c=g.value;else s="off"!==g.value;else if(null===(l=t.querySelector(g.value)))throw'Unable to find anchor target "'+g.value+'"'}if(i.length)!o&&"___skrollable_id"in a?(m=a.___skrollable_id,u=X[m].styleAttr,d=X[m].classAttr):(m=a.___skrollable_id=Ce++,u=a.style.cssText,d=ve(a)),X[m]={element:a,styleAttr:u,classAttr:d,anchorTarget:l,keyFrames:i,smoothScrolling:s,edgeStrategy:c,emitEvents:f,lastFrameIndex:-1},ge(a,["skrollable"],[])}}for(de(),r=0,n=e.length;r<n;r++){var x=X[e[r].___skrollable_id];void 0!==x&&(L(x),$(x))}return U},V.prototype.relativeToAbsolute=function(e,t,r){var o=n.clientHeight,a=e.getBoundingClientRect(),l=a.top,i=a.bottom-a.top;return"bottom"===t?l-=o:"center"===t&&(l-=o/2),"bottom"===r?l+=i:"center"===r&&(l+=i/2),(l+=U.getScrollTop())+.5|0},V.prototype.animateTo=function(e,t){t=t||{};var r=be(),n=U.getScrollTop();return(ee={startTop:n,topDiff:e-n,targetTop:e,duration:t.duration||1e3,startTime:r,endTime:r+(t.duration||1e3),easing:O[t.easing||"linear"],done:t.done}).topDiff||(ee.done&&ee.done.call(U,!1),ee=void 0),U},V.prototype.stopAnimateTo=function(){ee&&ee.done&&ee.done.call(U,!0),ee=void 0},V.prototype.isAnimatingTo=function(){return!!ee},V.prototype.isMobile=function(){return He},V.prototype.setScrollTop=function(t,r){return oe=!0===r,He?De=i.min(i.max(t,0),ke):e.scrollTo(0,t),U},V.prototype.getScrollTop=function(){return He?De:e.pageYOffset||n.scrollTop||o.scrollTop||0},V.prototype.getMaxScrollTop=function(){return ke},V.prototype.on=function(e,t){return W[e]=t,U},V.prototype.off=function(e){return delete W[e],U},V.prototype.destroy=function(){(function(){var t=e.cancelAnimationFrame||e[D.toLowerCase()+"CancelAnimationFrame"];return!He&&t||(t=function(t){return e.clearTimeout(t)}),t})()(ie),fe(),ge(n,[p],[m,v,g]);for(var t=0,r=X.length;t<r;t++)Y(X[t].element);n.style.overflow=o.style.overflow="",n.style.height=o.style.height="",j&&a.setStyle(j,"transform","none"),U=void 0,j=void 0,W=void 0,Z=void 0,ke=0,Se=1,J=void 0,Q=void 0,we="down",xe=-1,Ee=0,Ae=0,Fe=!1,ee=void 0,te=void 0,re=void 0,ne=void 0,oe=void 0,Ce=0,ae=void 0,He=!1,De=0,le=void 0};var z=function(){var r,a,l,s,m,p,v,g,h,y,b;se(n,[c,f,u,d].join(" "),function(e){var n=e.changedTouches[0];for(s=e.target;3===s.nodeType;)s=s.parentNode;switch(m=n.clientY,p=n.clientX,h=e.timeStamp,T.test(s.tagName)||e.preventDefault(),e.type){case c:r&&r.blur(),U.stopAnimateTo(),r=s,a=v=m,l=p,h;break;case f:T.test(s.tagName)&&t.activeElement!==s&&e.preventDefault(),g=m-v,b=h-y,U.setScrollTop(De-g,!0),v=m,y=h;break;default:case u:case d:var o=a-m,k=l-p;if(k*k+o*o<49){if(!T.test(r.tagName)){r.focus();var S=t.createEvent("MouseEvents");S.initMouseEvent("click",!0,!0,e.view,1,n.screenX,n.screenY,n.clientX,n.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),r.dispatchEvent(S)}return}r=void 0;var w=g/b;w=i.max(i.min(w,3),-3);var x=i.abs(w/Q),_=w*x+.5*Q*x*x,E=U.getScrollTop()-_,A=0;E>ke?(A=(ke-E)/_,E=ke):E<0&&(A=-E/_,E=0),x*=1-A,U.animateTo(E+.5|0,{easing:"outCubic",duration:x})}}),e.scrollTo(0,0),n.style.overflow=o.style.overflow="hidden"},q=function(){Fe&&(Fe=!1,de());var e,t,r=U.getScrollTop(),n=be();if(ee)n>=ee.endTime?(r=ee.targetTop,e=ee.done,ee=void 0):(t=ee.easing((n-ee.startTime)/ee.duration),r=ee.startTop+t*ee.topDiff|0),U.setScrollTop(r,!0);else if(!oe){ne.targetTop-r&&(ne={startTop:xe,topDiff:r-xe,targetTop:r,startTime:_e,endTime:_e+re}),n<=ne.endTime&&(t=O.sqrt((n-ne.startTime)/re),r=ne.startTop+t*ne.topDiff|0)}if(He&&j&&a.setStyle(j,"transform","translate(0, "+-De+"px) "+le),oe||xe!==r){oe=!1;var o={curTop:r,lastTop:xe,maxTop:ke,direction:we=r>xe?"down":r<xe?"up":we};!1!==(W.beforerender&&W.beforerender.call(U,o))&&(!function(e,t){for(var r=0,n=X.length;r<n;r++){var o,i,s=X[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,d=u.length,m=u[0],p=u[u.length-1],v=f<m.frame,g=f>p.frame,h=v?m:p,y=s.emitEvents,b=s.lastFrameIndex;if(v||g){if(v&&-1===s.edge||g&&1===s.edge)continue;switch(v?(ge(c,["skrollable-before"],["skrollable-after","skrollable-between"]),y&&b>-1&&(ue(c,m.eventType,we),s.lastFrameIndex=-1)):(ge(c,["skrollable-after"],["skrollable-before","skrollable-between"]),y&&b<d&&(ue(c,p.eventType,we),s.lastFrameIndex=d)),s.edge=v?-1:1,s.edgeStrategy){case"reset":Y(c);continue;case"ease":f=h.frame;break;default:case"set":var T=h.props;for(o in T)l.call(T,o)&&(i=K(T[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),i):a.setStyle(c,o,i));continue}}else 0!==s.edge&&(ge(c,["skrollable","skrollable-between"],["skrollable-before","skrollable-after"]),s.edge=0);for(var k=0;k<d-1;k++)if(f>=u[k].frame&&f<=u[k+1].frame){var S=u[k],w=u[k+1];for(o in S.props)if(l.call(S.props,o)){var x=(f-S.frame)/(w.frame-S.frame);x=S.props[o].easing(x),i=G(S.props[o].value,w.props[o].value,x),i=K(i),0===o.indexOf("@")?c.setAttribute(o.substr(1),i):a.setStyle(c,o,i)}y&&b!==k&&(ue(c,"down"===we?S.eventType:w.eventType,we),s.lastFrameIndex=k);break}}}(r,U.getScrollTop()),xe=r,W.render&&W.render.call(U,o)),e&&e.call(U,!1)}_e=n},L=function(e){for(var t=0,r=e.keyFrames.length;t<r;t++){for(var n,o,a,l,i=e.keyFrames[t],s={};null!==(l=w.exec(i.props));)a=l[1],o=l[2],null!==(n=a.match(x))?(a=n[1],n=n[2]):n="linear",o=o.indexOf("!")?M(o):[o.slice(1)],s[a]={value:o,easing:O[n]};i.props=s}},M=function(e){var t=[];return C.lastIndex=0,e=e.replace(C,function(e){return e.replace(A,function(e){return e/255*100+"%"})}),I&&(H.lastIndex=0,e=e.replace(H,function(e){return I+e})),e=e.replace(A,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},$=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;t<r;t++)B(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)B(e.keyFrames[t],n)},B=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},G=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;n<o;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},K=function(e){var t=1;return F.lastIndex=0,e[0].replace(F,function(){return e[t++]})},Y=function(e,t){for(var r,n,o=0,a=(e=[].concat(e)).length;o<a;o++)n=e[o],(r=X[n.___skrollable_id])&&(t?(n.style.cssText=r.dirtyStyleAttr,ge(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=ve(n),n.style.cssText=r.styleAttr,ge(n,r.classAttr)))},R=function(){le="translateZ(0)",a.setStyle(j,"transform",le);var e=s(j),t=e.getPropertyValue("transform"),r=e.getPropertyValue(I+"transform");t&&"none"!==t||r&&"none"!==r||(le="")};a.setStyle=function(e,t,r){var n=e.style;if("zIndex"===(t=t.replace(_,E).replace("-","")))isNaN(r)?n[t]=r:n[t]=""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{D&&(n[D+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(e){}};var U,X,j,W,Z,J,Q,ee,te,re,ne,oe,ae,le,ie,se=a.addEvent=function(t,r,n){for(var o,a=function(t){return(t=t||e.event).target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)},l=0,i=(r=r.split(" ")).length;l<i;l++)o=r[l],t.addEventListener?t.addEventListener(o,n,!1):t.attachEvent("on"+o,a),Ie.push({element:t,name:o,listener:n})},ce=a.removeEvent=function(e,t,r){for(var n=0,o=(t=t.split(" ")).length;n<o;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},fe=function(){for(var e,t=0,r=Ie.length;t<r;t++)e=Ie[t],ce(e.element,e.name,e.listener);Ie=[]},ue=function(e,t,r){W.keyframe&&W.keyframe.call(U,e,t,r)},de=function(){var e=U.getScrollTop();ke=0,Z&&!He&&(o.style.height=""),function(){var e,t,r,o,a,l,s,c,f,u,d,m=n.clientHeight,p=me();for(c=0,f=X.length;c<f;c++)for(t=(e=X[c]).element,r=e.anchorTarget,a=0,l=(o=e.keyFrames).length;a<l;a++)u=(s=o[a]).offset,d=p[s.constant]||0,s.frame=u,s.isPercentage&&(u*=m,s.frame=u),"relative"===s.mode&&(Y(t),s.frame=U.relativeToAbsolute(r,s.anchors[0],s.anchors[1])-u,Y(t,!0)),s.frame+=d,Z&&!s.isEnd&&s.frame>ke&&(ke=s.frame);for(ke=i.max(ke,pe()),c=0,f=X.length;c<f;c++){for(a=0,l=(o=(e=X[c]).keyFrames).length;a<l;a++)d=p[(s=o[a]).constant]||0,s.isEnd&&(s.frame=ke-s.offset+d);e.keyFrames.sort(Te)}}(),Z&&!He&&(o.style.height=ke+n.clientHeight+"px"),He?U.setScrollTop(i.min(U.getScrollTop(),ke)):U.setScrollTop(e,!0),oe=!0},me=function(){var e,t,r=n.clientHeight,o={};for(e in J)"function"==typeof(t=J[e])?t=t.call(U):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),o[e]=t;return o},pe=function(){var e=0;return j&&(e=i.max(j.offsetHeight,j.scrollHeight)),i.max(e,o.scrollHeight,o.offsetHeight,n.scrollHeight,n.offsetHeight,n.clientHeight)-n.clientHeight},ve=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},ge=function(t,r,n){var o="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[o],o="baseVal"),void 0!==n){for(var a=t[o],l=0,i=n.length;l<i;l++)a=ye(a).replace(ye(n[l])," ");a=he(a);for(var s=0,c=r.length;s<c;s++)-1===ye(a).indexOf(ye(r[s]))&&(a+=" "+r[s]);t[o]=he(a)}else t[o]=r},he=function(e){return e.replace(k,"")},ye=function(e){return" "+e+" "},be=Date.now||function(){return+new Date},Te=function(e,t){return e.frame-t.frame},ke=0,Se=1,we="down",xe=-1,_e=be(),Ee=0,Ae=0,Fe=!1,Ce=0,He=!1,De=0,Ie=[];"function"==typeof define&&define.amd?define([],function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:e.skrollr=a}(window,document);