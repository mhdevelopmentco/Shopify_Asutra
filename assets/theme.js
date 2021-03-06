/*============================================================================
  #Theme Libraries
==============================================================================*/

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
(function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)})(function(i){"use strict";var e=window.Slick||{};e=function(){function e(e,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(e),appendDots:i(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(e),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(e).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,"undefined"!=typeof document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=t++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}var t=0;return e}(),e.prototype.activateADA=function(){var i=this;i.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):o===!0?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),s.options.rtl===!0&&s.options.vertical===!1&&(e=-e),s.transformsEnabled===!1?s.options.vertical===!1?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):s.cssTransitions===!1?(s.options.rtl===!0&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),s.options.vertical===!1?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),s.options.vertical===!1?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this,o=t.getNavTarget();null!==o&&"object"==typeof o&&o.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};e.options.fade===!1?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(i.options.infinite===!1&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1===0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;e.options.arrows===!0&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),e.options.infinite!==!0&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),e.options.centerMode!==!0&&e.options.swipeToSlide!==!0||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.options.draggable===!0&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>0){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(r.originalSettings.mobileFirst===!1?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||l===!1||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!==0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t,o=this;if(e=o.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var s in e){if(i<e[s]){i=t;break}t=e[s]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),e.options.accessibility===!0&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),e.options.accessibility===!0&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),e.options.accessibility===!0&&e.$list.off("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>0&&(i=e.$slides.children().children(),i.removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){var e=this;e.shouldClick===!1&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;t.cssTransitions===!1?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;e.cssTransitions===!1?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick","*",function(t){var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&o.is(":focus")&&(e.focussed=!0,e.autoPlay())},0)}).on("blur.slick","*",function(t){i(this);e.options.pauseOnFocus&&(e.focussed=!1,e.autoPlay())})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var i=this;return i.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(i.options.infinite===!0)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(i.options.centerMode===!0)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),n.options.infinite===!0?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,n.options.vertical===!0&&n.options.centerMode===!0&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!==0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),n.options.centerMode===!0&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:n.options.centerMode===!0&&n.options.infinite===!0?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:n.options.centerMode===!0&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=n.options.vertical===!1?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,n.options.variableWidth===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,n.options.centerMode===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){var e=this;return e.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(e.options.infinite===!1?i=e.slideCount:(t=e.options.slidesToScroll*-1,o=e.options.slidesToScroll*-1,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o,s,n=this;return s=n.options.centerMode===!0?Math.floor(n.$list.width()/2):0,o=n.swipeLeft*-1+s,n.options.swipeToSlide===!0?(n.$slideTrack.find(".slick-slide").each(function(e,s){var r,l,d;if(r=i(s).outerWidth(),l=s.offsetLeft,n.options.centerMode!==!0&&(l+=r/2),d=l+r,o<d)return t=s,!1}),e=Math.abs(i(t).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){var t=this;t.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),t.options.accessibility===!0&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);if(i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),s!==-1){var n="slick-slide-control"+e.instanceUid+s;i("#"+n).length&&i(this).attr({"aria-describedby":n})}}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.options.focusOnChange?e.$slides.eq(s).attr({tabindex:"0"}):e.$slides.eq(s).removeAttr("tabindex");e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),i.options.accessibility===!0&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),e.options.accessibility===!0&&e.$dots.on("keydown.slick",e.keyHandler)),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),e.options.accessibility===!0&&e.$list.on("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:e.options.rtl===!0?"next":"previous"}}):39===i.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:e.options.rtl===!0?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||r.$slider.attr("data-sizes"),n=document.createElement("img");n.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,e,t])})},n.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,e,t])},n.src=t})}var t,o,s,n,r=this;if(r.options.centerMode===!0?r.options.infinite===!0?(s=r.currentSlide+(r.options.slidesToShow/2+1),n=s+r.options.slidesToShow+2):(s=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),n=2+(r.options.slidesToShow/2+1)+r.currentSlide):(s=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,n=Math.ceil(s+r.options.slidesToShow),r.options.fade===!0&&(s>0&&s--,n<=r.slideCount&&n++)),t=r.$slider.find(".slick-slide").slice(s,n),"anticipated"===r.options.lazyLoad)for(var l=s-1,d=n,a=r.$slider.find(".slick-slide"),c=0;c<r.options.slidesToScroll;c++)l<0&&(l=r.slideCount-1),t=t.add(a.eq(l)),t=t.add(a.eq(d)),l--,d++;e(t),r.slideCount<=r.options.slidesToShow?(o=r.$slider.find(".slick-slide"),e(o)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(o=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),e(o)):0===r.currentSlide&&(o=r.$slider.find(".slick-cloned").slice(r.options.slidesToShow*-1),e(o))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var i=this;i.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;if(!t.unslicked&&(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),t.options.accessibility===!0&&(t.initADA(),t.options.focusOnChange))){var o=i(t.$slides.get(t.currentSlide));o.attr("tabindex",0).focus()}},e.prototype.prev=e.prototype.slickPrev=function(){var i=this;i.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),r=document.createElement("img"),r.onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),l.options.adaptiveHeight===!0&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;return"boolean"==typeof i?(e=i,i=e===!0?0:o.slideCount-1):i=e===!0?--i:i,!(o.slideCount<1||i<0||i>o.slideCount-1)&&(o.unload(),t===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},e.prototype.setCSS=function(i){var e,t,o=this,s={};o.options.rtl===!0&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,o.transformsEnabled===!1?o.$slideTrack.css(s):(s={},o.cssTransitions===!1?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;i.options.vertical===!1?i.options.centerMode===!0&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),i.options.centerMode===!0&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),i.options.vertical===!1&&i.options.variableWidth===!1?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):i.options.variableWidth===!0?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();i.options.variableWidth===!1&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,t.options.rtl===!0?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":"undefined"!=typeof arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),i.options.fade===!1?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=i.options.vertical===!0?"top":"left",
"top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||i.options.useCSS===!0&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&i.animType!==!1&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&i.animType!==!1},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),n.options.centerMode===!0){var r=n.options.slidesToShow%2===0?1:0;e=Math.floor(n.options.slidesToShow/2),n.options.infinite===!0&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=n.options.infinite===!0?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(s.options.fade===!0&&(s.options.centerMode=!1),s.options.infinite===!0&&s.options.fade===!1&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=s.options.centerMode===!0?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));return s||(s=0),t.slideCount<=t.options.slidesToShow?void t.slideHandler(s,!1,!0):void t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(a.animating===!0&&a.options.waitForAnimate===!0||a.options.fade===!0&&a.currentSlide===i))return e===!1&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,a.options.infinite===!1&&a.options.centerMode===!1&&(i<0||i>a.getDotCount()*a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):a.options.infinite===!1&&a.options.centerMode===!0&&(i<0||i>a.slideCount-a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!==0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!==0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=a.getNavTarget(),l=l.slick("getSlick"),l.slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide)),a.updateDots(),a.updateArrows(),a.options.fade===!0?(t!==!0?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight()):void(t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)))},e.prototype.startLoad=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),o=Math.round(180*t/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0?s.options.rtl===!1?"left":"right":o<=360&&o>=315?s.options.rtl===!1?"left":"right":o>=135&&o<=225?s.options.rtl===!1?"right":"left":s.options.verticalSwiping===!0?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(o.touchObject.edgeHit===!0&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(e.options.swipe===!1||"ontouchend"in document&&e.options.swipe===!1||e.options.draggable===!1&&i.type.indexOf("mouse")!==-1))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(l.options.verticalSwiping===!0&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(l.options.rtl===!1?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),l.options.verticalSwiping===!0&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,l.options.infinite===!1&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),l.options.vertical===!1?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,l.options.verticalSwiping===!0&&(l.swipeLeft=e+o*s),l.options.fade!==!0&&l.options.touchMove!==!1&&(l.animating===!0?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;return t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow?(t.touchObject={},!1):(void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,void(t.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i,e=this;i=Math.floor(e.options.slidesToShow/2),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===!1?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&e.options.centerMode===!0&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||"undefined"==typeof s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),"undefined"!=typeof t)return t;return o}});

/*!
 * JavaScript Cookie v2.1.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){if("function"==typeof define&&define.amd)define(e);else if("object"==typeof exports)module.exports=e();else{var n=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=n,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(t){function o(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if(i=e({path:"/"},o.defaults,i),"number"==typeof i.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*i.expires),i.expires=s}try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(a){}return r=t.write?t.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape),document.cookie=[n,"=",r,i.expires&&"; expires="+i.expires.toUTCString(),i.path&&"; path="+i.path,i.domain&&"; domain="+i.domain,i.secure?"; secure":""].join("")}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],u=/(%[0-9A-Z]{2})+/g,d=0;d<p.length;d++){var f=p[d].split("="),l=f[0].replace(u,decodeURIComponent),m=f.slice(1).join("=");'"'===m.charAt(0)&&(m=m.slice(1,-1));try{if(m=t.read?t.read(m,l):t(m,l)||m.replace(u,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(a){}if(n===l){c=m;break}n||(c[l]=m)}catch(a){}}return c}}return o.set=o,o.get=function(e){return o(e)},o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(n,t){o(n,"",e(t,{expires:-1}))},o.withConverter=n,o}return n(function(){})});

/*! Magnific Popup - v1.0.0 - 2015-09-17
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7."),b.isIE8=-1!==c.indexOf("MSIE 8."),b.isLowIE=b.isIE7||b.isIE8,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(a,c){if(void 0===c||c===!1)return!0;if(e=a.split("_"),e.length>1){var d=b.find(p+"-"+e[0]);if(d.length>0){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(p+"-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery",g=Boolean(a.fn.mfpFastClick);return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s),h=g?"mfpFastClick":"click";e[h](function(){b.prev()}),f[h](function(){b.next()}),b.isIE7&&(x("b",e[0],!1,!0),x("a",e[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowLeft&&g&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){v.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g,h=a(this);if(c){var i,j,k,l,m,n;h.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,v.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0],(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0,d())}).on("touchend"+f,function(a){d(),l||n>1||(g=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){g=!1},b),e())})})}h.on("click"+f,function(){g||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&v.off("touchmove"+f+" touchend"+f)}}(),A()});

/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.5.3
 *
 * Copyright KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 07.11.2018
 */
