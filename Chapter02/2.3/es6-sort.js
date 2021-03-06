({
  plugins: 'jsdom-quokka-plugin',
  jsdom: {html: `<div id="test">Hello</div>`}
})

const Vue = require("vue");

const testDiv = document.getElementById('test');

console.log(testDiv.innerHTML);

// dams not changed
const dams = [
  {name: 'Nurek Dam', country: 'Tajikistan', electricity: 3200},
  {name: 'Three Gorges Dam', country: 'China', electricity: 22500},
  {name: 'Tarbela Dam', country: 'Pakistan', electricity: 3500},
  {name: 'Guri Dam', country: 'Venezuela', electricity: 10200}
]

dams.sort((d1,d2) => d1.electricity-d2.electricity );
dams

dams.sort((d1,d2) => (d2.electricity - d1.electricity) * -1 );
dams

// 그러니까.
// d1,d2 음수면 뒤에 것이 크다는 것, 즉, 두 요소가 있으면 뒤에 것이 크도록 정렬하라.
// d1,d2 양수면 앞에 것이 크다는 것, 즉, 두 요소가 있으면 앞에 것이 크도록 정렬하라.
