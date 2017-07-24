document.addEventListener('DOMContentLoaded', function() {
  var toggler = document.querySelector('.home-toolbar .toggle-header')
  var content = toggler.textContent.trim()

  if (content === 'All listing types') {
    toggler.textContent = 'Buy & request'
  }
 
  var internationalShipping = false
  var domesticShipping = false
  
  while (!internationalShipping) {
    internationalShipping = document.querySelector('label[for="delivery_shipping"]')
  }
  
  internationalShipping.textContent = 'International Shipping (+€3,95)'
  
  while(!domesticShipping) {
    domesticShipping = document.querySelector('label[for="delivery_pickup"]')
  }
  
  domesticShipping.textContent = 'Domestic shipping (default)'
})
