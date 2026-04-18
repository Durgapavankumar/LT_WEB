/* ============================================================
   Liquor Time — script.js
   Full product catalog · Brand carousel · Hero slideshow
   ============================================================ */

/* ── HOURS ───────────────────────────────────────────────── */
const HOURS = {
  0:{open:10,close:20,label:'10:00 AM – 8:00 PM'},
  1:{open:9,close:23,label:'9:00 AM – 11:00 PM'},
  2:{open:9,close:23,label:'9:00 AM – 11:00 PM'},
  3:{open:9,close:23,label:'9:00 AM – 11:00 PM'},
  4:{open:9,close:23,label:'9:00 AM – 11:00 PM'},
  5:{open:9,close:23,label:'9:00 AM – 11:00 PM'},
  6:{open:9,close:23,label:'9:00 AM – 11:00 PM'},
};

/* ── HERO SLIDESHOW IMAGES (Unsplash stable IDs) ─────────── */
const HERO_SLIDES = [
  'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1485824890521-7ef09b2d89c7?auto=format&fit=crop&w=1400&q=80',
];

/* ── BRAND POSTERS ───────────────────────────────────────── */
const BRANDS = [
  {name:"Jack Daniel's",  domain:'jackdaniels.com',     color:'#1a1a1a', cat:'Whiskey',   img:'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=320&q=80'},
  {name:'Patrón',         domain:'patrontequila.com',   color:'#7b0000', cat:'Tequila',   img:'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=320&q=80'},
  {name:'Heineken',       domain:'heineken.com',        color:'#005e23', cat:'Beer',      img:'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=320&q=80'},
  {name:'Grey Goose',     domain:'greygoose.com',       color:'#1a3a7a', cat:'Vodka',     img:'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=320&q=80'},
  {name:'Don Julio',      domain:'donjulio.com',        color:'#1a4a22', cat:'Tequila',   img:'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=320&q=80'},
  {name:'Bacardi',        domain:'bacardi.com',         color:'#111111', cat:'Rum',       img:'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=320&q=80'},
  {name:'White Claw',     domain:'whiteclaw.com',       color:'#003087', cat:'Seltzer',   img:'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=320&q=80'},
  {name:'Jameson',        domain:'jamesonwhiskey.com',  color:'#005e23', cat:'Whiskey',   img:'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=320&q=80'},
  {name:'Corona',         domain:'corona.com',          color:'#c8900a', cat:'Beer',      img:'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=320&q=80'},
  {name:"Tito's",         domain:'titosvodka.com',      color:'#003087', cat:'Vodka',     img:'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=320&q=80'},
  {name:'Crown Royal',    domain:'crownroyal.com',      color:'#5a1a8a', cat:'Whiskey',   img:'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=320&q=80'},
  {name:'Modelo',         domain:'modelo.com',          color:'#003a7a', cat:'Beer',      img:'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=320&q=80'},
  {name:'Casamigos',      domain:'casamigos.com',       color:'#a87a20', cat:'Tequila',   img:'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=320&q=80'},
  {name:'Captain Morgan', domain:'captainmorgan.com',   color:'#8b1a00', cat:'Rum',       img:'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=320&q=80'},
  {name:'Truly',          domain:'trulyseltzer.com',    color:'#5a1a8a', cat:'Seltzer',   img:'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=320&q=80'},
  {name:"Maker's Mark",   domain:'makersmark.com',      color:'#a41020', cat:'Whiskey',   img:'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=320&q=80'},
  {name:'Absolut',        domain:'absolut.com',         color:'#003a9a', cat:'Vodka',     img:'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=320&q=80'},
  {name:'Fireball',       domain:'fireballwhisky.com',  color:'#a41020', cat:'Shots',     img:'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=320&q=80'},
  {name:'Budweiser',      domain:'budweiser.com',       color:'#a41020', cat:'Beer',      img:'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=320&q=80'},
  {name:'Moët & Chandon', domain:'moet.com',            color:'#9a7e00', cat:'Champagne', img:'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=320&q=80'},
  {name:'Veuve Clicquot', domain:'veuve-clicquot.com',  color:'#d47800', cat:'Champagne', img:'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=320&q=80'},
  {name:'Jägermeister',   domain:'jagermeister.com',    color:'#005e23', cat:'Shots',     img:'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=320&q=80'},
  {name:'Stella Artois',  domain:'stellaartois.com',    color:'#002a6a', cat:'Beer',      img:'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=320&q=80'},
  {name:'Bulleit',        domain:'bulleit.com',         color:'#b03010', cat:'Whiskey',   img:'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=320&q=80'},
  {name:'High Noon',      domain:'highnoonspirits.com', color:'#a07020', cat:'Seltzer',   img:'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=320&q=80'},
  {name:'Kraken Rum',     domain:'krakenrum.com',       color:'#100800', cat:'Rum',       img:'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=320&q=80'},
  {name:'Barefoot Wine',  domain:'barefootwine.com',    color:'#6a1a30', cat:'Wine',      img:'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=320&q=80'},
  {name:'Kim Crawford',   domain:'kimcrawford.com',     color:'#1a5a2a', cat:'Wine',      img:'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=320&q=80'},
];

/* Cat badge colors */
const CAT_COLORS = {
  Beer:'#f59e0b', Whiskey:'#b45309', Vodka:'#0ea5e9', Tequila:'#65a30d',
  Rum:'#ea580c', Gin:'#16a34a', Wine:'#be123c', Seltzer:'#06b6d4', Shots:'#7c3aed',
  Champagne:'#d4af37',
};

/* ── PRODUCT BOTTLE IMAGE POOLS (Unsplash stable IDs, portrait crop) ── */
const BASE = 'https://images.unsplash.com/';
const FMT  = '?auto=format&fit=crop&w=400&h=520&q=80';
const FMT_SQ = '?auto=format&fit=crop&w=200&h=200&q=80';