!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],function(n){return t(e,e.document,undefined,n)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=t(e,e.document,undefined,require("jquery")):t(e,e.document,undefined,e.jQuery)}("undefined"!=typeof window?window:this,function(e,t,n,r){"use strict";var i,o,a="OverlayScrollbars",s={o:"object",f:"function",a:"array",s:"string",b:"boolean",n:"number",u:"undefined",z:"null"},c={c:"class",s:"style",i:"id",l:"length",p:"prototype",oH:"offsetHeight",cH:"clientHeight",sH:"scrollHeight",oW:"offsetWidth",cW:"clientWidth",sW:"scrollWidth"},l={wW:function(){return e.innerWidth||t.documentElement[c.cW]||t.body[c.cW]},wH:function(){return e.innerHeight||t.documentElement[c.cH]||t.body[c.cH]},mO:function(){return e.MutationObserver||e.WebKitMutationObserver||e.WebkitMutationObserver||e.MozMutationObserver||n},rO:function(){return e.ResizeObserver||e.WebKitResizeObserver||e.WebkitResizeObserver||e.MozResizeObserver||n},rAF:function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){return e.setTimeout(t,1e3/60)}},cAF:function(){return e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame||e.oCancelAnimationFrame||e.msCancelAnimationFrame||function(t){return e.clearTimeout(t)}},now:function(){return Date.now()||(new Date).getTime()},stpP:function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},prvD:function(e){e.preventDefault&&e.cancelable?e.preventDefault():e.returnValue=!1},page:function(e){var r="page",i="client",o="X",a="Y",s=((e=e.originalEvent||e).target||e.srcElement||t).ownerDocument||t,c=s.documentElement,l=s.body;if(e.touches!==n){var u=e.touches[0];return{x:u[r+o],y:u[r+a]}}return!e[r+o]&&e[i+o]&&null!=e[i+o]?{x:e[i+o]+(c&&c.scrollLeft||l&&l.scrollLeft||0)-(c&&c.clientLeft||l&&l.clientLeft||0),y:e[i+a]+(c&&c.scrollTop||l&&l.scrollTop||0)-(c&&c.clientTop||l&&l.clientTop||0)}:{x:e[r+o],y:e[r+a]}},mBtn:function(e){return e.which||e.button===n?e.which:1&e.button?1:2&e.button?3:4&e.button?2:0},inA:function(e,t){for(var n=0;n<t[c.l];n++)try{if(t[n]===e)return n}catch(r){}return-1},isA:function(e){var t=Array.isArray;return t?t(e):this.type(e)==s.a},type:function(e){return e===n?e+"":null===e?e+"":Object[c.p].toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()},bind:function(e,t){if(typeof e!=s.f)throw"Can't bind function!";var n=c.p,r=Array[n].slice.call(arguments,2),i=function(){},o=function(){return e.apply(this instanceof i?this:t,r.concat(Array[n].slice.call(arguments)))};return e[n]&&(i[n]=e[n]),o[n]=new i,o}},u=r,f=(r.easing,r),h=(i=[],o="__overlayScrollbars__",function(e,t){var n=arguments[c.l];if(n<1)return i;if(t)e[o]=t,i.push(e);else{var r=l.inA(e,i);if(r>-1){if(!(n>1))return i[r][o];delete e[o],i.splice(r,1)}}}),d=function(){var r,i,o,d,v,p,y,x,m,w,b,g,S,O,z=[],A=(o=[s.b,s.n,s.s,s.a,s.o,s.f,s.z],d=" ",v=":",p=[s.z,s.s],y=s.n,x=[s.z,s.b],m=[!0,s.b],w=[!1,s.b],b=[null,[s.z,s.f]],S={className:["os-theme-dark",p],resize:["none","n:none b:both h:horizontal v:vertical"],sizeAutoCapable:m,clipAlways:m,normalizeRTL:m,paddingAbsolute:w,autoUpdate:[null,x],autoUpdateInterval:[33,y],nativeScrollbarsOverlaid:{showNativeScrollbars:w,initialize:m},overflowBehavior:{x:["scroll",g="v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden"],y:["scroll",g]},scrollbars:{visibility:["auto","v:visible h:hidden a:auto"],autoHide:["never","n:never s:scroll l:leave m:move"],autoHideDelay:[800,y],dragScrolling:m,clickScrolling:w,touchSupport:m},textarea:{dynWidth:w,dynHeight:w},callbacks:{onInitialized:b,onInitializationWithdrawn:b,onDestroyed:b,onScrollStart:b,onScroll:b,onScrollStop:b,onOverflowChanged:b,onOverflowAmountChanged:b,onDirectionChanged:b,onContentSizeChanged:b,onHostSizeChanged:b,onUpdated:b}},{d:(O=function(e){var t=function(n){var r,i,o;for(r in n)n.hasOwnProperty(r)&&(i=n[r],(o=l.type(i))==s.a?n[r]=i[e?1:0]:o==s.o&&(n[r]=t(i)));return n};return t(f.extend(!0,{},S))})(),t:O(!0),v:function(e,t,n,r,i){var a={},c=f.extend(!0,{},e),u=function(e,t,i,a){for(var c in t)if(t.hasOwnProperty(c)&&e.hasOwnProperty(c)){var h,p,y,x,m,w,b,g,S=!1,O=t[c],z=l.type(O),A=l.type(O)!=s.a?[O]:O,M=e[c],W=l.type(M),H=a?a+".":"",C='The option "'+H+c+"\" wasn't set, because",T=[],k=[];if(z==s.o)i[c]={},u(M,O,i[c],H+c),f.isEmptyObject(M)&&delete e[c];else{for(w=0;w<A.length;w++)if(m=A[w],y=(z=l.type(m))==s.s&&-1===f.inArray(m,o))for(T.push(s.s),h=m.split(d),k=k.concat(h),b=0;b<h.length;b++){for(x=(p=h[b].split(v))[0],g=0;g<p.length;g++)if(M===p[g]){S=!0;break}if(S)break}else if(T.push(m),W===m){S=!0;break}S?i[c]=y&&r?x:M:n&&console.warn(C+" it doesn't accept the type [ "+W.toUpperCase()+' ] with the value of "'+M+'".\r\nAccepted types are: [ '+T.join(", ").toUpperCase()+" ]."+(k.length>0?"\r\nValid strings are: [ "+k.join(", ").split(v).join(", ")+" ].":"")),delete e[c]}}};return u(c,t,a),i?f.extend(!0,a,c):!f.isEmptyObject(c)&&n&&console.warn("The following options are discarded due to invalidity:\r\n"+JSON.stringify(c,null,2)),a}});function M(){r||(r=new W(A.d)),i||(i=new H(r))}function W(r){var i=this,o="overflow",a="hidden",s="scroll",u=f("body"),d=f('<div id="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>'),v=d[0],p=f(d.children("div").eq(0));u.append(d),d.hide().show();var y,x,m,w,b,g,S,O,z,A=H(v),M={x:0===A.x,y:0===A.y};function W(e){var r=!1,i="Webkit Moz ms O".split(" "),o=t.createElement("div"),a=null,s=0;if(e=e.toLowerCase(),o[c.s][e]!==n&&(r=!0),!r)for(a=e.charAt(0).toUpperCase()+e.substr(1);s<i.length;s++)if(o[c.s][i[s]+a]!==n){r=!0;break}return r}function H(e){return{x:e[c.oH]-e[c.cH],y:e[c.oW]-e[c.cW]}}f.extend(i,{defaultOptions:r,autoUpdateLoop:!1,autoUpdateRecommended:!l.mO(),nativeScrollbarSize:A,nativeScrollbarIsOverlaid:M,nativeScrollbarStyling:(d.addClass("os-viewport-native-scrollbars-invisible"),d.css(o,a).hide().css(o,s).show(),v[c.oH]-v[c.cH]==0&&v[c.oW]-v[c.cW]==0),overlayScrollbarDummySize:{x:30,y:30},msie:(x=e.navigator.userAgent,m="indexOf",w="substring",b=x[m]("MSIE "),g=x[m]("Trident/"),S=x[m]("Edge/"),O=x[m]("rv:"),z=e.parseInt,b>0?y=z(x[w](b+5,x[m](".",b)),10):g>0?y=z(x[w](O+3,x[m](".",O)),10):S>0&&(y=z(x[w](S+5,x[m](".",S)),10)),y),cssCalc:function(){var e,n,r=t.createElement("div"),i=["calc","-webkit-calc","-moz-calc","-o-calc"];for(e=0;e<i.length;++e)if(n=i[e],r[c.s].cssText="width:"+n+"(1px);",r[c.s].length)return n;return null}(),restrictedMeasuring:function(){d.css(o,a);var e={w:v[c.sW],h:v[c.sH]};d.css(o,"visible");var t={w:v[c.sW],h:v[c.sH]};return e.w-t.w!=0||e.h-t.h!=0}(),rtlScrollBehavior:function(){d.css({"overflow-y":a,"overflow-x":s,direction:"rtl"}).scrollLeft(0);var e=d.offset(),t=p.offset();d.scrollLeft(999);var n=p.offset();return{i:e.left===t.left,n:t.left-n.left==0}}(),supportTransform:W("transform"),supportTransition:W("transition"),supportPassiveEvents:function(){var t=!1;try{e.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){t=!0}}))}catch(n){}return t}(),supportResizeObserver:!!l.rO(),supportMutationObserver:!!l.mO()}),d.removeAttr(c.s).remove(),function(){if(!M.x||!M.y){var t=Math.abs,n=l.wW(),r=l.wH(),o=c(),a=function(){if(h().length>0){var e=l.wW(),a=l.wH(),v=e-n,p=a-r;if(0===v&&0===p)return;var y,x=Math.round(e/(n/100)),m=Math.round(a/(r/100)),w=t(v),b=t(p),g=t(x),S=t(m),O=c(),z=w>2&&b>2,A=!s(g,S),M=z&&A&&(O!==o&&o>0),W=i.nativeScrollbarSize;M&&(u.append(d),y=i.nativeScrollbarSize=H(d[0]),d.remove(),W.x===y.x&&W.y===y.y||f.each(h(),function(){h(this)&&h(this).update("zoom")})),n=e,r=a,o=O}};f(e).on("resize",a)}function s(e,n){var r=t(e),i=t(n);return!(r===i||r+1===i||r-1===i)}function c(){var t=e.screen.deviceXDPI||0,n=e.screen.logicalXDPI||1;return e.devicePixelRatio||t/n}}()}function H(e){var t,r=this,i="autoUpdate",o=i+"Interval",a=c.l,s=[],u=[],h=!1,d=33,v=d,p=l.now(),y=function(){if(s[a]>0&&h){t=l.rAF()(function(){y()});var e=l.now(),r=e-p;if(r>v){p=e-r%v;for(var c=d,f=0;f<s[a];f++){var x=s[f];if(x!==n){var m=x.options(),w=m[i],b=Math.max(1,m[o]),g=l.now();(!0===w||null===w)&&g-u[f]>b&&(x.update("auto"),u[f]=new Date(g+=b)),c=Math.max(1,Math.min(c,b))}}v=c}}else v=d};r.add=function(t){-1===f.inArray(t,s)&&(s.push(t),u.push(l.now()),s[a]>0&&!h&&(h=!0,e.autoUpdateLoop=h,y()))},r.remove=function(r){var i=f.inArray(r,s);i>-1&&(u.splice(i,1),s.splice(i,1),0===s[a]&&h&&(h=!1,e.autoUpdateLoop=h,t!==n&&(l.cAF()(t),t=-1)))}}function C(r,i,o,d,v){if(fi(r)){if(h(r)){var p=h(r);return p.options(i),p}var y,x,m,w,b,g,S,O,z,M,W,H,C,T,k,E,L,P,D,R,j,N,F,I,U,_,B,q,V,X,Y,K,$,J,Q,G,Z,ee,te,ne,re,ie,oe,ae,se,ce,le,ue,fe,he,de,ve,pe,ye,xe,me,we,be,ge,Se,Oe,ze,Ae,Me,We,He,Ce,Te,ke,Ee,Le,Pe,De,Re,je,Ne,Fe,Ie,Ue,_e,Be,qe,Ve,Xe,Ye,Ke,$e,Je,Qe,Ge,Ze,et,tt,nt,rt,it,ot,at,st,ct,lt,ut,ft,ht,dt,vt,pt,yt,xt,mt,wt,bt,gt,St,Ot,zt,At,Mt,Wt,Ht,Ct,Tt=new e[a],kt=f[c.p],Et={},Lt={},Pt={},Dt={},Rt={},jt=175,Nt="-hidden",Ft="margin-",It="padding-",Ut="border-",_t="top",Bt="right",qt="bottom",Vt="left",Xt="min-",Yt="max-",Kt="width",$t="height",Jt="float",Qt="",Gt="auto",Zt="scroll",en="100%",tn="x",nn="y",rn=".",on=" ",an="scrollbar",sn="-horizontal",cn="-vertical",ln=Zt+"Left",un=Zt+"Top",fn="mousedown touchstart",hn="mouseup touchend touchcancel",dn="mousemove touchmove",vn="mouseenter",pn="mouseleave",yn="keydown",xn="keyup",mn="selectstart",wn="transitionend webkitTransitionEnd oTransitionEnd",bn="__overlayScrollbarsRO__",gn="os-",Sn=gn+"html",On=gn+"host",zn=On+"-textarea",An=On+"-"+an+sn+Nt,Mn=On+"-"+an+cn+Nt,Wn=On+"-transition",Hn=On+"-rtl",Cn=On+"-resize-disabled",Tn=On+"-scrolling",kn=On+"-overflow",En=kn+"-x",Ln=kn+"-y",Pn=gn+"textarea",Dn=Pn+"-cover",Rn=gn+"padding",jn=gn+"viewport",Nn=jn+"-native-scrollbars-invisible",Fn=jn+"-native-scrollbars-overlaid",In=gn+"content",Un=gn+"content-arrange",_n=gn+"content-glue",Bn=gn+"size-auto-observer",qn=gn+"resize-observer",Vn=gn+"resize-observer-item",Xn=Vn+"-final",Yn=gn+"text-inherit",Kn=gn+an,$n=Kn+"-track",Jn=$n+"-off",Qn=Kn+"-handle",Gn=Qn+"-off",Zn=Kn+"-unusable",er=Kn+"-"+Gt+Nt,tr=Kn+"-corner",nr=tr+"-resize",rr=nr+"-both",ir=nr+sn,or=nr+cn,ar=Kn+sn,sr=Kn+cn,cr=gn+"dragging",lr=gn+"theme-none",ur={},fr="added removed on contract",hr={},dr=42,vr=[],pr=11,yr=[112,113,114,115,116,117,118,119,120,121,123,33,34,37,38,39,40,16,17,18,19,20,144],xr=[],mr={},wr={};if(Tt.sleep=function(){q=!0},Tt.update=function(e){var t,n,r=zi(e)==s.s,i="img",o="load";r?0===e.indexOf(Gt)?(t=Jr(),n=$r(),(t||n)&&Zr(!1,n,!1,"+"==e.slice(-1))):"zoom"===e&&Zr(!0,!0):(e=q||e,q=!1,Zr(!1,!1,e,!0)),E||le.find(i).each(function(e,t){-1===l.inA(t,vr)&&f(t).off(o,Vr).on(o,Vr)})},Tt.options=function(e,t){if(f.isEmptyObject(e)||!f.isPlainObject(e)){if(zi(e)==s.s){if(arguments.length>=2){var n={};return bi(n,e,t),ei(n),void Zr()}return wi(Y,e)}return Y}ei(e);var r=q||!1;q=!1,Zr(),q=r},Tt.destroy=function(){for(var e in k=!0,v.remove(Tt),Wr(),Or(ie),R&&Or(re),ur)Tt.removeExt(e);Hi(ie),oe!==n&&Hi(oe),ce!==n&&Hi(ce),R&&Hi(re),W?(gr(ne,dn,kr),gr(ne,vn,Cr),gr(ne,pn,Tr)):ne.off(dn,kr).off(vn,Cr).off(pn,Tr),Hi(he),Hi(pe),fe&&Hi(fe),Mt||Br(),le.contents().unwrap().unwrap().unwrap(),L&&Wi(Z,Sn),E?(te.off(Zt,Ir).off("drop",jr).off("focus",Nr).off("focusout",Fr),b>9||!w?te.off("input",Pr):te.off(yn,Dr).off(xn,Rr),Hi(ue),Wi(te,Pn+on+Yn).unwrap().removeAttr(c.s),Hi(ne)):(Wi(te,On),Wi(ne,[On,Cn,Hn,An,Mn,Wn,Tn,kn,En,Ln,lr,rt].join(on)));for(var t=0;t<vr.length;t++)f(vr[t]).off("load",Vr);for(var i in vr=n,h(r,0),li("onDestroyed"),Tt)delete Tt[i];Tt=n},Tt.scroll=function(t,r,i,o){if(0===arguments.length||t===n){var a=Lt,l=Pt,h=nt&&B&&m.i,d=nt&&B&&m.n,v=a.cs,p=a.csr,y=a.ms;return v=h?y-v:v,{x:{position:v*=d?-1:1,ratio:p=h?1-p:p,max:y*=d?-1:1,handleOffset:a.ho,handleLength:a.hl,handleLengthRatio:a.hlr,trackLength:a.tl,isRTL:B,isRTLNormalized:nt},y:{position:l.cs,ratio:l.csr,max:l.ms,handleOffset:l.ho,handleLength:l.hl,handleLengthRatio:l.hlr,trackLength:l.tl}}}var x,w,b,g,S,O,z,A,W,H=nt,C=[tn,Vt,"l"],T=[nn,_t,"t"],k=["+=","-=","*=","/="],E={},L=zi(r)==s.o,P="end",D="begin",R="center",j="nearest",N="always",F="never",I="ifneeded",U=c.l,_=[tn,nn,"xy","yx"],q=[D,P,R,j],V=[N,F,I],X=t.hasOwnProperty("el"),Y=X?t.el:t,K=!!(Y instanceof f||u)&&Y instanceof u,$=!K&&fi(Y),J=function(e,t){for(x=0;x<t[U];x++)if(e===t[x])return!0;return!1},Q=function(e){var t={};if(zi(e)==s.a&&e[U]>0)t.x=e[0],t.y=e[1];else if(zi(e)==s.s||zi(e)==s.n)t.x=e,t.y=e;else if(zi(e)==s.o){for(var n in H=zi(e.n)==s.b?e.n:H,e=Ai({},e),x=0,e)e.hasOwnProperty(n)&&(x>2&&delete e[n],x++);var r=function(t){var n=t?C:T;for(x=0;x<n[U];x++)if(n[x]in e)return e[n[x]]};t.x=r(!0),t.y=r(!1)}return t},G=function(t,r){var i,o,a=zi(r)==s.s;a&&Tt.update(Gt+"+");var c,l=t?Lt:Pt,u=l.cs,f=l.ms,h=" * ",d=B&&t,v=d&&m.n&&!H,p="replace";if(a){if(r[U]>2){var y=r.substr(0,2);for(x=0;x<k[U];x++)if(y===k[x]){i=k[x];break}}r=(r=(r=(r=(r=(r=(r=(r=(r=i!==n?r.substr(2):r)[p](/min/g,0))[p](/</g,0))[p](/max/g,(v?"-":Qt)+en))[p](/>/g,(v?"-":Qt)+en))[p](/px/g,Qt))[p](/%/g,h+f*(d&&m.n?-1:1)/100))[p](/vw/g,h+Dt.w))[p](/vh/g,h+Dt.h),o=di(di(e.eval(r),!0).toFixed())}else o=r;if(o!==n&&!isNaN(o)&&zi(o)==s.n){var w=H&&d,b=u*(w&&m.n?-1:1),g=w&&m.i,S=w&&m.n;switch(b=g?f-b:b,i){case"+=":c=b+o;break;case"-=":c=b-o;break;case"*=":c=b*o;break;case"/=":c=b/o;break;default:c=o}c=g?f-c:c,c*=S?-1:1,c=d&&m.n?Math.min(0,Math.max(f,c)):Math.max(0,Math.min(f,c))}return c===u?n:c},Z=function(e,t,n,r){var i,o,a=[n,n],c=zi(e);if(c==t)e=[e,e];else if(c==s.a){if((i=e[U])>2||i<1)e=a;else for(1===i&&(e[1]=n),x=0;x<i;x++)if(zi(o=e[x])!=t||!J(o,r)){e=a;break}}else e=c==s.o?[e[tn]||n,e[nn]||n]:a;return{x:e[0],y:e[1]}},ee=function(e){var t,n,r=[],i=[_t,Bt,qt,Vt];for(x=0;x<e[U]&&x!==i[U];x++)(n=zi(t=e[x]))==s.b?r.push(t?di(W.css(Ft+i[x])):0):r.push(n==s.n?t:0);return r};if(K||$){var te,ne=X?t.margin:0,re=X?t.axis:0,ie=X?t.scroll:0,oe=X?t.block:0,ce=[0,0,0,0],le=zi(ne);if(0===(W=K?Y:f(Y))[U])return;Tt.update(Gt+"+"),ne=le==s.n||le==s.b?ee([ne,ne,ne,ne]):le==s.a?2===(te=ne[U])?ee([ne[0],ne[1],ne[0],ne[1]]):te>=4?ee(ne):ce:le==s.o?ee([ne[_t],ne[Bt],ne[qt],ne[Vt]]):ce,S=J(re,_)?re:"xy",O=Z(ie,s.s,N,V),z=Z(oe,s.s,D,q),A=ne;var ue={l:Lt.cs,t:Pt.cs},fe=ae.offset(),he=W.offset(),de={x:O.x==F||S==nn,y:O.y==F||S==tn};he[_t]-=A[0],he[Vt]-=A[3];var ve={x:Math.round(he[Vt]-fe[Vt]+ue.l),y:Math.round(he[_t]-fe[_t]+ue.t)};if(B&&(m.n||m.i||(ve.x=Math.round(fe[Vt]-he[Vt]+ue.l)),m.n&&H&&(ve.x*=-1),m.i&&H&&(ve.x=Math.round(fe[Vt]-he[Vt]+(Lt.ms-ue.l)))),z.x!=D||z.y!=D||O.x==I||O.y==I||B){var pe=W[0],ye=M?pe.getBoundingClientRect():{width:pe[c.oW],height:pe[c.oH]},xe={w:ye[Kt]+A[3]+A[1],h:ye[$t]+A[0]+A[2]},me=function(e){var t=ci(e),n=t._wh,r=t.lt,i=t.xy,o=z[i]==(e&&B?D:P),a=z[i]==R,s=z[i]==j,c=O[i]==F,l=O[i]==I,u=Dt[n],f=fe[r],h=xe[n],d=he[r],v=a?2:1,p=d+h/2,y=f+u/2,x=h<=u&&d>=f&&d+h<=f+u;c?de[i]=!0:de[i]||((s||l)&&(de[i]=!!l&&x,o=h<u?p>y:p<y),ve[i]-=o||a?(u/v-h/v)*(e&&B&&H?-1:1):0)};me(!0),me(!1)}de.y&&delete ve.y,de.x&&delete ve.x,t=ve}if(E[ln]=G(!0,Q(t).x),E[un]=G(!1,Q(t).y),w=E[ln]!==n,b=E[un]!==n,(w||b)&&(r>0||L))if(L)se.animate(E,r);else{if(g={duration:r,complete:o},zi(i)==s.a){var we={};we[ln]=i[0],we[un]=i[1],g.specialEasing=we}else g.easing=i;se.animate(E,g)}else w&&se[ln](E[ln]),b&&se[un](E[un])},Tt.scrollStop=function(e,t,n){return se.stop(e,t,n),Tt},Tt.getElements=function(e){var t={target:te[0],host:ne[0],padding:ae[0],viewport:se[0],content:le[0],scrollbarHorizontal:{scrollbar:he[0],track:de[0],handle:ve[0]},scrollbarVertical:{scrollbar:pe[0],track:ye[0],handle:xe[0]},scrollbarCorner:fe[0]};return zi(e)==s.s?wi(t,e):t},Tt.getState=function(e){var t=function(e){if(!f.isPlainObject(e))return e;var t=Ai(!0,{},e),n=function(e,n){t.hasOwnProperty(e)&&(t[n]=t[e],delete t[e])};return n("w",Kt),n("h",$t),delete t.c,t},n={sleeping:t(q)||!1,autoUpdate:t(!ht),widthAuto:t(Oe),heightAuto:t(ze),padding:t(We),overflowAmount:t(Re),hideOverflow:t(Se),hasOverflow:t(ge),contentScrollSize:t(we),viewportSize:t(Dt),hostSize:t(me),documentMixed:t(P)};return zi(e)==s.s?wi(n,e):n},Tt.ext=function(e){var t,n=fr.split(" "),r=0;if(zi(e)==s.s){if(ur.hasOwnProperty(e))for(t=Ai(!0,{},ur[e]);r<n.length;r++)delete t[n[r]]}else for(r in t={},ur)t[r]=Ai(!0,{},Tt.ext(r));return t},Tt.addExt=function(t,n){var r,i,o,c,u=e[a].extension(t),h=!0;if(u){if(ur.hasOwnProperty(t))return Tt.ext(t);if((r=u.extension.call(Tt,Ai(!0,{},u.defaultOptions),f,l))&&(zi(o=r.contract)==s.f&&(h=zi(c=o(e))==s.b?c:h),h))return ur[t]=r,zi(i=r.added)==s.f&&i(n),Tt.ext(t)}else console.warn('A extension with the name "'+t+"\" isn't registered.")},Tt.removeExt=function(e){var t,n=ur[e];return!!n&&(delete ur[e],zi(t=n.removed)==s.f&&t(),!0)},Ti(r,i,o))return h(r,Tt),Tt;Tt=n}function br(e,t,n){for(var r=t.split(on),i=0;i<r.length;i++)e[0].addEventListener(r[i],n,{passive:!0})}function gr(e,t,n){for(var r=t.split(on),i=0;i<r.length;i++)e[0].removeEventListener(r[i],n,{passive:!0})}function Sr(e,t){var r=3333333,i=l.rO(),o="animationstart mozAnimationStart webkitAnimationStart MSAnimationStart",a="childNodes",u=function(){e[un](r)[ln](B?m.n?-r:m.i?0:r:r),t()};if(H){var h=e.append(mi(qn+" observed")).contents()[0];(h[bn]=new i(u)).observe(h)}else if(b>9||!w){e.prepend(mi(qn,mi({className:Vn,dir:"ltr"},mi(Vn,mi(Xn))+mi(Vn,mi({className:Xn,style:"width: 200%; height: 200%"})))));var v,p,y,x,g=e[0][a][0][a][0],S=f(g[a][1]),O=f(g[a][0]),z=f(O[0][a][0]),A=g[c.oW],M=g[c.oH],W=2,C=d.nativeScrollbarSize,T=function(){O[ln](r)[un](r),S[ln](r)[un](r)},k=function(){p=0,v&&(A=y,M=x,u())},E=function(e){return y=g[c.oW],x=g[c.oH],v=y!=A||x!=M,e&&v&&!p?(l.cAF()(p),p=l.rAF()(k)):e||k(),T(),e&&(l.prvD(e),l.stpP(e)),!1},L={},P={};P[_t]=-(C.y+1)*W,P[Bt]=C.x*-W,P[qt]=C.y*-W,P[Vt]=-(C.x+1)*W,f(g).css(P),O.on(Zt,E),S.on(Zt,E),e.on(o,function(){E(!1)}),L[Kt]=r,L[$t]=r,z.css(L),T()}else{var D=G[0],R=D.attachEvent,j=b!==n;if(R)e.prepend(mi(qn)),Ci(e,rn+qn)[0].attachEvent("onresize",u);else{var N=D.createElement(s.o);N.setAttribute("tabindex","-1"),N.setAttribute(c.c,qn),N.onload=function(){var e=this.contentDocument.defaultView;e.addEventListener("resize",u),e.document.documentElement.style.display="none"},N.type="text/html",j&&e.prepend(N),N.data="about:blank",j||e.prepend(N),e.on(o,u)}}if(e[0]===ie[0]){var F=function(){var t=ne.css("direction"),n={},i=0,o=!1;return t!==ke&&("ltr"===t?(n[Vt]=0,n[Bt]=Gt,i=r):(n[Vt]=Gt,n[Bt]=0,i=m.n?-r:m.i?0:r),ie.children().eq(0).css(n),e[ln](i)[un](r),ke=t,o=!0),o};F(),e.on(Zt,function(e){return F()&&Zr(),l.prvD(e),l.stpP(e),!1})}}function Or(e){if(H){var t=e.contents()[0];t[bn].disconnect(),delete t[bn]}else Hi(e.children(rn+qn).eq(0))}function zr(e){}function Ar(e){}function Mr(){dt&&!ht&&(ut.observe(ne[0],{attributes:!0,attributeOldValue:!0,attributeFilter:[c.i,c.c,c.s]}),ft.observe(E?te[0]:le[0],{attributes:!0,attributeOldValue:!0,subtree:!E,childList:!E,characterData:!E,attributeFilter:E?["wrap","cols","rows"]:[c.i,c.c,c.s]}),ht=!0)}function Wr(){dt&&ht&&(ut.disconnect(),ft.disconnect(),ht=!1)}function Hr(){if(!q){var e=ie[0],t={w:e[c.sW],h:e[c.sH]};if(T){var n=Si(t,Je);Je=t,n&&Zr(!0,!1)}else Je=t}}function Cr(){St&&ii(!0)}function Tr(){St&&!ee.hasClass(cr)&&ii(!1)}function kr(){gt&&(ii(!0),clearTimeout(xt),xt=setTimeout(function(){gt&&!k&&ii(!1)},100))}function Er(e){q||(V!==n?clearTimeout(V):((bt||gt)&&ii(!0),yi()||Mi(ne,Tn),li("onScrollStart",e)),ai(!0,se[ln]()),ai(!1,se[un]()),li("onScroll",e),V=setTimeout(function(){k||(Lr(),li("onScrollStop",e))},jt))}function Lr(){clearTimeout(V),V=n,(bt||gt)&&ii(!1),yi()||Wi(ne,Tn)}function Pr(){Gr(),Tt.update(Gt)}function Dr(e){var t=e.keyCode;if(!pi(t)){if(0===xr.length){var n=function(){Gr(),Tt.update(Gt)};n(),vt=setInterval(n,1e3/60)}-1===f.inArray(t,xr)&&xr.push(t)}}function Rr(e){var t=e.keyCode;if(!pi(t)){var n=f.inArray(t,xr);n>-1&&xr.splice(n,1),0===xr.length&&(Gr(),Tt.update(Gt),clearInterval(vt))}}function jr(){setTimeout(function(){k||(Gr(),Tt.update(Gt))},50)}function Nr(){pt=!0}function Fr(){pt=!1,clearInterval(vt),xr=[],Gr(),Tt.update(Gt)}function Ir(e){return te[ln](m.i&&nt?9999999:0),te[un](0),l.prvD(e),l.stpP(e),!1}function Ur(e){if(!q){var t=(e.originalEvent||e).touches!==n;(1===l.mBtn(e)||t)&&(ht&&(At=!0,Wr()),mr=l.page(e),wr.w=ne[0][c.oW]-(D?0:j),wr.h=ne[0][c.oH]-(D?0:N),G.on(mn,qr).on(dn,_r).on(hn,Br),Mi(ee,cr),fe.setCapture&&fe.setCapture(),l.prvD(e),l.stpP(e))}}function _r(e){var t=l.page(e),n={};(Ht||Wt)&&(n[Kt]=wr.w+t.x-mr.x),(Ct||Wt)&&(n[$t]=wr.h+t.y-mr.y),ne.css(n),l.stpP(e)}function Br(e){var t=e!==n;G.off(mn,qr).off(dn,_r).off(hn,Br),Wi(ee,cr),fe.releaseCapture&&fe.releaseCapture(),t&&(At&&Mr(),Tt.update(Gt)),At=!1}function qr(e){return l.prvD(e),!1}function Vr(){Zr()}function Xr(){var e={};return L&&ce&&(e.w=di(ce.css(Xt+Kt)),e.h=di(ce.css(Xt+$t)),e.c=Si(e,st),e.f=!0),st=e,e.c||!1}function Yr(e,t){var r=t!==n&&null!==t?t.split(on):Qt,i=e!==n&&null!==e?e.split(on):Qt;if(r===Qt&&i===Qt)return!1;var o,a,s,c,l=hi(i,r),u=!1,h=it!==n&&null!==it?it.split(on):[Qt],d=rt!==n&&null!==rt?rt.split(on):[Qt],v=f.inArray(lr,l),p=l[o];for(v>-1&&l.splice(v,1),o=0;o<l.length;o++)if(0!==(p=l[o]).indexOf(On)){for(s=!0,c=!0,a=0;a<h.length;a++)if(p===h[a]){s=!1;break}for(a=0;a<d.length;a++)if(p===d[a]){c=!1;break}if(s&&c){u=!0;break}}return u}function Kr(e){var t=e.attributeName,n=e.target,r=e.type,i="closest";if(n===le[0])return null===t;if("attributes"===r&&(t===c.c||t===c.s)&&!E){if(typeof n[i]!=s.f)return!0;if(null!==n[i](rn+qn)||null!==n[i](rn+Kn)||null!==n[i](rn+tr))return!1}return!0}function $r(){if(q)return!1;var e,t=E&&Oe&&!Ie?te.val().length:0,n=!ht&&Oe&&!E,r={},i={};C&&(r={x:se[0][c.sW],y:se[0][c.sH]}),n&&(e=le.css(Jt),i[Jt]=B?Bt:Vt,i[Kt]=Gt,le.css(i));var o={w:xi()[c.sW]+t,h:xi()[c.sH]+t};n&&(i[Jt]=e,i[Kt]=en,le.css(i));var a=Xr(),s=Si(o,$e),l=Si(r,ct,tn,nn);return $e=o,ct=r,s||a||l}function Jr(){if(q||ht)return!1;var e=ne.attr(c.i)||Qt,t=gi(e,_e),n=ne.attr(c.c)||Qt,r=gi(n,Be),i=ne.attr(c.s)||Qt,o=gi(i,qe),a=ne.is(":visible")||Qt,s=gi(a,Ve),l=E&&te.attr("rows")||Qt,u=gi(l,Xe),f=E&&te.attr("cols")||Qt,h=gi(f,Ye),d=E&&te.attr("wrap")||Qt,v=gi(d,Ke);return _e=e,r&&(r=Yr(Be,n)),Be=n,qe=i,Ve=a,Xe=l,Ye=f,Ke=d,t||r||o||s||u||h||v}function Qr(e){if(!T)return!0;var t="flex-grow",n="flex-shrink",r="flex-basis",i=[Kt,Xt+Kt,Yt+Kt,Ft+Vt,Ft+Bt,Vt,Bt,"font-weight","word-spacing",t,n,r],o=[It+Vt,It+Bt,Ut+Vt+Kt,Ut+Bt+Kt],a=[$t,Xt+$t,Yt+$t,Ft+_t,Ft+qt,_t,qt,"line-height",t,n,r],s=[It+_t,It+qt,Ut+_t+Kt,Ut+qt+Kt],c="s",l="v-s",u=De.x===c||De.x===l,f=!1,h=function(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1};return(De.y===c||De.y===l)&&((f=h(a,e))||D||(f=h(s,e))),u&&!f&&((f=h(i,e))||D||(f=h(o,e))),f}function Gr(){if(!q){var e,t,n,r,i=!Ie,o=Dt.w-(D||Ee||!Oe?0:N+I),a=Dt.h-(D||Ee||!ze?0:N+I),s={},l=Oe||i,u=te[0];return s[Xt+Kt]=Qt,s[Xt+$t]=Qt,s[Kt]=Gt,te.css(s),e=u[c.oW],t=l?Math.max(e,u[c.sW]-1):1,t+=Oe?U+(D?0:i?0:j+F):0,s[Kt]=Oe?t:en,s[$t]=Gt,te.css(s),n=u[c.oH],r=Math.max(n,u[c.sH]-1),s[Kt]=t,s[$t]=r,ue.css(s),s[Xt+Kt]=o+(!D&&Oe?j+F:0),s[Xt+$t]=a+(!D&&ze?N+I:0),te.css(s),{ow:e,oh:n,dw:t,dh:r}}}function Zr(e,t,r,i){var o=l.now(),a=dr>0&&T&&o-$<dr&&!ze&&!Oe&&!i,s=ne.is(":hidden"),u=gi(s,lt,r);if(lt=s,clearTimeout(J),a&&(hr.h=e,hr.c=t,hr.f=r,J=setTimeout(Zr,dr)),!(k||a||q||T&&!r&&s||"inline"===ne.css("display"))){$=o,e=e||hr.h,t=t||hr.c,r=r||hr.f,hr={},e=e!==n&&e,t=t!==n&&t,r=r!==n&&r,!g||y.x&&y.y?O=Ai(!0,{},d.nativeScrollbarSize):(O.x=0,O.y=0),Rt={x:3*(O.x+(y.x?0:3)),y:3*(O.y+(y.y?0:3))},zr(ie),zr(re);var h={l:se[ln](),t:se[un]()},p=K.scrollbars,b=K.textarea,z=p.visibility,A=gi(z,Qe,r),M=p.autoHide,H=gi(M,Ge,r),P=p.clickScrolling,V=gi(P,Ze,r),X=p.dragScrolling,Y=gi(X,et,r),Q=K.className,G=gi(Q,rt,r),Z=K.resize,ee=gi(Z,tt,r)&&!L,he=!!E&&"off"!==te.attr("wrap"),de=gi(he,Ie,r),ve=K.paddingAbsolute,pe=gi(ve,Ee,r),ye=K.clipAlways,xe=gi(ye,Le,r),ke=K.sizeAutoCapable&&!L,_e=gi(ke,Fe,r),Be=K.nativeScrollbarsOverlaid.showNativeScrollbars,qe=gi(Be,je),Ve=K.autoUpdate,Xe=gi(Ve,Ne),Ye=K.overflowBehavior,Ke=Si(Ye,De,tn,nn,r),$e=b.dynWidth,Je=gi(at,$e),ct=b.dynHeight,ut=gi(ot,ct);if(wt="n"===M,bt="s"===M,gt="m"===M,St="l"===M,mt=p.autoHideDelay,Ot=p.touchSupport,it=rt,Mt="n"===Z,Wt="b"===Z,Ht="h"===Z,Ct="v"===Z,nt=K.normalizeRTL,Be=Be&&y.x&&y.y,Qe=z,Ge=M,Ze=P,et=X,rt=Q,tt=Z,Ie=he,Ee=ve,Le=ye,Fe=ke,je=Be,Ne=Ve,De=Ai(!0,{},Ye),at=$e,ot=ct,ge=ge||{x:!1,y:!1},G&&(Wi(ne,it+on+lr),Mi(ne,Q!==n&&null!==Q&&Q.length>0?Q:lr)),Xe&&(!0===Ve?(Wr(),v.add(Tt)):null===Ve&&w?(Wr(),v.add(Tt)):(v.remove(Tt),Mr())),_e)if(ke)if(oe===n&&(oe=f(mi(_n)),ae.before(oe)),R)re.show();else{re=f(mi(Bn)),oe.before(re);var ft={w:-1,h:-1};Sr(re,function(){var e={w:re[0][c.oW],h:re[0][c.oH]};Si(e,ft)&&(T&&ze&&e.h>0||Oe&&e.w>0?Zr():(T&&!ze&&0===e.h||!Oe&&0===e.w)&&Zr()),ft=e}),R=!0,null!==S&&re.css($t,S+"(100% + 1px)")}else R&&re.hide();r&&(ie.find("*").trigger(Zt),R&&re.find("*").trigger(Zt));var dt,vt=ne.css("direction"),yt=gi(vt,Te,r),xt=ne.css("box-sizing"),zt=gi(xt,Me,r),At={c:r,t:di(ne.css(It+_t)),r:di(ne.css(It+Bt)),b:di(ne.css(It+qt)),l:di(ne.css(It+Vt))};try{dt=R?re[0].getBoundingClientRect():null}catch(Ii){return}D="border-box"===xt;var kt=(B="rtl"===vt)?Vt:Bt,Lt=B?Bt:Vt,Pt=ne[0],jt=ae[0],Nt=!1,rn=!(!R||"none"===ne.css(Jt))&&(0===Math.round(dt.right-dt.left)&&(!!ve||Pt[c.cW]-j>0));if(ke&&!rn){var an=Pt[c.oW],sn=oe.css(Kt);oe.css(Kt,Gt);var cn=Pt[c.oW];oe.css(Kt,sn),(Nt=an!==cn)||(oe.css(Kt,an+1),cn=Pt[c.oW],oe.css(Kt,sn),Nt=an!==cn)}var hn=(rn||Nt)&&ke&&!s,yn=gi(hn,Oe,r),xn=!hn&&Oe,mn=!(!R||s)&&0===Math.round(dt.bottom-dt.top),wn=gi(mn,ze,r),bn=!mn&&ze,gn="-"+Kt,Sn=hn&&D||!D,On=mn&&D||!D,zn={c:r,t:On?di(ne.css(Ut+_t+gn),!0):0,r:Sn?di(ne.css(Ut+Bt+gn),!0):0,b:On?di(ne.css(Ut+qt+gn),!0):0,l:Sn?di(ne.css(Ut+Vt+gn),!0):0},An={c:r,t:di(ne.css(Ft+_t)),r:di(ne.css(Ft+Bt)),b:di(ne.css(Ft+qt)),l:di(ne.css(Ft+Vt))},Mn={h:String(ne.css(Yt+$t)),w:String(ne.css(Yt+Kt))},Wn={},Pn={},Dn=function(){return{w:Pt[c.cW],h:Pt[c.cH]}},Rn=function(){var e=jt.getBoundingClientRect();return e[Kt]?{w:e[Kt],h:e[$t]}:{w:jt[c.oW],h:jt[c.oH]}};if(j=At.l+At.r,N=At.t+At.b,At.ax=ve?j:0,At.ay=ve?N:0,At.c=Oi(At,We),F=zn.l+zn.r,I=zn.t+zn.b,zn.c=Oi(zn,He),U=An.l+An.r,_=An.t+An.b,An.c=Oi(An,Ce),Mn.ih=di(Mn.h),Mn.iw=di(Mn.w),Mn.ch=Mn.h.indexOf("px")>-1,Mn.cw=Mn.w.indexOf("px")>-1,Mn.c=Si(Mn,Ae,r),Te=vt,Me=xt,Oe=hn,ze=mn,We=At,He=zn,Ce=An,Ae=Mn,yt&&R&&re.css(Jt,Lt),At.c||yt||pe||yn||wn||zt||_e){var jn={},Nn={};ui(Pn,Ft,[-At.t,-At.r,-At.b,-At.l]),ve?(ui(jn,Qt,[At.t,At.r,At.b,At.l]),ui(E?Nn:Wn,It)):(ui(jn,Qt),ui(E?Nn:Wn,It,[At.t,At.r,At.b,At.l])),ae.css(jn),te.css(Nn)}Dt=Rn();var Fn=!!E&&Gr();if(mn&&(wn||pe||zt||Mn.c||At.c||zn.c)?(Mn.cw&&(Wn[Yt+$t]=Mn.ch?Mn.ih-At.ay+(D?-I:N):Qt),Wn[$t]=Gt):(wn||pe)&&(Wn[Yt+$t]=Qt,Wn[$t]=en),hn&&(yn||pe||zt||Mn.c||At.c||zn.c||yt)?(Mn.cw&&(Wn[Yt+Kt]=Mn.cw?Mn.iw-At.ax+(D?-F:j)+(y.y?x.y:0):Qt),Wn[Kt]=Gt,Pn[Yt+Kt]=en):(yn||pe)&&(Wn[Yt+Kt]=Qt,Wn[Kt]=en,Wn[Jt]=Qt,Pn[Yt+Kt]=Qt),hn&&(Mn.cw||(Wn[Yt+Kt]=Qt),Pn[Kt]=E&&$e?Fn.dw:Gt,Wn[Kt]=Gt,Wn[Jt]=Lt),mn&&(Mn.ch||(Wn[Yt+$t]=Qt),Pn[$t]=E?ct?Fn.dh:Gt:le[0][c.cH]),ke&&oe.css(Pn),le.css(Wn),Wn={},Pn={},e||t||yt||zt||pe||yn||hn||wn||mn||Mn.c||qe||Ke||xe||ee||A||Je||ut||de||r){var In="overflow",qn=In+"-x",Vn=In+"-y",Xn="hidden",Yn="visible",Kn=C?y.x||y.y||Dt.w<Rt.y||Dt.h<Rt.x||mn||u:mn,$n={},Jn=ge.y&&Se.ys&&!Be?y.y?se.css(kt):-O.y:0,Qn=ge.x&&Se.xs&&!Be?y.x?se.css(qt):-O.x:0;ui($n,Qt),se.css($n),Kn&&le.css(In,Xn);var Gn=xi(),Zn=C&&!Kn?se[0]:Gn,er={w:Gn[c.cW],h:Gn[c.cH]},tr={w:Math.max(Gn[c.sW],Zn[c.sW]),h:Math.max(Gn[c.sH],Zn[c.sH])},ar={w:E&&Fn&&!$e?Fn.ow:hn?er.w:tr.w,h:E&&Fn&&!ct?Fn.oh:mn?er.h:tr.h};$n[qt]=bn?Qt:Qn,$n[kt]=xn?Qt:Jn,se.css($n),Dt=Rn();var sr=Dn(),cr={w:Math.max(ar.w+At.ax,sr.w-j)-($e&&E&&hn?U+(D?0:j+F):0),h:Math.max(ar.h+At.ay,sr.h-N)};if(cr.c=Si(cr,Pe,r),Pe=cr,ke){(cr.c||mn||hn)&&(Pn[Kt]=cr.w,Pn[$t]=cr.h);var ur=Pn[Kt]+(D?F:-j),fr=Pn[$t]+(D?I:-j),vr={};(!hn||!hn&&zn.c)&&(Pn[Kt]=sr.w-(D?0:j+F)-1-U),(!mn||!mn&&zn.c)&&(Pn[$t]=sr.h-(D?0:N+I)-1-_),Mn.cw&&Mn.iw===ur&&(Pn[Kt]=ur+(D?0:j)+1),Mn.ch&&Mn.ih===fr&&(Pn[$t]=fr+(D?0:N)+1),hn&&(er.w<Dt.w||E&&!he)&&0===j&&(E&&(vr[Kt]=di(ue.css(Kt))-1),Pn[Kt]-=1),mn&&(er.h<Dt.h||E)&&0===N&&(E&&(vr[$t]=di(ue.css($t))-1),Pn[$t]-=1),ar.h>0&&(Pn[Kt]=Math.max(1,Pn[Kt]),Pn[$t]=Math.max(1,Pn[$t])),E&&ue.css(vr),oe.css(Pn)}hn&&(Wn[Kt]=en),!hn||D||ht||(Wn[Jt]="none"),le.css(Wn),Wn={};var pr=Gn.getBoundingClientRect(),yr=pr[Kt]||0,xr=pr[$t]||0,mr={w:Math.max(Gn[c.sW],Zn[c.sW])+di(yr)-yr,h:Math.max(Gn[c.sH],Zn[c.sH])+di(xr)-xr};mr.c=t=Si(mr,we,r),we=mr,Kn&&le.css(In,Qt),Dt=Rn(),e=Si(sr=Dn(),me),me=sr;var wr={x:"v-s"===Ye.x,y:"v-s"===Ye.y},Or={x:"v-h"===Ye.x,y:"v-h"===Ye.y},Hr={x:"s"===Ye.x,y:"s"===Ye.y},Er={x:Math.max(0,Math.round(100*(mr.w-Dt.w))/100),y:Math.max(0,Math.round(100*(mr.h-Dt.h))/100)},Lr=E&&(0===Dt.w||0===Dt.h),Pr=0===se[0].scrollLeftMax&&Er.x>0&&Er.x<1||0===se[0].scrollTopMax&&Er.y>0&&Er.y<1;(Lr||Pr)&&(Er.x=Er.y=0);var Dr={x:Er.x>0,y:Er.y>0},Rr={x:Dr.x,y:Dr.y};(wr.x||Or.x)&&(Rr.x=Dr.y&&!wr.y&&!Or.y),(wr.y||Or.y)&&(Rr.y=Dr.x&&!wr.x&&!Or.x),Rr.xs=!!Rr.x&&(Hr.x||wr.x),Rr.ys=!!Rr.y&&(Hr.y||wr.y);var jr={x:Dr.x&&Rr.xs,y:Dr.y&&Rr.ys},Nr=Re;if(Er.c=Si(Er,Re,tn,nn,r),Re=Er,Dr.c=Si(Dr,ge,tn,nn,r),ge=Dr,Rr.c=Si(Rr,Se,tn,nn,r),Se=Rr,y.x||y.y){var Fr="px solid transparent",Ir={},_r={},Br=r;(Dr.x||Dr.y)&&(_r.w=y.y&&Dr.y?mr.w+x.y:Qt,_r.h=y.x&&Dr.x?mr.h+x.x:Qt,Br=gi(_r,be,r),be=_r),(Dr.c||Rr.c||mr.c||yt||yn||wn||hn||mn||qe)&&(Wn[Ft+Lt]=Wn[Ut+Lt]=Qt,y.x&&Dr.x&&Rr.xs?(Wn[Ft+qt]=mn?Be?Qt:x.x:Qt,Wn[Ut+qt]=mn||Be?Qt:x.x+Fr):(_r.h=Wn[Ft+qt]=Wn[Ut+qt]=Qt,Br=!0),y.y&&Dr.y&&Rr.ys?(Wn[Ft+kt]=hn?Be?Qt:x.y:Qt,Wn[Ut+kt]=Be?Qt:x.y+Fr):(_r.w=Wn[Ft+kt]=Wn[Ut+kt]=Qt,Br=!0)),Be&&(_r.w=_r.h=Qt,Br=!0),Br&&(Ir[Kt]=Rr.y?_r.w:Qt,Ir[$t]=Rr.x?_r.h:Qt,ce||(ce=f(mi(Un)),se.prepend(ce)),ce.css(Ir)),le.css(Wn)}var qr={};jn={};if(e||Dr.c||Rr.c||mr.c||Ke||zt||qe||yt||xe||wn){qr[Lt]=Qt;var Vr=function(){qr[qt]=Qt,Et.h=0},Yr=function(){qr[kt]=Qt,Et.w=0};if(Dr.x&&Rr.xs?(qr[qn]=Zt,Be?Vr():(qr[qt]=-(y.x?x.x:O.x),Et.h=y.x?x.y:0)):(qr[qn]=Qt,Vr()),Dr.y&&Rr.ys?(qr[Vn]=Zt,Be?Yr():(qr[kt]=-(y.y?x.y:O.y),Et.w=y.y?x.x:0)):(qr[Vn]=Qt,Yr()),(Dt.h<Rt.x||Dt.w<Rt.y)&&(Dr.x&&Rr.x&&!y.x||Dr.y&&Rr.y&&!y.y)?(qr[It+_t]=Rt.x,qr[Ft+_t]=-Rt.x,qr[It+Lt]=Rt.y,qr[Ft+Lt]=-Rt.y):qr[It+_t]=qr[Ft+_t]=qr[It+Lt]=qr[Ft+Lt]=Qt,qr[It+kt]=qr[Ft+kt]=Qt,Dr.x&&Rr.x||Dr.y&&Rr.y||Lr?E&&Lr&&(jn[qn]=jn[Vn]=Xn):(!ye||Or.x||wr.x||Or.y||wr.y)&&(E&&(jn[qn]=jn[Vn]=Qt),qr[qn]=qr[Vn]=Yn),ae.css(jn),se.css(qr),qr={},(Dr.c||zt||yn||wn)&&(!y.x||!y.y)){var Kr=le[0],$r=Kr[c.s];$r.webkitTransform="scale(1)",$r.display="run-in",Kr[c.oH],$r.display=Qt,$r.webkitTransform=Qt}}if(Wn={},yt||yn||wn)if(B&&hn){var Jr=le.css(Jt),Qr=Math.round(le.css(Jt,Qt).css(Vt,Qt).position().left);le.css(Jt,Jr),Qr!==Math.round(le.position().left)&&(Wn[Vt]=Qr)}else Wn[Vt]=Qt;le.css(Wn);var ei="v"===z,ti="h"===z,ni="a"===z,ci=l.bind(ri,0,!0,!0,jr.x),fi=l.bind(ri,0,!1,!0,jr.y),hi=l.bind(ri,0,!0,!1,jr.x),pi=l.bind(ri,0,!1,!1,jr.y);if(Rr.x||Rr.y?Mi(ne,kn):Wi(ne,kn),Rr.x?Mi(ne,En):Wi(ne,En),Rr.y?Mi(ne,Ln):Wi(ne,Ln),yt&&(B?Mi(ne,Hn):Wi(ne,Hn)),L&&Mi(ne,Cn),ee){var yi=function(){fe.on(fn,Ur)},wi=function(){fe.off(fn,Ur)};Mt?(Mi(ne,Cn),Wi(fe,[nr,rr,ir,or].join(on)),wi()):(Wi(ne,Cn),Mi(fe,nr),Wt?Mi(fe,rr):Ht?Mi(fe,ir):Ct&&Mi(fe,or),wi(),yi())}if((A||Ke||Rr.c||Dr.c||qe)&&(Be?qe&&(Wi(ne,Tn),Be&&(hi(),pi())):ni?(jr.x?ci():hi(),jr.y?fi():pi()):ei?(ci(),fi()):ti&&(hi(),pi())),H||qe){var bi=function(e){W?e?br(ne,dn,kr):(br(ne,vn,Cr),br(ne,pn,Tr)):e?ne.on(dn,kr):ne.on(vn,Cr).on(pn,Tr),T||ne.one("mouseover",Cr)},zi=function(){W?(gr(ne,dn,kr),gr(ne,vn,Cr),gr(ne,pn,Tr)):ne.off(dn,kr).off(vn,Cr).off(pn,Tr)};St||gt?(zi(),bi(gt)):zi(),wt?ii(!0):ii(!1,!0)}if((e||Er.c||wn||yn||ee||zt||pe||qe||yt)&&(oi(!0),ai(!0,h.l),oi(!1),ai(!1,h.t)),V&&si(!0,P),Y&&si(!1,X),E&&t){var Hi=vi();if(Hi){var Ci=Ue===n||Hi.rows!==Ue.rows,Ti=Hi.cR,ki=Hi.cC,Ei=Hi.w,Li=Hi.r,Pi=Hi.c,Di=Hi.p,Ri=Hi.m===Di&&pt,ji={x:he||ki!==Pi||Ti!==Ei?-1:Re.x,y:(he?Ri||Ci&&Nr!==n&&h.t===Nr.y:(Ri||Ci)&&Ti===Li)?Re.y:-1},Ni=ji.x>-1,Fi=ji.y>-1;(Ni||Fi)&&(Fi&&se[un](ji.y),Ni&&(B&&nt&&m.i?se[ln](0):se[ln](ji.x)))}Ue=Hi}else E||(B&&m.i&&y.y&&Dr.x&&nt&&(h.l+=Et.w||0),se[ln](h.l),se[un](h.t));yt&&li("onDirectionChanged",{isRTL:B,dir:vt}),e&&li("onHostSizeChanged",{width:me.w,height:me.h}),t&&li("onContentSizeChanged",{width:we.w,height:we.h}),(Dr.c||Rr.c)&&li("onOverflowChanged",{x:Dr.x,y:Dr.y,xScrollable:Rr.xs,yScrollable:Rr.ys,clipped:Rr.x||Rr.y}),Er.c&&li("onOverflowAmountChanged",{x:Er.x,y:Er.y})}L&&(ge.c||st.c)&&(st.f||Xr(),y.y&&ge.x&&le.css(Xt+Kt,st.w+x.y),y.x&&ge.y&&le.css(Xt+$t,st.h+x.x),st.c=!1),Ar(ie),Ar(re),li("onUpdated",{forced:r})}}function ei(e){Y=Ai(!0,{},Y,A.v(e,A.t,!0)),K=Ai(!0,{},K,A.v(e,A.t,!1,!0))}function ti(){he=f(mi(Kn+on+ar)),de=f(mi($n)),ve=f(mi(Qn)),pe=f(mi(Kn+on+sr)),ye=f(mi($n)),xe=f(mi(Qn)),he.append(de),de.append(ve),pe.append(ye),ye.append(xe),ae.after(pe),ae.after(he),z&&(he.on(wn,function(e){e.target===he[0]&&(oi(!0),ai(!0,se[ln]()))}),pe.on(wn,function(e){e.target===pe[0]&&(oi(!1),ai(!1,se[un]()))})),ni(!0),ni(!1),fe=f(mi(tr)),ne.append(fe)}function ni(e){var t,r,i,o=ci(e),a=Q.top!==Q,s=o.xy,c=o.XY,u=Zt+o.LT,h="active",d=1,v=[16,17];function p(){d=.5}function y(){d=1}function x(e){f.inArray(e.keyCode,v)>-1&&p()}function w(e){f.inArray(e.keyCode,v)>-1&&y()}function g(e){var t=(e.originalEvent||e).touches!==n;return!(q||yi()||!et||t&&!Ot)&&(1===l.mBtn(e)||t)}function S(n){if(g(n)){var i=o.i.tl,f=o.i.hl,h=o.i.ms*(((b&&a?n["screen"+c]:l.page(n)[s])-r)/(i-f));h=isFinite(h)?h:0,B&&e&&!m.i&&(h*=-1),se[u](t+h),W||l.prvD(n)}else O(n)}function O(e){e=e||e.originalEvent,Wi(ee,cr),Wi(o.h,h),Wi(o.t,h),Wi(o.s,h),G.off(dn,S).off(hn,O).off(yn,x).off(xn,w).off(mn,qr),y(),t=n,r=n,i!==n&&(Tt.scrollStop(),clearTimeout(i),i=n);var a=ne[0].getBoundingClientRect();e.clientX>=a.left&&e.clientX<=a.right&&e.clientY>=a.top&&e.clientY<=a.bottom||Tr(),(bt||gt)&&ii(!1)}function z(i){t=(t=se[u]())===n?0:t,(B&&e&&!m.n||!B)&&(t=t<0?0:t),r=b&&a?i["screen"+c]:l.page(i)[s],Mi(ee,cr),Mi(o.h,h),Mi(o.s,h),G.on(dn,S).on(hn,O).on(mn,qr),!b&&P||l.prvD(i),l.stpP(i)}o.h.on(fn,function(e){g(e)&&z(e)}),o.t.on(fn,function(t){if(g(t)){var a,c,f=Dt[o._wh],v=o.t.offset()[o.lt],y=t.ctrlKey,b=t.shiftKey,S=b&&y,A=!0,M="linear",W=function(){if(!k){var l=r-v,h=o.i.tl,p=o.i.ho,y=o.i.hl,x=o.i.ms,w=270*d,g=A?Math.max(400,w):w,O=x*((l-y/2)/(h-y)),H=B&&e&&(!m.i&&!m.n||nt),C=H?p<l:p>l,T={};b?(O=isFinite(O)?O:0,B&&e&&!m.i&&(O=x-O),S?(T.n=!1,T[s]=O,Tt.scroll(T,130,M,function(){z(t)})):(se[u](O),z(t))):(a=A?C:a,c=H?a?p+y>=l:p<=l:a?p<=l:p+y>=l,T[s]=a?"-="+f:"+="+f,Tt.scrollStop(),Tt.scroll(T,w,M),c?(clearTimeout(i),Tt.scrollStop(),i=n):i=setTimeout(W,g),A=!1)}};y&&p(),r=l.page(t)[s],Mi(ee,cr),Mi(o.t,h),Mi(o.s,h),G.on(hn,O).on(yn,x).on(xn,w).on(mn,qr),W(),l.prvD(t),l.stpP(t)}}).on(vn,function(){(bt||gt)&&(zt=!0,ii(!0))}).on(pn,function(){(bt||gt)&&(zt=!1,ii(!1))}),o.s.on(fn,function(e){l.stpP(e)})}function ri(e,t,n){var r=e?An:Mn,i=e?he:pe;t?Wi(ne,r):Mi(ne,r),n?Wi(i,Zn):Mi(i,Zn)}function ii(e,t){if(clearTimeout(yt),e)Wi(he,er),Wi(pe,er);else{var n="active",r=function(){if(!zt&&!k){var e=ve.hasClass(n)||xe.hasClass(n);!e&&(bt||gt||St)&&Mi(he,er),!e&&(bt||gt||St)&&Mi(pe,er)}};mt>0&&!0!==t?yt=setTimeout(r,mt):r()}}function oi(e){var t={},n=ci(e),r=1e6,i=Math.min(1,(me[n._wh]-(Ee?e?j:N:0))/we[n._wh]);t[n.wh]=Math.floor(100*i*r)/r+"%",yi()||n.h.css(t),n.i.hl=n.h[0]["offset"+n.WH],n.i.hlr=i}function ai(e,t){var n,r,i,o=B&&e,a={},s=ci(e),c="translate(",l="transform",u=se[0][Zt+s.WH]-se[0]["client"+s.WH],f=s.i.hl,h=s.t[0]["offset"+s.WH],d=h-f;m.n&&o&&(u*=-1),i=t/u,i=isNaN(i)?0:Math.min(1,i),s.i.ms=u,s.i.cs=t,s.i.csr=i,d*=i,d=isNaN(d)?0:d,o&&!m.i&&(d=h-f-d),d=Math.max(0,d),M?(r=o?-(h-f-d):d,n=e?c+r+"px, 0)":c+"0, "+r+"px)",a["-webkit-"+l]=n,a["-moz-"+l]=n,a["-ms-"+l]=n,a["-o-"+l]=n,a[l]=n):a[s.lt]=d,yi()||s.h.css(a),s.i.ho=d,s.i.tl=h}function si(e,t){var n=t?"removeClass":"addClass",r=e?ye:xe,i=e?Jn:Gn;(e?de:ve)[n](i),r[n](i)}function ci(e){return{wh:e?Kt:$t,WH:e?"Width":"Height",lt:e?Vt:_t,LT:e?"Left":"Top",xy:e?tn:nn,XY:e?"X":"Y",_wh:e?"w":"h",_lt:e?"l":"t",t:e?de:ye,h:e?ve:xe,s:e?he:pe,i:e?Lt:Pt}}function li(e,t){if(T){var n,r=K.callbacks[e],i=e;"on"===i.substr(0,2)&&(i=i.substr(2,1).toLowerCase()+i.substr(3)),zi(r)==s.f&&r.call(Tt,t),f.each(ur,function(){zi((n=this).on)==s.f&&n.on(i,t)})}}function ui(e,t,r){r===n&&(r=[Qt,Qt,Qt,Qt]),e[t+_t]=r[0],e[t+Bt]=r[1],e[t+qt]=r[2],e[t+Vt]=r[3]}function fi(t){var n="ownerDocument",r="HTMLElement",i=t&&t[n]&&t[n].parentWindow||e;return typeof i[r]==s.o?t instanceof i[r]:t&&typeof t==s.o&&null!==t&&1===t.nodeType&&typeof t.nodeName==s.s}function hi(e,t){var n,r,i=[],o=[];for(n=0;n<e.length;n++)i[e[n]]=!0;for(n=0;n<t.length;n++)i[t[n]]?delete i[t[n]]:i[t[n]]=!0;for(r in i)o.push(r);return o}function di(t,n){var r=n?e.parseFloat(t):e.parseInt(t);return isNaN(r)?0:r}function vi(){var e=te[0].selectionStart;if(e!==n){var t,r,i="length",o=te.val(),a=o[i],s=o.split("\n"),c=s[i],l=o.substr(0,e).split("\n"),u=0,f=0,h=l[i],d=l[l[i]-1][i];for(r=0;r<s[i];r++)(t=s[r][i])>f&&(u=r+1,f=t);return{cR:h,cC:d,r:c,c:f,w:u,p:e,m:a}}}function pi(e){for(var t=0;t<yr.length;t++)if(e===yr[t])return!0;return!1}function yi(){return je&&y.x&&y.y}function xi(){return E?ue[0]:le[0]}function mi(e,t){return"<div "+(e?zi(e)==s.s?'class="'+e+'"':function(){var t,n="";if(f.isPlainObject(e))for(t in e)n+=("className"===t?"class":t)+'="'+e[t]+'" ';return n}():Qt)+">"+(t||Qt)+"</div>"}function wi(e,t){for(var n,r=t.split(rn),i=0;i<r.length;i++){if(!e.hasOwnProperty(r[i]))return;n=e[r[i]],i<r.length&&zi(n)==s.o&&(e=n)}return n}function bi(e,t,n){for(var r=t.split(rn),i=r.length,o=0,a={},s=a;o<i;o++)a=a[r[o]]=o+1<i?{}:n;f.extend(e,s,!0)}function gi(e,t,r){return!0===r?r:t===n||e!==t}function Si(e,t,r,i,o){if(!0===o)return o;if(i===n&&o===n){if(!0===r)return r;r=n}return r=r===n?"w":r,i=i===n?"h":i,t===n||(e[r]!==t[r]||e[i]!==t[i])}function Oi(e,t){return t===n||(e.t!==t.t||e.r!==t.r||e.b!==t.b||e.l!==t.l)}function zi(e){return l.type(e)}function Ai(){return f.extend.apply(this,arguments)}function Mi(e,t){return kt.addClass.call(e,t)}function Wi(e,t){return kt.removeClass.call(e,t)}function Hi(e){return kt.remove.call(e)}function Ci(e,t){return kt.find.call(e,t).eq(0)}function Ti(e,n,r){if(X=d.defaultOptions,g=d.nativeScrollbarStyling,O=Ai(!0,{},d.nativeScrollbarSize),y=Ai(!0,{},d.nativeScrollbarIsOverlaid),x=Ai(!0,{},d.overlayScrollbarDummySize),m=Ai(!0,{},d.rtlScrollBehavior),ei(Ai(!0,{},X,n)),y.x&&y.x&&!K.nativeScrollbarsOverlaid.initialize)return li("onInitializationWithdrawn"),!1;var i;if(S=d.cssCalc,b=d.msie,w=d.autoUpdateRecommended,z=d.supportTransition,M=d.supportTransform,W=d.supportPassiveEvents,H=d.supportResizeObserver,dt=d.supportMutationObserver,C=d.restrictedMeasuring,G=f(e.ownerDocument),Q=f(G[0].defaultView||G[0].parentWindow),Z=Ci(G,"html"),ee=Ci(Z,"body"),te=f(e),E=te.is("textarea"),L=te.is("body"),P=G[0]!==t,L&&((i={}).l=Math.max(te[ln](),Z[ln](),Q[ln]()),i.t=Math.max(te[un](),Z[un](),Q[un]())),E){te.wrap(mi(zn)),Mi(te,Pn+on+Yn),ne=te.parent();var o={};K.sizeAutoCapable||(o[Kt]=te.css(Kt),o[$t]=te.css($t)),ne.css(o).wrapInner(mi(In+on+Yn)).wrapInner(mi(jn+on+Yn)).wrapInner(mi(Rn+on+Yn)),le=Ci(ne,rn+In),se=Ci(ne,rn+jn),ae=Ci(ne,rn+Rn),ue=f(mi(Dn)),le.prepend(ue),te.on(Zt,Ir).on("drop",jr).on("focus",Nr).on("focusout",Fr),b>9||!w?te.on("input",Pr):te.on(yn,Dr).on(xn,Rr)}else Mi(te,On),(ne=te).wrapInner(mi(In)).wrapInner(mi(jn)).wrapInner(mi(Rn)),le=Ci(ne,rn+In),se=Ci(ne,rn+jn),ae=Ci(ne,rn+Rn),le.on(wn,function(e){!0!==Ne&&Qr((e=e.originalEvent||e).propertyName)&&Zr(Gt)});if(ti(),W?br(se,Zt,Er):se.on(Zt,Er),g&&Mi(se,y.x&&y.y?Fn:Nn),dt){var a,u,h,v,p,A,D=l.mO(),R=l.now();ut=new D(function(e){if(T&&!q){var t,n=!1;f.each(e,function(){if(a=(t=this).target,u=t.attributeName,n=u===c.c?Yr(t.oldValue,a.className):u!==c.s||t.oldValue!==a[c.s].cssText)return!1}),n&&Tt.update(Gt)}}),ft=new D(function(e){if(T&&!q){var t=!1;f.each(e,function(){return!(t=Kr(this))}),t&&(v=l.now(),p=ze||Oe,A=function(){k||(R=v,E&&Gr(),p?Zr():Tt.update(Gt))},clearTimeout(h),pr<=0||v-R>pr||!p?A():h=setTimeout(A,pr))}})}return L&&(Mi(Z,Sn),se[ln](i.l),se[un](i.t)),ie=f(mi("os-resize-observer-host")),ne.prepend(ie),Sr(ie,Hr),Hr(),Tt.update(Gt),setTimeout(function(){z&&!k&&Mi(ne,Wn)},333),T=!0,li("onInitialized"),zi(r)==s.s&&(r=[r]),l.isA(r)?f.each(r,function(){Tt.addExt(this)}):f.isPlainObject(r)&&f.each(r,function(e,t){Tt.addExt(e,t)}),T}}return e[a]=function(t,o,s){if(0===arguments.length)return this;M();var c,l,u=[];return f.isPlainObject(o)?t&&t.length?(f.each(t,function(){(c=this)!==n&&u.push(C(c,o,s,r,i))}),l=u.length>1?u:u[0]):l=C(t,o,s,r,i):t&&(t.length&&t.length>0?(f.each(t,function(){c=h(this),"!"===o?c instanceof e[a]&&u.push(c):u.push(c)}),l=u.length>1?u:u[0]):l=h(t)),l},e[a].globals=function(){M();var e=f.extend(!0,{},r);return delete e.msie,e},e[a].defaultOptions=function(e){M();var t=r.defaultOptions;if(e===n)return f.extend(!0,{},t);r.defaultOptions=f.extend(!0,{},t,A.v(e,A.t,!0))},e[a].extension=function(e,t,n){var r=l.type(e)==s.s,i=arguments[c.l],o=0;if(i<1||!r)return f.extend(!0,{length:z[c.l]},z);if(r)if(l.type(t)==s.f)z.push({name:e,extension:t,defaultOptions:n});else for(;o<z[c.l];o++)if(z[o].name===e){if(!(i>1))return f.extend(!0,{},z[o]);z.splice(o,1)}},e[a]}();return u&&u.fn&&(u.fn.overlayScrollbars=function(e,t){var n=this;return u.isPlainObject(e)?(u.each(n,function(){d(this,e,t)}),n):d(n,e)}),d});

