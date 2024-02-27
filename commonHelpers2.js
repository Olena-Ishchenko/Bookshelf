import{b as u,l as L,r as k,a as T}from"./assets/api-2ab76f54.js";import"./assets/vendor-8dea2054.js";const d=document.querySelector(".backdrop"),B=document.querySelector(".modal-wrapper"),C=document.querySelector(".modal-icons-list"),f=document.querySelector("body"),c=document.querySelector(".modal-btn-add"),g=document.querySelector(".congrats"),h=document.querySelector(".modal-close"),s={_id:"",title:"",author:"",list_name:"",book_image:"",description:"",amazon_buy_link:"",apple_buy_link:""};async function x(e){try{B.innerHTML="",C.innerHTML="";const t=await u.getBookDescription(e),o=A(t);B.insertAdjacentHTML("beforeend",o);const r=I(t);C.insertAdjacentHTML("beforeend",r),s._id=t._id,s.title=t.title,s.author=t.author,s.list_name=t.list_name,s.book_image=t.book_image,s.description=t.description,s.amazon_buy_link=t.buy_links[0].url,s.apple_buy_link=t.buy_links[1].url,p(c,e),c.addEventListener("click",v),h.addEventListener("click",_),document.addEventListener("keydown",M),d.addEventListener("click",q)}catch(t){console.log("Error fetching modal:",t)}}function E(e){d.classList.add("is-open"),f.classList.add("no-scroll"),x(e)}function A(e){return`
      <img class="modal-img-book" src="${e.book_image}" alt="book" />
      <ul class="modal-description-list">
      <li><p class="modal-description-list-title">${e.title}</p></li>
      <li><p class="modal-description-list-subtitle">${e.author}</p></li>
      <li>
        <p class="modal-description-list-text">
          ${e.description}
        </p>
      </li>
      </ul>`}function I(e){return`<li>
        <a class="modal-icon amazon" href="${e.buy_links[0].url}"><img class='modal-icon' src="/img/amazon.png" alt="" width='62' height='19' 
       /></a>
      </li>
      <li>
        <a class="modal-icon" href="${e.buy_links[1].url}"><img class='modal-icon' src="/img/applebook.png" alt="" width='33' height='32'
       /></a>
      </li>`}function p(e,t){L.isBookExsist(t)?(e.textContent="remove from the shopping list",e.classList.add("modal-btn-remove"),g.classList.add("modal-text-congratulations")):(e.textContent="add to shopping list",e.classList.remove("modal-btn-remove"),g.classList.remove("modal-text-congratulations"))}function v(e){c.textContent==="add to shopping list"?(N(s),p(c,s._id)):(P(s),p(c,s._id))}function S(){d.classList.remove("is-open"),f.classList.remove("no-scroll"),document.removeEventListener("keydown",M),d.removeEventListener("click",q),h.removeEventListener("click",S),c.removeEventListener("click",v)}function M(e){e.key==="Escape"&&S()}function q(e){e.target===d&&S()}function _(){d.classList.remove("is-open"),f.classList.remove("no-scroll"),h.removeEventListener("click",_),c.removeEventListener("click",v)}function N(e){L.addBookToFavorites(e),g.textContent='Сongratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".'}function P(e){L.removeBookFromFavorites(e),g.textContent=""}function H(e,t){if(m(),e.length===0)try{const o=document.querySelector(".bestsellers-container");o.innerHTML="",k(".bestsellers-container",t),o.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const r=document.querySelector(".book-category-list"),n='<p class = "category-text-empty">Sorry, no books were found for the given category</p>';r.innerHTML=n}catch{console.log("Error fetching modal:",error)}finally{l()}else try{const o=document.querySelector(".bestsellers-container");o.innerHTML="",k(".bestsellers-container",t),o.insertAdjacentHTML("beforeend",'<ul class = "book-category-list"></ul>');const r=document.querySelector(".book-category-list"),n=e.map(({author:i,book_image:a,title:y,_id:b})=>T({author:i,book_image:a,title:y,_id:b})).join("");r.innerHTML=n,r.addEventListener("click",z)}catch{console.log("Error fetching modal:",error)}finally{l()}}async function z(e){if(e.target.nodeName==="IMG"||e.target.nodeName==="H3"||e.target.nodeName==="P"){let t=e.target.closest(".book-category-item").dataset.id;E(t)}}async function D(){try{const e=document.querySelector(".bestsellers-container");e.innerHTML="",m();const t=await u.getBestSellers();j(t),l()}catch(e){console.error("Error fetching best sellers:",e)}}function j(e){const t=document.querySelector(".bestsellers-container");t.innerHTML="",k(".bestsellers-container","Best Sellers Books"),t.insertAdjacentHTML("beforeend",'<ul class="bestsellers-list"></ul>');const o=document.querySelector(".bestsellers-list"),r=e.map(({books:n,list_name:i})=>`<li class="bestsellers-item">
      <h2 class="bestsellers-category-title">${i}</h2>
      <ul class="bestsellers-books-list">${n.map(({title:a,author:y,book_image:b,_id:$})=>n.length===0?'<p class="category-empty">Sorry, no books were found for the given category!</p>':T({title:a,author:y,book_image:b,_id:$})).join(`
`)}
        </ul>
        <button class="bestsellers-btn" type="button" data-category="${i}">See more</button>
      </li>`).join(`
`);o.insertAdjacentHTML("beforeend",r),o.addEventListener("click",O),o.addEventListener("click",F)}async function F(e){if(e.preventDefault(),e.target.nodeName==="IMG"||e.target.nodeName==="H3"||e.target.nodeName==="P"){let t=e.target.closest(".book-category-item").dataset.id;E(t)}}async function O(e){try{if(e.target.nodeName!=="BUTTON")return;let t=e.target.dataset.category;const o=document.querySelector(".sidebar-category-item"),r=document.querySelectorAll(".sidebar-category-item");window.scrollTo({top:0,behavior:"smooth"});const n=document.querySelector(".bestsellers-container");n.innerHTML="",m();const i=await u.getSelectedCategory(t);H(i,t),l(),r.forEach(a=>{a.dataset.source===t&&(o.classList.remove("category-active"),a.classList.add("category-active"),a.scrollIntoView({behavior:"instant",block:"center",inline:"nearest"}))}),window.scrollTo({top:0,behavior:"smooth"})}catch(t){console.log("Error fetching modal:",t)}}const w={categoryContainer:document.querySelector(".sidebar-category-container"),categoryList:document.querySelector(".sidebar-category-list"),allCategory:document.querySelector(".all-category")};function G(e){return e.sort((o,r)=>o.list_name.localeCompare(r.list_name)),e.map(o=>`<li class='sidebar-category-item' data-source="${o.list_name}">${o.list_name}</li>`).join("")}(async()=>{try{const e=document.querySelector(".bestsellers-container");e.innerHTML="",m();const t=await u.getCategoryList(),o=G(t);w.categoryList.insertAdjacentHTML("beforeend",o),l()}catch(e){console.log(e)}})();w.allCategory.addEventListener("click",async e=>{try{const t=document.querySelector(".bestsellers-container");t.innerHTML="",m();const o=await u.getBestSellers();j(o),l()}catch(t){console.log(t)}});w.categoryList.addEventListener("click",async e=>{if(e.target.classList.contains("sidebar-category-item")){const t=e.target.dataset.source;document.querySelectorAll(".sidebar-category-item").forEach(n=>{n.classList.remove("category-active")}),e.target.classList.add("category-active"),window.scrollTo({top:0,behavior:"smooth"});const r=document.querySelector(".bestsellers-container");r.innerHTML="",m();try{if(!e.target.classList.contains("all-category")){const n=await u.getSelectedCategory(t);H(n,t),l()}}catch(n){console.log(n)}}});D();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".scroll-up");e.classList.remove("show"),window.addEventListener("scroll",function(){window.scrollY>650?e.classList.add("show"):e.classList.remove("show")}),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})});function m(){document.querySelector(".loader-container").classList.remove("is-hidden-loader")}function l(){document.querySelector(".loader-container").classList.add("is-hidden-loader")}
//# sourceMappingURL=commonHelpers2.js.map
