import{A as p,S as a,N as d,K as u,a as g}from"./assets/vendor-oJ7JVYOg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const v=document.querySelector(".menu"),i=document.querySelector(".menu-list"),w=document.querySelectorAll(".menu-list a");v.addEventListener("click",y);document.addEventListener("click",h);w.forEach(e=>{e.addEventListener("click",m,{once:!0})});function y(e){e.preventDefault(),i==null||i.classList.toggle("show")}function h(e){!v.contains(e.target)&&!i.contains(e.target)&&i.classList.remove("show")}function m(e){e.preventDefault();const t=e.target.closest("a");if(!t||!t.getAttribute("href"))return;const o=t.getAttribute("href").substring(1),s=document.getElementById(o);s&&s.scrollIntoView({behavior:"smooth",block:"start"}),i==null||i.classList.remove("show")}const f=document.querySelector(".header");window.addEventListener("scroll",()=>{window.scrollY>30?f.classList.add("header-fixed"):f.classList.remove("header-fixed")});console.log("Hello hero");new p(".accordion-container-about-me",{elementClass:"ac-about-me",triggerClass:"ac-trigger-about-me",panelClass:"ac-panel-about-me",activeClass:"is-active-about-me",duration:800,showMultiple:!0,collapse:!0,openOnInit:[0]});new a(".swiper-one",{modules:[d,u],containerModifierClass:"swiper-one",slideActiveClass:"about-me-swiper-slide-active",slidesPerView:2,allowTouchMove:!0,loop:!0,preventClicks:!0,grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".skills-swiper-button-next"},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});console.log("Hello benefits");document.addEventListener("DOMContentLoaded",function(){new a(".swiper-projects",{modules:[d,u],slidesPerView:1,containerModifierClass:"swiper-projects",spaceBetween:20,loop:!1,navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0}})});document.addEventListener("DOMContentLoaded",function(){new p(".accordion-container",{duration:800,showMultiple:!0,collapse:!0}),document.querySelectorAll(".accordion-item").forEach(e=>{const t=e.querySelector(".ac-trigger"),o=e.querySelector(".ac-panel"),s=e.querySelector(".faq-icon-wrapper");t.addEventListener("click",function(){e.classList.contains("is-active")?o.style.maxHeight=o.scrollHeight+"px":o.style.maxHeight="0",s&&s.classList.toggle("rotate",e.classList.contains("is-active"))})})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".covers-section-js"),t=document.querySelectorAll(".covers-marquee__line-js");if(!e)return;new IntersectionObserver(s=>{s.forEach(n=>{n.isIntersecting?t.forEach(r=>r.classList.add("animated")):t.forEach(r=>r.classList.remove("animated"))})},{threshold:.6}).observe(e)});const b=document.querySelector(".reviews-list"),L=e=>{const t=e.map(o=>`<li class="reviews-item swiper-slide">
        <img class="reviews-img" src="${o.avatar_url}" alt="avatar" />
        <h3 class="reviews-post-title">${o.author}</h3>
        <p class="reviews-post-text">${o.review}</p>
      </li>`).join("");b.innerHTML=t},E=async()=>{try{const{data:e}=await g.get("https://portfolio-js.b.goit.study/api/reviews");L(e)}catch(e){console.log(e)}};new a(".swiper",{slidesPerView:1,spaceBetween:16,modules:[d,u],loop:!1,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{disabledClass:"reviews-off-btn",prevEl:".reviews-prev-btn",nextEl:".reviews-next-btn"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});E();console.log("footer");document.getElementById("form-inf").addEventListener("submit",function(e){e.preventDefault();const t={email:document.getElementById("user-email").value.trim(),comment:document.getElementById("user-comment").value.trim()};fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(o=>o.json()).then(o=>{document.getElementById("form-inf").reset(),S("footer-modal")}).catch(o=>console.error("Error submitting form:",o))});function S(e){const t=document.getElementById(e);t?(console.log("Opening modal:",e),t.style.display="flex"):console.error("Modal not found:",e)}document.getElementById("close-btn").addEventListener("click",function(){document.getElementById("footer-modal").style.display="none"});window.addEventListener("click",function(e){e.target.id==="footer-modal"&&(document.getElementById("footer-modal").style.display="none")});const q=document.querySelector(".menu-button"),c=document.querySelector(".mobile-menu"),k=document.querySelector(".mobile-menu-button"),I=document.querySelectorAll(".mobile-menu-list a"),C=document.querySelector(".mobile-menu-order");q.addEventListener("click",B);k.addEventListener("click",O);I.forEach(e=>{e.addEventListener("click",t=>{m(t),c.classList.remove("show")})});C.addEventListener("click",M);function M(e){m(e),c.classList.remove("show")}function B(e){e.preventDefault(),c.classList.add("show")}function O(e){e.preventDefault(),c.classList.remove("show")}
//# sourceMappingURL=index.js.map
