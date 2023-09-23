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
    "HTML": "Langage",
    "SASS (SCSS)": "Langage",
    "CSS": "Langage",
    "JavaScript (JS)": "Langage",
    "TypeScript (TS)": "Langage",
    "JSON": "Langage",
    "SQL": "Langage",
    "PHP": "Langage",
    "C": "Langage",
    "Python": "Langage",
    "UML": "Langage",
    "Java": "Langage",
    "Visual Studio Code (VSC)": "Logiciel",
    "Node.js": "Logiciel",
    "phpMyAdmin": "Logiciel",
    "Docker": "Logiciel",
    "Figma": "Logiciel",
    "Eclipse": "Logiciel",
    "Brackets": "Logiciel",
    "MySQL Workbench": "Logiciel",
    "Spyder": "Logiciel",
    "BOUML": "Logiciel",
    "Code::Blocks": "Logiciel",
    "Bootstrap": "Framework",
    "React": "Framework",
    "Angular": "Framework",
    "Symfony": "Framework",
    "Laravel": "Framework",
    "CodeIgniter": "Framework",
    "Prisma": "Framework",
    "SQLite": "Framework",
    "Electron": "Framework",
    "PyScript": "Framework"
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
        li.onclick = function() {
            const competence = document.getElementById(item);
            competence.scrollIntoView({ behavior: "smooth" });
        };

        const badge = document.createElement("span");
        badge.textContent = object[item];
        switch (object[item]) {
            case "Logiciel":
                badge.classList.add("badge", "badge-primary", "ml-2");
                break;
            case "Langage":
                badge.classList.add("badge", "badge-success", "ml-2");
                break;
            case "Framework":
                badge.classList.add("badge", "badge-warning", "ml-2");
                break;
        }

        li.appendChild(badge);

        li.classList.add("list-group-item");
        results.appendChild(li);
    });

    document.querySelectorAll('#results li')[0].classList.add('selected');
}