const IMG_POOL = {
  beer: [
    'photo-1535958636474-b021ee887b13','photo-1436076863939-06870fe779c2',
    'photo-1485824890521-7ef09b2d89c7','photo-1566633806827-5af151680d98',
    'photo-1558642452-9d2a7deb7f62','photo-1574045330914-a5cd0b8eac01',
    'photo-1532634939-e9a18c16e7ee','photo-1613579588764-83e2b29fb6ba',
    'photo-1608270586620-248524c67de5','photo-1510626176961-4b57d4fbad03',
    'photo-1567620905732-2d1ec7ab7445','photo-1590086782957-93c06ef21604',
  ],
  wine_red: [
    'photo-1558618666-fcd25c85cd64','photo-1474722883778-792e7990302f',
    'photo-1510812431401-41d2bd2722f3','photo-1553361371-9b22f78e8b1d',
    'photo-1567529684892-c3a0b3b3e7b0','photo-1592840496694-26d035b52b48',
    'photo-1584916201218-f4242ceb4809','photo-1506377247377-2a5b3b417ebb',
    'photo-1547595628-c61a29f496f0','photo-1517701604599-bb29b565090c',
  ],
  wine_white: [
    'photo-1510812431401-41d2bd2722f3','photo-1474722883778-792e7990302f',
    'photo-1553361371-9b22f78e8b1d','photo-1558618666-fcd25c85cd64',
    'photo-1506377247377-2a5b3b417ebb','photo-1592840496694-26d035b52b48',
    'photo-1547595628-c61a29f496f0','photo-1517701604599-bb29b565090c',
    'photo-1584916201218-f4242ceb4809','photo-1567529684892-c3a0b3b3e7b0',
  ],
  wine_rose: [
    'photo-1474722883778-792e7990302f','photo-1558618666-fcd25c85cd64',
    'photo-1510812431401-41d2bd2722f3','photo-1553361371-9b22f78e8b1d',
    'photo-1592840496694-26d035b52b48','photo-1506377247377-2a5b3b417ebb',
    'photo-1584916201218-f4242ceb4809','photo-1547595628-c61a29f496f0',
  ],
  wine_sparkling: [
    'photo-1544145945-f90425340c7e','photo-1474722883778-792e7990302f',
    'photo-1510812431401-41d2bd2722f3','photo-1558618666-fcd25c85cd64',
    'photo-1553361371-9b22f78e8b1d','photo-1506377247377-2a5b3b417ebb',
    'photo-1592840496694-26d035b52b48','photo-1547595628-c61a29f496f0',
    'photo-1517701604599-bb29b565090c','photo-1584916201218-f4242ceb4809',
  ],
  whiskey: [
    'photo-1527281400683-1aae777175f8','photo-1569529465841-dfecdab7503b',
    'photo-1568644396922-5c3bfae12521','photo-1557766842-b0c2c31be58c',
    'photo-1574020493-a-6fc9fada8b8','photo-1584208124-9e8e8b4c1b9b',
    'photo-1547595628-c61a29f496f0','photo-1517701604599-bb29b565090c',
    'photo-1553361371-9b22f78e8b1d','photo-1510812431401-41d2bd2722f3',
    'photo-1551538827-9c037cb4f32a','photo-1514362545857-3bc16c4c7d1b',
  ],
  vodka: [
    'photo-1551538827-9c037cb4f32a','photo-1569529465841-dfecdab7503b',
    'photo-1527281400683-1aae777175f8','photo-1514362545857-3bc16c4c7d1b',
    'photo-1544145945-f90425340c7e','photo-1474722883778-792e7990302f',
    'photo-1558618666-fcd25c85cd64','photo-1510812431401-41d2bd2722f3',
    'photo-1553361371-9b22f78e8b1d','photo-1506377247377-2a5b3b417ebb',
    'photo-1547595628-c61a29f496f0','photo-1517701604599-bb29b565090c',
  ],
  tequila: [
    'photo-1514362545857-3bc16c4c7d1b','photo-1551538827-9c037cb4f32a',
    'photo-1569529465841-dfecdab7503b','photo-1527281400683-1aae777175f8',
    'photo-1544145945-f90425340c7e','photo-1558618666-fcd25c85cd64',
    'photo-1474722883778-792e7990302f','photo-1510812431401-41d2bd2722f3',
    'photo-1553361371-9b22f78e8b1d','photo-1506377247377-2a5b3b417ebb',
  ],
  rum: [
    'photo-1569529465841-dfecdab7503b','photo-1527281400683-1aae777175f8',
    'photo-1551538827-9c037cb4f32a','photo-1514362545857-3bc16c4c7d1b',
    'photo-1544145945-f90425340c7e','photo-1474722883778-792e7990302f',
    'photo-1558618666-fcd25c85cd64','photo-1510812431401-41d2bd2722f3',
    'photo-1553361371-9b22f78e8b1d','photo-1506377247377-2a5b3b417ebb',
  ],
  seltzer: [
    'photo-1551538827-9c037cb4f32a','photo-1485824890521-7ef09b2d89c7',
    'photo-1436076863939-06870fe779c2','photo-1535958636474-b021ee887b13',
    'photo-1566633806827-5af151680d98','photo-1558642452-9d2a7deb7f62',
    'photo-1574045330914-a5cd0b8eac01','photo-1532634939-e9a18c16e7ee',
    'photo-1513558161293-cdaf765ed2fd','photo-1567620905732-2d1ec7ab7445',
  ],
  shots: [
    'photo-1527281400683-1aae777175f8','photo-1551538827-9c037cb4f32a',
    'photo-1514362545857-3bc16c4c7d1b','photo-1544145945-f90425340c7e',
    'photo-1569529465841-dfecdab7503b','photo-1558618666-fcd25c85cd64',
    'photo-1474722883778-792e7990302f','photo-1510812431401-41d2bd2722f3',
  ],
};
function getProductImg(key, idx){
  const pool = IMG_POOL[key] || IMG_POOL.whiskey;
  return BASE + pool[idx % pool.length] + FMT;
}

/* ── CATEGORY CIRCLES DATA ───────────────────────────────── */
const CATEGORY_CIRCLES = [
  {key:'beer',    label:'Beer',          emoji:'🍺', img:'photo-1436076863939-06870fe779c2'},
  {key:'wine',    label:'Wine',          emoji:'🍷', img:'photo-1558618666-fcd25c85cd64'},
  {key:'whiskey', label:'Whiskey',       emoji:'🥃', img:'photo-1527281400683-1aae777175f8'},
  {key:'vodka',   label:'Vodka',         emoji:'🍸', img:'photo-1551538827-9c037cb4f32a'},
  {key:'tequila', label:'Tequila',       emoji:'🌵', img:'photo-1514362545857-3bc16c4c7d1b'},
  {key:'rum',     label:'Rum',           emoji:'🍹', img:'photo-1569529465841-dfecdab7503b'},
  {key:'seltzer', label:'Seltzers',      emoji:'🫧', img:'photo-1485824890521-7ef09b2d89c7'},
  {key:'shots',   label:'Shots & Margs', emoji:'🥂', img:'photo-1544145945-f90425340c7e'},
];

function buildCategoryCircles(){
  const grid = document.getElementById('shop-by-grid');
  if(!grid) return;
  grid.innerHTML = CATEGORY_CIRCLES.map(c => `
    <div class="category-circle" id="circle-${c.key}" onclick="jumpToCategory('${c.key}')">
      <div class="category-circle__img">
        <img src="${BASE}${c.img}${FMT_SQ}" alt="${c.label}" loading="lazy"
             onerror="this.style.display='none';this.parentElement.style.background='#f4f5f7'">
      </div>
      <span class="category-circle__label">${c.emoji} ${c.label}</span>
    </div>
  `).join('');
}