/*============================================================================
  #Theme JS
==============================================================================*/

// Theme functions
window.theme = window.theme || {};

theme.init = function () {
  theme.animations();
  theme.promobar();
  theme.stickyHeader();
  theme.hero();
  theme.homepageFeaturedReviews();
  theme.homepageFindYourScent();
  theme.homepageFeaturedBlog();
  theme.homepageInstagramCarousel();
  theme.collectionFilter();
  theme.productPhotos();
  theme.productTabs();
  theme.productBottomImages();
  theme.productVariants();
  //theme.productShippingDetails();
  theme.productIngredientsScroll();
  theme.articleOverlay();
  theme.articleProducts();
  theme.aboutImages();
  theme.aboutTestimonials();
  theme.locations();
  theme.ingredients();
  theme.faq();
  theme.trafficSource();
  theme.retinaImages();
  theme.search();
  theme.drawer();
  theme.newsletterPopup();
  theme.bragbarSlider();
};

theme.animations = function () {
  setTimeout(function() {
    $('.fade-in').addClass('fade-in--active');
  }, 400);

  $(window).load(function() {
    $('.fade-in-on-load').addClass('fade-in-on-load--active');
  });
};

theme.promobar = function () {
  if($('div').hasClass('promobar')) {
    $('.drawer').addClass('promobar-active');
  }
};

