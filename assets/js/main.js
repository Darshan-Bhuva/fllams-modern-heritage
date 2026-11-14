// FLLAMS — localStorage cart only. No real payment, no backend, no tracking.
// Checkout is a placeholder until a payment provider is connected (see TODO.md).

(function () {
  var KEY = "fllams-cart-v1";

  function readCart() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch (e) { return []; }
  }
  function writeCart(cart) {
    try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) { /* storage unavailable */ }
  }
  function count(cart) {
    return cart.reduce(function (n, item) { return n + (item.qty || 1); }, 0);
  }

  function updateCartLinks() {
    var n = count(readCart());
    document.querySelectorAll("[data-cart-count]").forEach(function (el) {
      el.textContent = n > 0 ? "Cart (" + n + ")" : "Cart";
    });
  }

  function money(pence) { return "£" + pence; }

  // Add to cart: buttons carry data-name, data-price, data-size is read from
  // the selected size button on product pages.
  document.addEventListener("click", function (ev) {
    var btn = ev.target.closest("[data-add-to-cart]");
    if (!btn) return;
    var sizeBtn = document.querySelector('.size-btn[aria-pressed="true"]');
    var size = sizeBtn ? sizeBtn.textContent.trim() : "";
    if (!size) {
      var note = document.getElementById("size-note");
      if (note) note.textContent = "Please choose a size first.";
      return;
    }
    var cart = readCart();
    var name = btn.getAttribute("data-name");
    var price = parseInt(btn.getAttribute("data-price"), 10);
    var found = null;
    cart.forEach(function (item) {
      if (item.name === name && item.size === size) found = item;
    });
    if (found) { found.qty = (found.qty || 1) + 1; }
    else { cart.push({ name: name, size: size, price: price, qty: 1 }); }
    writeCart(cart);
    updateCartLinks();
    var added = document.getElementById("added-note");
    if (added) added.textContent = name + " (" + size + ") added to your cart.";
    renderCartPanel();
  });

  // Size selector.
  document.addEventListener("click", function (ev) {
    var btn = ev.target.closest(".size-btn");
    if (!btn) return;
    document.querySelectorAll(".size-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", "false");
    });
    btn.setAttribute("aria-pressed", "true");
    var note = document.getElementById("size-note");
    if (note) note.textContent = "";
  });

  // Thumbnail switcher on product pages.
  document.addEventListener("click", function (ev) {
    var thumb = ev.target.closest(".thumbs img");
    if (!thumb) return;
    var main = document.getElementById("main-photo");
    if (main) {
      main.src = thumb.getAttribute("data-full") || thumb.src;
      main.alt = thumb.alt;
    }
    document.querySelectorAll(".thumbs img").forEach(function (img) {
      img.classList.remove("active");
    });
    thumb.classList.add("active");
  });

  // Cart panel (shown on shop / product pages where #cart-panel exists).
  function renderCartPanel() {
    var panel = document.getElementById("cart-panel");
    if (!panel) return;
    var cart = readCart();
    if (cart.length === 0) {
      panel.innerHTML = "<p class=\"cart-empty\">Your cart is empty.</p>";
      return;
    }
    var total = 0;
    var html = "<ul>";
    cart.forEach(function (item, i) {
      var line = item.price * (item.qty || 1);
      total += line;
      html += "<li><span>" + item.name + " — size " + item.size +
        " × " + (item.qty || 1) + "</span><span>" + money(line) +
        ' <button type="button" data-remove="' + i + '">Remove</button></span></li>';
    });
    html += "</ul><p><strong>Total: " + money(total) + "</strong></p>" +
      '<p class="muted">Checkout is a placeholder for now — no payment is taken. ' +
      "Price includes import duty. No extra charge on delivery.</p>" +
      '<p><button type="button" class="btn btn-maroon" data-checkout>Checkout (placeholder)</button></p>';
    panel.innerHTML = html;
  }

  document.addEventListener("click", function (ev) {
    var rm = ev.target.closest("[data-remove]");
    if (rm) {
      var cart = readCart();
      cart.splice(parseInt(rm.getAttribute("data-remove"), 10), 1);
      writeCart(cart);
      updateCartLinks();
      renderCartPanel();
      return;
    }
    if (ev.target.closest("[data-checkout]")) {
      alert("Checkout is a placeholder for now. No payment has been taken. FLLAMS will connect real checkout before launch — see TODO.md.");
    }
  });

  updateCartLinks();
  renderCartPanel();
})();
