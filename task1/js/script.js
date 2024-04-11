document.getElementById("add-item-btn").addEventListener("click", function() {
    var divOnTime = document.createElement("div");
    divOnTime.className = 'divOnTime';
    divOnTime.innerHTML =
        `<span class="close-btn">Закрыть</span>
         <p>Вы нажали на кнопку плюс</p>
        `;
    document.getElementById("container").appendChild(divOnTime);

        setTimeout(function() {
            divOnTime.remove();
        }, 5000);

        divOnTime.querySelector(".close-btn").addEventListener("click", function() {
            divOnTime.remove();
        });
    });
