const menuButton = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.querySelector(".icon");
const payButton = document.getElementById("pay");

menuButton.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuIcon.src = isOpen
    ? "./assets/close_white_36dp.svg"
    : "./assets/menu_white_36dp.svg";
});

payButton.addEventListener("click", async () => {
  try {
    const stripeRequest = await fetch("/ebook/checkout-section", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        items: [
          {
            id: "ebook",
            quantity: 1
          }
        ]
      })
    });

    const response = await stripeRequest.json();

    if (stripeRequest.ok) {
      window.location.href = response.url;
      console.log(response);
    } else {
      console.log(response.error);
    }
    
  } catch (err) {
    console.log("Ocorreu um erro:");
    console.error(err);
  }
});