//ANNUAL
const priceOne = document.getElementById('price_one');
const priceTwo = document.getElementById('price_two');
const priceThree = document.getElementById('price_three');
const annual_switch = document.getElementById('flexSwitchCheckDefault');
const priceTags = document.querySelectorAll('.price_tag');

// Изначальные цены
const originalPrices = {
    monthly: {
        one: '49$',
        two: '99$',
        three: '199$'
    },
    yearly: {
        one: '470$',
        two: '950$',
        three: '1910$'
    }
};

(function () {
    if(priceOne){
            // Устанавливаем начальные цены и метки
            priceOne.textContent = originalPrices.monthly.one;
            priceTwo.textContent = originalPrices.monthly.two;
            priceThree.textContent = originalPrices.monthly.three;
            priceTags.forEach(function(tag) {
            tag.textContent = "/mo";
    });
    }
})();

let isMontly = true;

if(annual_switch){
    // Обрабатываем переключатель
annual_switch.addEventListener('change', function() {
    isMontly = !isMontly;

    // Выбираем цены в зависимости от режима
    const prices = isMontly ? originalPrices.monthly : originalPrices.yearly;

    // Устанавливаем новые цены
    priceOne.textContent = prices.one;
    priceTwo.textContent = prices.two;
    priceThree.textContent = prices.three;

    // Обновляем метки (ежемесячный или ежегодный режим)
    const newText = isMontly ? '/mo' : '/year';
    priceTags.forEach(function(tag) {
        tag.textContent = newText;
    });
});
}

// активация тултипов

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl);
});

//график

const graphCols = document.querySelectorAll('.graph_col');
    
graphCols.forEach(col => {
            col.addEventListener('mouseover', () => {
                col.classList.add('hovered');
    
                const pointer = col.querySelector('.graph_pointer');
                const tooltip = col.querySelector('.custom_tooltip');
                const VR = col.querySelector('.vertical-hr');
    
                if (pointer) {
                    pointer.classList.add('custom_visible');
                }
    
                if (tooltip) {
                    tooltip.style.opacity = '100';
                }

                if (VR) {
                    VR.classList.add('Bolded')
                }
            });
    
            col.addEventListener('mouseout', () => {
                col.classList.remove('hovered');
    
                const pointer = col.querySelector('.graph_pointer');
                const tooltip = col.querySelector('.custom_tooltip');
                const VR = col.querySelector('.vertical-hr');
    
                if (pointer) {
                    pointer.classList.remove('custom_visible');
                }
    
                if (tooltip) {
                    tooltip.style.opacity = '0';
                }
                if (VR) {
                    VR.classList.remove ('Bolded')
                }
            });
});

window.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('showAlert') === 'true') {
        alert('asdasd');
        localStorage.removeItem('showAlert');
    }
});