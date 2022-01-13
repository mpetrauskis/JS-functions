var users = [
    { name: "Portugalija", skaicius: 10.34, plotas: 92212, },
    { name: "Japonija", skaicius: 125.36, plotas: 377975, },
    { name: "Brazilija", skaicius: 210.15, plotas: 8515767, },
    { name: "Kanada", skaicius: 38.13, plotas: 9984670, },
    { name: "Australija", skaicius: 25.75, plotas: 7686850, },
    { name: "Lietuva", skaicius: 2.78, plotas: 65300, }

];

for (var x of users) {
    var average = x.plotas / x.skaicius;
    let a = average.toFixed(2)
    console.log(`Šalis: ${x.name}, joje gyvena: ${x.skaicius} mln. gyventojų.`);
    console.log(`Valstybės plotas: ${x.plotas} km², plotas tenkantis vienam gyventojui: ${a} m²`);
    console.log("++++++++++")
}