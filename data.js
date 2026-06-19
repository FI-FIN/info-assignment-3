// --- MY BOOK DATABASE ---
var inventory = {
    "iliad": { 
        title: "The Iliad", 
        author: "Homer", 
        price: 145, 
        img: "https://cdn.kobo.com/book-images/9b2213f4-8845-4ab7-b4f8-93e5c347389f/1200/1200/False/the-iliad-121.jpg", 
        ref: "HOM-1715",
        note: "A seminal work of classical literature. Features twenty-four engraved plates on steel."
    },
    "leviathan": { 
        title: "Leviathan", 
        author: "Thomas Hobbes", 
        price: 2100, 
        img: "https://i.pinimg.com/736x/9c/4c/66/9c4c662a313540c150589ce642b6874d.jpg", 
        ref: "HOB-1651",
        note: "First edition print. A foundational text in western political philosophy."
    },
    "finnegans_wake": { 
        title: "Finnegans Wake", 
        author: "James Joyce", 
        price: 950, 
        img: "https://i.pinimg.com/736x/6d/0f/ef/6d0fefa4f5598b7d1a8a06331096d0d7.jpg", 
        ref: "JOY-1939",
        note: "A rare pristine copy of Joyce's final, complex masterpiece."
    },
    "ivan_ilyich": { 
        title: "The Death of Ivan Ilyich", 
        author: "Leo Tolstoy", 
        price: 730, 
        img: "https://i.pinimg.com/1200x/2b/e6/e7/2be6e7510f648d9efbfbab469e36bbde.jpg", 
        ref: "TOL-1886",
        note: "Translated edition featuring original cloth binding."
    },
    "zarathustra": { 
        title: "Thus Spoke Zarathustra", 
        author: "Friedrich Nietzsche", 
        price: 1200, 
        img: "https://i.pinimg.com/736x/f2/45/82/f24582e5ef3acd79a253cf92fb08ae0e.jpg", 
        ref: "NIET-1883",
        note: "A pristine copy of the philosophical novel. Minimal foxing to the pages."
    }
};


// --- SHOPPING CART FUNCTIONS ---

// This gets the cart data from the browser
function getCart() {
    var storageString = window.localStorage.getItem("bibliotheca_cart");
    
    // console.log("Testing if storage works: " + storageString); // left this in for debugging
    

    if (storageString == null) {
        var blankCart = [];
        return blankCart;
    } 
    

    if (storageString != null) {
        var parsedCart = JSON.parse(storageString);
        return parsedCart;
    }
}


// This updates the little red bubble number on the screen
function updateCartUI() {
    var myCartArray = getCart();
    var totalItems = myCartArray.length;
    
    // console.log("Total items in cart right now: " + totalItems);
    
    var redBubbleElement = document.getElementById("cart-count");
    
    
    if (redBubbleElement == null) {
        return; 
    }
    
    // If the bubble IS on the page, update it
    if (redBubbleElement != null) {
        redBubbleElement.innerHTML = totalItems;
        
        // Hide it if 0
        if (totalItems == 0) {
            redBubbleElement.style.display = "none";
        } 
        
        // Show it if more than 0
        if (totalItems > 0) {
            redBubbleElement.style.display = "flex";
        }
    }
}