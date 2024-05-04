window.addEventListener("DOMContentLoaded", () => {
    const indexEl = document.getElementById("index-content");
    const bodyTag = document.getElementById("body");
    if (window.innerHeight < 200 || window.innerWidth < 600) {
        indexEl.style.display = "none";
        bodyTag.style.background = "white";
        bodyTag.textContent = "PC Only 😎";
    } else {
        const firstNameEl = document.getElementById("fName");
        const secondNameEl = document.getElementById("sName");
        const submitEl = document.getElementById("submit");
        const namesEl = document.getElementById("names");
        const descEl = document.getElementById("description");
        let firstName;
        let secondName;
        function calculateFlames(firstName, secondName) {

            let firstNameArr = firstName.split("");
            let secondNameArr = secondName.split("");

            let longest = firstNameArr.length > secondNameArr.length ? firstNameArr : secondNameArr;
            let shortest = longest === firstNameArr ? secondNameArr : firstNameArr;

            for (let i = 0; i < longest.length; i++) {
                for (let j = 0; j < shortest.length; j++) {
                    if (longest[i] === shortest[j]) {
                        longest.splice(i, 1);
                        shortest.splice(j, 1);
                        i--;
                        break;
                    }
                }
            }

            let eliminator = longest.length + shortest.length;

            const flamesArray = ['F', 'L', 'A', 'M', 'E', 'S'];
            let flamesArrayLength = flamesArray.length;

            while (flamesArrayLength > 1) {
                eliminator = eliminator % flamesArrayLength;
                if (eliminator === 0) eliminator = flamesArrayLength;
                flamesArray.splice(eliminator - 1, 1);
                flamesArrayLength--;
            }

            return flamesArray[0];
        }

        function setNames() {
            firstName = firstNameEl.value.toLowerCase();
            secondName = secondNameEl.value.toLowerCase();
            localStorage.setItem("firstName", firstName);
            localStorage.setItem("secondName", secondName);
        }

        function submitInput() {
            setNames();
            const result = calculateFlames(firstName, secondName);

            const invalidInputEl = document.getElementById("invalid-input");
            const pEl = document.getElementById("message");

            if (firstNameEl.value === "" || secondNameEl.value === "") {
                pEl.textContent = "fields cannot be empty!"
                invalidInputEl.classList.remove("close");
            } else if (!isNaN(firstNameEl.value) || !isNaN(secondNameEl.value)) {
                pEl.textContent = "input cannot be a number!"
                invalidInputEl.classList.remove("close");
            } else if (firstNameEl.value.toLowerCase() === secondNameEl.value.toLowerCase()) {
                pEl.textContent = "names cannot be the same! try a nickname instead."
                invalidInputEl.classList.remove("close");
            }
            else {
                invalidInputEl.classList.add("close");
                switch (result) {
                    case 'F':
                        window.open("./result/friends.html", "_self");
                        break;
                    case 'L':
                        window.open("./result/lovers.html", "_self");
                        break;
                    case 'A':
                        window.open("./result/admirer.html", "_self");
                        break;
                    case 'M':
                        window.open("./result/marriage.html", "_self");
                        break;
                    case 'E':
                        window.open("./result/enemies.html", "_self");
                        break;
                    case 'S':
                        window.open("./result/siblings.html", "_self");
                        break;
                    default:
                        window.open("#", "_self");
                        break;
                }

            }
            localStorage.setItem("result", result);
            setNames();
        }

        if (document.title === "flames.") {
            submitEl.addEventListener("click", submitInput);
        }

        function changeTitle() {
            let fName = localStorage.getItem("firstName");
            let sName = localStorage.getItem("secondName");
            document.title = fName + " \& " + sName;
        }


        if (document.title === "flames.") {
            null
        } else {
            document.addEventListener("DOMContentLoaded", changeTitle());
        }

        function getNames() {
            let fName = localStorage.getItem("firstName");
            let sName = localStorage.getItem("secondName");
            let result = localStorage.getItem("result");
            switch (result) {
                case 'F':
                    descEl.innerHTML = ` <p class="name1 name">${fName}</p>, wake up! kaibigan lang ang turing ni <p class="name1 name">${fName}</p> sa'yo pero it's not the end of the world.
            Malay mo... Ireto ka niya sa bestie niya😉.`;
                    break;
                case 'L':
                    descEl.innerHTML = `The feeling is mutual, confession nalang ang kulang. <p class="name1 name">${sName}</p>, Puntahan mo na si <p class="name2 name">${fName}</p> at umpisahan na ang love story so both of you can live "Happily Ever After".`;
                    break;
                case 'A':
                    descEl.innerHTML = `Ayiee, may chance! Gusto ka pala ni <p class="name1 name">${sName}</p> e, So ano pa hinihintay mo? Shoot your shot na🏀.
             Go <p class="name2 name">${fName}</p> fighting!`;
                    break;
                case 'M':
                    descEl.innerHTML = `Ay shala! Marriage agad? Di pa nga kayo e >_<. Anyways, best of luck sa future niyo together, <p class="name1 name">${fName}</p>
             and <p class="name2 name">${sName}</p> !`;
                    break;
                case 'E':
                    descEl.innerHTML = `<p class="name1 name">${fName}</p>, Itinakda kayo bilang magka-away. Pero, malay mo, may kasabihan nga tayo na  
            "The more you hate, the more you love". Hindi pa huli ang lahat para sa inyo ni <p class="name2 name">${sName}</p> ♥.`;
                    break;
                case 'S':
                    descEl.innerHTML = `Uyy! <p class="name1 name">${fName}</p>, kapatid lang pala ang turing niya sayo🤣. <p class="name1 name">${fName}</p> & <p class="name2 name">${sName}</p>, Best Siblings Forever💕.`;
                    break;
                default:
                    descEl.textContent = " error ";
                    break;
            }
        }
        if (document.title === "flames.") {
            null
        } else {
            getNames();
        }
    }
})