theme.stickyHeader = function () {
  var lastScrollTop = 0;

  $(window).scroll(function(event) {
    if(!$('body').hasClass('js-drawer-open')) {
      var currentScrolltop = $(this).scrollTop();
      if (currentScrolltop > lastScrollTop){
        $('.mobile-sticky-header').removeClass('active');
      } else {
        if($(window).scrollTop() >= 200) {
          $('.mobile-sticky-header').addClass('active');
        } else {
          $('.mobile-sticky-header').removeClass('active');
        }
      }
      lastScrollTop = currentScrolltop;
    }
  });

  $('.mobile-sticky-header button, .mobile-sticky-header a').click(function() {
    $('.mobile-sticky-header').removeClass('active');
  });
};

theme.hero = function () {
  $('.hero').slick({
    speed: 300,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false,
    fade: true,
    arrows: false,
    dots: false,
    rows: 0,
    slide: ".hero__slide"
  });

  if($('div').hasClass('hero')) {
    setTimeout(function() {
      var newLogoColor = $('.hero__slide').data('logo-color');
      $('.site-header__logo svg, .js-drawer-open-left svg g').css('fill',newLogoColor);

      var newNavColor = $('.hero__slide').data('nav-color');
      $('.js-drawer-open-left svg g').css('fill',newNavColor);
      $('.nav-bar .site-nav__link, .site-header__controls a, .site-nav--mobile .site-nav__link').css('color',newNavColor);

      var newNavHoverColor = $('.hero__slide').data('nav-hover-color');
      $('<style>.mfp-bg--newsletter { background-color: '+newNavHoverColor+'; } .drawer__overlay { background-color: '+newNavHoverColor+'; } .drawer .ajaxcart__qty-remove { color: '+newNavHoverColor+'; border-bottom: 1px solid '+newNavHoverColor+'; } .drawer .ajaxcart__continue { color: '+newNavHoverColor+'; border: 2px solid '+newNavHoverColor+'; } .ajaxcart__checkout { background-color: '+newNavHoverColor+'; } .ajaxcart__checkout:hover { background-color: '+newNavHoverColor+'; } .drawer .icon-x, .drawer .drawer__top-links a { color: '+newNavHoverColor+'; } .drawer .drawer__top-links { border-bottom: 1px solid '+newNavHoverColor+'; } .mobile-sticky-header .site-nav .site-nav__link, .mobile-sticky-header .site-header__controls a, .mobile-sticky-header .js-drawer-open-right, .drawer .drawer__cart { color: '+newNavHoverColor+' !important; } .site-header.dropdown-active .js-drawer-open-left svg g, .drawer .drawer__logo svg { fill: '+newNavHoverColor+' !important;} .site-header.dropdown-active .site-nav__link, .site-header.dropdown-active .site-header__controls a { color: '+newNavHoverColor+' !important;} .nav-bar .site-nav__dropdown a:hover { color: '+newNavHoverColor+' !important; border-bottom: 1px solid '+newNavHoverColor+' !important;} .site-header.dropdown-active .site-header__logo svg { fill: '+newNavHoverColor+' !important;}</style>').appendTo('body');
    }, 400);
  }

  $('.hero').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    if(nextSlide == 0) {
      var newLogoColor = $('.hero__slide[data-slick-index="0"]').data('logo-color');
      $('.site-header__logo svg, .js-drawer-open-left svg g').css('fill',newLogoColor);

      var newNavColor = $('.hero__slide[data-slick-index="0"]').data('nav-color');
      $('.js-drawer-open-left svg g').css('fill',newNavColor);
      $('.nav-bar .site-nav__link, .site-header__controls a, .site-nav--mobile .site-nav__link').css('color',newNavColor);

      var newNavHoverColor = $('.hero__slide[data-slick-index="0"]').data('nav-hover-color');
      $('<style>.drawer__overlay { background-color: '+newNavHoverColor+'; } .drawer .ajaxcart__qty-remove { color: '+newNavHoverColor+'; border-bottom: 1px solid '+newNavHoverColor+'; } .drawer .ajaxcart__continue { color: '+newNavHoverColor+'; border: 2px solid '+newNavHoverColor+'; } .ajaxcart__checkout { background-color: '+newNavHoverColor+'; } .ajaxcart__checkout:hover { background-color: '+newNavHoverColor+'; } .drawer .icon-x, .drawer .drawer__top-links a { color: '+newNavHoverColor+'; } .drawer .drawer__top-links { border-bottom: 1px solid '+newNavHoverColor+'; } .mobile-sticky-header .js-drawer-open-left svg g { fill: '+newNavHoverColor+' !important;} .site-header.dropdown-active .js-drawer-open-left svg g { fill: '+newNavHoverColor+' ;} .site-header.dropdown-active .site-nav__link, .site-header.dropdown-active .site-header__controls a { color: '+newNavHoverColor+' !important;} .nav-bar .site-nav__dropdown a:hover { color: '+newNavHoverColor+' !important; border-bottom: 1px solid '+newNavHoverColor+' !important;} .site-header.dropdown-active .site-header__logo svg { fill: '+newNavHoverColor+' !important;}</style>').appendTo('body');
    } else if(nextSlide == 1) {
      var newLogoColor = $('.hero__slide[data-slick-index="1"]').data('logo-color');
      $('.site-header__logo svg, .js-drawer-open-left svg g').css('fill',newLogoColor);

      var newNavColor = $('.hero__slide[data-slick-index="1"]').data('nav-color');
      $('.js-drawer-open-left svg g').css('fill',newNavColor);
      $('.nav-bar .site-nav__link, .site-header__controls a, .site-nav--mobile .site-nav__link').css('color',newNavColor);

      var newNavHoverColor = $('.hero__slide[data-slick-index="1"]').data('nav-hover-color');
      $('<style>.drawer__overlay { background-color: '+newNavHoverColor+'; } .drawer .ajaxcart__qty-remove { color: '+newNavHoverColor+'; border-bottom: 1px solid '+newNavHoverColor+'; } .drawer .ajaxcart__continue { color: '+newNavHoverColor+'; border: 2px solid '+newNavHoverColor+'; } .ajaxcart__checkout { background-color: '+newNavHoverColor+'; } .ajaxcart__checkout:hover { background-color: '+newNavHoverColor+'; } .drawer .icon-x, .drawer .drawer__top-links a { color: '+newNavHoverColor+'; } .drawer .drawer__top-links { border-bottom: 1px solid '+newNavHoverColor+'; } .mobile-sticky-header .js-drawer-open-left svg g { fill: '+newNavHoverColor+' !important;} .site-header.dropdown-active .js-drawer-open-left svg g { fill: '+newNavHoverColor+' !important;} .site-header.dropdown-active .site-nav__link, .site-header.dropdown-active .site-header__controls a { color: '+newNavHoverColor+' !important;} .nav-bar .site-nav__dropdown a:hover { color: '+newNavHoverColor+' !important; border-bottom: 1px solid '+newNavHoverColor+' !important;} .site-header.dropdown-active .site-header__logo svg { fill: '+newNavHoverColor+' !important;}</style>').appendTo('body');
    } else if(nextSlide == 2) {
      var newLogoColor = $('.hero__slide[data-slick-index="2"]').data('logo-color');
      $('.site-header__logo svg').css('fill',newLogoColor);

      var newNavColor = $('.hero__slide[data-slick-index="2"]').data('nav-color');
      $('.js-drawer-open-left svg g').css('fill',newNavColor);
      $('.nav-bar .site-nav__link, .site-header__controls a, .site-nav--mobile .site-nav__link').css('color',newNavColor);

      var newNavHoverColor = $('.hero__slide[data-slick-index="2"]').data('nav-hover-color');
      $('<style>.drawer__overlay { background-color: '+newNavHoverColor+'; } .drawer .ajaxcart__qty-remove { color: '+newNavHoverColor+'; border-bottom: 1px solid '+newNavHoverColor+'; } .drawer .ajaxcart__continue { color: '+newNavHoverColor+'; border: 2px solid '+newNavHoverColor+'; } .ajaxcart__checkout { background-color: '+newNavHoverColor+'; } .ajaxcart__checkout:hover { background-color: '+newNavHoverColor+'; } .drawer .icon-x, .drawer .drawer__top-links a { color: '+newNavHoverColor+'; } .drawer .drawer__top-links { border-bottom: 1px solid '+newNavHoverColor+'; } .mobile-sticky-header .js-drawer-open-left svg g { fill: '+newNavHoverColor+' !important;} .site-header.dropdown-active .js-drawer-open-left svg g { fill: '+newNavHoverColor+' !important;} .site-header.dropdown-active .site-nav__link, .site-header.dropdown-active .site-header__controls a { color: '+newNavHoverColor+' !important;} .nav-bar .site-nav__dropdown a:hover { color: '+newNavHoverColor+' !important; border-bottom: 1px solid '+newNavHoverColor+' !important;} .site-header.dropdown-active .site-header__logo svg { fill: '+newNavHoverColor+' !important;}</style>').appendTo('body');
    }
  });

  if($(window).width() >= 750) {
    var heroImage = $('.hero__background').data('desktop');
    var heroImageRetina = $('.hero__background').data('desktop-retina');
    $('.hero__background').css('background-image','url('+heroImage+')');
    $('.hero__background').attr('data-rjs',heroImageRetina);
  } else {
    var heroImage = $('.hero__background').data('mobile');
    var heroImageRetina = $('.hero__background').data('mobile-retina');
    $('.hero__background').css('background-image','url('+heroImage+')');
    $('.hero__background').attr('data-rjs',heroImageRetina);
  }

  $(window).resize(function() {
    if($(window).width() >= 750) {
      var heroImage = $('.hero__background').data('desktop');
      var heroImageRetina = $('.hero__background').data('desktop-retina');
      $('.hero__background').css('background-image','url('+heroImage+')');
      $('.hero__background').attr('data-rjs',heroImageRetina);
    } else {
      var heroImage = $('.hero__background').data('mobile');
      var heroImageRetina = $('.hero__background').data('mobile-retina');
      $('.hero__background').css('background-image','url('+heroImage+')');
      $('.hero__background').attr('data-rjs',heroImageRetina);
    }
  });

  setTimeout(function() {
    $('.hero__overlay').addClass('active');
  }, 800);

  setTimeout(function() {
    $('.hero__background').addClass('active');
  }, 600);

  setTimeout(function() {
    $('.hero__content').addClass('active');
  }, 600);

  setTimeout(function() {
    $('.hero__headline').addClass('active');
  }, 700);

  setTimeout(function() {
    $('.hero__button').addClass('active');
  }, 900);

  setTimeout(function() {
    $('.hero__subline').addClass('active');
  }, 1100);

  setTimeout(function() {
    $('.hero__slide').addClass('complete');
  }, 1300);

  setTimeout(function() {
    $('.hero__badge').attr('class','hero__badge active');
  }, 1300);
};

