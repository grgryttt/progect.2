async function dogs() {
    let url = 'https://dog.ceo/api/breeds/image/random'
     await fetch(url, {
        method: "GET"
     }).then(res => res.json())
     .then(res => console.log(res))
}
dogs()





const objFoto = {
    key: '45487343-853740a89f5c2b025f52c7f59',
    container: document.getElementsByClassName('container')[0],
    pages: document.getElementsByClassName('pages')[0],
    input: document.getElementById('input'),
    btn: document.getElementById('btn'),
    maxpages:0,
    getAll(value, p = 0) {
        let url = `https://pixabay.com/api/?key=${this.key}&q=${value}&image_type=photo&lang=uk&page=${p}&per_page=40`
        fetch(url,{method:"GET"}).then(res=>res.json())
        .then(res => {
            this.create(res.hits);
            this.maxpages=res.total/40;
            this.createPages();
        })
    },
    createPages(){
        this.pages.innerHTML=''
        for (let index = 0; index < this.maxpages; index++) {
            this.pages.insertAdjacentHTML("beforeend", `
                <span>${index}</span>
                
                `)
            
        }
    },
    create(data) {
        this.container.innerHTML = ''
        data.forEach(element =>
            this.container.insertAdjacentHTML("beforeend", `
                <img src=${element.previewURL} alt="">
                `)

        );
    },
    render(){
        this.btn.addEventListener('click',()=>this.getAll(this.input.value))
    }
}
objFoto.render()