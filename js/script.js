//ANNUAL
const priceOne = document.getElementById('price_one');
const priceTwo = document.getElementById('price_two');
const priceThree = document.getElementById('price_three');
const annual_switch = document.getElementById('flexSwitchCheckDefault');
const priceTags = document.querySelectorAll('.price_tag');

// Изначальные цены
const originalPrices = {
    monthly: {
        one: '100$',
        two: '200$',
        three: '300$'
    },
    yearly: {
        one: '80$',
        two: '180$',
        three: '260$'
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

// Валидация

// Маппинг кодов
const countryPlaceholders = {
    '+1': '777-000-0000',  // US
    '+7': '900-000-00-00',  // RU
    '+44': '5555-000-000'  // UK
};

// Обработчик изменения кода страны
document.getElementById('countryCode').addEventListener('change', function () {
    var phoneInput = document.getElementById('phone');
    var selectedCountryCode = this.value;

    phoneInput.placeholder = selectedCountryCode + ' ' + (countryPlaceholders[selectedCountryCode] || 'Enter your phone number');
});

// Валидация номера телефона
document.getElementById('phone').addEventListener('input', function () {
    var phoneInput = this;
    var phoneNumber = phoneInput.value.replace(/\D/g, ''); 
    var selectedCountryCode = document.getElementById('countryCode').value.replace(/\D/g, ''); // Код страны без нецифровых 
    var actualPhoneNumber = phoneNumber.substring(selectedCountryCode.length); // Часть номера без кода 

    var formGroup = document.querySelector('[data-form_group="anchor"]');

    if (actualPhoneNumber.length < 9) {
        formGroup.setAttribute('id', 'custom_invalid');
    } else {
        formGroup.removeAttribute('id');
    }
});

// Валидация формы
(function () {
    'use strict';

    var forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                var phoneInput = document.getElementById('phone');
                var phoneNumber = phoneInput.value.replace(/\D/g, ''); // все нецифровые 
                var selectedCountryCode = document.getElementById('countryCode').value.replace(/\D/g, ''); // Код страны без нецифровых 
                var actualPhoneNumber = phoneNumber.substring(selectedCountryCode.length); // Часть номера без кода

                var formGroup = document.querySelector('[data-form_group="anchor"]');

                // Проверка валидации телефона при отправке формы
                if (actualPhoneNumber.length < 9) {
                    formGroup.setAttribute('id', 'custom_invalid');
                } else {
                    phoneInput.setCustomValidity('');
                    formGroup.removeAttribute('id');
                }

                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();
                    var successModal = new bootstrap.Modal(document.getElementById('successModal'));
                    successModal.show();
                }

                form.classList.add('was-validated');
            }, false);
        });
})();

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
