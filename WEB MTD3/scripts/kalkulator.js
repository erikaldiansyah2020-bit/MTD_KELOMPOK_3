function parseSet(input) {
    if (!input) return [];
    return [...new Set(input.split(",").map(s => s.trim()).filter(s => s !== ""))];
}

function powerSet(set) {
    let ps = [[]];
    for (let elem of set) {
        ps = ps.concat(ps.map(sub => sub.concat(elem)));
    }
    return ps;
}

function calculate() {
    let A = parseSet(document.getElementById("setA").value);
    let B = parseSet(document.getElementById("setB").value);
    let op = document.getElementById("operation").value;
    let resultBox = document.getElementById("result");

    document.getElementById("vennDiagram").style.display = "none";

    if (op === "power") {
        let psA = powerSet(A);
        resultBox.innerHTML = "<b>Himpunan Kuasa A:</b> <br> { " + 
            psA.map(s => `{${s}}`).join(", ") + " }";
    }

    else if (op === "disjoint") {
        let intersect = A.filter(x => B.includes(x));
        resultBox.innerHTML = intersect.length === 0 
            ? "A dan B adalah <b>Saling Lepas</b> (tidak ada irisan)"
            : "A dan B <b>TIDAK</b> saling lepas (ada irisan)";
    }

    else if (op === "intersect") {
        let intersect = A.filter(x => B.includes(x));
        resultBox.innerHTML = "Irisan A ∩ B = { " + intersect.join(", ") + " }";
    }

    else if (op === "equal") {
        let equal = A.length === B.length && A.every(x => B.includes(x));
        resultBox.innerHTML = equal
            ? "<b>A = B</b> (himpunan sama)"
            : "<b>A ≠ B</b>";
    }

    else if (op === "venn") {
        let circleA = document.getElementById("circleA");
        let circleB = document.getElementById("circleB");

        let intersect = A.filter(x => B.includes(x));

        circleA.innerHTML = "A:<br>" + A.join(", ");
        circleB.innerHTML = "B:<br>" + B.join(", ");

        resultBox.innerHTML = "Irisan (A ∩ B) = { " + intersect.join(", ") + " }";

        document.getElementById("vennDiagram").style.display = "block";
    }
}
