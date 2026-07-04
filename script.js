const baseProducts = [
  {
    id: "vision-pro",
    name: "Apple Vision Pro M5 with Dual Knit Band",
    brand: "Apple",
    category: "tech",
    price: 3499,
    desc: "先从一台空间计算设备开始，财富池几乎纹丝不动。",
    image: "./assets/products/vision-pro.jpg",
    imagePosition: "center 48%",
  },
  {
    id: "tesla-model-s-plaid",
    name: "Tesla Model S Plaid",
    brand: "Tesla",
    category: "cars",
    price: 110000,
    desc: "把电动车性能旗舰装进车库，只算热身。",
    image: "./assets/products/tesla-model-s-plaid.jpg",
    imagePosition: "center 56%",
  },
  {
    id: "rolls-royce-phantom",
    name: "Rolls-Royce Phantom VIII Extended Wheelbase",
    brand: "Rolls-Royce",
    category: "cars",
    price: 650000,
    desc: "一台带星空顶的长轴距幻影，账单终于有点仪式感。",
    image: "./assets/products/rolls-royce-phantom.jpg",
    imagePosition: "center 56%",
  },
  {
    id: "lamborghini-aventador-svj",
    name: "Lamborghini Aventador SVJ",
    brand: "Lamborghini",
    category: "cars",
    price: 700000,
    desc: "碳纤维、V12 和夸张空气动力学，适合批量加入车库。",
    image: "./assets/products/lamborghini-aventador-svj.jpg",
    imagePosition: "center 52%",
  },
  {
    id: "falcon-9-crs4",
    name: "SpaceX Falcon 9 CRS-4 Style Orbital Launch",
    brand: "SpaceX",
    category: "space",
    price: 67000000,
    desc: "一次轨道级发射，数字开始从百万跳到千万。",
    image: "./assets/products/falcon-9-crs4.jpg",
    imagePosition: "center 43%",
  },
  {
    id: "boeing-747-8-bbj",
    name: "Boeing 747-8 BBJ A7-HHE",
    brand: "Boeing Business Jet",
    category: "aircraft",
    price: 420000000,
    desc: "一架完成 VIP 改装的空中宫殿，宽体飞机级别的排场。",
    image: "./assets/products/boeing-747-8-bbj.jpg",
    imagePosition: "center 50%",
  },
  {
    id: "airbus-a380",
    name: "Airbus A380-800 Private Conversion",
    brand: "Airbus",
    category: "aircraft",
    price: 500000000,
    desc: "把双层巨无霸改成私人机舱，预算也要双层起跳。",
    image: "./assets/products/airbus-a380.jpg",
    imagePosition: "center 46%",
  },
  {
    id: "dilbar-yacht",
    name: "Lürssen Dilbar Superyacht",
    brand: "Lürssen",
    category: "marine",
    price: 600000000,
    desc: "156 米级超级游艇，带着海面上的巨额维护费一起入账。",
    image: "./assets/products/dilbar-yacht.jpg",
    imagePosition: "center 54%",
  },
  {
    id: "necker-island",
    name: "Necker Island, British Virgin Islands",
    brand: "Private Island",
    category: "marine",
    price: 180000000,
    desc: "一整座英属维京群岛私人岛屿，海风都显得昂贵。",
    image: "./assets/products/necker-island.jpg",
    imagePosition: "center 52%",
  },
  {
    id: "villa-leopolda",
    name: "Villa Leopolda, Villefranche-sur-Mer",
    brand: "French Riviera Estate",
    category: "estate",
    price: 750000000,
    desc: "蔚蓝海岸传奇庄园，把地产项目拉到博物馆级别。",
    image: "./assets/products/villa-leopolda.jpg",
    imagePosition: "center 50%",
  },
  {
    id: "sphere-las-vegas",
    name: "Sphere Las Vegas",
    brand: "Venue",
    category: "estate",
    price: 2300000000,
    desc: "买下这颗发光球，夜景和账单都会非常难忽视。",
    image: "./assets/products/sphere-las-vegas.jpg",
    imagePosition: "center 46%",
  },
  {
    id: "american-airlines-center",
    name: "Dallas Mavericks Franchise",
    brand: "NBA",
    category: "asset",
    price: 4500000000,
    desc: "把 American Airlines Center 背后的球队资产纳入账本。",
    image: "./assets/products/american-airlines-center.jpg",
    imagePosition: "center 54%",
  },
  {
    id: "x-headquarters",
    name: "X Corp / Twitter Acquisition",
    brand: "Social Platform",
    category: "asset",
    price: 44000000000,
    desc: "一笔足以让进度条明显移动的社交平台级消费。",
    image: "./assets/products/x-headquarters.jpg",
    imagePosition: "center 50%",
  },
];

const state = {
  products: [...baseProducts],
  cart: {},
  category: "all",
  wealth: 430_000_000_000,
  customIndex: 1,
};

