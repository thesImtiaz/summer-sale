// Total Discount
const itemList = [];
const selectedItemContainer = document.getElementById("selected-items");
const orderedList = document.createElement("ol");
let totalPrice = 0;
const totalPriceElement = document.getElementById("total-price");
const discountPriceElement = document.getElementById("discount-price");
const totalElement = document.getElementById("total");
const couponDiscount = 20;
selectedItemContainer.appendChild(orderedList);

function getPrice(target) {
  const itemName = target.childNodes[5].childNodes[1].innerText;
  if (itemList.find((item) => item.name === itemName && item.disabled)) {
    console.log(`${itemName} is already disabled.`);
    return;
  }
  let priceNumber = target.childNodes[5].childNodes[3].innerText;
  let price = parseInt(priceNumber);
  totalPrice = totalPrice + price;
  totalPriceElement.innerText = totalPrice.toFixed(2);

  const discount = (couponDiscount / 100) * totalPrice;
  const discountedTotal = totalPrice - discount;
  discountPriceElement.innerText = discount.toFixed(2);
  totalElement.innerText = discountedTotal.toFixed(2);

  const count = itemList.length;

  if (!itemList.includes(itemName)) {
    const li = document.createElement("li");
    li.innerText = `${count + 1}. ${itemName}`;
    orderedList.appendChild(li);
    itemList.push({ name: itemName, disabled: true });
  }
  const makePurchaseButton = document.getElementById("make-purchase");
  if (totalPrice >= 200) {
    makePurchaseButton.disabled = false;
  } else {
    makePurchaseButton.disabled = true;
  }
}

// Modal PopUp
const openModalButton = document.getElementById("make-purchase");
const closeModalButton = document.getElementById("closeModal");
const popupModal = document.getElementById("popupModal");
openModalButton.addEventListener("click", () => {
  popupModal.classList.remove("hidden");
});
closeModalButton.addEventListener("click", () => {
  popupModal.classList.add("hidden");
});

//  Modal Reset the Values
closeModalButton.addEventListener("click", () => {
  popupModal.classList.add("hidden");
  orderedList.innerHTML = "";
  itemList.length = 0;
  totalPrice = 0;
  totalPriceElement.innerText = "0.00";
  discountPriceElement.innerText = "0.00";
  totalElement.innerText = "0.00";
});

// const applyCouponButton = document.getElementById('apply-coupon');
// const makePurchaseButton = document.getElementById('make-purchase');

// applyCouponButton.addEventListener('click', () => {
//   const couponCodeInput = document.getElementById('promo-code');
//   const couponCode = couponCodeInput.value;

//   if (couponCode === 'SELL200') {
//     makePurchaseButton.disabled = false;
//     applyCouponButton.disabled = true;
//   } else {
//     alert('Invalid coupon code. Please try again.');
//   }
// });
