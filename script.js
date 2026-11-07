const fishProducts = [
  {id:1,name:"Cupang Halfmoon",category:"Cupang",type:"Betta splendens",price:35000,desc:"Sirip lebar dengan warna yang menawan.",tag:"Best seller",img:"assets/cupang-halfmoon.svg"},
  {id:2,name:"Cupang Koi",category:"Cupang",type:"Betta splendens",price:45000,desc:"Corak merah-putih seperti ikan koi.",tag:"Favorit",img:"assets/cupang-koi.svg"},
  {id:3,name:"Cupang Crowntail",category:"Cupang",type:"Betta splendens",price:30000,desc:"Sirip unik menyerupai mahkota.",tag:"Unik",img:"assets/cupang-crowntail.svg"},
  {id:4,name:"Guppy Fancy",category:"Guppy",type:"Poecilia reticulata",price:15000,desc:"Ikan kecil aktif dengan ekor warna-warni.",tag:"Cocok pemula",img:"assets/guppy-fancy.svg"},
  {id:5,name:"Guppy Blue Moscow",category:"Guppy",type:"Poecilia reticulata",price:25000,desc:"Warna biru metalik yang elegan.",tag:"Pilihan",img:"assets/guppy-blue-moscow.svg"},
  {id:6,name:"Guppy Cobra",category:"Guppy",type:"Poecilia reticulata",price:20000,desc:"Pola tubuh bermotif seperti kulit ular.",tag:"Populer",img:"assets/guppy-cobra.svg"},
  {id:7,name:"Mas Koki Oranda",category:"Mas Koki",type:"Carassius auratus",price:55000,desc:"Memiliki tonjolan khas di bagian kepala.",tag:"Premium",img:"assets/mas-koki-oranda.svg"},
  {id:8,name:"Mas Koki Ranchu",category:"Mas Koki",type:"Carassius auratus",price:65000,desc:"Bentuk tubuh bulat tanpa sirip punggung.",tag:"Premium",img:"assets/mas-koki-ranchu.svg"},
  {id:9,name:"Mas Koki Ryukin",category:"Mas Koki",type:"Carassius auratus",price:50000,desc:"Punggung tinggi dan bentuk tubuh unik.",tag:"Favorit",img:"assets/mas-koki-ryukin.svg"},
  {id:10,name:"Neon Tetra",category:"Lainnya",type:"Paracheirodon innesi",price:8000,desc:"Ikan mungil dengan garis biru menyala.",tag:"Ikan komunitas",img:"assets/neon-tetra.svg"},
  {id:11,name:"Manfish / Angelfish",category:"Lainnya",type:"Pterophyllum scalare",price:18000,desc:"Bentuk tubuh pipih dengan sirip anggun.",tag:"Anggun",img:"assets/manfish.svg"},
  {id:12,name:"Discus",category:"Lainnya",type:"Symphysodon",price:95000,desc:"Ikan hias berbentuk bundar dan berwarna cerah.",tag:"Koleksi",img:"assets/discus.svg"}
];
const foodProducts = [
  {id:101,name:"Pelet Ikan Hias",desc:"Pakan harian untuk ikan hias.",price:18000,img:"assets/pelet-ikan.svg"},
  {id:102,name:"Cacing Kering",desc:"Pakan protein untuk ikan.",price:22000,img:"assets/cacing-kering.svg"},
  {id:103,name:"Artemia",desc:"Pakan alami untuk burayak.",price:25000,img:"assets/artemia.svg"},
  {id:104,name:"Pakan Mas Koki",desc:"Pelet khusus ikan mas koki.",price:20000,img:"assets/pakan-mas-koki.svg"}
];
const allProducts=[...fishProducts,...foodProducts];
let cart={};let currentCategory="Semua";
const rupiah=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
function productCard(p){return `<article class="product-card"><div class="product-image"><img loading="lazy" src="${p.img}" alt="${p.name}" onerror="this.onerror=null;this.src='assets/discus.svg'"><span class="tag">${p.tag||"Pakan pilihan"}</span></div><div class="product-info"><span class="type">${p.type||"Makanan ikan"}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><span class="price">${rupiah(p.price)}</span><button class="add-btn" onclick="addToCart(${p.id})" aria-label="Tambah ${p.name}">+</button></div></div></article>`}
function renderFish(){let q=document.getElementById("fishSearch").value.toLowerCase();let list=fishProducts.filter(p=>(currentCategory==="Semua"||p.category===currentCategory)&&(`${p.name} ${p.type} ${p.desc}`).toLowerCase().includes(q));document.getElementById("fishGrid").innerHTML=list.length?list.map(productCard).join(""):'<p>Produk tidak ditemukan. Coba kata kunci lain.</p>';document.getElementById("fishCount").textContent=`${list.length} produk`}
function renderFood(){document.getElementById("foodGrid").innerHTML=foodProducts.map(p=>`<article class="food-card"><img loading="lazy" src="${p.img}" alt="${p.name}" onerror="this.onerror=null;this.src='assets/pelet-ikan.svg'"><div><h3>${p.name}</h3><p>${p.desc}</p><span class="price">${rupiah(p.price)}</span></div><button class="add-btn" onclick="addToCart(${p.id})" aria-label="Tambah ${p.name}">+</button></article>`).join("")}
function addToCart(id){cart[id]=(cart[id]||0)+1;updateCart();showToast("Produk ditambahkan ke keranjang!")}
function changeQty(id,delta){cart[id]=(cart[id]||0)+delta;if(cart[id]<=0)delete cart[id];updateCart()}
function updateCart(){let entries=Object.entries(cart);let count=entries.reduce((s,[,q])=>s+q,0);let total=entries.reduce((s,[id,q])=>s+allProducts.find(p=>p.id==id).price*q,0);document.getElementById("cartCount").textContent=count;document.getElementById("cartTotal").textContent=rupiah(total);document.getElementById("cartItems").innerHTML=entries.length?entries.map(([id,q])=>{let p=allProducts.find(x=>x.id==id);return `<div class="cart-row"><div><b>${p.name}</b><small>${rupiah(p.price)} × ${q}</small></div><div class="qty"><button onclick="changeQty(${id},-1)">−</button><b>${q}</b><button onclick="changeQty(${id},1)">+</button></div></div>`}).join(""):'<p class="empty-cart">Keranjangmu masih kosong. Yuk pilih produk! 🐠</p>'}
function toggleCart(open){document.getElementById("cartDrawer").classList.toggle("show",open);document.getElementById("overlay").classList.toggle("show",open)}
let toastTimer;function showToast(msg){let t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2100)}
document.getElementById("fishFilters").addEventListener("click",e=>{let b=e.target.closest("button[data-category]");if(!b)return;currentCategory=b.dataset.category;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));renderFish()});
document.getElementById("fishSearch").addEventListener("input",renderFish);
document.getElementById("openCart").addEventListener("click",()=>toggleCart(true));document.getElementById("closeCart").addEventListener("click",()=>toggleCart(false));document.getElementById("overlay").addEventListener("click",()=>toggleCart(false));
document.getElementById("checkout").addEventListener("click",()=>{if(!Object.keys(cart).length){showToast("Keranjang masih kosong.");return}let summary=Object.entries(cart).map(([id,q])=>{let p=allProducts.find(x=>x.id==id);return `${p.name} (${q}x)`}).join(", ");alert(`Terima kasih sudah berbelanja di AquaRia!\\n\\nPesanan demo: ${summary}\\nTotal: ${document.getElementById("cartTotal").textContent}\\n\\nIni hanya simulasi, belum ada pembayaran sungguhan.`)});
renderFish();renderFood();updateCart();