function jumpToCategory(key){
  switchTab(key);
  document.getElementById('products')?.scrollIntoView({behavior:'smooth',block:'start'});
  CATEGORY_CIRCLES.forEach(c=>{
    document.getElementById('circle-'+c.key)?.classList.toggle('active', c.key===key);
  });
}

/* ── PRODUCTS DATA ───────────────────────────────────────── */
const PRODUCTS = {
  beer: [
    {name:'Budweiser',          sub:'American Lager',       domain:'budweiser.com',       color:'#c41230', sizes:['6-Pack','12-Pack','24-Pack','30-Pack'], localImg:'images/beer/Budweiser.png'},
    {name:'Bud Light',          sub:'Light Lager',          domain:'budlight.com',        color:'#004b9e', sizes:['6-Pack','12-Pack','24-Pack','30-Pack'], localImg:'images/beer/Budlight.png'},
    {name:'Coors Light',        sub:'Light Beer',           domain:'coorslight.com',      color:'#0095b6', sizes:['6-Pack','12-Pack','24-Pack','30-Pack'], localImg:'images/beer/coorslight.png'},
    {name:'Corona Extra',       sub:'Mexican Lager',        domain:'corona.com',          color:'#c8900a', sizes:['6-Pack','12-Pack','24-Pack'],           localImg:'images/beer/corona-extra-bottles.jpg'},
    {name:'Modelo Especial',    sub:'Pilsner',              domain:'modelo.com',          color:'#003a7a', sizes:['6-Pack','12-Pack','24-Pack'],           localImg:'images/beer/modelo.png'},
    {name:'Heineken',           sub:'Dutch Lager',          domain:'heineken.com',        color:'#005e23', sizes:['6-Pack','12-Pack','24-Pack'],           localImg:'images/beer/heineken-original-bottle.png'},
    {name:'Miller Lite',        sub:'American Light Lager', domain:'millerlite.com',      color:'#00539f', sizes:['6-Pack','12-Pack','30-Pack'],           localImg:'images/beer/miller_lite.jpeg'},
    {name:'Blue Moon',          sub:'Belgian White',        domain:'bluemoonbrewing.com', color:'#00437a', sizes:['6-Pack','12-Pack'],                    localImg:'images/beer/blue_moon.png'},
    {name:'Stella Artois',      sub:'Belgian Lager',        domain:'stellaartois.com',    color:'#003b6f', sizes:['6-Pack','12-Pack'],                    localImg:'images/beer/stella_artois.png'},
    {name:'Busch Light',        sub:'Light Lager',          domain:'busch.com',           color:'#0055a5', sizes:['6-Pack','12-Pack','24-Pack','30-Pack'], localImg:'images/beer/bush_light.png'},
  ],
  wine_brands: [
    {name:'Barefoot Wine',          sub:'Best-Selling American Wine', domain:'barefootwine.com',   color:'#a83232', sizes:['750ml','1.5L','3L Box'],  localImg:'images/Wine/Brand/Barefoot.jpg'},
    {name:'Yellow Tail',            sub:'Australian Wines · Classic', domain:'yellowtailwine.com', color:'#8b1a1a', sizes:['750ml','1.5L'],           localImg:'images/Wine/Brand/Yellow_Tail.jpeg'},
    {name:'Kim Crawford',           sub:'New Zealand Wines',          domain:'kimcrawford.com',    color:'#1a5a2a', sizes:['750ml','1.5L'],           localImg:'images/Wine/Brand/Kim_Crawford.webp'},
    {name:'Josh Cellars',           sub:'California Wines',           domain:'joshcellars.com',    color:'#722f37', sizes:['750ml','1.5L'],           localImg:'images/Wine/Brand/Josh_Cellars.webp'},
    {name:'Apothic Wines',          sub:'Dark & Bold Blends · CA',    domain:'apothicwine.com',    color:'#6b0a2d', sizes:['750ml','1.5L'],           localImg:'images/Wine/Brand/Apothic_Wines.webp'},
  ],
  wine_variety: [
    {name:'Merlot',                 sub:'Soft · Plum · Dark Fruit',       domain:'robertmondavi.com',     color:'#5c1520', sizes:['750ml','1.5L'],        localImg:'images/Wine/Varieties/Merlot.png'},
    {name:'Cabernet Sauvignon',     sub:'Bold · Black Cherry · Oak',      domain:'joshcellars.com',       color:'#3a0a12', sizes:['750ml','1.5L'],        localImg:'images/Wine/Varieties/Cabernet Sauvignon.png'},
    {name:'Pinot Noir',             sub:'Light · Earthy · Red Fruit',     domain:'meiomiwines.com',       color:'#7b2d42', sizes:['750ml','1.5L'],        localImg:'images/Wine/Varieties/Pinot_Noir.png'},
    {name:'Shiraz / Syrah',         sub:'Spicy · Blackberry · Bold',      domain:'yellowtailwine.com',    color:'#6a0a1a', sizes:['750ml','1.5L'],        localImg:'images/Wine/Varieties/shiraz.png'},
    {name:'Red Blend',              sub:'Smooth · Complex · Layered',     domain:'apothicwine.com',       color:'#6b0a2d', sizes:['750ml','1.5L'],        localImg:'images/Wine/Varieties/Reb_Blend.png'},
    {name:'Chardonnay',             sub:'Buttery · Oak · Tropical Fruit', domain:'kj.com',                color:'#a07a10', sizes:['750ml','1.5L'],        localImg:'images/Wine/Varieties/Chardonnay.png'},
    {name:'Pinot Grigio',           sub:'Crisp · Light · Citrus',         domain:'santamargheritausa.com',color:'#2a6a40', sizes:['750ml'],               localImg:'images/Wine/Varieties/Pinot_Grigio.png'},
    {name:'Sauvignon Blanc',        sub:'Zesty · Herbal · Grapefruit',    domain:'kimcrawford.com',       color:'#1a5a2a', sizes:['750ml','1.5L'],        localImg:'images/Wine/Varieties/Sauvignon_Blanc.png'},
    {name:'Riesling',               sub:'Sweet · Floral · Stone Fruit',   domain:'ste-michelle.com',      color:'#5a7820', sizes:['750ml','1.5L'],        localImg:'images/Wine/Varieties/Riesling.png'},
    {name:'Rosé',                   sub:'Dry · Strawberry · Provence',    domain:'whispering-angel.com',  color:'#c06070', sizes:['750ml','1.5L'],        localImg:'images/Wine/Varieties/Rose.png'},
    {name:'Prosecco',               sub:'Sparkling · Italian · Brut',     domain:'lamarcaprosecco.com',   color:'#4a7a30', sizes:['750ml','Magnum 1.5L'],  localImg:'images/Wine/Varieties/Prosecco.png'},
    {name:'Champagne',              sub:'Brut · French · Celebratory',    domain:'moet.com',              color:'#9a7e00', sizes:['750ml','Magnum 1.5L'],  localImg:'images/Wine/Varieties/Champagne.png'},
    {name:'Moscato',                sub:'Sweet · Peach · Light Fizz',     domain:'barefootwine.com',      color:'#c8a030', sizes:['750ml','1.5L'],        localImg:'images/Wine/Varieties/Moscato.png'},
  ],
  whiskey: [
    {name:"Jack Daniel's Old No.7", sub:'Tennessee Whiskey',          domain:'jackdaniels.com',        color:'#111111', sizes:['375ml Pint','750ml','1L','1.75L'],   localImg:'images/whiskey/jack_daniel_bottle.webp'},
    {name:'Jameson Irish Whiskey',  sub:'Irish Whiskey · Triple Dist', domain:'jamesonwhiskey.com',    color:'#005e23', sizes:['375ml Pint','750ml','1L','1.75L'],   localImg:'images/whiskey/jameson_bottle.jpeg'},
    {name:'Crown Royal',            sub:'Canadian Whisky',             domain:'crownroyal.com',         color:'#5a1a8a', sizes:['375ml Pint','750ml','1.75L'],       localImg:'images/whiskey/crown_royal.webp'},
    {name:"Maker's Mark",           sub:'Kentucky Straight Bourbon',   domain:'makersmark.com',         color:'#a41020', sizes:['375ml Pint','750ml','1L','1.75L'], localImg:'images/whiskey/makers_mark.webp'},
    {name:'Bulleit Bourbon',        sub:'Kentucky Straight Bourbon',   domain:'bulleit.com',            color:'#b03010', sizes:['375ml Pint','750ml','1.75L'],       localImg:'images/whiskey/bulleit_bourbon.webp'},
    {name:'Jim Beam White Label',   sub:'Kentucky Straight Bourbon',   domain:'jimbeam.com',            color:'#1a3a6b', sizes:['375ml Pint','750ml','1L','1.75L'], localImg:'images/whiskey/jim_beam.webp'},
    {name:'Johnnie Walker Black',   sub:'Blended Scotch Whisky',       domain:'johnniewalker.com',      color:'#1a1a2e', sizes:['375ml Pint','750ml','1.75L'],       localImg:'images/whiskey/black-750ml_producthero_fullfront_desktop.webp'},
    {name:'Johnnie Walker Red',     sub:'Blended Scotch Whisky',       domain:'johnniewalker.com',      color:'#a41020', sizes:['375ml Pint','750ml','1.75L'],       localImg:'images/whiskey/red-750ml_producthero_fullfront_desktop.webp'},
    {name:'Glenfiddich 12 Year',    sub:'Single Malt Scotch · Speyside',domain:'glenfiddich.com',       color:'#9a6800', sizes:['750ml','1.75L'],                    localImg:'images/whiskey/glenfiddich_12years.jpeg'},
    {name:'Glenfiddich 14 Year',    sub:'Bourbon Barrel Reserve',      domain:'glenfiddich.com',        color:'#7a5000', sizes:['750ml'],                             localImg:'images/whiskey/glenfiddich_14years.jpeg'},
    {name:'Hennessy VS',            sub:'Very Special Cognac · France', domain:'hennessy.com',          color:'#1a0a00', sizes:['375ml Pint','750ml','1L','1.75L'], localImg:'images/whiskey/Hennessy.jpeg'},
    {name:"Weller's Special Reserve",sub:'Wheated Bourbon · Buffalo Trace',domain:'wellers.com',       color:'#5a2a00', sizes:['750ml'],                             localImg:'images/whiskey/wellers.jpeg'},
  ],
  vodka: [
    {name:"Tito's Handmade Vodka",  sub:'Texas Vodka · Corn-based',    domain:'titosvodka.com',        color:'#003087', sizes:['375ml Pint','750ml','1L','1.75L'], localImg:'images/vodka/Titos.jpeg'},
    {name:'Grey Goose',             sub:'French Vodka · Wheat',        domain:'greygoose.com',         color:'#1a3a7a', sizes:['375ml Pint','750ml','1L','1.75L'], localImg:'images/vodka/grey_goose.webp'},
    {name:'Absolut Original',       sub:'Swedish Vodka · Winter Wheat',domain:'absolut.com',           color:'#003a9a', sizes:['375ml Pint','750ml','1L','1.75L'], localImg:'images/vodka/absolut.jpeg'},
    {name:'Smirnoff No. 21',        sub:'Triple Distilled',            domain:'smirnoff.com',          color:'#a41020', sizes:['375ml Pint','750ml','1L','1.75L'], localImg:'images/vodka/smirnoff.webp'},
    {name:'Ketel One',              sub:'Dutch Vodka · Wheat',         domain:'ketelone.com',          color:'#1a3a6b', sizes:['375ml Pint','750ml','1.75L'],       localImg:'images/vodka/ketel_one.webp'},
    {name:'Cîroc',                  sub:'French Vodka · Grapes',       domain:'ciroc.com',             color:'#1a5ca8', sizes:['375ml Pint','750ml','1.75L'],       localImg:'images/vodka/ciroc.webp'},
    {name:'New Amsterdam',          sub:'California Vodka',            domain:'newamsterdamvodka.com', color:'#002050', sizes:['375ml Pint','750ml','1.75L'],       localImg:'images/vodka/new_amsterdam.jpeg'},
    {name:'Pink Whitney',           sub:'Pink Lemonade Vodka · New Amsterdam',domain:'newamsterdamvodka.com',color:'#d4507a',sizes:['750ml','1.75L'],              localImg:'images/vodka/pink_Whitney.jpeg'},
    {name:"Burnett's Vodka",        sub:'American Vodka · Triple Distilled',domain:'burnettsspirits.com',color:'#1a3a6b',sizes:['750ml','1.75L'],                  localImg:'images/vodka/Burnetts.jpeg'},
    {name:'McCormick Vodka',        sub:'American Vodka · Clean & Smooth',domain:'mccormickspirits.com',color:'#003a7a',sizes:['750ml','1.75L'],                   localImg:'images/vodka/Mccormick.jpeg'},
  ],
  tequila: [
    {name:'Patrón Silver',          sub:'Blanco · 100% Blue Agave',  domain:'patrontequila.com',   color:'#7b0000', sizes:['375ml Pint','750ml','1L','1.75L'],   localImg:'images/Tequila/Patron_Silver.webp'},
    {name:'Don Julio Blanco',       sub:'Blanco · Highlands Jalisco', domain:'donjulio.com',        color:'#1a4a22', sizes:['375ml Pint','750ml','1.75L'],        localImg:'images/Tequila/Don_Julio_Blanco.jpeg'},
    {name:'Casamigos Blanco',       sub:'Blanco · Highland Agave',    domain:'casamigos.com',       color:'#a07a20', sizes:['375ml Pint','750ml','1.75L'],        localImg:'images/Tequila/Casamigos_Blanco.avif'},
    {name:'Casamigos Reposado',     sub:'Reposado · Aged 7 Months',   domain:'casamigos.com',       color:'#8a5a10', sizes:['375ml Pint','750ml','1.75L'],        localImg:'images/Tequila/Casamigos_Reposado.avif'},
    {name:'Jose Cuervo Gold',       sub:'Joven · Gold Tequila',       domain:'cuervo.com',          color:'#8b5800', sizes:['375ml Pint','750ml','1L','1.75L'],   localImg:'images/Tequila/Jose_Cuervo_Gold.jpeg'},
    {name:'1800 Silver',            sub:'Blanco · 100% Agave',        domain:'1800tequila.com',     color:'#1a1a3a', sizes:['375ml Pint','750ml','1.75L'],        localImg:'images/Tequila/1800_Silver.jpeg'},
    {name:'Herradura Silver',       sub:'Blanco · Aged 45 Days',      domain:'herradura.com',       color:'#4a2a08', sizes:['750ml','1.75L'],                     localImg:'images/Tequila/Herradura_Silver.jpeg'},
    {name:'Espolòn Blanco',         sub:'Blanco · Highlands Jalisco', domain:'espolontequila.com',  color:'#b03a10', sizes:['750ml','1.75L'],                     localImg:'images/Tequila/Espolon_Blanco.jpeg'},
    {name:'Hornitos Plata',         sub:'Blanco · Jalisco Mexico',    domain:'hornitos.com',        color:'#1a6a3a', sizes:['750ml','1.75L'],                     localImg:'images/Tequila/Hornitos_Plata.jpeg'},
    {name:'El Jimador Blanco',      sub:'Blanco · Blue Agave',        domain:'eljimador.com',       color:'#a86a00', sizes:['750ml','1.75L'],                     localImg:'images/Tequila/El_Jimador_Blanco.jpeg'},
    {name:'Camarena Silver',        sub:'Blanco · 100% Blue Agave',   domain:'camarena.com',        color:'#1a5a8a', sizes:['750ml','1.75L'],                     localImg:'images/Tequila/camarena.jpeg'},
  ],
  rum: [
    {name:'Bacardi Superior White', sub:'White Rum · Puerto Rico',    domain:'bacardi.com',          color:'#111111', sizes:['375ml Pint','750ml','1L','1.75L'],  localImg:'images/Rum/Bacardi_Superior_White.jpeg'},
    {name:'Bacardi Gold',           sub:'Gold Rum · Puerto Rico',     domain:'bacardi.com',          color:'#8a5a00', sizes:['375ml Pint','750ml','1L','1.75L'],  localImg:'images/Rum/bacardi_gold.jpeg'},
    {name:'Captain Morgan Spiced',  sub:'Spiced Gold Rum',            domain:'captainmorgan.com',    color:'#8b1a00', sizes:['375ml Pint','750ml','1L','1.75L'],  localImg:'images/Rum/CaptainMorganSpiced.jpeg'},
    {name:'Malibu Coconut Rum',     sub:'Caribbean Coconut Rum',      domain:'malibucocolada.com',   color:'#003060', sizes:['375ml Pint','750ml','1L','1.75L'],  localImg:'images/Rum/MalibuCoconutRum.jpeg'},
    {name:'Kraken Black Spiced',    sub:'Black Spiced Rum · Trinidad',domain:'krakenrum.com',        color:'#100800', sizes:['375ml Pint','750ml','1.75L']},
    {name:'Flor de Caña 4 Year',    sub:'Extra Dry Rum · Nicaragua',  domain:'flordecana.com',       color:'#1a3a1a', sizes:['750ml','1.75L']},
    {name:'Plantation 3 Stars',     sub:'White Rum · 3-Country Blend',domain:'plantationrum.com',    color:'#7a5a20', sizes:['750ml','1.75L'],                    localImg:'images/Rum/Plantation_3_Stars.jpeg'},
    {name:"Myers's Original Dark",  sub:'Dark Rum · Jamaica',         domain:'myersrum.com',         color:'#3a1a00', sizes:['375ml Pint','750ml','1.75L'],       localImg:'images/Rum/MyerssOriginalDark.jpeg'},
    {name:'Mount Gay Eclipse',      sub:'Barbados Rum · Aged',        domain:'mountgayrum.com',      color:'#7a2a00', sizes:['750ml','1.75L'],                    localImg:'images/Rum/MountGayEclipse.jpeg'},
    {name:'Gosling\'s Black Seal',  sub:'Dark Rum · Bermuda',         domain:'goslingsrum.com',      color:'#1a0800', sizes:['750ml']},
    {name:'Malibu Black Coconut',   sub:'Coconut Rum 35% ABV',        domain:'malibucocolada.com',   color:'#1a1a3a', sizes:['750ml','1.75L'],                    localImg:'images/Rum/Malibu_black.jpeg'},
  ],
  gin: [
    {name:'Tanqueray London Dry',   sub:'London Dry Gin · Scotland',   domain:'tanqueray.com',          color:'#004a00', sizes:['375ml Pint','750ml','1.75L'],  localImg:'images/Gin/Tanqueray_London_Dry.jpeg'},
    {name:"Hendrick's Gin",         sub:'Scottish Gin · Cucumber Rose', domain:'hendricksgin.com',       color:'#1a2a1a', sizes:['750ml','1.75L'],               localImg:'images/Gin/Hendricks_Gin.jpeg'},
    {name:'Bombay Sapphire',        sub:'London Dry Gin · England',     domain:'bombaysapphire.com',     color:'#003a8a', sizes:['375ml Pint','750ml','1.75L'],  localImg:'images/Gin/Bombay_Sapphire.jpeg'},
    {name:'Beefeater London Dry',   sub:'London Dry Gin · England',     domain:'beefeatergarden.com',    color:'#a41020', sizes:['375ml Pint','750ml','1.75L'],  localImg:'images/Gin/Beefeater_London_Dry.jpeg'},
    {name:"Seagram's Extra Dry",    sub:'American Dry Gin',             domain:'seagramsgin.com',        color:'#1a5a1a', sizes:['375ml Pint','750ml','1.75L'],  localImg:'images/Gin/Seagrams_Extra_Dry.jpeg'},
    {name:'New Amsterdam Gin',      sub:'American Gin · California',    domain:'newamsterdamspirits.com',color:'#1a3a6a', sizes:['375ml Pint','750ml','1.75L'],  localImg:'images/Gin/New_Amsterdam_Gin.jpeg'},
    {name:"Gordon's London Dry",    sub:'London Dry Gin · England',     domain:'gordonsgin.com',         color:'#005a00', sizes:['750ml','1.75L']},
    {name:'Roku Japanese Gin',      sub:'Japanese Craft Gin',           domain:'suntory.com',            color:'#8a4a00', sizes:['750ml']},
    {name:'Aviation American Gin',  sub:'American Gin · Portland OR',   domain:'aviationgin.com',        color:'#6a3a7a', sizes:['375ml Pint','750ml','1.75L']},
    {name:'Empress 1908 Gin',       sub:'Indigo Gin · Victoria BC',     domain:'empress1908gin.com',     color:'#4a1a6a', sizes:['750ml']},
  ],
  seltzer: [
    {name:'White Claw Black Cherry',sub:'Hard Seltzer · 5% ABV',      domain:'whiteclaw.com',        color:'#6b0a2d', sizes:['Single 19.2oz','6-Pack','12-Pack','24-Pack'], localImg:'images/Seltzers/White_Claw_Black_Cherry.jpeg'},
    {name:'White Claw Mango',       sub:'Hard Seltzer · 5% ABV',      domain:'whiteclaw.com',        color:'#c87000', sizes:['Single 19.2oz','6-Pack','12-Pack'],           localImg:'images/Seltzers/White_Claw_Mango.jpeg'},
    {name:'Truly Wild Berry',       sub:'Hard Seltzer · 5% ABV',      domain:'trulyseltzer.com',     color:'#5a1a8a', sizes:['Single 19.2oz','6-Pack','12-Pack','24-Pack'], localImg:'images/Seltzers/Truly_Wild_Berry.jpeg'},
    {name:'Truly Strawberry Lemon', sub:'Hard Lemonade Seltzer',       domain:'trulyseltzer.com',     color:'#a83050', sizes:['Single 19.2oz','6-Pack','12-Pack'],           localImg:'images/Seltzers/Truly_Strawberry_Lemon.jpeg'},
    {name:'High Noon Watermelon',   sub:'Sun Sips Vodka Seltzer',      domain:'highnoonspirits.com',  color:'#c83850', sizes:['Single 355ml','4-Pack','8-Pack'],             localImg:'images/Seltzers/High_Noon_Watermelon.jpeg'},
    {name:'High Noon Peach',        sub:'Sun Sips Vodka Seltzer',      domain:'highnoonspirits.com',  color:'#d06030', sizes:['Single 355ml','4-Pack','8-Pack'],             localImg:'images/Seltzers/High_Noon_Peach.jpeg'},
    {name:'Bud Light Seltzer Lemon',sub:'Hard Seltzer · 5% ABV',      domain:'budlight.com',         color:'#1a4a8a', sizes:['Single 19.2oz','6-Pack','12-Pack'],           localImg:'images/Seltzers/Bud_Light_Seltzer_Lemon.jpeg'},
    {name:'Corona Seltzer Tropical',sub:'Hard Seltzer · 4.5% ABV',    domain:'corona.com',           color:'#1a6a2a', sizes:['Single 12oz','6-Pack','12-Pack'],             localImg:'images/Seltzers/Corona_Seltzer_Tropical.jpeg'},
    {name:'Vizzy Blueberry Pomeg',  sub:'Vitamin C Hard Seltzer',      domain:'vizzyhardseltzer.com', color:'#3a1a8a', sizes:['6-Pack','12-Pack'],                          localImg:'images/Seltzers/Vizzy_Blueberry_Pomeg.jpeg'},
    {name:'Lone River Ranch Water', sub:'Hard Seltzer · 4% ABV',      domain:'loneriverranch.com',   color:'#2a6a3a', sizes:['6-Pack','12-Pack']},
    {name:'Happy Dad Hard Seltzer', sub:'Hard Seltzer · 5% ABV',      domain:'happydad.com',         color:'#1a3a6a', sizes:['Single 12oz','6-Pack','12-Pack'],             localImg:'images/Seltzers/Happy_Dad.jpeg'},
    {name:"Mike's Hard Lemonade",   sub:'Flavored Malt Beverage · 5%', domain:'mikeshard.com',        color:'#d4a000', sizes:['Single 11.2oz','6-Pack','12-Pack'],          localImg:'images/Seltzers/Mikes.jpeg'},
    {name:'Cutwater Spirits',       sub:'RTD Cocktail Seltzer',        domain:'cutwaterspirits.com',  color:'#1a4a5a', sizes:['Single 12oz','4-Pack'],                      localImg:'images/Seltzers/cutwater.jpeg'},
    {name:'Mom Water Seltzer',      sub:'Hard Seltzer · 4% ABV',      domain:'momwater.com',         color:'#c05080', sizes:['Single 12oz','6-Pack','12-Pack'],             localImg:'images/Seltzers/mom_water.jpeg'},
    {name:'Dad Water Seltzer',      sub:'Hard Seltzer · 5% ABV',      domain:'drinkdadwater.com',    color:'#1a5a8a', sizes:['Single 12oz','6-Pack','12-Pack'],             localImg:'images/Seltzers/dad_water.png'},
    {name:'Smirnoff Ice Red White', sub:'Red White & Berry Malt Bev',  domain:'smirnoff.com',         color:'#a41020', sizes:['Single 11.2oz','6-Pack'],                    localImg:'images/Seltzers/smirnoff_ice_red_white.jpg'},
  ],
  shots: [
    {name:'Fireball Cinnamon',      sub:'Cinnamon Whisky Liqueur',    domain:'fireballwhisky.com',   color:'#a41020', sizes:['50ml Mini','375ml Pint','750ml','1.75L'], localImg:'images/whiskey/fireball.jpg'},
    {name:'Jägermeister',           sub:'Herbal Digestif Liqueur',    domain:'jagermeister.com',     color:'#005e23', sizes:['50ml Mini','375ml Pint','750ml','1.75L']},
    {name:'RumChata',               sub:'Horchata Cream Liqueur',     domain:'rumchata.com',         color:'#a05820', sizes:['375ml Pint','750ml','1.75L']},
    {name:'DeKuyper Peach Schnapps',sub:'Peach Schnapps',             domain:'dekuyper.com',         color:'#c06000', sizes:['375ml Pint','750ml']},
    {name:'Jose Cuervo Margarita',  sub:'Ready-to-Drink Margarita',   domain:'cuervo.com',           color:'#7a5000', sizes:['1L','1.75L']},
    {name:'Master of Mixes',        sub:'Classic Margarita Mix',      domain:'masterofmixes.com',    color:'#1a6a1a', sizes:['1L','1.75L']},
    {name:'Tres Agaves Organic Mix',sub:'Organic Margarita Mix',      domain:'tresagaves.com',       color:'#2a6a10', sizes:['1L']},
    {name:'Dr. McGillicuddy Cherry',sub:'Cherry Schnapps Liqueur',    domain:'drmcgillicuddys.com',  color:'#7a0a0a', sizes:['375ml Pint','750ml']},
  ],
};

