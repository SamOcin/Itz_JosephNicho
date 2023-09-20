document.addEventListener("keydown", function(event) {
    if (event.key === "d") {
        // Cari elemen <li> pertama dan klik di dalamnya
        var firstListItem = document.querySelector("#daftar li");
        if (firstListItem) {
            firstListItem.click();
        }
    }
});
