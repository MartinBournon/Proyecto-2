class Navbar {
    constructor() {
        this.isLogin();

    }
    setListeners() {
        let btnSignOut = document.querySelector("#btnSignOut");
        if (btnSignOut != null) {
            btnSignOut.addEventListener('click', () => {
                this.logOut();
            });
        }
    }
    isLogin() {
        let usuarioLogueado = null;
        if (!localStorage.getItem('usuarioLogueado')) {
            return usuarioLogueado;
        } else {
            let usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
            return usuarioLogueado;
        }
    }

    logOut() {
        localStorage.removeItem('usuarioLogueado');
        location.href = "index.html";
    }

    mostrarElementos() {
        let usuarioLogueado = this.isLogin();
        if (usuarioLogueado !== null) {
            if (usuarioLogueado.permiso === 1) {
                let menu = document.querySelector(".main_side");
                let home = this.crearLi();
                let personalAccount = this.crearLi();
                let myMusic = this.crearLi();
                let accountSettings = this.crearLi();
                let subMenuPersonalAccount = this.crearUl("item-show-1");
                let rockComunity = this.crearLi();
                let signOut = this.crearLi();
                home.appendChild(this.crearA("Home", "index.html"));
                let auxiliar = this.crearA("Personal Account", "#", 1);
                auxiliar.appendChild(this.crearSpan());
                personalAccount.appendChild(auxiliar);
                myMusic.appendChild(this.crearA("My Music", "mymusic.html"));
                accountSettings.appendChild(this.crearA("Account Settings", "accountsettings.html"));
                subMenuPersonalAccount.appendChild(myMusic);
                subMenuPersonalAccount.appendChild(accountSettings);
                personalAccount.appendChild(subMenuPersonalAccount);
                rockComunity.appendChild(this.crearA("Rock Community", "rockcommunity.html"));
                signOut.appendChild(this.crearA("Sign Out", "index.html"));
                signOut.setAttribute("id", "btnSignOut");
                menu.appendChild(home);
                menu.appendChild(personalAccount);
                menu.appendChild(rockComunity);
                menu.appendChild(signOut);
            }
        } else {
            let menu = document.querySelector(".main_side");
            let home = this.crearLi();
            let login = this.crearLi();
            let register = this.crearLi();
            home.appendChild(this.crearA("Home", "index.html"));
            login.appendChild(this.crearA("Login", "#modalLogin"));
            login.firstChild.setAttribute("data-bs-toggle", "modal");
            login.firstChild.setAttribute("data-bs-target", "#modalLogin");
            register.appendChild(this.crearA("Register", "#modalRegistro"));
            register.firstChild.setAttribute("data-bs-toggle", "modal");
            register.firstChild.setAttribute("data-bs-target", "#modalRegistro");
            menu.appendChild(home);
            menu.appendChild(login);
            menu.appendChild(register);

        }

        this.setListeners();
        // if(true){
        //     let menu = document.querySelector(".main_side");
        //     let home = this.crearLi();
        //     let personalAccount = this.crearLi();
        //     let myMusic = this.crearLi();
        //     let accountSettings = this.crearLi();
        //     let subMenuPersonalAccount = this.crearUl("item-show-1");
        //     let rockComunity = this.crearLi();
        //     let login = this.crearLi();
        //     let register = this.crearLi();
        //     home.appendChild(this.crearA("Home", "index.html"));
        //     let auxiliar = this.crearA("Personal Account" , "#", 1);
        //     auxiliar.appendChild(this.crearSpan());
        //     personalAccount.appendChild(auxiliar);
        //     myMusic.appendChild(this.crearA("My Music", "mymusic.html"));
        //     accountSettings.appendChild(this.crearA("Account Settings", "accountsettings.html"));
        //     subMenuPersonalAccount.appendChild(myMusic);
        //     subMenuPersonalAccount.appendChild(accountSettings);
        //     console.log(subMenuPersonalAccount);
        //     personalAccount.appendChild(subMenuPersonalAccount);
        //     rockComunity.appendChild(this.crearA("Rock Community", "rockcommunity.html"));
        //     login.appendChild(this.crearA("Login","#modalLogin"));
        //     login.firstChild.setAttribute("data-bs-toggle", "modal");
        //     login.firstChild.setAttribute("data-bs-target", "#modalLogin");
        //     register.appendChild(this.crearA("Register" , "#modalRegistro"));
        //     register.firstChild.setAttribute("data-bs-toggle", "modal");
        //     register.firstChild.setAttribute("data-bs-target", "#modalRegistro");
        //     menu.appendChild(home);
        //     menu.appendChild(personalAccount);
        //     menu.appendChild(rockComunity);
        //     menu.appendChild(login);
        //     menu.appendChild(register);

        // }
    }
    crearUl(clase) {
        let ul = document.createElement("ul");
        ul.className = clase;
        return ul;
    }
    crearLi() {
        let li = document.createElement("li");
        return li;

    }
    crearA(texto, href, id = 0) {
        let a = document.createElement("a");
        a.appendChild(document.createTextNode(texto));
        a.setAttribute("href", href);
        a.setAttribute("id", id);
        return a;
    }
    crearSpan() {
        let span = document.createElement("span");
        span.className = "fas fa-caret-down";
        return span;
    }

}

let navbar = new Navbar();
navbar.mostrarElementos();