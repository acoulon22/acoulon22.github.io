var selectedIndex = 0;

function handleKeyPress(event) {

    var results = document.querySelectorAll('#results li');

    if (event.key === "ArrowUp") {

        if (selectedIndex >= 0) {
            results[selectedIndex].classList.remove('selected');
        }

        selectedIndex = (selectedIndex - 1 + results.length) % results.length;

        results[selectedIndex].classList.add('selected');
    } else if (event.key === "ArrowDown") {

        if (selectedIndex >= 0) {
            results[selectedIndex].classList.remove('selected');
        }

        selectedIndex = (selectedIndex + 1) % results.length;

        results[selectedIndex].classList.add('selected');
    }
    else if (event.key === "Enter") {
        var selected = document.querySelector('.selected').innerHTML;
        
        var itemSelected = selected.slice(0, selected.indexOf('<span'));

        const competence = document.getElementById(itemSelected);

        competence.scrollIntoView({ behavior: "smooth" });
    }
    else {
        selectedIndex = 0;
    }
}

searchInput.addEventListener("keydown", handleKeyPress);