const els = {
  wealthTotalDisplay: document.querySelector("#wealthTotalDisplay"),
  remainingAmount: document.querySelector("#remainingAmount"),
  spentAmount: document.querySelector("#spentAmount"),
  spentPercent: document.querySelector("#spentPercent"),
  exactRemaining: document.querySelector("#exactRemaining"),
  progressFill: document.querySelector("#progressFill"),
  milestoneText: document.querySelector("#milestoneText"),
  productGrid: document.querySelector("#productGrid"),
  receiptTotal: document.querySelector("#receiptTotal"),
  receiptList: document.querySelector("#receiptList"),
  receiptEmpty: document.querySelector("#receiptEmpty"),
  mobileSpent: document.querySelector("#mobileSpent"),
  receiptPanel: document.querySelector("#receiptPanel"),
  mobileBackdrop: document.querySelector("#mobileBackdrop"),
  openReceiptBtn: document.querySelector("#openReceiptBtn"),
  closeReceiptBtn: document.querySelector("#closeReceiptBtn"),
  randomBuyBtn: document.querySelector("#randomBuyBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  spendRestBtn: document.querySelector("#spendRestBtn"),
  shareBtn: document.querySelector("#shareBtn"),
  customForm: document.querySelector("#customForm"),
  customName: document.querySelector("#customName"),
  customPrice: document.querySelector("#customPrice"),
  toast: document.querySelector("#toast"),
};

const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function formatMoney(value) {
  return moneyFormatter.format(Math.round(value));
}

function trim(value) {
  return value.toFixed(value >= 100 ? 0 : value >= 10 ? 1 : 2);
}

function getProduct(id) {
  return state.products.find((item) => item.id === id);
}

function getSpent() {
  return Object.entries(state.cart).reduce((sum, [id, count]) => {
    const item = getProduct(id);
    return item ? sum + item.price * count : sum;
  }, 0);
}

function getRemaining() {
  return Math.max(state.wealth - getSpent(), 0);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return map[char];
  });
}

function addItem(id, count = 1) {
  const item = getProduct(id);
  if (!item) return;
  const cost = item.price * count;
  if (cost > getRemaining()) {
    showToast("余额不够了，换一个项目或直接点击“花光剩余”。");
    return;
  }
  state.cart[id] = (state.cart[id] || 0) + count;
  render();
}

function removeItem(id, count = 1) {
  if (!state.cart[id]) return;
  state.cart[id] -= count;
  if (state.cart[id] <= 0) delete state.cart[id];
  render();
}

function setCategory(category) {
  state.category = category;
  document.querySelectorAll(".category-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === category);
  });
  renderProducts();
}

function render() {
  renderStats();
  renderProducts();
  renderReceipt();
}

function renderStats() {
  const spent = getSpent();
  const remaining = getRemaining();
  const rawPercent = state.wealth > 0 ? (spent / state.wealth) * 100 : 0;
  const percent = Math.min(rawPercent, 100);

  els.wealthTotalDisplay.textContent = formatMoney(state.wealth);
  els.remainingAmount.textContent = formatMoney(remaining);
  els.spentAmount.textContent = formatMoney(spent);
  els.mobileSpent.textContent = formatMoney(spent);
  els.spentPercent.textContent = `${percent < 0.01 && spent > 0 ? "<0.01" : trim(percent)}%`;
  els.exactRemaining.textContent = formatMoney(remaining);
  els.progressFill.style.width = `${percent}%`;
  els.milestoneText.textContent = getMilestoneText(spent, remaining, rawPercent);
}

function getMilestoneText(spent, remaining, percent) {
  if (spent === 0) return "先拿下一件小东西，看看这个财富池有多深。";
  if (remaining === 0) return "财富池已经花光，账单变成了一份荒诞的收藏清单。";
  if (percent >= 90) return "只剩最后一点预算，任何大项目都可能完成收尾。";
  if (percent >= 75) return "你已经花掉四分之三，账单终于开始压过财富本身。";
  if (percent >= 50) return "已经越过一半，继续买公司资产会更快。";
  if (spent >= 100_000_000_000) return "已花费超过一千亿美元，进度条终于有了存在感。";
  if (spent >= 10_000_000_000) return "百亿美元级别的消费出现了，但剩余数字依旧离谱。";
  if (spent >= 1_000_000_000) return "十亿美元已经消失，现实里这足够改变很多行业。";
  return "账单开始发光了，但距离花光还非常遥远。";
}

