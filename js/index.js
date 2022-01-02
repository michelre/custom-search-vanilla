import Select from "./Select.js";

const onIngredientSelect = (ingredient) => {
    console.log(ingredient)
}

const onApplianceSelect = (appliance) => {
    console.log(appliance)
}

const onUstensilSelect = (ustensil) => {
    console.log(ustensil)
}

const $app = document.querySelector('#app');
const selectIngredient = new Select('select-ingredient', 'Ingrédients', ['Coco', 'Orange', 'Orange Sanguine', 'Fraise'], onIngredientSelect)
const selectAppliance = new Select('select-appliance', 'Appareils', ['Batteur', 'Four', 'Congélateur'], onApplianceSelect);
const selectUstensil = new Select('select-ustensil', 'Ustensiles', ['Fouet', 'Cuillère'], onUstensilSelect);
$app.appendChild(selectIngredient.render());
$app.appendChild(selectAppliance.render());
$app.appendChild(selectUstensil.render());

