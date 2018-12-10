/*! Built with http://stenciljs.com */
const{h:e}=window.jhstimg;class t{constructor(){this._sources=[],this._isFallbackImageLoaded=!1,this._isHandleImageFallback=!1,this._isUnsupportedPictureElementImageLoaded=!1}srcWatchHandler(){this._isUnsupportedPictureElementImageLoaded=!1,this.addIntersectionObserver()}sourcesWatchHandler(e){this.updateSources(e,!0),this.addIntersectionObserver()}documentScrollHandler(){!1===this._hasIntersectionObserver&&this.fallback()}windowResizeHandler(){!1===this._hasIntersectionObserver&&this.fallback()}windowRrientationchangeHandler(){!1===this._hasIntersectionObserver&&this.fallback()}componentWillLoad(){this._hasIntersectionObserver="IntersectionObserver"in window;const e=document.createElement("picture");this._hasPictureElementSupport=e.toString().includes("HTMLPictureElement")}componentDidLoad(){this.addIntersectionObserver()}componentDidUnload(){this.removeIntersectionObserver()}addIntersectionObserver(){if(!this.src)throw new Error("Required attribute in web component `jh-st-img` not set.");this._hasIntersectionObserver?(this.removeIntersectionObserver(),this.io=new IntersectionObserver(e=>{e[0].isIntersecting&&(this.updateSources(this.sources),this.handleUnsupportedPictureElement(),this.removeIntersectionObserver())}),this.io.observe(this.el.querySelector("img"))):!1===this._isFallbackImageLoaded&&this.fallback()}handleUnsupportedPictureElement(){!1===this._hasPictureElementSupport&&!1===this._isUnsupportedPictureElementImageLoaded&&(this.el.querySelector("img").setAttribute("src",this.src),this._isUnsupportedPictureElementImageLoaded=!0)}fallback(){if(!1===this._isFallbackImageLoaded){const e=this.el.querySelector("img");e.getBoundingClientRect().top<=window.innerHeight&&e.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(e).display&&(this.updateSources(this.sources),this.handleUnsupportedPictureElement(),this._isFallbackImageLoaded=!0)}}updateSources(e,t=!1){if(0===this._sources.length||!1!==t)if(e){let t="string"==typeof e?JSON.parse(e):e;for(let e=t.length-1;e>=0;e--)t[e].type&&"image/jpg"===t[e].type&&(t[e].type="image/jpeg");this._sources=t}else this._sources=[{sizes:null,srcset:this.src,type:null,media:null}]}removeIntersectionObserver(){this.io&&(this.io.disconnect(),this.io=null)}render(){return e("picture",null,this._sources.map(t=>e("source",{sizes:t.sizes,srcSet:t.srcset,type:t.type,media:t.media})),e("img",{src:"",alt:this.alt,class:this.imgClass}))}static get is(){return"jh-st-img"}static get properties(){return{_sources:{state:!0},alt:{type:String,attr:"alt"},el:{elementRef:!0},imgClass:{type:String,attr:"img-class"},sources:{type:"Any",attr:"sources",watchCallbacks:["sourcesWatchHandler"]},src:{type:String,attr:"src",watchCallbacks:["srcWatchHandler"]}}}static get listeners(){return[{name:"document:scroll",method:"documentScrollHandler",passive:!0},{name:"window:resize",method:"windowResizeHandler",passive:!0},{name:"window:orientationchange",method:"windowRrientationchangeHandler"}]}static get style(){return"jh-st-img{display:block}jh-st-img img{max-width:100%;max-height:100%}"}}export{t as JhStImg};