import{A as f,S as a,N as u,K as d,a as w}from"./assets/vendor-oJ7JVYOg.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const v=document.querySelector(".menu"),i=document.querySelector(".menu-list"),g=document.querySelectorAll(".menu-list a");v.addEventListener("click",h);document.addEventListener("click",y);g.forEach(e=>{e.addEventListener("click",m,{once:!0})});function h(e){e.preventDefault(),i==null||i.classList.toggle("show")}function y(e){!v.contains(e.target)&&!i.contains(e.target)&&i.classList.remove("show")}function m(e){e.preventDefault();const s=e.target.closest("a");if(!s||!s.getAttribute("href"))return;const r=s.getAttribute("href").substring(1),n=document.getElementById(r);n&&n.scrollIntoView({behavior:"smooth",block:"start"}),i==null||i.classList.remove("show")}const p=document.querySelector(".header");window.addEventListener("scroll",()=>{window.scrollY>30?p.classList.add("header-fixed"):p.classList.remove("header-fixed")});console.log("Hello hero");new f(".accordion-container-about-me",{elementClass:"ac-about-me",triggerClass:"ac-trigger-about-me",panelClass:"ac-panel-about-me",activeClass:"is-active-about-me",duration:800,showMultiple:!0,collapse:!0,openOnInit:[0]});new a(".swiper-one",{modules:[u,d],containerModifierClass:"swiper-one",slideActiveClass:"about-me-swiper-slide-active",slidesPerView:2,allowTouchMove:!0,loop:!0,preventClicks:!0,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".skills-swiper-button-next"},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});console.log("Hello benefits");document.addEventListener("DOMContentLoaded",function(){new a(".swiper-projects",{modules:[u,d],slidesPerView:1,containerModifierClass:"swiper-projects",loop:!1,navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0}})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".accordion-item").forEach(r=>r.classList.remove("is-active")),new f(".accordion-container",{duration:800,showMultiple:!1,collapse:!0}),document.querySelectorAll(".ac-trigger").forEach(r=>{r.addEventListener("click",function(){const n=this.closest(".accordion-item");n.classList.toggle("is-active");const t=n.querySelector(".ac-panel");t.style.maxHeight?(t.style.maxHeight=null,t.style.opacity=0):(t.style.maxHeight=t.scrollHeight+"px",t.style.opacity=1);const o=n.querySelector(".faq-icon-wrapper");o&&o.classList.toggle("rotate")})})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".covers-section-js"),s=document.querySelectorAll(".covers-marquee__line-js");if(!e)return;new IntersectionObserver(n=>{n.forEach(t=>{t.isIntersecting?s.forEach(o=>o.classList.add("animated")):s.forEach(o=>o.classList.remove("animated"))})},{threshold:.6}).observe(e)});const b=document.querySelector(".reviews-list"),L=e=>{const s=e.map(r=>`<li class="reviews-item swiper-slide">
        <img class="reviews-img" src="${r.avatar_url}" alt="avatar" />
        <h3 class="reviews-post-title">${r.author}</h3>
        <p class="reviews-post-text">${r.review}</p>
      </li>`).join("");b.innerHTML=s},E=async()=>{try{const{data:e}=await w.get("https://portfolio-js.b.goit.study/api/reviews");L(e)}catch(e){console.log(e)}};new a(".swiper",{slidesPerView:1,modules:[u,d],loop:!1,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{disabledClass:"reviews-off-btn",prevEl:".reviews-prev-btn",nextEl:".reviews-next-btn"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});E();console.log("Hello footer work together");const S=document.querySelector(".menu-button"),c=document.querySelector(".mobile-menu"),q=document.querySelector(".mobile-menu-button"),k=document.querySelectorAll(".mobile-menu-list a"),x=document.querySelector(".mobile-menu-order");S.addEventListener("click",M);q.addEventListener("click",V);k.forEach(e=>{e.addEventListener("click",s=>{m(s),c.classList.remove("show")})});x.addEventListener("click",C);function C(e){m(e),c.classList.remove("show")}function M(e){e.preventDefault(),c.classList.add("show")}function V(e){e.preventDefault(),c.classList.remove("show")}
//# sourceMappingURL=index.js.map
