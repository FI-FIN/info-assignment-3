const inventory = {
    "iliad": { title: "The Iliad", author: "Homer", price: 145, img: "https://cdn.kobo.com/book-images/9b2213f4-8845-4ab7-b4f8-93e5c347389f/1200/1200/False/the-iliad-121.jpg", ref: "HOM-1715" },
    "leviathan": { title: "Leviathan", author: "Thomas Hobbes", price: 2100, img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Leviathan_by_Thomas_Hobbes.jpg", ref: "HOB-1651" },
    "finnegans_wake": { title: "Finnegans Wake", author: "James Joyce", price: 950, img: "https://i.pinimg.com/736x/6d/0f/ef/6d0fefa4f5598b7d1a8a06331096d0d7.jpg", ref: "JOY-1939" },
    "ivan_ilyich": { title: "The Death of Ivan Ilyich", author: "Leo Tolstoy", price: 730, img: "https://i.pinimg.com/1200x/2b/e6/e7/2be6e7510f648d9efbfbab469e36bbde.jpg", ref: "TOL-1886" },
    "zarathustra": { title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", price: 1200, img: "https://i.pinimg.com/736x/f2/45/82/f24582e5ef3acd79a253cf92fb08ae0e.jpg", ref: "NIET-1883" }
};

// Persistence Logic
function getCart() {
    return JSON.parse(localStorage.getItem('bibliotheca_cart')) || [];
}

function updateCartUI() {
    const cart = getCart();
    const count = cart.length;
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.innerText = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}