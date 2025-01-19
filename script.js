const header = document.getElementById("header");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                header.classList.remove("hidden");
                header.classList.add("flex");
      
            } else {
                header.classList.add("hidden");
                header.classList.remove("flex");
            }
        });

const toggleButton = document.getElementById('toggleButton');  
        const sidebar = document.getElementById('sidebar');  

        toggleButton.onclick = function() {  
            // Alternar la clase 'translate-x-full' para mostrar/ocultar la barra lateral  
            sidebar.classList.toggle('translate-x-full');  
        }; 

       