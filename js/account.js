model = {
    btnNum: 10
}



let change_button = (our_case) => {
    let titleBlock = document.getElementById("title")
    let textBlock
    let i;
    
    for (i = 1; i <= model.btnNum; i++) {
        textBlock = document.getElementById(i.toString());
        textBlock.style.display = "none";
    }
    textBlock = document.getElementById(our_case.toString());
    textBlock.style.display = "block";
        
    if (our_case == 1) {
        titleBlock.innerHTML = "Начало работы"
    }
    else if (our_case == 2) {
        titleBlock.innerHTML = "Получение продукции"
    }
    else if (our_case == 3) {
        titleBlock.innerHTML = "Внешний вид"
    }
    else if (our_case == 4) {
        titleBlock.innerHTML = "Работа с оборудованием"
    }
    else if (our_case == 5) {
        titleBlock.innerHTML = "Продажа товара"
    }
    else if (our_case == 6) {
        titleBlock.innerHTML = "Скидочные карты и купоны"
    }
    else if (our_case == 7) {
        titleBlock.innerHTML = "Реклама"
    }
    else if (our_case == 8) {
        titleBlock.innerHTML = "Безопасность"
    }
    else if (our_case == 9) {
        titleBlock.innerHTML = "Отчёты"
    }
    else if (our_case == 10) {
        titleBlock.innerHTML = "Запросы"
    }
}