theme.homepageFeaturedReviews = function () {
  $('.featured-reviews__carousel').slick({
    fade: false,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    cssEase: 'ease-out',
    rows: 0,
    nextArrow: '<button type="button" class="slick-next"><span class="icon icon-chevron-right"></span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon icon-chevron-left"></span></button>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
};

theme.homepageFindYourScent = function () {
  $('.find-your-scent__carousel').slick({
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true,
    fade: false,
    arrows: false,
    dots: false,
    slidesToShow: 8,
    cssEase: 'linear',
    variableWidth: true,
    infinite: true,
    centerMode: true,
    draggable: false,
    rows: 0,
    responsive: [
      {
        breakpoint: 1074,
        settings: {
          speed: 200,
          draggable: true,
          autoplay: false,
          swipeToSlide: true,
          arrows: true,
          slidesToShow: 7,
          slidesToScroll: 7,
          nextArrow: '<button type="button" class="slick-next"><span class="icon icon-chevron-right"></span></button>',
          prevArrow: '<button type="button" class="slick-prev"><span class="icon icon-chevron-left"></span></button>'
        }
      },
      {
        breakpoint: 900,
        settings: {
          speed: 200,
          draggable: true,
          autoplay: false,
          swipeToSlide: true,
          arrows: true,
          slidesToShow: 5,
          slidesToScroll: 5,
          nextArrow: '<button type="button" class="slick-next"><span class="icon icon-chevron-right"></span></button>',
          prevArrow: '<button type="button" class="slick-prev"><span class="icon icon-chevron-left"></span></button>'
        }
      },
      {
        breakpoint: 550,
        settings: {
          speed: 200,
          draggable: true,
          autoplay: false,
          swipeToSlide: true,
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          nextArrow: '<button type="button" class="slick-next"><span class="icon icon-chevron-right"></span></button>',
          prevArrow: '<button type="button" class="slick-prev"><span class="icon icon-chevron-left"></span></button>'
        }
      }
    ]
  });

  $('.find-your-scent__scent').mouseover(function() {
    var backgroundImage = $(this).find('div').attr('data-background');

    if(backgroundImage.indexOf('no-image') < 1){
      $(this).find('div').css('background-image','url("'+backgroundImage+'")');
    }
  });

  $('.find-your-scent__scent').mouseleave(function() {
    $('.find-your-scent__scent div').css('background-image','');
  });
};

theme.homepageFeaturedBlog = function () {
  $('.featured-blog__carousel').slick({
    fade: false,
    arrows: false,
    dots: false,
    slidesToShow: 3,
    rows: 0,
    arrows: true,
    nextArrow: '<button type="button" class="slick-next"><span class="icon icon-chevron-right"></span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon icon-chevron-left"></span></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
};

theme.homepageInstagramCarousel = function () {
  $('.instagram__carousel').slick({
    fade: false,
    arrows: false,
    dots: false,
    slidesToShow: 6,
    rows: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: true
        }
      }
    ]
  });
};

theme.collectionFilter = function () {
  var collectionColor = $('.collection__hero h1').css('color');
  $('.filter-closed, .filter-open, .collection__filter-trigger .icon').css('color',collectionColor);
  $('.filter-menu .selected a').css('color',collectionColor).css('border-color',collectionColor);;

  $('.collection__filter-trigger').click(function() {
    // Get current state
    var currentState = $('.collection__filter-trigger-state').text();

    $(this).toggleClass('active');

    if (currentState === 'Show Filters') {
      $('.collection__filter-trigger-state').text('Hide Filters');
      $('.collection__filters').addClass('active');
    } else {
      $('.collection__filter-trigger-state').text('Show Filters');
      $('.collection__filters').removeClass('active');
    }
  });

  // If filter is active trigger grid on load
  if (Cookies.get('filter') === 'active') {
    $('.filter-trigger').click();
  } else {
    $('.collection__wrapper').addClass('filter-disabled');
  }

  // Toggle active class on click
  $('.filter-group h4').click(function() {
    var currentGroup = $(this).data('handle');

    if (Cookies.get(currentGroup) === 'active') {
      Cookies.set(currentGroup, 'disabled');
      $(this).parents('.filter-group').removeClass('filter-group--active');
    } else {
      Cookies.set(currentGroup, 'active');
      $(this).parents('.filter-group').addClass('filter-group--active');
    }
  });

  // If current group is active on load open it
  $('.filter-group').each(function() {
    var currentGroup = $(this).find('h4').data('handle');

    if (Cookies.get(currentGroup) === 'active') {
      $(this).addClass('filter-group--active');
    }
  });
};

theme.productPhotos = function () {
  setTimeout(function() {
    $('.product-single__overlay').addClass('active');
  }, 400);

  $('.product-single__carousel').slick({
    speed: 300,
    fade: true,
    arrows: true,
    dots: false,
    rows: 0,
    nextArrow: '<button type="button" class="slick-next"><span class="icon icon-chevron-right large--hide"></span></button>',
    prevArrow: '<button type="button" class="slick-prev"><span class="icon icon-chevron-left large--hide"></span></button>'
  });

  $('.product-single__carousel img').each(function() {
    if($(this).width() > $(this).height()) {
      $(this).addClass('landscape');
    }

    if(!$(this).hasClass('lifestyle')) {
      if($(window).width() >= 1275) {
        var imageHeight = $(this).prop('naturalHeight') / 2 + 'px';
        $(this).css('max-height',imageHeight);
      } else {
        $(this).css('max-height','');
      }
    }
  });

  $(window).load(function() {
    $('.product-single__carousel img').each(function() {
      if($(this).width() > $(this).height()) {
        $(this).addClass('landscape');
      }

      if(!$(this).hasClass('lifestyle')) {
        if($(window).width() >= 1360) {
          var imageHeight = $(this).prop('naturalHeight') / 2 + 'px';
          $(this).css('max-height',imageHeight);
        } else {
          $(this).css('max-height','');
        }
      }
    });
  });

  $(window).resize(function() {
    $('.product-single__carousel img').each(function() {
      if($(this).width() > $(this).height()) {
        $(this).addClass('landscape');
      }

      if(!$(this).hasClass('lifestyle')) {
        if($(window).width() >= 1360) {
          var imageHeight = $(this).prop('naturalHeight') / 2 + 'px';
          $(this).css('max-height',imageHeight);
        } else {
          $(this).css('max-height','');
        }
      }
    });
  });

  $('.product-single__carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    if($('.product-single__carousel-slide[data-slick-index="'+nextSlide+'"]').hasClass('lifestyle')) {
      $('.product-single__photos').css('background-color','#ffffff');
      $('.product-single__overlay').addClass('hide');
    } else {
      $('.product-single__photos').css('background-color','');
      $('.product-single__overlay').removeClass('hide');
    }
  });

  if($(window).width() >= 1075) {
    $('.product-single__photos').each(function() {
      var productPhotoWidth = $(this).width() + 'px';
      $(this).css('height',productPhotoWidth);
    });

    var productPhotoHeight = $('.product-single__photos').height();
    var productContentHeight = $('.product-single__content').height();
    var productTop = (productPhotoHeight - productContentHeight) / 2 + 'px';
    $('.product-single__content').css('top',productTop);
  } else {
    $('.product-single__content').css('top','0');
    $('.product-single__photos').css('height','');
  }

  if($(window).width() >= 1075) {
    var productPhotosHeight = $('.product-single__photos--desktop').height() + 'px';
  } else {
    var productPhotosHeight = $('.product-single__photos--mobile').height() + 'px';
  }

  $('.product-single__carousel-slide').css('height',productPhotosHeight);

  $(window).load(function() {
    if($(window).width() >= 1075) {
      var productPhotosHeight = $('.product-single__photos--desktop').height() + 'px';
    } else {
      var productPhotosHeight = $('.product-single__photos--mobile').height() + 'px';
    }

    $('.product-single__carousel-slide').css('height',productPhotosHeight);
  });

  $(window).resize(function() {
    setTimeout(function() {
      if($(window).width() >= 1075) {
        var productPhotosHeight = $('.product-single__photos--desktop').height() + 'px';
      } else {
        var productPhotosHeight = $('.product-single__photos--mobile').height() + 'px';
      }

      $('.product-single__carousel-slide').css('height',productPhotosHeight);
    }, 100);

    if($(window).width() >= 1075) {
      $('.product-single__photos').each(function() {
        var productPhotoWidth = $(this).width() + 'px';
        $(this).css('height',productPhotoWidth);
      });
    } else {
      $('.product-single__photos').css('height','');
    }

    if($(window).width() >= 1075) {
      var productPhotoHeight = $('.product-single__photos').height();
      var productContentHeight = $('.product-single__content').height();
      var productTop = (productPhotoHeight - productContentHeight) / 2 + 'px';
      $('.product-single__content').css('top',productTop);
    } else {
      $('.product-single__content').css('top','0');
    }
  });

  // Cursor
  $('.product-single__photos--desktop .slick-next').mousemove(function() {
    var mouseX = event.pageX;
    var mouseY = event.pageY - 190;

    $('.product-single__photos--desktop .hover-icon.icon-chevron-right').css('margin-left',mouseX).css('margin-top',mouseY).css('opacity','1');
  });

  $('.product-single__photos--desktop .slick-next').mouseleave(function() {
    $('.product-single__photos--desktop .hover-icon.icon-chevron-right').css('opacity','0');
  });

  $('.product-single__photos--desktop .slick-prev').mousemove(function() {
    var mouseX = event.pageX;
    var mouseY = event.pageY - 190;

    $('.product-single__photos--desktop .hover-icon.icon-chevron-left').css('margin-left',mouseX).css('margin-top',mouseY).css('opacity','1');
  });

  $('.product-single__photos--desktop .slick-prev').mouseleave(function() {
    $('.product-single__photos--desktop .hover-icon.icon-chevron-left').css('opacity','0');
  });
};

