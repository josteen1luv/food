function  cards(){
    //CARD CLASSES

    class MenuCard{
        constructor(src, alt, title, desc, price, parentSelector, ...classes){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.desc = desc;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 5;
            this.changeToPLN();
        }

        changeToPLN(){
            this.price = this.price * this.transfer;
        }

        render(){
            const element = document.createElement('div');
            if(this.classes.length === 0){
                this.element = 'menu__item';
                element.classList.add(this.element);
            }  else{
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.desc}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Cost:</div>
                    <div class="menu__item-total"><span>${this.price}</span> PLN/Day</div>
                </div>
            `;
            this.parent.append(element);
        }
    }
    const data = [
        {
            "img": "img/tabs/vegy.jpg",
            "altimg": "fitness",
            "title": "Menu 'Fitness'",
            "descr": "Menu 'Fitness' is a new approach to cooking: more fresh vegetables and fruits. For people who are interested in sports. It is a completely new product with optimal price and high quality!",
            "price": 9,
            "id": "d1f0"
        },
        {
            "img": "img/tabs/post.jpg",
            "altimg": "vegan",
            "title": "Menu 'Vegan'",
            "descr": "Our special 'Vegan' Menu is a careful selection of ingredients: total absence of animal products. Complete harmony with yourself and nature in every element!",
            "price": 14,
            "id": "d34e"
        },
        {
            "img": "img/tabs/elite.jpg",
            "altimg": "elite",
            "title": "Menu 'Premium'",
            "descr": "Menu 'Premium' - we use not only beautiful packaging design, but also high-quality execution of dishes. Red fish, seafood, fruits - restaurant menu without going to a restaurant!",
            "price": 21,
            "id": "2ffa"
        }
    ]
    data.forEach(({img, altimg, title, descr, price}) =>{
        new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    });

}

export default cards;