/* Tab config */
const MAIN_TABS = [
  {key:'beer',          label:'🍺 Beer'},
  {key:'wine',          label:'🍷 Wine'},
  {key:'whiskey',       label:'🥃 Whiskey'},
  {key:'vodka',         label:'🍸 Vodka'},
  {key:'tequila',       label:'🌵 Tequila'},
  {key:'rum',           label:'🍹 Rum'},
  {key:'gin',           label:'🌿 Gin'},
  {key:'seltzer',       label:'🫧 Seltzers'},
  {key:'shots',         label:'🥂 Shots & Margs'},
];
const WINE_TABS = [
  {key:'wine_brands',  label:'🏆 Top Brands'},
  {key:'wine_variety', label:'🍇 Shop by Variety'},
];

let activeMain = 'beer';
let activeWine = 'wine_brands';

/* ── KC TIME ─────────────────────────────────────────────── */
function getKCTime() {
  const now   = new Date();
  const parts = new Intl.DateTimeFormat('en-US',{timeZone:'America/Chicago',hour:'numeric',minute:'numeric',weekday:'short',hour12:false}).formatToParts(now);
  const get   = t => parts.find(p=>p.type===t)?.value??'';
  const dayMap= {Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6};
  return {day:dayMap[get('weekday')]??new Date().getDay(), hour:parseInt(get('hour'),10)+parseInt(get('minute'),10)/60};
}

