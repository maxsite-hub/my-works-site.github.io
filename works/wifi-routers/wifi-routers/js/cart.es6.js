! function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(i, r, function (e) {
                return t[e]
            }.bind(null, r));
        return i
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function (t, e, n) {
    t.exports = n(1)
}, function (t, e, n) {
    "use strict";
    n.r(e);
    n(2), n(3), n(4), n(5);


    const i = document.createElement("template");
    i.innerHTML = `\n  <style>\n    :host {\n      font-family: "Segoe UI", Arial, "Helvetica Neue", Helvetica, sans-serif;\n      box-sizing: border-box;\n    }\n    #cart {\n      position: fixed;\n      width: 100%;\n      max-width: 67rem;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      display: -webkit-box;display: -ms-flexbox;display: -webkit-flex;display: flex;\n      flex-direction: column;\n      background-color: #fff;\n      color: rgba(0, 0, 0, .8);\n      overflow-y: auto;\n      line-height: 1;\n      transition: transform .5s ease-in-out, -ms-transform .5s ease-in-out, -webkit-transform .5s ease-in-out;\n      z-index: 9999993;\n    }\n    *, *:before, *:after {\n      box-sizing: inherit;\n      font-family: inherit;\n      line-height: inherit;\n    }\n    #header {\n      background: #12c2e9;\n      height: 5rem;\n      flex-shrink: 0;\n      flex-grow: 0;\n      display: -webkit-box;display: -ms-flexbox;display: -webkit-flex;display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 0 2rem;\n    }\n    #header c-icon {\n      fill: #fff;\n      width: 3rem;\n      height: 3rem;\n      user-select: none;\n    }\n    #close {\n      cursor: pointer;\n    }\n    #body {\n      background-color: #f6f6ef;\n      flex-shrink: 0;\n      flex-grow: 1;\n      display: -webkit-box;display: -ms-flexbox;display: -webkit-flex;display: flex;\n      flex-wrap: wrap;\n    }\n    #left {\n      background-color: #fff;\n      padding: 0 2rem;\n      width: 70%;\n      display: -webkit-box;display: -ms-flexbox;display: -webkit-flex;display: flex;\n      flex-direction: column;\n    }\n    #right {\n      padding: 1rem 2rem 0;\n      width: 30%;\n      display: -webkit-box;display: -ms-flexbox;display: -webkit-flex;display: flex;\n      flex-direction: column;\n      flex-grow: 1;\n    }\n    @media all and (max-width: 800px) {\n      #body {\n        flex-direction: column;\n      }\n      #right, #left {\n        width: 100%;\n        padding-left: 1rem;\n        padding-right: 1rem;\n      }\n    }\n    #features {\n      padding: 2rem 0;\n      display: -webkit-box;display: -ms-flexbox;display: -webkit-flex;display: flex;\n      flex-wrap: wrap;\n    }\n    #features div {\n      display: -webkit-box;display: -ms-flexbox;display: -webkit-flex;display: flex;\n      align-items: center;\n      width: 33.33%;\n      flex-grow: 1;\n    }\n    @media all and (max-width: 700px) {\n      #features div {\n        width: 100%;\n        margin: .5rem 0;\n      }\n    }\n    #features c-icon {\n      width: 2.5rem;\n      height: 2.5rem;\n      flex-grow: 0;\n      flex-shrink: 0;\n      fill: currentColor;\n    }\n    #features span {\n      padding: 0 1rem;\n      font-size: .875rem;\n      line-height: 1.4;\n    }\n    #summary {\n      text-align: center;\n      font-size: 1.5rem;\n      font-weight: 700;\n    }\n    #summary h3 {\n      text-transform: uppercase;\n      font-size: .75rem;\n      font-weight: normal;\n      margin: 0 0 .5rem;\n    }\n    form {\n      margin: 1rem auto;\n      width: 100%;\n      max-width: 30rem;\n    }\n    form input:not([type=\'submit\']) {\n      display: block;\n      width: 100%;\n      padding: calc(.75rem - 2px) calc(1rem - 2px);\n      border: 2px solid #cecece;\n      border-radius: .25rem;\n      margin-bottom: 1rem;\n      outline: none;\n    }\n    ::placeholder {\n      font-size: 1rem;\n      color: rgba(0,0,0, .4);\n    }\n    ::-ms-input-placeholder {\n      font-size: 1rem;\n      color: rgba(0,0,0, .4);\n    }\n    :-ms-input-placeholder {\n      font-size: 1rem;\n      color: rgba(0,0,0, .4);\n    }\n    input[type=\'submit\'] {\n      width: 100%;\n      padding: calc(.75rem + 1.5px) 1rem;\n      border: none;\n      background: #12c2e9;\n      color: #fff;\n      font-size: .875rem;\n      letter-spacing: 1px;\n      text-transform: uppercase;\n      font-weight: 700;\n      border-radius: .25rem;\n      outline: none;\n      cursor: pointer;\n      transition: opacity .2s;\n    }\n    input[type=\'submit\']:active {\n      -ms-transform: translateY(1px);-webkit-transform: translateY(1px);transform: translateY(1px);\n    }\n    input[type=\'submit\']:hover, input[type=\'submit\']:focus {\n      opacity: .85;\n    }\n    #info {\n      border: 1px dashed #cecece;\n      border-radius: .25rem;\n      padding: .5rem 1rem;\n      font-size: .875rem;\n      line-height: 1.4;\n      color: rgba(0, 0, 0, .6);\n      margin: 0 auto 2rem;\n      max-width: 30rem;\n      width: 100%;\n    }\n    #empty {\n      text-align: center;\n      margin-top: 2rem;\n    }\n    #overlay {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background-color: rgba(0, 0, 0, .6);\n      transition: opacity .5s ease-in-out, visibility .5s;\n      cursor: pointer;\n      z-index: 9999992;\n    }\n    .action {\n      display: inline-block;\n      margin: auto auto 2rem;\n      color: rgba(0, 0, 0, .6);\n      cursor: pointer;\n      transition: color .2s;\n      text-align: center;\n    }\n    .action:hover {\n      color: #f86366;\n    }\n    .action c-icon {\n      width: 1rem;\n      height: 1rem;\n      margin-bottom: -.125rem;\n      fill: currentColor;\n    }\n    [hidden], :host[hidden] {\n      display: none;\n    }\n    #cart.closed {\n      -ms-transform: translateX(100%);-webkit-transform: translateX(100%);transform: translateX(100%);\n    }\n    #overlay.closed {\n      opacity: 0;\n      visibility: hidden;\n    }\n  </style>\n
      \n  <div id="overlay" class="cart-toggle closed"></div>\n  <div id="cart" class="closed">\n    
            <slot name="header">\n      
                <div id="header">\n
                    <c-icon name="cart"></c-icon>\n
                    <c-icon name="close" class="cart-toggle" id="close" title="Закрыть корзину"></c-icon>\n
                </div>\n
            </slot>\n   
            <div id="body">\n
                <div id="left">\n
                    <div id="empty" hidden>Корзина пуста</div>\n
                    <div id="items"></div>\n
                    <slot name="underitems">\n
                        <div id="features">\n
                            <div>\n
                                <c-icon name="check"></c-icon>\n
                                <span>Всегда в наличии на складе</span>\n
                            </div>\n
                            <div>\n
                                <c-icon name="star"></c-icon>\n
                                <span>Официальный поставщик</span>\n
                            </div>\n
                            <div>\n
                                <c-icon name="thumbsup"></c-icon>\n
                                <span>Гарантия 2 года, обмен / возврат 45 дней</span>\n
                            </div>\n
                        </div>\n
                    </slot>\n
                    <span class="cart-toggle action">\n <c-icon name="return"></c-icon> Продолжить покупки</span>\n
                </div>\n
                <div id="right">\n
                    <div id="summary">\n
                        <h3>Итого</h3>\n
                        <c-aninumber></c-aninumber> <span id="currency"></span>\n
                    </div>\n
                    <slot name="form">\n
                        <form>\n
                            <select name="country" style="display: none;" class="countryselect"> <option selected value="RU">Россия</option> </select> \n
                            <input type="hidden" name="productsum" value="1790 руб." /> \n
                            <input type="hidden" name="delivery" value="0 руб." /> \n 
                            <input type="hidden" name="totalsum" value="1790 руб." /> \n 
                            <input type="hidden" name="user" value="1" /> \n 
                            <input type="hidden" name="address" value="Уточнить у покупателя" /> \n        
                            <input type="hidden" name="description" class="description">\n            
                            <input name="name" placeholder="Имя *" required>\n            
                            <input type="tel" name="phone" required placeholder="Телефон *">\n            
                            <div class="reolader"><input type="submit" value="Заказать" class="mm_button" onclick="checkFields(event, this);">   \n    </form>\n        </slot>\n        <slot name="underform">\n          <div id="info">\n            Ваши данные не будут переданы третьим лицам\n          </div>\n        </slot>\n        <span id="clear" class="action">\n          <c-icon name="trash" id="remove"></c-icon> Очистить корзину</span>\n      </div>\n    </div>\n  </div>\n`, window.ShadyCSS && window.ShadyCSS.prepareTemplate(i, "c-cart"), window.customElements.define("c-cart", class extends HTMLElement {
        constructor() {
            super(), this.items = JSON.parse(localStorage.getItem("cart")) || [], this.gradients = ["to right, #a668c5, #a668c5, #a668c5"]
        }
        connectedCallback() {
            window.ShadyCSS && window.ShadyCSS.styleElement(this), this._getAttributes(), this._getElements(), this.$currency.textContent = this.currency, this.$form.setAttribute("action", this.actionUrl), this.$form.setAttribute("method", this.actionMethod), this._render(), this.$clear.addEventListener("click", () => {
                this.clear()
            }), this._bindControls()
        }
        _bindControls() {
            this.$form.addEventListener("submit", t => {
                this.dispatchEvent(new CustomEvent("submit", {
                    cancelable: !0,
                    detail: {
                        name: this.$form.querySelector('[name="name"]').value,
                        phone: this.$form.querySelector('[name="phone"]').value,
                        cart: this.items
                    }
                })) || t.preventDefault()
            }), this.$toggles.forEach(t => {
                t.addEventListener("click", () => {
                    this.toggle()
                })
            }), this.$adds.forEach(t => {
                t.addEventListener("click", () => {
                    const {
                        name: e
                    } = t.dataset, n = t.dataset.image || "", i = t.dataset.id || "", r = parseInt(t.dataset.count, 10) || 1, s = parseInt(t.dataset.price, 10) || 0;
                    if (!t.dataset.name) return;
                    if (!this.$fab) return void this.addItem({
                        id: i,
                        name: e,
                        image: n,
                        count: r,
                        price: s
                    });
                    const a = t.getBoundingClientRect();
                    let o;
                    n ? (o = document.createElement("img")).src = n : (o = document.createElement("c-icon")).setAttribute("name", "good"), o.style.height = `${a.height}px`, o.style.width = "auto", o.style.position = "fixed", o.style.top = `${a.top}px`, o.style.opacity = 0, o.style.zIndex = 999999999, o.style.pointerEvents = "none", o.style.transition = "top .5s ease-in-out, left .5s ease-in-out", o.style.borderRadius = "50%", document.body.appendChild(o);
                    const c = o.getBoundingClientRect();
                    o.style.left = `${a.right-(a.width/2+c.width/2)}px`;
                    const l = this.$fab.getBoundingClientRect();
                    o.style.opacity = 1, o.style.top = `${l.top}px`, o.style.left = `${l.right-(l.width/2+c.width/2)}px`, window.setTimeout(() => {
                        document.body.removeChild(o), this.addItem({
                            id: i,
                            name: e,
                            image: n,
                            count: r,
                            price: s
                        })
                    }, 500)
                })
            })
        }
        _getAttributes() {
            this.currency = this.getAttribute("currency") || "₽", this.fab = null !== this.getAttribute("fab"), this.actionUrl = this.getAttribute("action") || "thankyou.php", this.actionMethod = this.getAttribute("method") || "POST"
        }
        _getElements() {
            this.attachShadow({
                mode: "open"
            }), this.shadowRoot.appendChild(i.content.cloneNode(!0)), this.fab ? (this.$fab = document.createElement("c-cart-fab"), this.shadowRoot.appendChild(this.$fab)) : this.$fab = document.querySelector('.cart-fab:not([style*="display: none"])'), this.$items = this.shadowRoot.querySelector("#items"), this.$currency = this.shadowRoot.querySelector("#currency"), this.$clear = this.shadowRoot.querySelector("#clear"), this.$overlay = this.shadowRoot.querySelector("#overlay"), this.$cart = this.shadowRoot.querySelector("#cart"), this.$header = this.shadowRoot.querySelector("#header"), this.$submit = this.shadowRoot.querySelector('[type="submit"]'), this.$sum = this.shadowRoot.querySelector("#summary c-aninumber"), this.$empty = this.shadowRoot.querySelector("#empty"), this.$cartFields = [...this.shadowRoot.querySelectorAll('input[name="description"]'), ...document.querySelectorAll('input[name="description"]')], this.$toggles = [...this.shadowRoot.querySelectorAll(".cart-toggle"), ...document.querySelectorAll(".cart-toggle")], this.$counters = [...this.shadowRoot.querySelectorAll(".cart-counter"), ...document.querySelectorAll(".cart-counter")], this.$adds = [...document.querySelectorAll(".cart-add")], this.$form = this.shadowRoot.querySelector("form")
        }
        addItem(t) {
            let e = !1;
            this.items.forEach((n, i) => {
                t.name === n.name && (this.items[i].count += t.count, e = !0)
            }), e || (this.items.push(t), this.dispatchEvent(new CustomEvent("change", {
                detail: this.items
            }))), this._render()
        }
        removeItem(t) {
            this.items.splice(t, 1), this._render()
        }
        toggle() {
            if (this.$cart.classList.contains("closed")) {
                const t = this.gradients[Math.floor(Math.random() * this.gradients.length)];
                this.$header.style.background = `linear-gradient(${t})`, this.$submit.style.background = `linear-gradient(${t})`
            }
            this.$cart.classList.toggle("closed"), this.$overlay.classList.toggle("closed")
        }
        clear() {
            this.items = [], this.dispatchEvent(new CustomEvent("change", {
                detail: this.items
            })), this._render()
        }
        _updateSum() {
            const t = this.items.reduce((t, e) => t += e.count * e.price, 0);
            this.$sum.setAttribute("number", t)
        }
        _updateCounter() {
            const t = this.items.reduce((t, e) => t += e.count, 0);
            this.$fab && this.$fab.classList.toggle("cart-fab-empty", !t), this.$counters.forEach(e => {
                e.textContent = t
            })
        }
        
        _saveCart() {
            const t = JSON.stringify(this.items);
            localStorage.setItem("cart", t), this.$cartFields.forEach(e => {
                e.value = t;
                e.value = 1;
                const obj = JSON.parse(t);
                var description = '';
                obj.forEach(element => {
                //    console.log(element['name']); 
                   description = description + element['name'] + ' | ' 
                });
                e.value = description;
                $('.descr').val(description);
            })
        }
        _render() {
            this._saveCart(), this.$empty.hidden = !!this.items.length, this.$items.innerHTML = "", this.items.forEach((t, e) => {
                const n = document.createElement("c-cart-item");
                ["name", "image", "count", "price"].forEach(e => {
                    n.setAttribute(e, t[e])
                }), n.setAttribute("currency", this.currency), n.addEventListener("change", t => {
                    0 === t.detail ? this.removeItem(e) : (this.items[e].count = t.detail, this._saveCart(), this._updateSum(), this._updateCounter()), this.dispatchEvent(new CustomEvent("change", {
                        detail: this.items
                    }))
                }), this.$items.appendChild(n)
            }), this._updateSum(), this._updateCounter()
        }
    })
}, function (t, e) {
    window.customElements.define("c-aninumber", class extends HTMLElement {
        constructor() {
            super(), this.current = 0
        }
        static get observedAttributes() {
            return ["number"]
        }
        connectedCallback() {
            this.appendChild(document.createTextNode("")), this.number = parseInt(this.getAttribute("number"), 10), this._render()
        }
        attributeChangedCallback(t, e, n) {
            this.number = parseInt(n, 10), this._render()
        }
        _render() {
            this.textContent = this.current;
            const t = setInterval(() => {
                if (this.current === this.number) return void clearInterval(t);
                let e = (this.number - this.current) / 10;
                e = e >= 0 ? Math.ceil(e) : Math.floor(e), this.current += e, this.textContent = this.current
            }, 15)
        }
    })
}, function (t, e) {
    const n = {};
    ["good", "cart", "close", "trash", "return", "check", "star", "thumbsup"].forEach(t => {
        n[t] = document.createElement("template")
    }), n.good.innerHTML = '\n  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">\n    <title></title>\n    <path d="M10,787.1"/>\n    <path d="M919.2,902.9l-29.7-540.7c-2-37.3-29.7-65.1-67-65.1H693.3v-75.6c0-53.6-19.1-99.5-56.5-136.9C599.5,47.3,\n      553.6,28.2,500,28.2c-52.6,0-98.8,18.9-136.9,56.5c-37.6,37.1-56.5,83.3-56.5,136.9v75.6H177.5c-37.3,0-64.9,27.8-67,\n      65.1L80.8,902.9c0,0,0,0.9,0,1.9c0,37.3,28.7,67,66,67h706.3c37.3,0,66-29.7,66-67C919.2,904.8,919.2,903.9,919.2,\n      902.9z M375.6,221.5c0-34.4,12.4-64.1,36.4-88c23.9-23.9,53.6-36.4,88-36.4c34.5,0,64.1,12.4,88,36.4c23.9,23.9,36.4,\n      53.6,36.4,88v75.6H375.6V221.5z M148.8,902.9l30.6-537.9h127.3v65.1c-8.6,8.6-12.4,19.1-12.4,31.6c0,16.3,6.7,29.7,\n      20.1,38.3c14.4,18.2,39.2,18.2,53.6,0c13.4-8.6,20.1-22,20.1-38.3c0-12.4-3.8-23-12.4-31.6v-65.1h248.8v65.1c-8.6,\n      8.6-12.4,19.1-12.4,31.6c0,16.3,6.7,29.7,20.1,38.3c14.4,18.2,39.2,18.2,53.6,0c13.4-8.6,20.1-22,\n      20.1-38.3c0-12.4-3.8-23-12.4-31.6v-65.1h127.3l30.6,537.9H148.8z"/>\n    <path d="M990,787.1"/>\n  </svg>\n', n.cart.innerHTML = '\n  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446.9 446.9">\n    <title></title>\n    <path d="M444.3,85.2c-2.6-3.9-6.7-6.3-11.1-6.5L155.9,66c-8-0.4-14.6,6.2-14.9,14.6c-0.3,8.4,5.8,15.5,13.7,\n      15.9l258.4,11.8 l-50.8,168.4H136.2L95.4,40.4c-0.9-5.2-4.2-9.5-8.9-11.4L19.6,1.1C12.2-2,3.9,1.8,1,9.7c-2.9,7.8,0.7,\n      16.7,8.1,19.8l59.5,24.8 l41.6,240.5c1.3,7.2,7.2,12.5,14.1,12.5h6.9l-15.7,46.5c-1.3,3.9-0.8,8.2,1.5,11.6c2.2,3.4,\n      5.9,5.4,9.8,5.4h11 c-6.8,8.1-11,18.7-11,30.5c0,25.2,19.3,45.7,43,45.7s43-20.5,\n      43-45.7c0-11.7-4.2-22.4-11-30.5h93.8c-6.8,8.1-11,18.7-11,30.5 c0,25.2,19.3,45.7,43,45.7c23.7,0,43-20.5,\n      43-45.7c0-11.7-4.2-22.4-11-30.5h13.4c6.6,0,11.9-5.7,11.9-12.7c0-7-5.3-12.7-11.9-12.7 H143.7l12.9-38.1h216.2c6.2,\n      0,11.8-4.3,13.7-10.6l59.7-198C447.5,94.1,446.8,89.1,444.3,85.2z M169.7,421.5 c-10.5,0-19.1-9.1-19.1-20.3c0-11.2,\n      8.6-20.3,19.1-20.3s19.1,9.1,19.1,20.3C188.8,412.4,180.2,421.5,169.7,421.5z M327.4,421.5 c-10.5,\n      0-19.1-9.1-19.1-20.3c0-11.2,8.6-20.3,19.1-20.3s19.1,9.1,19.1,20.3C346.5,412.4,337.9,421.5,327.4,421.5z"/>\n  </svg>\n', n.close.innerHTML = '\n  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-25 -25 496.9 496.9">\n    <title></title>\n    <path d="M442.6,442.8c-2.9,2.9-6.8,4.4-10.6,4.4c-3.8,0-7.7-1.5-10.6-4.4l-198-198L25.6,442.6c-2.9,2.9-6.8,4.4-10.6,\n      4.4 s-7.7-1.5-10.6-4.4c-5.8-5.9-5.8-15.4,0-21.2l197.8-197.8L4.5,25.9c-5.9-5.9-5.9-15.4,0-21.2c5.9-5.9,15.4-5.9,\n      21.2,0l197.7,197.7 L421.3,4.5c5.9-5.9,15.3-5.9,21.2,0c5.9,5.9,5.9,15.4,0,21.2L244.7,223.6l198,198C448.5,427.4,\n      448.5,436.9,442.6,442.8z"/>\n  </svg>\n', n.trash.innerHTML = '\n  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">\n    <title></title>\n    <path d="M48,50.67V98.33a2.58,2.58,0,0,1-.76,1.93,2.77,2.77,0,0,1-2,.74h-5.5a2.77,2.77,0,0,1-2-.74A2.58,2.58,0,0,1,\n      37,98.33V50.67a2.58,2.58,0,0,1,.76-1.93,2.77,2.77,0,0,1,2-.74h5.5a2.77,2.77,0,0,1,2,.74A2.58,2.58,0,0,1,48,\n      50.67Zm22,0V98.33a2.58,2.58,0,0,1-.76,1.93,2.77,2.77,0,0,1-2,.74h-5.5a2.77,2.77,0,0,1-2-.74A2.58,2.58,0,0,1,59,\n      98.33V50.67a2.58,2.58,0,0,1,.76-1.93,2.77,2.77,0,0,1,2-.74h5.5a2.77,2.77,0,0,1,2,.74A2.58,2.58,0,0,1,70,50.67Zm21,\n      0V98.33a2.54,2.54,0,0,1-1.21,2.27,2.69,2.69,0,0,1-1.47.4H82.79a2.82,2.82,0,0,1-2-.74A2.58,2.58,0,0,1,80,\n      98.33V50.67a2.58,2.58,0,0,1,.77-1.93,2.82,2.82,0,0,1,2-.74h5.53a2.69,2.69,0,0,1,1.47.4A2.54,2.54,0,0,1,91,50.67Zm11,\n      60.08V32H27v78.75a8.65,8.65,0,0,0,.6,3.27,9,9,0,0,0,1.2,2.24c.4.49.7.74.9.74H99.3c.2,0,.5-.25.9-.74a9,9,0,0,0,\n      1.2-2.24A8.65,8.65,0,0,0,102,110.75ZM44.63,22H83.37L79.18,11.93A2.34,2.34,0,0,0,77.79,11H50.37a2.41,2.41,0,0,\n      0-1.55.93ZM122,23.64v5.67a2.72,2.72,0,0,1-.69,1.94,2.37,2.37,0,0,1-1.81.75H112v79a20,20,0,0,1-3.61,11.94Q104.78,\n      128,99.64,128H29.94a12.2,12.2,0,0,1-9.76-4.93A18.73,18.73,0,0,1,16,111.28V32H7.79a2.79,2.79,0,0,1-2-.75A2.58,2.58,\n      0,0,1,5,29.31V23.64a2.59,2.59,0,0,1,.74-1.91A2.66,2.66,0,0,1,7.68,21h25.6L39.09,7.34A11.48,11.48,0,0,1,43.7,2.2,\n      13.45,13.45,0,0,1,50.25,0h26.5A11.21,11.21,0,0,1,83.3,2.2a12.86,12.86,0,0,1,4.46,5.14L93.57,21h25.75a2.66,2.66,0,\n      0,1,1.94.73A2.59,2.59,0,0,1,122,23.64Z"/>\n  </svg>\n', n.return.innerHTML = '\n  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">\n    <title></title>\n    <path d="M112.29,14.72Q127.58,29.93,127.57,52a49.71,49.71,0,0,1-15.28,36.55l-12,12L89,89.07l12-12A34.24,34.24,0,0,0,\n      111.57,51.9,35.56,35.56,0,0,0,101,25.9Q90.71,15.72,75.29,15.71T49.57,26L27.71,48H48V64H0V16H16V36.91L38.29,\n      14.72Q53,.07,75.29.07T112.29,14.72ZM74,128,62.66,116.68,74,105.07l11.35,11.61Z"></path>\n  </svg>\n', n.check.innerHTML = '\n  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">\n    <title></title>\n    <path d="M59.71,128a24.67,24.67,0,0,1-18.16-7.36l-34-34.21A24.6,24.6,0,0,1,0,68.41,24.77,24.77,0,0,1,7.52,50.25a24.42,\n      24.42,0,0,1,18-7.2,24.4,24.4,0,0,1,18,7.2L53.82,60.39,80,13.42A24.47,24.47,0,0,1,89.31,3.6,24.87,24.87,0,0,1,102.23,\n      0q14.4,0,21.92,12.44t.33,25.7L82,114.9Q74.92,128,59.71,128ZM25.52,59.74a8.28,8.28,0,0,0-6.05,2.62,7.72,7.72,0,0,\n      0-2.46,6,8.14,8.14,0,0,0,2.62,5.9l34,34.2a7.74,7.74,0,0,0,7.2,2.46,8.1,8.1,0,0,0,6.22-4.26L109.6,30a9,9,0,0,0,\n      .65-7,7.5,7.5,0,0,0-3.93-4.58,8.15,8.15,0,0,0-6.38-.65,8.68,8.68,0,0,0-5.07,3.92L57.74,88.38,31.57,\n      62.19A8.24,8.24,0,0,0,25.52,59.74Z"/>\n  </svg>\n', n.star.innerHTML = '\n  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">\n    <title></title>\n    <path d="M97.15,128A9.63,9.63,0,0,1,92,126.36L64.1,109.85,35.91,126.36q-5.77,\n      3.29-11-.41c-3.58-2.63-4.94-6.23-4.06-10.77L27.39,82l-5.12-4.77q-3.8-3.56-5.9-5.46l-13-12.28A10.18,10.18,0,0,1,\n      .63,48.32,10,10,0,0,1,9.29,41l32-3.55L54.66,6.71Q57.54.31,64.1.3q6.16,0,9.31,6.41l13.25,30.7,32.13,3.68q6.28.55,\n      8.52,7.1a10.06,10.06,0,0,1-2.75,11.32l-24,22.65,6.56,33a10.55,10.55,0,0,1-2.1,8.73A9.84,9.84,0,0,1,97.15,128ZM41.42,\n      81.2c-.09.37-.4,2-.92,4.92s-1.27,6.73-2.23,11.46-1.84,8.91-2.62,12.55l24.91-14.6a6.58,6.58,0,0,1,6.82,0l24.92,\n      14.6L86.53,81.07a6.81,6.81,0,0,1,2.1-6.69l21.11-20.19L81.28,51.05A6.33,6.33,0,0,1,75.91,47L64.1,19.81,52.3,47a7,7,\n      0,0,1-5.64,4.09L18.34,54.19,39.45,74.38A7,7,0,0,1,41.42,81.2Z"/>\n  </svg>\n', n.thumbsup.innerHTML = '\n  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">\n    <title></title>\n    <path d="M114.74,47.63a13.78,13.78,0,0,1,7.92,7,17.26,17.26,0,0,1,2,10.5l-4.78,42.58a19.05,19.05,0,0,1-4.37,9.55,\n      20.28,20.28,0,0,1-7.92,6,33.42,33.42,0,0,0-3.55,1.23l-4,1.5a27.62,27.62,0,0,1-4.09,1c-2,\n      .36-4.05.64-6.15.82s-4.64.27-7.65.27a86.41,86.41,0,0,1-23.76-3.55q-12.42-3.54-17.75-7.64a1.45,1.45,0,0,0-.41-.27,\n      1.57,1.57,0,0,1-.54-.55,5,5,0,0,0-.41-.54A21,21,0,0,1,25.3,120.9a20.41,20.41,0,0,1-15-6.14A21,21,0,0,1,4,\n      99.62V56.91a20.16,20.16,0,0,1,6.28-15,21.22,21.22,0,0,1,15-6.28,20.09,20.09,0,0,1,16.93,8.6A44.5,44.5,0,0,0,51,\n      32.62Q53.7,27,53.84,17.88A17.08,17.08,0,0,1,59,5.33,17.6,17.6,0,0,1,71.59,0,16.27,16.27,0,0,1,84.16,5.33a17.67,\n      17.67,0,0,1,5.19,12.55,152.13,152.13,0,0,1-2.19,25.65Q110.38,45.86,114.74,47.63ZM24.93,105.91a6.73,6.73,0,0,0,\n      4.94-2A7.05,7.05,0,0,0,32,99.11V57.41a6.34,6.34,0,0,0-2.13-4.8,7.59,7.59,0,0,0-4.94-2.13A6.15,6.15,0,0,0,20,\n      52.61a6.41,6.41,0,0,0-2,4.8v41.7a6.55,6.55,0,0,0,2,4.8A6.71,6.71,0,0,0,24.93,105.91Zm80.2-.29,4.78-42.57c.27-1.1,\n      0-1.82-.82-2.19q-2.06-.54-14.61-2T78.23,56.91L68.8,58.27l2.19-10A145.34,145.34,0,0,0,74.4,17.88a3.39,3.39,0,0,\n      0-1.09-2.46,3.55,3.55,0,0,0-6,2.46,55.19,55.19,0,0,1-1.5,13.37A37.51,37.51,0,0,1,61.43,41.9a44.94,44.94,0,0,1-5,\n      7q-2.19,2.32-5.46,5.87Q46,59.64,46,64.14V99.62q0,4.09,2.46,6,3.27,2.32,13.52,5.19a76.56,76.56,0,0,0,19.52,3q3.56,\n      0,6.15-.14a25.47,25.47,0,0,0,4.78-.68c1.45-.36,2.5-.59,3.14-.68a12.2,12.2,0,0,0,3.14-1.23,11.55,11.55,0,0,1,\n      3.28-1.23,6.53,6.53,0,0,0,1.91-1.77A5.14,5.14,0,0,0,105.13,105.62Z"/>\n  </svg>\n', window.customElements.define("c-icon", class extends HTMLElement {
        connectedCallback() {
            this._getAttributes(), this._getElements(), this.$title.textContent = this.title, this.style.lineHeight = 0, this.style.display = "inline-block", this.style.verticalAlign = "top", this.$svg.style.height = "100%", this.$svg.style.width = "100%"
        }
        _getAttributes() {
            this.name = this.getAttribute("name"), this.title = this.getAttribute("title") || ""
        }
        _getElements() {
            this.appendChild(n[this.name].content.cloneNode(!0)), this.$title = this.querySelector("title"), this.$svg = this.querySelector("svg")
        }
    })
}, function (t, e) {
    const n = document.createElement("template");
    n.innerHTML = '\n  <style>\n    c-cart-fab {\n      font-family: "Segoe UI", Arial, "Helvetica Neue", Helvetica, sans-serif;\n      background-color: #a668c5;\n      border: 1px solid #a668c5;\n      border-radius: 50%;\n      width: 4rem;\n      height: 4rem;\n      display: -webkit-box;display: -ms-flexbox;display: -webkit-flex;display: flex;\n      align-items: center;\n      position: fixed;\n      top: 1rem;\n      right: 1rem;\n      cursor: pointer;\n      z-index: 9999;\n      user-select: none;\n    }\n    @media all and (max-width: 700px) {\n      c-cart-fab {\n        top: 2rem;\n        right: 1rem;\n      }\n    }\n    c-cart-fab c-icon {\n      width: 45%;\n      height: 45%;\n      margin: auto;\n      fill: #fff;\n    }\n    .cart-counter {\n      position: absolute;\n      line-height: 1.8;\n      font-size: .75rem;\n      width: 1.5rem;\n      height: 1.5rem;\n      background-color: #f86366;\n      border-radius: 50%;\n      text-align: center;\n      top: -.25rem;\n      right: -.25rem;\n      border: .125rem solid #fff;\n      color: #fff;\n      z-index: 1;\n    }\n    .cart-fab-empty {\n      background-color: #9b9b9b;\n      border-color: #9b9b9b;\n    }\n    .cart-fab-empty .cart-counter {\n      display: none;\n    }\n    c-cart-fab:not(.cart-fab-empty)::before, c-cart-fab:not(.cart-fab-empty)::after {\n      content: "";\n      position: absolute;\n      top: -20px;\n      right: -20px;\n      bottom: -20px;\n      left: -20px;\n      border-radius: 50%;\n      -webkit-animation: pulse 7s linear infinite;animation: pulse 7s linear infinite;\n      pointer-events: none;\n      cursor: default;\n      border: inherit;\n    }\n    c-cart-fab:not(.cart-fab-empty)::after {\n      -webkit-animation-delay: .5s;animation-delay: .5s;\n    }\n    @-webkit-keyframes pulse {\n      0% {\n        -ms-transform: scale(0.5);-webkit-transform: scale(0.5);transform: scale(0.5);\n        opacity: 0;\n      }\n      10% {\n        opacity: 1;\n      }\n      20% {\n        -ms-transform: scale(1.2);-webkit-transform: scale(1.2);transform: scale(1.2);\n        opacity: 0;\n      }\n      100% {\n        -ms-transform: scale(1.2);-webkit-transform: scale(1.2);transform: scale(1.2);\n        opacity: 0;\n      }\n    }\n    @keyframes pulse {\n      0% {\n        -ms-transform: scale(0.5);-webkit-transform: scale(0.5);transform: scale(0.5);\n        opacity: 0;\n      }\n      10% {\n        opacity: 1;\n      }\n      20% {\n        -ms-transform: scale(1.2);-webkit-transform: scale(1.2);transform: scale(1.2);\n        opacity: 0;\n      }\n      100% {\n        -ms-transform: scale(1.2);-webkit-transform: scale(1.2);transform: scale(1.2);\n        opacity: 0;\n      }\n    }\n  </style>\n  <c-icon name="cart"></c-icon>\n  <span class="cart-counter">0</span>\n', window.ShadyCSS && window.ShadyCSS.prepareTemplate(n, "c-cart"), window.customElements.define("c-cart-fab", class extends HTMLElement {
        connectedCallback() {
            window.ShadyCSS && window.ShadyCSS.styleElement(this), this.appendChild(n.content.cloneNode(!0)), this.classList.add("cart-fab", "cart-toggle"), this.title = "Открыть корзину"
        }
    })
}, function (t, e) {
    const n = document.createElement("template");
    n.innerHTML = '\n  <style>\n    c-cart-item {\n      min-height: 4.75rem;\n      display: -webkit-box;display: -ms-flexbox;display: -webkit-flex;display: flex;\n      padding: .5rem 0;\n      align-items: center;\n      border-bottom: 1px solid #e9e9e9;\n    }\n    @media all and (max-width: 700px) {\n      c-cart-item {\n        flex-wrap: wrap;\n        padding: 1rem 0;\n      }\n    }\n    #image {\n      width: 3rem;\n      height: 3rem;\n      flex-grow: 0;\n      flex-shrink: 0;\n      text-align: center;\n    }\n    #image img {\n      max-width: 100%;\n      max-height: 100%;\n    }\n    #name {\n      padding: 0 1rem;\n      line-height: 1.4;\n    }\n    @media all and (max-width: 700px) {\n      #name {\n        width: calc(100% - 3rem);\n      }\n    }\n    #count {\n      flex-shrink: 0;\n      margin-left: auto;\n      border: 1px solid #cecece;\n      border-radius: .25rem;\n    }\n    #count input {\n      width: 2.5rem;\n      height: calc(1.5rem - 2px);\n      border: none;\n      border-left: 1px solid #cecece;\n      border-right: 1px solid #cecece;\n      outline: none;\n      -webkit-appearance: textfield;-moz-appearance: textfield;appearance: textfield;\n      text-align: center;\n      font-size: .875rem;\n    }\n    ::-moz-focus-inner {\n      border: 0;\n    }\n    #count input::-webkit-inner-spin-button, #count input::-webkit-outer-spin-button {\n      -webkit-appearance: textfield;-moz-appearance: textfield;appearance: textfield;\n    }\n    .control {\n      border: none;\n      outline: none;\n      cursor: pointer;\n      background: none;\n      width: 1.5rem;\n      height: calc(1.5rem - 2px);\n      padding: 0;\n    }\n    .control:active {\n    }\n    #sum {\n      flex-shrink: 0;\n      margin: 0 .5rem 0 0;\n      width: 4.5rem;\n      text-align: right;\n    }\n    #remove {\n      flex-grow: 0;\n      flex-shrink: 0;\n      height: 1rem;\n      width: 1rem;\n      fill: rgba(0, 0, 0, .6);\n      cursor: pointer;\n      transition: fill .2s;\n    }\n    #remove:hover {\n      fill: #f86366;\n    }\n  </style>\n  \n  <div id="image">\n    <img>\n  </div>\n  <span id="name"></span>\n  <div id="count">\n    <button id="minus" class="control">-</button><input type="number"><button id="plus" class="control">+</button>\n  </div>\n  <div id="sum">\n    <c-aninumber></c-aninumber> <span id="currency"></span>\n  </div>\n  <c-icon id="remove" name="trash" title="Убрать из корзины"></c-icon>\n', window.ShadyCSS && window.ShadyCSS.prepareTemplate(n, "c-cart"), window.customElements.define("c-cart-item", class extends HTMLElement {
        connectedCallback() {
            if (window.ShadyCSS && window.ShadyCSS.styleElement(this), this._getAttributes(), this._getElements(), this.$input.value = this.count, this.$name.textContent = this.name, this.$currency.textContent = this.currency, this.$image.src = this.image, !this.image) {
                const t = document.createElement("c-icon");
                t.setAttribute("name", "good"), t.id = "image", this.$image.parentNode.replaceChild(t, this.$image)
            }
            this._updateSum(), this._bindControls()
        }
        _getAttributes() {
            this.count = parseInt(this.getAttribute("count"), 10) || 0, this.price = parseInt(this.getAttribute("price"), 10) || 0, this.image = this.getAttribute("image"), this.name = this.getAttribute("name"), this.currency = this.getAttribute("currency")
        }
        _getElements() {
            this.appendChild(n.content.cloneNode(!0)), this.$input = this.querySelector("#count input"), this.$image = this.querySelector("#image img"), this.$name = this.querySelector("#name"), this.$currency = this.querySelector("#currency"), this.$minus = this.querySelector("#minus"), this.$plus = this.querySelector("#plus"), this.$remove = this.querySelector("#remove"), this.$sum = this.querySelector("#sum c-aninumber")
        }
        _bindControls() {
            this.$minus.addEventListener("click", () => {
                const t = this.count - 1,
                    e = this.count;
                this.count = this.$input.value = t < 1 ? 1 : t, e !== this.count && this._render()
            }), this.$plus.addEventListener("click", () => {
                const t = this.count + 1,
                    e = this.count;
                this.count = this.$input.value = t > 999 ? 999 : t, e !== this.count && this._render()
            }), this.$input.addEventListener("change", t => {
                t.stopPropagation()
            }), this.$input.addEventListener("input", () => {
                const t = parseInt(this.$input.value, 10) || 0,
                    e = this.count;
                this.count = this.$input.value = t > 999 || t < 1 ? this.count : t, e !== this.count && this._render()
            }), this.$remove.addEventListener("click", () => {
                this.dispatchEvent(new CustomEvent("change", {
                    detail: 0
                }))
            })
        }
        _updateSum() {
            this.$sum.setAttribute("number", this.price * this.$input.value)
        }
        _render() {
            this.dispatchEvent(new CustomEvent("change", {
                detail: this.count
            })), this._updateSum()
        }
    })
}]);