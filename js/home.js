const tickets = [
    {
        dropup: 'Kigali',
        dropoff: 'Rubavu',
        price: 3310,
    },
    {
        dropup: 'Kigali',
        dropoff: 'Rusumo',
        price: 3550,
    },
    {
        dropup: 'Kigali',
        dropoff: 'Zaza',
        price: 2800,
    },
    {
        dropup: 'Gicumbi',
        dropoff: 'Kiramuruzi',
        price: 1850,
    },
    {
        dropup: 'Huye',
        dropoff: 'Nyabimata',
        price: 2000,
    },
    {
        dropup: 'Kigali',
        dropoff: 'Huye',
        price: 2560,
    },
    {
        dropup: 'Kigali',
        dropoff: 'Ngororero',
        price: 2220,
    },
    {
        dropup: 'Rubavu',
        dropoff: 'Nkora',
        price: 1100,
    },
    {
        dropup: 'Gicumbi',
        dropoff: 'Ngarama',
        price: 1500,
    },
    {
        dropup: 'Kigali',
        dropoff: 'Rusizi',
        price: 5200,
    },
    {
        dropup: 'Kigali',
        dropoff: 'Kagitumba',
        price: 3990,
    },
    {
        dropup: 'Rusizi',
        dropoff: 'Bweyeye',
        price: 1680,
    },
    {
        dropup: 'Huye',
        dropoff: 'Kivu',
        price: 1500,
    },
    {
        dropup: 'Kigali',
        dropoff: 'Nyagatare',
        price: 3390,
    },
    {
        dropup: 'Kigali',
        dropoff: 'Birambo',
        price: 2500,
    },
    {
        dropup: 'Gicumbi',
        dropoff: 'Musanze',
        price: 2300,
    },
    {
        dropup: 'Huye',
        dropoff: 'Ruheru',
        price: 2000,
    }
];



const modalContainer = document.querySelector(".price-modal");
const priceModal = document.querySelector(".price-content");
const modalHeader = document.querySelector(".modal-header");
const price = document.querySelector(".pricing input");
const dropup = document.getElementById("dropup");
const dropoff = document.getElementById("dropoff");


const cancelBtn = document.getElementById("cancel");

const pricingTables = document.querySelectorAll(".pricing_table");
pricingTables.forEach((table,index) =>{
    table.addEventListener("click", () => {
        modalContainer.classList.add("modal-active")
        priceModal.classList.add("modal-active")
    });
});

cancelBtn.addEventListener("click", () => {
    if(modalContainer.classList.contains("modal-active")) {
        modalContainer.classList.remove("modal-active")
        priceModal.classList.remove("modal-active")
    }
});

modalContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("price-modal")) {
        modalContainer.classList.remove("modal-active")
        priceModal.classList.remove("modal-active")
    }
});

document.addEventListener("keyup",(e) => {
   if(e.key === "Escape") {
    modalContainer.classList.remove("modal-active")
    priceModal.classList.remove("modal-active")
   }
});

function renderContent () {
    pricingTables.forEach((table,index) =>{
        table.addEventListener("click", () => {
            
            dropup.textContent = `${tickets[index].dropup}`.toLocaleUpperCase();
            dropoff.textContent = `${tickets[index].dropoff}`.toLocaleUpperCase();

           price.value = `${tickets[index].price} Rwf`;
    });
        });
}

renderContent();


function swapDropupAndDropoff() {
    const temp = dropup.textContent;
    dropup.textContent = dropoff.textContent;
    dropoff.textContent = temp;
}


const spanIcon = document.querySelector(".modal-header span");
spanIcon.addEventListener("click", swapDropupAndDropoff);

const select = document.querySelectorAll("select");

function updatePrice () {
    const selectIndex = select.selectedIndex;
    // let selectValue = select.options[selectIndex];

    console.log(selectIndex);
}

updatePrice();