/* ── AGE GATE ────────────────────────────────────────────── */
function enterSite() {
  sessionStorage.setItem('lt_age_ok','1');
  const g=document.getElementById('age-gate');
  g.style.transition='opacity .4s ease'; g.style.opacity='0';
  setTimeout(()=>{g.style.display='none';},420);
  document.body.style.overflow='';
}
function denyEntry(){window.location.href='https://www.alcohol.org/';}
function initAgeGate(){
  const g=document.getElementById('age-gate');
  if(sessionStorage.getItem('lt_age_ok')==='1'){g.style.display='none';}
  else{document.body.style.overflow='hidden';}
}

/* ── STORE STATUS ────────────────────────────────────────── */
function initStoreStatus(){
  const {day,hour}=getKCTime();
  const today=HOURS[day], isOpen=hour>=today.open&&hour<today.close;
  const badge=document.getElementById('store-status');
  if(badge){badge.textContent=isOpen?'✅ Open Now':'❌ Closed Now';badge.className='hero__badge '+(isOpen?'open':'closed');}
  const todayEl=document.getElementById('hours-today');
  if(todayEl)todayEl.textContent=(isOpen?'✅ Open — ':'❌ Closed — ')+today.label;
  const row=document.querySelector(`.hours-row[data-day="${day}"]`);
  if(row)row.classList.add('today');
}

