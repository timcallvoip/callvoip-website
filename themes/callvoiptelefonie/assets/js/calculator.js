const formatter = new Intl.NumberFormat('nl-NL', {
  style: 'currency',
  currency: 'EUR'
})



const state = {
  basicFields: [],
  monthly: {
    basicfields: 0,
  },
  onetime: {
    basicFields: 0,
  }
}

const basicFieldsRender = function (fields) {

  let monthly = 0;
  let onetime = 0;
  state.basicFields = [];

  for (let item of fields) {

    let obj = {};

    obj.name = item.dataset.name;
    obj.price_monthly = item.dataset.price_monthly;
    obj.price_onetime = item.dataset.price_onetime;
    obj.value = item.value;

    monthly = monthly + (obj.price_monthly * obj.value);
    onetime = onetime + (obj.price_onetime * obj.value);

    state.basicFields.push(obj);

  };

  state.monthly.basicfields = monthly;
  state.onetime.basicFields = onetime;

  console.log('state', state);

  const basicFieldsMonthly = document.getElementById('basic-fields-monthly');
  const totalFieldsMonthly = document.getElementById('total-fields-monthly');


  const MonthlyRows = `
  ${state.basicFields.map(item =>`
  ${(item.value > 0)  ? `
  <div class="flex mb-1">
    <div class="w-6">${item.value}x</div>
    <div class="flex-1 px-2">${item.name}</div>
    <div class="">${formatter.format((item.value * item.price_monthly))}</div>
  </div>
  ` : ''}`).join('')}
  `

  const MonthlyTotal = `
  ${(state.monthly.basicfields > 0)  ? `
  <div class="flex mb-">
  <div class="w-6">
    &nbsp;
  </div>
  <div class="flex-1 px-2 text-right font-medium">Totaal:</div>
  <div class="">${formatter.format(state.monthly.basicfields)}</div>
  </div>
  ` : ''}`


  basicFieldsMonthly.innerHTML = MonthlyRows;
  totalFieldsMonthly.innerHTML = MonthlyTotal;

}


document.addEventListener('DOMContentLoaded', function () {

  if (document.getElementById('basic-fields')) {

    const basicFields = document.getElementById('basic-fields').getElementsByTagName('input');
    basicFieldsRender(basicFields);

    for (let basicField of basicFields) {
      basicField.addEventListener('change', function () {
        basicFieldsRender(basicFields);
      })
    }

  }




}, false);