theme.productTabs = function () {
  $('.product-single__tabs li').click(function() {
    $('.product-single__tabs li').removeClass('active');
    $(this).addClass('active');

    var tab = $(this).data('tab');
    $('.product-single__details, .product-single__ingredients, .product-single__directions').removeClass('active');
    $('.product-single__'+tab).addClass('active');
  });
};

theme.productBottomImages = function () {
  $('.product-single__images-carousel').slick({
    speed: 300,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false,
    fade: true,
    arrows: false,
    dots: false,
    rows: 0
  });

  $('.product-single__images .slick-dots div').click(function() {
    var index = $(this).data('index');
    $('.product-single__images .slick-dots div').removeClass('active');
    $('.product-single__images .slick-dots div[data-index="'+index+'"]').addClass('active');
    $('.product-single__images-carousel').slick('slickGoTo',index);
  });

  $('.product-single__images .slick-next').click(function() {
    $('.product-single__images-carousel').slick('slickNext');

    var index = $('.product-single__images .slick-current').data('slick-index');
    $('.product-single__images .slick-dots div').removeClass('active');
    $('.product-single__images .slick-dots div[data-index="'+index+'"]').addClass('active');
  });
};

theme.productVariants = function () {
  var timer;

  $('.product-single__variant-swatches a').mouseover( function() {
    var swatchColor = $(this).css('background-color');
    var swatchTitle = $(this).attr('data-title');

    $('.product-single__selected-variant').css('color',swatchColor);
    $('.product-single__selected-variant span').text(swatchTitle);

    clearTimeout(timer);
    timer = null;
  });

  $('.product-single__variant-swatches a').mouseleave( function() {
    timer = setTimeout(function() {
      var swatchColor = $('.product-single__variant-swatches a.active').css('background-color');
      var swatchTitle = $('.product-single__variant-swatches a.active').attr('data-title');

      $('.product-single__selected-variant').css('color',swatchColor);
      $('.product-single__selected-variant span').text(swatchTitle);
    }, 600);
  });
};