/* ── DEAL BANNER ─────────────────────────────────────────── */
function initDealBanner(){
  const {day}=getKCTime(), badge=document.getElementById('deal-badge');
  if(!badge)return;
  if(day===2||day===3){
    badge.textContent='🔥 DEAL ACTIVE TODAY!'; badge.classList.add('active');
    const b=document.querySelector('.deal-banner');
    if(b)b.style.borderColor='rgba(192,57,43,.6)';
  }
}

/* ── HERO SLIDESHOW ──────────────────────────────────────── */
function initHeroSlideshow(){
  const wrap=document.getElementById('hero-slides');
  const dotsWrap=document.getElementById('hero-dots');
  if(!wrap)return;
  HERO_SLIDES.forEach((url,i)=>{
    const slide=document.createElement('div');
    slide.className='slide'+(i===0?' active':'');
    slide.style.backgroundImage=`url('${url}')`;
    wrap.appendChild(slide);
    const dot=document.createElement('div');
    dot.className='dot'+(i===0?' active':'');
    dot.addEventListener('click',()=>goToSlide(i));
    dotsWrap.appendChild(dot);
  });
  let cur=0;
  function goToSlide(n){
    wrap.querySelectorAll('.slide').forEach((s,i)=>{s.classList.toggle('active',i===n);});
    dotsWrap.querySelectorAll('.dot').forEach((d,i)=>{d.classList.toggle('active',i===n);});
    cur=n;
  }
  window._heroGoTo=goToSlide;
  setInterval(()=>goToSlide((cur+1)%HERO_SLIDES.length),5000);
}