function renderProducts() {
  const remaining = getRemaining();
  const filtered =
    state.category === "all"
      ? state.products
      : state.products.filter((item) => item.category === state.category);

  els.productGrid.innerHTML = filtered
    .map((item) => {
      const count = state.cart[item.id] || 0;
      const canBuy = item.price <= remaining;
      const safeName = escapeHtml(item.name);
      return `
        <article class="product-card">
          <div class="product-visual" style="--image-position:${item.imagePosition || "center"}">
            <img src="${item.image}" alt="${safeName}" />
            <span class="product-price">${formatMoney(item.price)}</span>
          </div>
          <div class="product-body">
            <span class="product-kicker">${escapeHtml(item.brand)}</span>
            <h3>${safeName}</h3>
            <p>${escapeHtml(item.desc)}</p>
          </div>
          <div class="product-actions">
            <div class="quantity-row" aria-label="${safeName} 数量">
              <button class="qty-btn" type="button" data-action="minus" data-id="${item.id}" ${count ? "" : "disabled"} aria-label="减少">−</button>
              <span class="qty-count">${count}</span>
              <button class="qty-btn" type="button" data-action="plus" data-id="${item.id}" ${canBuy ? "" : "disabled"} aria-label="增加">+</button>
            </div>
            <button class="primary-btn buy-btn" type="button" data-action="buy" data-id="${item.id}" ${canBuy ? "" : "disabled"}>购买</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderReceipt() {
  const entries = Object.entries(state.cart)
    .map(([id, count]) => ({ item: getProduct(id), count }))
    .filter((entry) => entry.item);
  const total = getSpent();

  els.receiptTotal.textContent = formatMoney(total);
  els.receiptEmpty.style.display = entries.length ? "none" : "grid";
  els.receiptList.innerHTML = entries
    .map(
      ({ item, count }) => `
        <div class="receipt-item">
          <img class="receipt-thumb" src="${item.image}" alt="${escapeHtml(item.name)}" />
          <div>
            <strong>${escapeHtml(item.name)}</strong>
            <span>${formatMoney(item.price)} × ${count}</span>
          </div>
          <div class="receipt-item-total">${formatMoney(item.price * count)}</div>
          <button class="remove-btn" type="button" data-remove="${item.id}" aria-label="从账单移除 ${escapeHtml(item.name)}">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      `,
    )
    .join("");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    els.toast.classList.remove("is-visible");
  }, 2200);
}

function openReceipt() {
  els.receiptPanel.classList.add("is-open");
  els.mobileBackdrop.classList.add("is-visible");
}

function closeReceipt() {
  els.receiptPanel.classList.remove("is-open");
  els.mobileBackdrop.classList.remove("is-visible");
}

function resetCart() {
  state.cart = {};
  render();
  showToast("账单已重置。");
}

function spendRest() {
  const remaining = getRemaining();
  if (remaining <= 0) {
    showToast("已经花光了。");
    return;
  }
  const id = `custom-rest-${Date.now()}`;
  state.products.unshift({
    id,
    name: "Final Balance Sweep",
    brand: "Custom Closeout",
    category: "asset",
    price: remaining,
    desc: "精准花掉剩余财富，让进度条抵达终点。",
    image: "./assets/products/sphere-las-vegas.jpg",
    imagePosition: "center 46%",
  });
  addItem(id);
  openReceipt();
}

function randomBuy() {
  const remaining = getRemaining();
  const affordable = state.products.filter((item) => item.price <= remaining);
  if (!affordable.length) {
    showToast("没有买得起的项目了。");
    return;
  }
  const item = affordable[Math.floor(Math.random() * affordable.length)];
  addItem(item.id);
  showToast(`随机买下：${item.name}`);
}

async function shareSummary() {
  const spent = getSpent();
  const remaining = getRemaining();
  const entries = Object.entries(state.cart)
    .map(([id, count]) => {
      const item = getProduct(id);
      return item ? `${item.name}×${count}` : "";
    })
    .filter(Boolean)
    .slice(0, 6)
    .join("、");
  const text = `我在花光马斯克财富模拟器里花掉了 ${formatMoney(spent)}，还剩 ${formatMoney(remaining)}。账单：${entries || "暂时空空如也"}`;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    showToast("分享文案已复制。");
  } catch {
    showToast(text);
  }
}

document.querySelectorAll(".category-btn").forEach((button) => {
  button.addEventListener("click", () => setCategory(button.dataset.category));
});

els.productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const id = button.dataset.id;
  if (button.dataset.action === "minus") removeItem(id);
  if (button.dataset.action === "plus" || button.dataset.action === "buy") addItem(id);
});

els.receiptList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-remove]");
  if (button) removeItem(button.dataset.remove, state.cart[button.dataset.remove] || 1);
});

els.customForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = els.customName.value.trim();
  const price = Number(els.customPrice.value) * 1_000_000;
  if (!name || !Number.isFinite(price) || price <= 0) return;

  const id = `custom-${state.customIndex++}`;
  state.products.unshift({
    id,
    name,
    brand: "Custom Asset",
    category: "asset",
    price,
    desc: "这是你添加的自定义消费项目。",
    image: "./assets/products/villa-leopolda.jpg",
    imagePosition: "center 50%",
  });
  els.customForm.reset();
  setCategory("all");
  showToast("自定义项目已加入商品区。");
});

els.openReceiptBtn.addEventListener("click", openReceipt);
els.closeReceiptBtn.addEventListener("click", closeReceipt);
els.mobileBackdrop.addEventListener("click", closeReceipt);
els.resetBtn.addEventListener("click", resetCart);
els.randomBuyBtn.addEventListener("click", randomBuy);
els.spendRestBtn.addEventListener("click", spendRest);
els.shareBtn.addEventListener("click", shareSummary);

render();
