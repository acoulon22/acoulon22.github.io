const data = [
    "HTML",
    "SASS (SCSS)",
    "CSS",
    "JavaScript (JS)",
    "TypeScript (TS)",
    "JSON",
    "SQL",
    "PHP",
    "C",
    "Python",
    "UML",
    "Java",
    "Visual Studio Code (VSC)",
    "Node.js",
    "phpMyAdmin",
    "Docker",
    "Figma",
    "Eclipse",
    "Brackets",
    "MySQL Workbench",
    "Spyder",
    "BOUML",
    "Code::Blocks",
    "Bootstrap",
    "React",
    "Angular",
    "Symfony",
    "Laravel",
    "CodeIgniter",
    "Prisma",
    "SQLite",
    "Electron",
    "PyScript"
];

const object = {
    "HTML": "Langages",
    "SASS (SCSS)": "Langages",
    "CSS": "Langages",
    "JavaScript (JS)": "Langages",
    "TypeScript (TS)": "Langages",
    "JSON": "Langages",
    "SQL": "Langages",
    "PHP": "Langages",
    "C": "Langages",
    "Python": "Langages",
    "UML": "Langages",
    "Java": "Langages",
    "Visual Studio Code (VSC)": "Logiciels",
    "Node.js": "Logiciels",
    "phpMyAdmin": "Logiciels",
    "Docker": "Logiciels",
    "Figma": "Logiciels",
    "Eclipse": "Logiciels",
    "Brackets": "Logiciels",
    "MySQL Workbench": "Logiciels",
    "Spyder": "Logiciels",
    "BOUML": "Logiciels",
    "Code::Blocks": "Logiciels",
    "Bootstrap": "Frameworks",
    "React": "Frameworks",
    "Angular": "Frameworks",
    "Symfony": "Frameworks",
    "Laravel": "Frameworks",
    "CodeIgniter": "Frameworks",
    "Prisma": "Frameworks",
    "SQLite": "Frameworks",
    "Electron": "Frameworks",
    "PyScript": "Frameworks"
};

const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

searchInput.addEventListener("input", function () {
    const query = searchInput.value.trim().toLowerCase();

    if (query === '') {
        results.innerHTML = '';
    }
    else {
        const searchTerms = query.split(",").map(term => term.trim()).filter(term => term !== '');

        const filteredData = data.filter(item => {
            const itemName = item.toLowerCase();
            return searchTerms.some(term => itemName.includes(term));
        });

        if (filteredData.length === 0) {
            results.innerHTML = '<div class="alert alert-warning" role="alert"><img src="images/warning.svg" alt="Icône d\'avertissement"> Aucun résultat trouvé.</div>';
        }
        else {
            filteredData.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
            displayResults(filteredData);
        }
    }
});

function displayResults(filteredData) {
    results.innerHTML = "";
    filteredData.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.onclick = function () {
            const competence = document.getElementById(item);
            competence.scrollIntoView({ behavior: "smooth" });
        };

        const badge = document.createElement("span");
        badge.textContent = object[item];
        switch (object[item]) {
            case "Logiciels":
                badge.classList.add("badge", "badge-primary", "ml-2");
                break;
            case "Langages":
                badge.classList.add("badge", "badge-success", "ml-2");
                break;
            case "Frameworks":
                badge.classList.add("badge", "badge-warning", "ml-2");
                break;
        }

        li.appendChild(badge);

        li.classList.add("list-group-item");
        results.appendChild(li);
    });

    document.querySelectorAll('#results li')[0].classList.add('selected');
}