/* ── BRAND POSTER CAROUSEL ───────────────────────────────── */
function buildBrandCarousel(){
  const track=document.getElementById('brand-track');
  if(!track)return;
  const all=[...BRANDS,...BRANDS]; // doubled for seamless loop
  const html=all.map(b=>{
    const catColor=CAT_COLORS[b.cat]||'#d4af37';
    const initials=b.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    return `
    <div class="bp-card">
      <div class="bp-card__bg" style="background-image:url('${b.img}');filter:brightness(.55) saturate(1.2);"></div>
      <div class="bp-card__overlay" style="background:linear-gradient(180deg,rgba(0,0,0,.1) 0%,${b.color}dd 100%);"></div>
      <div class="bp-card__logo-wrap">
        <img src="https://logo.clearbit.com/${b.domain}" alt="${b.name}" loading="lazy"
             onerror="this.closest('.bp-card__logo-wrap').style.display='none'">
      </div>
      <div class="bp-card__info">
        <div class="bp-card__name">${b.name}</div>
        <div class="bp-card__cat" style="background:${catColor}22;color:${catColor}">${b.cat}</div>
      </div>
    </div>`;
  }).join('');
  track.innerHTML=html;
}

/* ── CATEGORY BANNER CONFIG ──────────────────────────────── */
const CAT_BANNER_IMG = {
  beer:    'https://images.unsplash.com/photo-1436076863939-06870fe779c2?auto=format&fit=crop&w=900&q=80',
  wine:    'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80',
  whiskey: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=900&q=80',
  vodka:   'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=80',
  tequila: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80',
  rum:     'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=900&q=80',
  gin:     'https://images.unsplash.com/photo-1608270586620-248524c67de5?auto=format&fit=crop&w=900&q=80',
  seltzer: 'https://images.unsplash.com/photo-1485824890521-7ef09b2d89c7?auto=format&fit=crop&w=900&q=80',
  shots:   'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80',
  wine_brands:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
  wine_variety:'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80',
};

