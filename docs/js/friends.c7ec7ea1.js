(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["friends"],{"6c40":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-one-half"},[t("div",{staticClass:"box"},[t("button",{staticClass:"button is-info",on:{click:e.findFriends}},[e._v("Find a Friend!")])]),t("div",[t("SuggestedFriends",{attrs:{friend:e.friendSug,toggle:e.suggestionToggle},on:{add:e.addFriend}})],1),t("div",[t("section",[t("p",{staticClass:"content"},[t("b",[e._v("Selected:")]),e._v(" "+e._s(e.selected))]),t("b-field",{attrs:{label:"Search for other users by handle!"}},[t("b-autocomplete",{attrs:{rounded:"",data:e.searchResp,placeholder:"e.g. @AlmostDone",icon:"magnify",clearable:""},on:{typing:e.searchFriends,select:function(n){return e.selected=n}},scopedSlots:e._u([{key:"empty",fn:function(){return[e._v("No results found")]},proxy:!0}]),model:{value:e.name,callback:function(n){e.name=n},expression:"name"}})],1)],1)])]),t("div",{staticClass:"column is-one-half"},[t("FriendsList",{attrs:{friends:e.friends,toggle:e.delFriendsToggle},on:{delete:e.deleteFriend}})],1)])])},s=[],a=t("1da1"),i=(t("7db0"),t("a434"),t("159b"),t("96cf"),t("c421")),c=t("d6e2"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("article",{staticClass:"panel is-info"},[t("p",{staticClass:"panel-heading"},[e._v(" Suggested Friend ")]),e.toggle?t("p",{staticClass:"panel-block"},[t("span",{staticClass:"panel-icon"},[t("img",{attrs:{src:e.friend.user.pic,alt:e.friend.user.name}})]),e._v(" "+e._s(e.friend.user.handle)+" ")]):e._e(),t("div",{staticClass:"panel-block"},[t("button",{staticClass:"button is-link is-outlined is-fullwidth",on:{click:function(n){return e.$emit("add")}}},[e._v(" Add me as a Friend! ")])])])},o=[],d={props:{friend:Object,toggle:Boolean}},l=d,f=t("2877"),g=Object(f["a"])(l,u,o,!1,null,null,null),p=g.exports,h=t("3f1f"),b=t("a995"),m={data:function(){return{newFriends:[],friends:[],friendSug:{},suggestionToggle:!1,delFriendsToggle:!0,searchResp:[],data:[],name:"",selected:null}},mounted:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["d"])();case 2:t=n.sent,e.friends=t,console.log(e.friends);case 5:case"end":return n.stop()}}),n)})))()},components:{FriendsList:i["a"],SuggestedFriends:p},methods:{findFriends:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["c"])();case 2:t=n.sent,Object(h["a"])(t)||(e.friendSug=t,e.suggestionToggle=!0);case 4:case"end":return n.stop()}}),n)})))()},addFriend:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["a"])({handle:e.friendSug.user.handle});case 2:t=n.sent,Object(h["a"])(t)||e.friends.unshift(t),e.suggestionToggle=!1,e.friendSug={};case 6:case"end":return n.stop()}}),n)})))()},deleteFriend:function(e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["b"])({handle:e.user.handle});case 2:r=t.sent,s=n.friends.find((function(e){return e.user.handle==r.handle})),n.friends.splice(n.friends.indexOf(s),1),console.log("user with handle ".concat(r.handle," was removed from friends"));case 6:case"end":return t.stop()}}),t)})))()},searchFriends:function(e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(b["b"])(e);case 2:r=t.sent,console.log(r),n.searchResp=[],r.forEach((function(e){return n.searchResp.push(e.user.handle)}));case 6:case"end":return t.stop()}}),t)})))()}}},v=m,w=(t("88a9"),Object(f["a"])(v,r,s,!1,null,null,null));n["default"]=w.exports},"7db0":function(e,n,t){"use strict";var r=t("23e7"),s=t("b727").find,a=t("44d2"),i="find",c=!0;i in[]&&Array(1)[i]((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),a(i)},"88a9":function(e,n,t){"use strict";t("b2d0")},a434:function(e,n,t){"use strict";var r=t("23e7"),s=t("23cb"),a=t("a691"),i=t("50c4"),c=t("7b0b"),u=t("65f0"),o=t("8418"),d=t("1dde"),l=d("splice"),f=Math.max,g=Math.min,p=9007199254740991,h="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!l},{splice:function(e,n){var t,r,d,l,b,m,v=c(this),w=i(v.length),O=s(e,w),j=arguments.length;if(0===j?t=r=0:1===j?(t=0,r=w-O):(t=j-2,r=g(f(a(n),0),w-O)),w+t-r>p)throw TypeError(h);for(d=u(v,r),l=0;l<r;l++)b=O+l,b in v&&o(d,l,v[b]);if(d.length=r,t<r){for(l=O;l<w-r;l++)b=l+r,m=l+t,b in v?v[m]=v[b]:delete v[m];for(l=w;l>w-r+t;l--)delete v[l-1]}else if(t>r)for(l=w-r;l>O;l--)b=l+r-1,m=l+t-1,b in v?v[m]=v[b]:delete v[m];for(l=0;l<t;l++)v[l+O]=arguments[l+2];return v.length=w-r+t,d}})},a995:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return i}));var r=t("2e21"),s=t("f246");function a(){return Object(r["a"])("users/".concat(s["e"].user.userId))}function i(e){return Object(r["a"])("users/search/".concat(e))}},b2d0:function(e,n,t){},c421:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("article",{staticClass:"panel is-info"},[t("p",{staticClass:"panel-heading"},[e._v(" Friends ")]),e._l(e.friends,(function(n,r){return t("p",{key:r,staticClass:"panel-block"},[t("span",{staticClass:"panel-icon"},[t("img",{attrs:{src:n.user.pic,alt:n.user.name}})]),e._v(" "+e._s(n.user.handle)+" "),e.toggle?t("button",{staticClass:"delete is-pulled-right",on:{click:function(t){return t.preventDefault(),e.$emit("delete",n)}}}):e._e()])}))],2)},s=[],a={props:{friends:Array,toggle:Boolean}},i=a,c=t("2877"),u=Object(c["a"])(i,r,s,!1,null,null,null);n["a"]=u.exports},d6e2:function(e,n,t){"use strict";t.d(n,"d",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var r=t("2e21"),s=t("f246");function a(){return Object(r["a"])("friends/".concat(s["e"].user.userId))}function i(){return Object(r["a"])("friends/new/".concat(s["e"].user.userId))}function c(e){return Object(r["a"])("friends/".concat(s["e"].user.userId),e)}function u(e){return Object(r["a"])("friends/".concat(s["e"].user.userId),e,"DELETE")}}}]);
//# sourceMappingURL=friends.c7ec7ea1.js.map