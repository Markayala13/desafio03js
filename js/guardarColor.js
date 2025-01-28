let color = ""
const key = document.querySelector("#key")

addEventListener("keydown",(event) =>{

const tecla=event.key.toLocaleLowerCase()

    if (tecla=== "a"){

        key.style.background
        = "pink"

    }else if(tecla === "s"){

        key.style.background
 = "orange"

    }else if(tecla === "d"){

        key.style.background = "blue"

    }else if(tecla === "q"){

        key.style.background = "purple"

    }else if(tecla === "w"){

        key.style.background = "gray"

    }else if(tecla === "e"){

        key.style.background = "brown"

    }

})