function updateCatBanner(key){
  let banner = document.getElementById('cat-banner');
  if(!banner){
    banner = document.createElement('div');
    banner.id = 'cat-banner';
    banner.className = 'cat-banner';
    document.getElementById('product-grid').before(banner);
  }
  const tab = [...MAIN_TABS,...WINE_TABS].find(t=>t.key===key);
  const label = tab ? tab.label.replace(/^[^\s]+ /,'') : key;
  const emoji = tab ? tab.label.split(' ')[0] : '🍸';
  const count = (PRODUCTS[key]||[]).length;
  const img = CAT_BANNER_IMG[key] || CAT_BANNER_IMG.whiskey;
  banner.innerHTML = `
    <div class="cat-banner__bg" style="background-image:url('${img}')"></div>
    <div class="cat-banner__body">
      <div class="cat-banner__emoji">${emoji}</div>
      <div class="cat-banner__label">${label}</div>
      <div class="cat-banner__count">${count} products available</div>
    </div>`;
  banner.classList.remove('visible');
  requestAnimationFrame(()=>banner.classList.add('visible'));
}

/* ── PRODUCT CATALOG ─────────────────────────────────────── */
function renderProductGrid(key){
  const grid = document.getElementById('product-grid');
  if(!grid) return;

  /* Swap class to poster-grid */
  grid.className = 'poster-grid switching';

  setTimeout(()=>{
    const items = PRODUCTS[key]||[];
    if(!items.length){
      grid.innerHTML='<p style="color:var(--text-muted);text-align:center;grid-column:1/-1;padding:40px 20px">Coming soon!</p>';
      grid.className='poster-grid';
      return;
    }

    grid.innerHTML = items.map((p,idx)=>{
      const imgUrl = p.localImg ? p.localImg : getProductImg(key, idx);
      const sizeBtns = p.sizes.map(s=>`<button class="poster-size-btn" onclick="selectSize(this)">${s}</button>`).join('');
      return `
      <div class="poster-card">
        <div class="poster-bar" style="background:${p.color}"></div>
        <div class="poster-img-wrap" id="wrap-${key}-${idx}"
             style="background:#f9f9fb">
          <div class="poster-fallback" id="fb-${key}-${idx}"
               style="background:linear-gradient(160deg,${p.color}dd,${p.color}66)">
            ${p.name}
          </div>
          <img class="poster-img" src="${imgUrl}" alt="${p.name}" loading="lazy"
               onerror="this.style.display='none';var fb=document.getElementById('fb-${key}-${idx}');if(fb){fb.style.display='flex';}">
        </div>
        <div class="poster-body">
          <div class="poster-name">${p.name}</div>
          <div class="poster-sub">${p.sub}</div>
          <div class="poster-sizes">${sizeBtns}</div>
        </div>
      </div>`;
    }).join('');

    grid.className = 'poster-grid';
  }, 200);
}

function selectSize(btn){
  btn.closest('.poster-sizes').querySelectorAll('.poster-size-btn').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');
}

function buildTabs(){
  const catTabsEl=document.getElementById('cat-tabs');
  const wineTabsEl=document.getElementById('wine-tabs');
  if(!catTabsEl)return;

  catTabsEl.innerHTML=MAIN_TABS.map(t=>{
    const parts=t.label.split(' ');
    const emoji=parts[0];
    const label=parts.slice(1).join(' ');
    return `<button class="cat-tab${t.key===activeMain?' active':''}" onclick="switchTab('${t.key}')">
      <span class="cat-tab__emoji">${emoji}</span>
      <span class="cat-tab__label">${label}</span>
    </button>`;
  }).join('');

  wineTabsEl.innerHTML=WINE_TABS.map(t=>`
    <button class="wine-tab${t.key===activeWine?' active':''}" onclick="switchWineTab('${t.key}')">${t.label}</button>
  `).join('');

  const isWine=activeMain==='wine';
  wineTabsEl.style.display=isWine?'flex':'none';
  const initKey=isWine?activeWine:activeMain;
  updateCatBanner(initKey);
  renderProductGrid(initKey);
}

function switchTab(key){
  activeMain=key;
  document.querySelectorAll('.cat-tab').forEach((t,i)=>t.classList.toggle('active',MAIN_TABS[i]?.key===key));
  const wineTabsEl=document.getElementById('wine-tabs');
  const isWine=key==='wine';
  wineTabsEl.style.display=isWine?'flex':'none';
  const renderKey=isWine?activeWine:key;
  updateCatBanner(renderKey);
  renderProductGrid(renderKey);
  document.getElementById('products')?.scrollIntoView({behavior:'smooth',block:'start'});
}

function switchWineTab(key){
  activeWine=key;
  document.querySelectorAll('.wine-tab').forEach(t=>t.classList.toggle('active',t.textContent.trim()===WINE_TABS.find(x=>x.key===key)?.label));
  updateCatBanner(key);
  renderProductGrid(key);
}

/* ── NAV ─────────────────────────────────────────────────── */
function initNav(){
  const toggle=document.getElementById('nav-toggle'),menu=document.getElementById('nav-mobile');
  if(!toggle||!menu)return;
  toggle.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    menu.setAttribute('aria-hidden',String(!open));
  });
  document.addEventListener('click',e=>{
    if(!toggle.contains(e.target)&&!menu.contains(e.target)){
      menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');menu.setAttribute('aria-hidden','true');
    }
  });
}
function closeMobileMenu(){
  const m=document.getElementById('nav-mobile'),t=document.getElementById('nav-toggle');
  if(m){m.classList.remove('open');m.setAttribute('aria-hidden','true');}
  if(t)t.setAttribute('aria-expanded','false');
}
function initNavScroll(){
  const nav=document.getElementById('navbar');
  if(!nav)return;
  window.addEventListener('scroll',()=>{nav.style.boxShadow=window.scrollY>10?'0 4px 24px rgba(0,0,0,.5)':'none';},{passive:true});
}
function initSmoothScroll(){
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click',e=>{
      const target=document.querySelector(link.getAttribute('href'));
      if(!target)return;
      e.preventDefault();
      window.scrollTo({top:target.getBoundingClientRect().top+window.scrollY-72,behavior:'smooth'});
    });
  });
}

/* ── INIT ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded',()=>{
  initAgeGate();
  initStoreStatus();
  initDealBanner();
  initHeroSlideshow();
  buildCategoryCircles();
  buildBrandCarousel();
  buildTabs();
  initNav();
  initNavScroll();
  initSmoothScroll();
});