theme.productShippingDetails = function () {
  var texts = ["30 Day FREE returns"];
  var count = 0;
  function changeText() {
      $('.product-single__shipping-details span').fadeOut(200, function () {
        $(this).text(texts[count]).fadeIn(200);
      });
      count < 1 ? count++ : count = 0;
  }
  setInterval(changeText, 5000);
};

theme.productIngredientsScroll = function () {
  if($('.product-single__ingredients').height() > 200 && $(window).width() > 1025) {
    $('.product-single__ingredients').overlayScrollbars({});
    $('.product-single__ingredients').css('height','170px');
  } else {
    $('.product-single__ingredients').css('height','auto');
  }
};

theme.articleOverlay = function () {
  setTimeout(function() {
    $('.article-single__overlay').addClass('active');
  }, 400);
};

theme.articleProducts = function () {
  if($(window).width() >= 750) {
    var relatedProductImageHeight = $('.article__related-product .collection__item-image-wrapper').height() + 'px';
    $('.article__related-product-content').css('height',relatedProductImageHeight);
  } else {
    $('.article__related-product-content').css('height','auto');
  }

  $(window).resize(function() {
    if($(window).width() >= 750) {
      var relatedProductImageHeight = $('.article__related-product .collection__item-image-wrapper').height() + 'px';
      $('.article__related-product-content').css('height',relatedProductImageHeight);
    } else {
      $('.article__related-product-content').css('height','auto');
    }
  });

  $(window).load(function() {
    if($(window).width() >= 750) {
      var relatedProductImageHeight = $('.article__related-product .collection__item-image-wrapper').height() + 'px';
      $('.article__related-product-content').css('height',relatedProductImageHeight);
    } else {
      $('.article__related-product-content').css('height','auto');
    }
  });
};

