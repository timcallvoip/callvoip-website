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

const getMonthlyTotal = function () {
  let values = Object.values(state.monthly);
  return values.reduce((partial_sum, a) => partial_sum + a,0);
}

const getOnetimeTotal = function () {
  let values = Object.values(state.onetime);
  return values.reduce((partial_sum, a) => partial_sum + a,0);
}

const renderMonthlyTotal = function () {
  const totalFieldsMonthly = document.getElementById('total-fields-monthly');

  const MonthlyTotal = `
  <div class="flex mb-">
  <div class="w-6">
    &nbsp;
  </div>
  <div class="flex-1 px-2 text-right font-medium">Totaal:</div>
  <div class="">${formatter.format(getMonthlyTotal())}</div>
  </div>
  `

  totalFieldsMonthly.innerHTML = MonthlyTotal;
}

const renderOnetimeTotal = function () {
  const totalFieldsOnetime = document.getElementById('total-fields-onetime');

  const onetimeTotal = `
  <div class="flex mb-">
  <div class="w-6">
    &nbsp;
  </div>
  <div class="flex-1 px-2 text-right font-medium">Totaal:</div>
  <div class="">${formatter.format(getOnetimeTotal())}</div>
  </div>
  `

  totalFieldsOnetime.innerHTML = onetimeTotal;
}

const renderTemplateRow = function(fields, type) {

  const rows = `
  ${fields.map(item =>`
  ${(item.value > 0)  ? `
  <div class="flex mb-1">
    <div class="w-6">${item.value}x</div>
    <div class="flex-1 px-2">${item.name}</div>
    ${(type === 'monthly') ? `
    <div class="">${formatter.format((item.value * item.price_monthly))}</div>
    ` : `
    <div class="">${formatter.format((item.value * item.price_onetime))}</div>
    `}
  </div>
  ` : ''}`).join('')}
  `

  return rows;
}


const renderBasicFields = function (fields) {

  const basicFieldsMonthly = document.getElementById('basic-fields-monthly');
  const basicFieldsOnetime = document.getElementById('basic-fields-onetime');

  let monthly = 0;
  let onetime = 0;
  state.basicFields = [];

  /* loop over all basic fields */

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

  /* add totals to state */

  state.monthly.basicfields = monthly;
  state.onetime.basicFields = onetime;

  /* output Monthly templates rows */
  basicFieldsMonthly.innerHTML = renderTemplateRow(state.basicFields, 'monthly');
  basicFieldsOnetime.innerHTML  = renderTemplateRow(state.basicFields, 'onetime');

}

const renderTotals = function() {
  renderMonthlyTotal();
  renderOnetimeTotal();
}


document.addEventListener('DOMContentLoaded', function () {

  if (document.getElementById('basic-fields')) {

    const basicFields = document.getElementById('basic-fields').getElementsByTagName('input');
    renderBasicFields(basicFields);

    for (let basicField of basicFields) {
      basicField.addEventListener('change', function () {
        renderBasicFields(basicFields);
        renderTotals();
      })
    }

  }


  renderTotals();


}, false);



