(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/MRK":function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),o=function(){return function(){}}(),r=e("pMnS"),u=function(){function n(){this.emitSidebarStatus=new l.m}return n.prototype.ngOnInit=function(){},n.prototype.updateSidebarStatus=function(){this.sidebarStatus=!this.sidebarStatus,this.emitSidebarStatus.emit(this.sidebarStatus)},n}(),s=l.mb({encapsulation:0,styles:[["li.list-item[_ngcontent-%COMP%]{padding:0 30px 0 0}li.list-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{cursor:pointer}"]],data:{}});function i(n){return l.Cb(0,[(n()(),l.ob(0,0,null,null,12,"ul",[["class","d-inline-flex"]],null,null,null,null,null)),(n()(),l.ob(1,0,null,null,3,"li",[["class","list-item"]],null,null,null,null,null)),(n()(),l.ob(2,0,null,null,2,"a",[],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.updateSidebarStatus()&&l),l},null,null)),(n()(),l.ob(3,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-columns"]],null,null,null,null,null)),(n()(),l.Ab(-1,null,[" Show/Hide "])),(n()(),l.ob(5,0,null,null,3,"li",[["class","list-item"]],null,null,null,null,null)),(n()(),l.ob(6,0,null,null,2,"a",[],null,null,null,null,null)),(n()(),l.ob(7,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-pencil"]],null,null,null,null,null)),(n()(),l.Ab(-1,null,[" Edit "])),(n()(),l.ob(9,0,null,null,3,"li",[["class","list-item"]],null,null,null,null,null)),(n()(),l.ob(10,0,null,null,2,"a",[],null,null,null,null,null)),(n()(),l.ob(11,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-trash"]],null,null,null,null,null)),(n()(),l.Ab(-1,null,[" Delete "]))],null,null)}var a=e("Ip0R"),c=function(){function n(){}return n.prototype.transform=function(n){return n&&0!==n.length?n.sort():[]},n}(),p=e("26FU"),d=e("mrSG"),h=e("F/XL"),f=e("6blF"),b=e("Phjn"),y=e("VnD/"),m=e("67Y/"),v=function(){return function(){}}(),g=function(){return function(){}}(),w=function(){function n(n){var t=this;this.normalizedNames=new Map,this.lazyUpdate=null,n?this.lazyInit="string"==typeof n?function(){t.headers=new Map,n.split("\n").forEach(function(n){var e=n.indexOf(":");if(e>0){var l=n.slice(0,e),o=l.toLowerCase(),r=n.slice(e+1).trim();t.maybeSetNormalizedName(l,o),t.headers.has(o)?t.headers.get(o).push(r):t.headers.set(o,[r])}})}:function(){t.headers=new Map,Object.keys(n).forEach(function(e){var l=n[e],o=e.toLowerCase();"string"==typeof l&&(l=[l]),l.length>0&&(t.headers.set(o,l),t.maybeSetNormalizedName(e,o))})}:this.headers=new Map}return n.prototype.has=function(n){return this.init(),this.headers.has(n.toLowerCase())},n.prototype.get=function(n){this.init();var t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null},n.prototype.keys=function(){return this.init(),Array.from(this.normalizedNames.values())},n.prototype.getAll=function(n){return this.init(),this.headers.get(n.toLowerCase())||null},n.prototype.append=function(n,t){return this.clone({name:n,value:t,op:"a"})},n.prototype.set=function(n,t){return this.clone({name:n,value:t,op:"s"})},n.prototype.delete=function(n,t){return this.clone({name:n,value:t,op:"d"})},n.prototype.maybeSetNormalizedName=function(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)},n.prototype.init=function(){var t=this;this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(function(n){return t.applyUpdate(n)}),this.lazyUpdate=null))},n.prototype.copyFrom=function(n){var t=this;n.init(),Array.from(n.headers.keys()).forEach(function(e){t.headers.set(e,n.headers.get(e)),t.normalizedNames.set(e,n.normalizedNames.get(e))})},n.prototype.clone=function(t){var e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e},n.prototype.applyUpdate=function(n){var t=n.name.toLowerCase();switch(n.op){case"a":case"s":var e=n.value;if("string"==typeof e&&(e=[e]),0===e.length)return;this.maybeSetNormalizedName(n.name,t);var l=("a"===n.op?this.headers.get(t):void 0)||[];l.push.apply(l,Object(d.g)(e)),this.headers.set(t,l);break;case"d":var o=n.value;if(o){var r=this.headers.get(t);if(!r)return;0===(r=r.filter(function(n){return-1===o.indexOf(n)})).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,r)}else this.headers.delete(t),this.normalizedNames.delete(t)}},n.prototype.forEach=function(n){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach(function(e){return n(t.normalizedNames.get(e),t.headers.get(e))})},n}(),O=function(){function n(){}return n.prototype.encodeKey=function(n){return C(n)},n.prototype.encodeValue=function(n){return C(n)},n.prototype.decodeKey=function(n){return decodeURIComponent(n)},n.prototype.decodeValue=function(n){return decodeURIComponent(n)},n}();function C(n){return encodeURIComponent(n).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var x=function(){function n(n){void 0===n&&(n={});var t,e,l,o=this;if(this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new O,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=(t=n.fromString,e=this.encoder,l=new Map,t.length>0&&t.split("&").forEach(function(n){var t=n.indexOf("="),o=Object(d.f)(-1==t?[e.decodeKey(n),""]:[e.decodeKey(n.slice(0,t)),e.decodeValue(n.slice(t+1))],2),r=o[0],u=o[1],s=l.get(r)||[];s.push(u),l.set(r,s)}),l)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(function(t){var e=n.fromObject[t];o.map.set(t,Array.isArray(e)?e:[e])})):this.map=null}return n.prototype.has=function(n){return this.init(),this.map.has(n)},n.prototype.get=function(n){this.init();var t=this.map.get(n);return t?t[0]:null},n.prototype.getAll=function(n){return this.init(),this.map.get(n)||null},n.prototype.keys=function(){return this.init(),Array.from(this.map.keys())},n.prototype.append=function(n,t){return this.clone({param:n,value:t,op:"a"})},n.prototype.set=function(n,t){return this.clone({param:n,value:t,op:"s"})},n.prototype.delete=function(n,t){return this.clone({param:n,value:t,op:"d"})},n.prototype.toString=function(){var n=this;return this.init(),this.keys().map(function(t){var e=n.encoder.encodeKey(t);return n.map.get(t).map(function(t){return e+"="+n.encoder.encodeValue(t)}).join("&")}).join("&")},n.prototype.clone=function(t){var e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat([t]),e},n.prototype.init=function(){var n=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(function(t){return n.map.set(t,n.cloneFrom.map.get(t))}),this.updates.forEach(function(t){switch(t.op){case"a":case"s":var e=("a"===t.op?n.map.get(t.param):void 0)||[];e.push(t.value),n.map.set(t.param,e);break;case"d":if(void 0===t.value){n.map.delete(t.param);break}var l=n.map.get(t.param)||[],o=l.indexOf(t.value);-1!==o&&l.splice(o,1),l.length>0?n.map.set(t.param,l):n.map.delete(t.param)}}),this.cloneFrom=this.updates=null)},n}();function S(n){return"undefined"!=typeof ArrayBuffer&&n instanceof ArrayBuffer}function N(n){return"undefined"!=typeof Blob&&n instanceof Blob}function P(n){return"undefined"!=typeof FormData&&n instanceof FormData}var T=function(){function n(n,t,e,l){var o;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=n.toUpperCase(),function(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||l?(this.body=void 0!==e?e:null,o=l):o=e,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.params&&(this.params=o.params)),this.headers||(this.headers=new w),this.params){var r=this.params.toString();if(0===r.length)this.urlWithParams=t;else{var u=t.indexOf("?");this.urlWithParams=t+(-1===u?"?":u<t.length-1?"&":"")+r}}else this.params=new x,this.urlWithParams=t}return n.prototype.serializeBody=function(){return null===this.body?null:S(this.body)||N(this.body)||P(this.body)||"string"==typeof this.body?this.body:this.body instanceof x?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()},n.prototype.detectContentTypeHeader=function(){return null===this.body?null:P(this.body)?null:N(this.body)?this.body.type||null:S(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof x?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null},n.prototype.clone=function(t){void 0===t&&(t={});var e=t.method||this.method,l=t.url||this.url,o=t.responseType||this.responseType,r=void 0!==t.body?t.body:this.body,u=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,s=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,i=t.headers||this.headers,a=t.params||this.params;return void 0!==t.setHeaders&&(i=Object.keys(t.setHeaders).reduce(function(n,e){return n.set(e,t.setHeaders[e])},i)),t.setParams&&(a=Object.keys(t.setParams).reduce(function(n,e){return n.set(e,t.setParams[e])},a)),new n(e,l,r,{params:a,headers:i,reportProgress:s,responseType:o,withCredentials:u})},n}(),k=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}({}),E=function(){return function(n,t,e){void 0===t&&(t=200),void 0===e&&(e="OK"),this.headers=n.headers||new w,this.status=void 0!==n.status?n.status:t,this.statusText=n.statusText||e,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}}(),L=function(n){function t(t){void 0===t&&(t={});var e=n.call(this,t)||this;return e.type=k.ResponseHeader,e}return Object(d.c)(t,n),t.prototype.clone=function(n){return void 0===n&&(n={}),new t({headers:n.headers||this.headers,status:void 0!==n.status?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})},t}(E),j=function(n){function t(t){void 0===t&&(t={});var e=n.call(this,t)||this;return e.type=k.Response,e.body=void 0!==t.body?t.body:null,e}return Object(d.c)(t,n),t.prototype.clone=function(n){return void 0===n&&(n={}),new t({body:void 0!==n.body?n.body:this.body,headers:n.headers||this.headers,status:void 0!==n.status?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})},t}(E),M=function(n){function t(t){var e=n.call(this,t,0,"Unknown Error")||this;return e.name="HttpErrorResponse",e.ok=!1,e.message=e.status>=200&&e.status<300?"Http failure during parsing for "+(t.url||"(unknown url)"):"Http failure response for "+(t.url||"(unknown url)")+": "+t.status+" "+t.statusText,e.error=t.error||null,e}return Object(d.c)(t,n),t}(E);function A(n,t){return{body:t,headers:n.headers,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}var F=function(){function n(n){this.handler=n}return n.prototype.request=function(n,t,e){var l,o=this;if(void 0===e&&(e={}),n instanceof T)l=n;else{var r;r=e.headers instanceof w?e.headers:new w(e.headers);var u=void 0;e.params&&(u=e.params instanceof x?e.params:new x({fromObject:e.params})),l=new T(n,t,void 0!==e.body?e.body:null,{headers:r,params:u,reportProgress:e.reportProgress,responseType:e.responseType||"json",withCredentials:e.withCredentials})}var s=Object(h.a)(l).pipe(Object(b.a)(function(n){return o.handler.handle(n)}));if(n instanceof T||"events"===e.observe)return s;var i=s.pipe(Object(y.a)(function(n){return n instanceof j}));switch(e.observe||"body"){case"body":switch(l.responseType){case"arraybuffer":return i.pipe(Object(m.a)(function(n){if(null!==n.body&&!(n.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return n.body}));case"blob":return i.pipe(Object(m.a)(function(n){if(null!==n.body&&!(n.body instanceof Blob))throw new Error("Response is not a Blob.");return n.body}));case"text":return i.pipe(Object(m.a)(function(n){if(null!==n.body&&"string"!=typeof n.body)throw new Error("Response is not a string.");return n.body}));case"json":default:return i.pipe(Object(m.a)(function(n){return n.body}))}case"response":return i;default:throw new Error("Unreachable: unhandled observe type "+e.observe+"}")}},n.prototype.delete=function(n,t){return void 0===t&&(t={}),this.request("DELETE",n,t)},n.prototype.get=function(n,t){return void 0===t&&(t={}),this.request("GET",n,t)},n.prototype.head=function(n,t){return void 0===t&&(t={}),this.request("HEAD",n,t)},n.prototype.jsonp=function(n,t){return this.request("JSONP",n,{params:(new x).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})},n.prototype.options=function(n,t){return void 0===t&&(t={}),this.request("OPTIONS",n,t)},n.prototype.patch=function(n,t,e){return void 0===e&&(e={}),this.request("PATCH",n,A(e,t))},n.prototype.post=function(n,t,e){return void 0===e&&(e={}),this.request("POST",n,A(e,t))},n.prototype.put=function(n,t,e){return void 0===e&&(e={}),this.request("PUT",n,A(e,t))},n}(),_=function(){function n(n,t){this.next=n,this.interceptor=t}return n.prototype.handle=function(n){return this.interceptor.intercept(n,this.next)},n}(),R=new l.p("HTTP_INTERCEPTORS"),I=function(){function n(){}return n.prototype.intercept=function(n,t){return t.handle(n)},n}(),z=/^\)\]\}',?\n/,H=function(){return function(){}}(),U=function(){function n(){}return n.prototype.build=function(){return new XMLHttpRequest},n}(),D=function(){function n(n){this.xhrFactory=n}return n.prototype.handle=function(n){var t=this;if("JSONP"===n.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new f.a(function(e){var l=t.xhrFactory.build();if(l.open(n.method,n.urlWithParams),n.withCredentials&&(l.withCredentials=!0),n.headers.forEach(function(n,t){return l.setRequestHeader(n,t.join(","))}),n.headers.has("Accept")||l.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){var o=n.detectContentTypeHeader();null!==o&&l.setRequestHeader("Content-Type",o)}if(n.responseType){var r=n.responseType.toLowerCase();l.responseType="json"!==r?r:"text"}var u=n.serializeBody(),s=null,i=function(){if(null!==s)return s;var t=1223===l.status?204:l.status,e=l.statusText||"OK",o=new w(l.getAllResponseHeaders()),r=function(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}(l)||n.url;return s=new L({headers:o,status:t,statusText:e,url:r})},a=function(){var t=i(),o=t.headers,r=t.status,u=t.statusText,s=t.url,a=null;204!==r&&(a=void 0===l.response?l.responseText:l.response),0===r&&(r=a?200:0);var c=r>=200&&r<300;if("json"===n.responseType&&"string"==typeof a){var p=a;a=a.replace(z,"");try{a=""!==a?JSON.parse(a):null}catch(d){a=p,c&&(c=!1,a={error:d,text:a})}}c?(e.next(new j({body:a,headers:o,status:r,statusText:u,url:s||void 0})),e.complete()):e.error(new M({error:a,headers:o,status:r,statusText:u,url:s||void 0}))},c=function(n){var t=i().url,o=new M({error:n,status:l.status||0,statusText:l.statusText||"Unknown Error",url:t||void 0});e.error(o)},p=!1,d=function(t){p||(e.next(i()),p=!0);var o={type:k.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(o.total=t.total),"text"===n.responseType&&l.responseText&&(o.partialText=l.responseText),e.next(o)},h=function(n){var t={type:k.UploadProgress,loaded:n.loaded};n.lengthComputable&&(t.total=n.total),e.next(t)};return l.addEventListener("load",a),l.addEventListener("error",c),n.reportProgress&&(l.addEventListener("progress",d),null!==u&&l.upload&&l.upload.addEventListener("progress",h)),l.send(u),e.next({type:k.Sent}),function(){l.removeEventListener("error",c),l.removeEventListener("load",a),n.reportProgress&&(l.removeEventListener("progress",d),null!==u&&l.upload&&l.upload.removeEventListener("progress",h)),l.abort()}})},n}(),q=new l.p("XSRF_COOKIE_NAME"),B=new l.p("XSRF_HEADER_NAME"),K=function(){return function(){}}(),V=function(){function n(n,t,e){this.doc=n,this.platform=t,this.cookieName=e,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return n.prototype.getToken=function(){if("server"===this.platform)return null;var n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(a.t)(n,this.cookieName),this.lastCookieString=n),this.lastToken},n}(),J=function(){function n(n,t){this.tokenService=n,this.headerName=t}return n.prototype.intercept=function(n,t){var e=n.url.toLowerCase();if("GET"===n.method||"HEAD"===n.method||e.startsWith("http://")||e.startsWith("https://"))return t.handle(n);var l=this.tokenService.getToken();return null===l||n.headers.has(this.headerName)||(n=n.clone({headers:n.headers.set(this.headerName,l)})),t.handle(n)},n}(),X=function(){function n(n,t){this.backend=n,this.injector=t,this.chain=null}return n.prototype.handle=function(n){if(null===this.chain){var t=this.injector.get(R,[]);this.chain=t.reduceRight(function(n,t){return new _(n,t)},this.backend)}return this.chain.handle(n)},n}(),W=function(){function n(){}var t;return t=n,n.disable=function(){return{ngModule:t,providers:[{provide:J,useClass:I}]}},n.withOptions=function(n){return void 0===n&&(n={}),{ngModule:t,providers:[n.cookieName?{provide:q,useValue:n.cookieName}:[],n.headerName?{provide:B,useValue:n.headerName}:[]]}},n}(),G=function(){return function(){}}(),$=e("ZYCi"),Y=function(){function n(n,t){var e=this;this.http=n,this.router=t,this.notes=new p.a([]),this.note=new p.a(null),this.updateNotes=function(n){e.notes.next(n)},this.updateNote=function(n){e.note.next(n)},this.getNotes=function(){return e.http.get("./assets/db/notes.json")},this.getNotesList=function(n){return e.notes.getValue().find(function(t){return t.folderName===n})?e.notes.getValue().find(function(t){return t.folderName===n}).notes:[]},this.navigate=function(n){e.router.navigate([n.join("/")])},this.notesObservable=this.notes.asObservable(),this.noteObservable=this.note.asObservable()}return n.ngInjectableDef=l.S({factory:function(){return new n(l.V(F),l.V($.l))},token:n,providedIn:"root"}),n}(),Z=function(){function n(n){this.notesService=n}return n.prototype.ngOnInit=function(){var n=this;this.showForm=!1,this.notesService.notesObservable.subscribe(function(t){n.notes=t&&t.length?t:[],n.folderList=n.notes&&n.notes.length?n.getFolderNames():[]})},n.prototype.getFolderNames=function(){return this.notes.map(function(n){return n.folderName})},n.prototype.openNotesList=function(n){this.notesService.updateNote(null),this.notesService.navigate(["main","folders",this.folderList[n]])},n.prototype.addFolder=function(n){n.length&&this.folderList.indexOf(n)<0&&(this.notes.push({folderName:n,notes:[]}),this.notesService.updateNotes(this.notes),this.showForm=!1)},n}(),Q=l.mb({encapsulation:0,styles:[["ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{cursor:pointer;padding:5px 10px}.form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:last-child{position:absolute;bottom:10px;background:var(--secondary-color);color:var(--text-color)}"]],data:{}});function nn(n){return l.Cb(0,[(n()(),l.ob(0,0,null,null,3,"li",[],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.openNotesList(n.context.index)&&l),l},null,null)),(n()(),l.ob(1,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-folder"]],null,null,null,null,null)),(n()(),l.Ab(2,null,[" "," "])),l.yb(3,1)],null,function(n,t){var e=l.Bb(t,2,0,n(t,3,0,l.vb(t.parent,1),t.context.$implicit));n(t,2,0,e)})}function tn(n){return l.Cb(0,[(n()(),l.ob(0,0,null,null,1,"li",[["class","form-group"]],null,null,null,null,null)),(n()(),l.ob(1,0,[["folderName",1]],null,0,"input",[["class","form-control"],["placeholder","Enter Folder Name"],["type","text"]],null,[[null,"keyup.enter"]],function(n,t,e){var o=!0;return"keyup.enter"===t&&(n.component.addFolder(l.vb(n,1).value),o=!1!==(l.vb(n,1).value="")&&o),o},null,null))],null,null)}function en(n){return l.Cb(0,[l.wb(0,c,[]),l.wb(0,a.o,[]),(n()(),l.ob(2,0,null,null,3,"ul",[],null,null,null,null,null)),(n()(),l.fb(16777216,null,null,2,null,nn)),l.nb(4,278528,null,0,a.i,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null),l.yb(5,1),(n()(),l.ob(6,0,null,null,5,"div",[["class","form"]],null,null,null,null,null)),(n()(),l.ob(7,0,null,null,4,"ul",[],null,null,null,null,null)),(n()(),l.fb(16777216,null,null,1,null,tn)),l.nb(9,16384,null,0,a.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.ob(10,0,null,null,1,"li",[],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=0!=(n.component.showForm=!0)&&l),l},null,null)),(n()(),l.Ab(-1,null,["+ New Folder"]))],function(n,t){var e=t.component,o=l.Bb(t,4,0,n(t,5,0,l.vb(t,0),e.folderList));n(t,4,0,o),n(t,9,0,e.showForm)},null)}var ln=function(){function n(n){this.element=n}return n.prototype.ngAfterViewInit=function(){this.element.nativeElement.innerHTML=this.element.nativeElement.innerHTML.split(" ").slice(0,11).join(" ")},n}(),on=function(){function n(n,t){this.router=n,this.notesService=t}return n.prototype.ngOnInit=function(){var n=this;this.showForm=!1,this.notesList=[],this.router.events.subscribe(function(t){t instanceof $.d&&n.getList(t.url.split("/")[3])})},n.prototype.ngAfterContentInit=function(){this.getList(this.router.url.split("/")[3])},n.prototype.getList=function(n){this.notesList=this.notesService.getNotesList(n),this.notesList=this.notesList.map(function(n){return n.title=n.content.substring(0,n.content.indexOf("\n")),n.content=n.content.substring(n.content.indexOf("\n")),n})},n.prototype.openNote=function(n){this.notesService.updateNote(this.notesList[n])},n.prototype.addNote=function(n,t){this.notesList.push({title:n,content:t}),this.showForm=!1},n}(),rn=l.mb({encapsulation:0,styles:[[""]],data:{}});function un(n){return l.Cb(0,[(n()(),l.ob(0,0,null,null,5,"li",[],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.openNote(n.context.index)&&l),l},null,null)),(n()(),l.ob(1,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),l.Ab(2,null,["",""])),(n()(),l.ob(3,0,null,null,2,"p",[["appExcerpt",""]],null,null,null,null,null)),l.nb(4,4210688,null,0,ln,[l.k],null,null),(n()(),l.Ab(5,null,["",""]))],null,function(n,t){n(t,2,0,t.context.$implicit.title),n(t,5,0,t.context.$implicit.content)})}function sn(n){return l.Cb(0,[(n()(),l.ob(0,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),l.ob(1,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),l.Ab(-1,null,["No Notes Available"]))],null,null)}function an(n){return l.Cb(0,[(n()(),l.ob(0,0,null,null,4,"ul",[],null,null,null,null,null)),(n()(),l.fb(16777216,null,null,1,null,un)),l.nb(2,278528,null,0,a.i,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null),(n()(),l.fb(16777216,null,null,1,null,sn)),l.nb(4,16384,null,0,a.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null)],function(n,t){var e=t.component;n(t,2,0,e.notesList),n(t,4,0,0===e.notesList.length)},null)}var cn=function(){function n(n){this.notesService=n}return n.prototype.ngOnInit=function(){this.loadNote()},n.prototype.loadNote=function(){var n=this;this.notesService.noteObservable.subscribe(function(t){n.note=t||null})},n}(),pn=l.mb({encapsulation:0,styles:[[".wrapper[_ngcontent-%COMP%]{padding:2% 5%}.wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify}"]],data:{}});function dn(n){return l.Cb(0,[(n()(),l.ob(0,0,null,null,4,"div",[["class","wrapper"]],null,null,null,null,null)),(n()(),l.ob(1,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),l.Ab(2,null,["",""])),(n()(),l.ob(3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l.Ab(4,null,["",""]))],null,function(n,t){var e=t.component;n(t,2,0,e.note.title),n(t,4,0,e.note.content)})}function hn(n){return l.Cb(0,[(n()(),l.fb(16777216,null,null,1,null,dn)),l.nb(1,16384,null,0,a.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,1,0,t.component.note)},null)}var fn=function(){function n(n){this.notesService=n}return n.prototype.ngOnInit=function(){var n=this;this.showSidebar=!0,this.notesService.getNotes().subscribe(function(t){n.notesService.updateNotes(t.notesList?t.notesList:[])},function(n){console.log("Error",n)})},n.prototype.handleHideSidebar=function(n){this.showSidebar=n},n}(),bn=l.mb({encapsulation:0,styles:[[".container-fluid[_ngcontent-%COMP%]{padding:0}.container-fluid[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{height:90px;padding:0 15px;background-color:var(--secondary-color);color:var(--text-color)}.wrapper[_ngcontent-%COMP%]{height:calc(100vh - 90px);overflow:auto}.wrapper[_ngcontent-%COMP%] > aside[_ngcontent-%COMP%]{height:calc(100vh - 65px);background:var(--primary-color);color:var(--text-color);width:15%;max-width:15%;min-width:15%;float:left;-webkit-transition:.5s ease-in-out;transition:all .5s ease-in-out}.wrapper[_ngcontent-%COMP%] > aside.negative-margin[_ngcontent-%COMP%]{margin-left:-15%}.wrapper[_ngcontent-%COMP%] > main[_ngcontent-%COMP%]{width:85%;max-width:85%;min-width:85%;float:left}.full-width[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%]{width:60%;max-width:60%;min-width:60%;float:left}.full-width[_ngcontent-%COMP%] > .aside[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%] > .aside[_ngcontent-%COMP%]{width:40%;max-width:40%;min-width:40%;float:left}.full-width[_ngcontent-%COMP%]{width:100%!important}.col-md-8[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%]{padding:12px 0}"]],data:{}});function yn(n){return l.Cb(0,[(n()(),l.ob(0,0,null,null,29,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),l.ob(1,0,null,null,9,"header",[["class","clearfix"]],null,null,null,null,null)),(n()(),l.ob(2,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(n()(),l.ob(3,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(n()(),l.ob(4,0,null,null,1,"h1",[["class","page-heading"]],null,null,null,null,null)),(n()(),l.Ab(-1,null,["Notes Application"])),(n()(),l.ob(6,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(n()(),l.ob(7,0,null,null,3,"div",[["class","col-md-10 offset-2"]],null,null,null,null,null)),(n()(),l.ob(8,0,null,null,2,"nav",[],null,null,null,null,null)),(n()(),l.ob(9,0,null,null,1,"app-navbar",[],null,[[null,"emitSidebarStatus"]],function(n,t,e){var l=!0;return"emitSidebarStatus"===t&&(l=!1!==n.component.handleHideSidebar(e)&&l),l},i,s)),l.nb(10,114688,null,0,u,[],{sidebarStatus:[0,"sidebarStatus"]},{emitSidebarStatus:"emitSidebarStatus"}),(n()(),l.ob(11,0,null,null,18,"div",[["class","wrapper clearfix"]],null,null,null,null,null)),(n()(),l.ob(12,0,null,null,17,"div",[["class","wrapper"]],null,null,null,null,null)),(n()(),l.ob(13,0,null,null,4,"aside",[],null,null,null,null,null)),l.nb(14,278528,null,0,a.h,[l.s,l.t,l.k,l.D],{ngClass:[0,"ngClass"]},null),l.xb(15,{"negative-margin":0}),(n()(),l.ob(16,0,null,null,1,"app-folders",[],null,null,null,en,Q)),l.nb(17,114688,null,0,Z,[Y],null,null),(n()(),l.ob(18,0,null,null,11,"main",[],null,null,null,null,null)),l.nb(19,278528,null,0,a.h,[l.s,l.t,l.k,l.D],{ngClass:[0,"ngClass"]},null),l.xb(20,{"full-width":0}),(n()(),l.ob(21,0,null,null,8,"div",[],null,null,null,null,null)),l.nb(22,278528,null,0,a.h,[l.s,l.t,l.k,l.D],{ngClass:[0,"ngClass"]},null),l.xb(23,{"full-width":0,wrapper:1}),(n()(),l.ob(24,0,null,null,2,"div",[["class","aside"]],null,null,null,null,null)),(n()(),l.ob(25,0,null,null,1,"app-notes-list",[],null,null,null,an,rn)),l.nb(26,1163264,null,0,on,[$.l,Y],null,null),(n()(),l.ob(27,0,null,null,2,"div",[["class","main"]],null,null,null,null,null)),(n()(),l.ob(28,0,null,null,1,"app-note-details",[],null,null,null,hn,pn)),l.nb(29,114688,null,0,cn,[Y],null,null)],function(n,t){var e=t.component;n(t,10,0,e.showSidebar);var l=n(t,15,0,!e.showSidebar);n(t,14,0,l),n(t,17,0);var o=n(t,20,0,!e.showSidebar);n(t,19,0,o);var r=n(t,23,0,!e.showSidebar,e.showSidebar);n(t,22,0,r),n(t,26,0),n(t,29,0)},null)}function mn(n){return l.Cb(0,[(n()(),l.ob(0,0,null,null,1,"app-notes",[],null,null,null,yn,bn)),l.nb(1,114688,null,0,fn,[Y],null,null)],function(n,t){n(t,1,0)},null)}var vn=l.kb("app-notes",fn,mn,{},{},[]),gn=function(){return function(){}}(),wn=function(){return function(){}}();e.d(t,"NotesModuleNgFactory",function(){return On});var On=l.lb(o,[],function(n){return l.tb([l.ub(512,l.j,l.ab,[[8,[r.a,vn]],[3,l.j],l.x]),l.ub(4608,a.l,a.k,[l.u,[2,a.s]]),l.ub(4608,K,V,[a.c,l.B,q]),l.ub(4608,J,J,[K,B]),l.ub(5120,R,function(n){return[n]},[J]),l.ub(4608,U,U,[]),l.ub(6144,H,null,[U]),l.ub(4608,D,D,[H]),l.ub(6144,g,null,[D]),l.ub(4608,v,X,[g,l.q]),l.ub(4608,F,F,[v]),l.ub(4608,Y,Y,[F,$.l]),l.ub(1073742336,a.b,a.b,[]),l.ub(1073742336,$.m,$.m,[[2,$.s],[2,$.l]]),l.ub(1073742336,gn,gn,[]),l.ub(1073742336,W,W,[]),l.ub(1073742336,G,G,[]),l.ub(1073742336,wn,wn,[]),l.ub(1073742336,o,o,[]),l.ub(1024,$.j,function(){return[[{path:"**",component:fn}]]},[]),l.ub(256,q,"XSRF-TOKEN",[]),l.ub(256,B,"X-XSRF-TOKEN",[])])})}}]);