theme.aboutImages = function () {
  if($('.hero').hasClass('hero--about')) {
    $(window).scroll(function() {
      if($(window).width() >= 750) {
        var imageWidth = $('.about-image--1 img').width() +'px';
        var imageHeight = $('.about-image--1 img').height();
        var offsetValue = ($(window).height() - imageHeight) / 2;
        var offsetValuePx = ($(window).height() - imageHeight) / 2 + 'px';

        var aboutImage1TopOffset = $('.about-image--1').offset().top - offsetValue;
        var aboutImage2TopOffset = $('.about-image--2').offset().top - offsetValue;
        var aboutImage3TopOffset = $('.about-image--3').offset().top - offsetValue;
        var aboutImage4TopOffset = $('.about-image--4').offset().top - offsetValue;
        var aboutImage5TopOffset = $('.about-image--5').offset().top - offsetValue;
        var aboutImage6TopOffset = $('.about-image--6').offset().top - offsetValue;

        $('.about-images__sticky').css('width',imageWidth);

        if($(window).scrollTop() >= aboutImage1TopOffset) {
          $('.about-image--1 img').addClass('hidden');
          $('.about-images__sticky').removeClass('hide');
          $('.about-images__sticky--1').addClass('active');

          if($(window).scrollTop() < aboutImage2TopOffset - 400) {
            $('.about-images__sticky').removeClass('active');
            $('.about-images__sticky--1').addClass('active');
          }

          if($(window).scrollTop() >= aboutImage2TopOffset - 400) {
            $('.about-images__sticky').removeClass('active');
            $('.about-images__sticky--2').addClass('active');
          }

          if($(window).scrollTop() < aboutImage3TopOffset && $(window).scrollTop() > aboutImage2TopOffset - 400) {
            $('.about-images__sticky').removeClass('active');
            $('.about-images__sticky--2').addClass('active');
          }

          if($(window).scrollTop() >= aboutImage3TopOffset - 400) {
            $('.about-images__sticky').removeClass('active');
            $('.about-images__sticky--3').addClass('active');
          }

          if($(window).scrollTop() < aboutImage4TopOffset && $(window).scrollTop() > aboutImage3TopOffset - 400) {
            $('.about-images__sticky').removeClass('active');
            $('.about-images__sticky--3').addClass('active');
          }

          if($(window).scrollTop() >= aboutImage4TopOffset - 400) {
            $('.about-images__sticky').removeClass('active');
            $('.about-images__sticky--4').addClass('active');
          }

          if($(window).scrollTop() < aboutImage5TopOffset && $(window).scrollTop() > aboutImage4TopOffset - 400) {
            $('.about-images__sticky').removeClass('active');
            $('.about-images__sticky--4').addClass('active');
          }

          if($(window).scrollTop() >= aboutImage5TopOffset - 400) {
            $('.about-images__sticky').removeClass('active');
            $('.about-images__sticky--5').addClass('active');
          }

          if($(window).scrollTop() < aboutImage6TopOffset && $(window).scrollTop() > aboutImage5TopOffset - 400) {
            $('.about-images__sticky').removeClass('active');
            $('.about-images__sticky--5').addClass('active');
          }

          if($(window).scrollTop() >= aboutImage6TopOffset - 400) {
            $('.about-images__sticky').removeClass('active');
            $('.about-images__sticky--6').addClass('active');
          }

          if($('.about-images__sticky').offset().top + $('.about-images__sticky').height() >= $('.about-testimonials').offset().top) {
            $('.about-images__sticky').addClass('stuck');

            var topPosition = $('.about-images').height() - $('.about-image--1 img').height();
            $('.about-images__sticky').css('top',topPosition);
          }

          if($(document).scrollTop() + offsetValue < $('.about-images__sticky').offset().top) {
            $('.about-images__sticky').removeClass('stuck');
            $('.about-images__sticky').css('top',offsetValuePx);
          }
        } else {
          $('.about-image--1 img').removeClass('hidden');
          $('.about-images__sticky').addClass('hide');
        }
      } else {
        $('.about-image--1 img').removeClass('hidden');
        $('.about-images__sticky').addClass('hide');
      }
    });

    $(window).resize(function() {
      if($(window).width() >= 750) {
        var imageWidth = $('.about-image--1 img').width() +'px';
        $('.about-images__sticky').css('width',imageWidth);
      }
    });
  }
};

theme.aboutTestimonials = function () {
  $('.about-testimonials__carousel').slick({
    speed: 300,
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,
    arrows: true,
    nextArrow: '<button type="button" class="slick-next">&rarr;</button>',
    prevArrow: '<button type="button" class="slick-prev">&larr;</button>',
  });
};

theme.locations = function () {
  $(window).load(function() {
    $('.addresses li').click(function() {
      $('.addresses li').removeClass('active');
      $(this).addClass('active');
    });
  });
};

theme.ingredients = function () {
  $('.popup-trigger').magnificPopup({
    type: 'inline',
    preloader: false,
    removalDelay: 500,
    focus: '#name',
    callbacks: {
      beforeOpen: function() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      open: function () {
        var mainColor = this.st.el.attr('data-color');
        $('body .mfp-close').html('<span class="icon icon-x"></span>');
        $('body .mfp-close .icon-x').css('color',mainColor);
        $('body .mfp-bg').css('background-color',mainColor);
      }
    }
  });

  $('body').on('click' , '.mfp-close .icon', function() {
    $('body .mfp-close').click();
  });
};

theme.faq = function () {
  $('.faq__content h5').click(function() {
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next('div').removeClass('active');
    } else {
      $('.faq__content h5').removeClass('active');
      $('.faq__content div').removeClass('active');
      $(this).addClass('active');
      $(this).next('div').addClass('active');
    }
  });
};

theme.trafficSource = function () {
  if(window.location.href.indexOf('?email') >= 0) {
    $.ajax({
      type: 'POST',
      url: '/cart/update.js',
      data: 'attributes[Traffic Source]=Email',
      dataType: 'json'
    });
  }

  if(window.location.href.indexOf('?google') >= 0) {
    $.ajax({
      type: 'POST',
      url: '/cart/update.js',
      data: 'attributes[Traffic Source]=Google',
      dataType: 'json'
    });
  }

  if(window.location.href.indexOf('?facebook') >= 0) {
    $.ajax({
      type: 'POST',
      url: '/cart/update.js',
      data: 'attributes[Traffic Source]=Facebook',
      dataType: 'json'
    });
  }

  if(window.location.href.indexOf('?facebook-social') >= 0) {
    $.ajax({
      type: 'POST',
      url: '/cart/update.js',
      data: 'attributes[Traffic Source]=Facebook Social',
      dataType: 'json'
    });
  }

  if(window.location.href.indexOf('?instagram') >= 0) {
    $.ajax({
      type: 'POST',
      url: '/cart/update.js',
      data: 'attributes[Traffic Source]=Instagram',
      dataType: 'json'
    });
  }
};

theme.retinaImages = function () {
  $(window).load(function() {
    /*! Retina.js v2.1.0 */
    !function(){function t(t){return Array.prototype.slice.call(t)}function e(t){var e=parseInt(t,10);return e>f?f:e}function r(t){return t.hasAttribute("data-no-resize")||(0===t.offsetWidth&&0===t.offsetHeight?(t.setAttribute("width",t.naturalWidth),t.setAttribute("height",t.naturalHeight)):(t.setAttribute("width",t.offsetWidth),t.setAttribute("height",t.offsetHeight))),t}function n(t,e){var n=t.nodeName.toLowerCase(),i=document.createElement("img");i.addEventListener("load",function(){"img"===n?r(t).setAttribute("src",e):t.style.backgroundImage="url("+e+")"}),i.setAttribute("src",e),t.setAttribute(h,!0)}function i(t,r){var i=arguments.length<=2||void 0===arguments[2]?1:arguments[2],o=e(i);if(r&&o>1){var a=r.replace(c,"@"+o+"x$1");n(t,a)}}function o(t,e,r){f>1&&n(t,r)}function a(e){return e?"function"==typeof e.forEach?e:t(e):"undefined"!=typeof document?t(document.querySelectorAll(g)):[]}function u(t){return t.style.backgroundImage.replace(l,"$2")}function d(t){a(t).forEach(function(t){if(!t.getAttribute(h)){var e="img"===t.nodeName.toLowerCase(),r=e?t.getAttribute("src"):u(t),n=t.getAttribute("data-rjs"),a=!isNaN(parseInt(n,10));a?i(t,r,n):o(t,r,n)}})}"undefined"==typeof exports&&(exports={}),Object.defineProperty(exports,"__esModule",{value:!0});var s="undefined"!=typeof window,f=s?window.devicePixelRatio||1:1,c=/(\.[A-z]{3,4}\/?(\?.*)?)$/,l=/url\(('|")?([^\)'"]+)('|")?\)/i,g="[data-rjs]",h="data-rjs-processed";s&&(window.addEventListener("load",d),window.retinajs=d),exports["default"]=d}();

    retinajs();
  });
};

theme.search = function () {
  $('.site-header__search').click(function() {
    $('.search__popup').addClass('active');
    $('.search__popup input').focus().trigger('click');
    $('.drawer__overlay').addClass('drawer__overlay--active');
    setTimeout(function() {
      $('.snize-ac-results').css('display','block');
    }, 200);
  });

  $('.search__popup .icon-x').click(function() {
    $('.search__popup').removeClass('active');
    $('.drawer__overlay').removeClass('drawer__overlay--active');
    $('.snize-ac-results').css('display','none');
  });

  $('.search__popup input').keypress(function() {
    if($(this).val().length > 1) {
      $('.search__popup').addClass('has-search');
      $('.snize-ac-results').css('opacity','1');
    } else {
      $('.search__popup').removeClass('has-search');
      $('.snize-ac-results').css('opacity','0');
    }
  });

  $('.drawer__overlay').click(function() {
    $('.search__popup .icon-x').click();
  });
};

theme.drawer = function () {
  $('.drawer__menu, .drawer__cart').click(function() {
    $('.js-drawer-close').click();
  });

  $(window).resize(function() {
    if($(window).width() >= 1025 && $(window).height() < 700) {
      $('.ajaxcart__footer').css('padding-bottom','150px');
    } else {
      $('.ajaxcart__footer').css('padding-bottom','');
    }
  });
};


  theme.newsletterPopup = function () {
    if($(window).width() >= 1025) {
      var newsletterPopup = Cookies.get('newsletter-popup');

      if (typeof newsletterPopup === 'undefined' ) {
        Cookies.set('newsletter-popup', 1 , { expires: 1 });
        setTimeout(function () {
          $.magnificPopup.open({
            type: 'inline',
            preloader: false,
            removalDelay: 500,
            focus: '.newsletter-popup .input-group-field',
            callbacks: {
              open: function () {
                $('body .mfp-close').html('<span class="icon icon-x"></span>');
                $('body .mfp-bg').addClass('mfp-bg--newsletter');
              }
            },
            mainClass: 'mfp-zoom-in',
            items: {
              src: '#newsletter-popup'
            }
          });
        }, 10000);
      }
    }
  };


theme.bragbarSlider = function(){
  $('[data-bragbar-quotes]').slick({
    dots: false,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    swipeToSlide: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    asNavFor: $('[data-bragbar-attributions]')
  });
  $('[data-bragbar-attributions]').slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    focusOnSelect: true,
    speed: 300,
    autoplay: true,
    pauseOnHover: true,
    infinite: true,
    centerMode: true,
    autoplaySpeed: 5000,
    asNavFor: $('[data-bragbar-quotes]'),
    responsive: [
      {
        breakpoint: 1075,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          fade: true
        }
      }
    ]
  });
};

$('a[href^="http"]').not('a[href^="'+location.protocol+'//'+location.hostname+'"]').not('a[href^="/"]').attr('target', '_blank');

// Initialize Theme JS on docready
$(theme.init);

// Initialize Theme JS on section load
$(document).on('shopify:section:load', function(){
  $(theme.init);
});