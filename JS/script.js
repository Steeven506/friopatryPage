const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', ()=>{
    container.classList.add('active');
});

loginBtn.addEventListener('click', ()=>{
    container.classList.remove('active');
});

function mostrar() {
    swal("¿Desea cancelar la cita?", {
      buttons: {
        cancel: "Volver a la página",
        catch: {
          text: "Cancelar servicio",
          value: "catch",
        }
      },
    })
    .then((value) => {
      switch (value) {
        case "catch":
          swal("Completado", "Servicio cancelado con éxito", "success").then(() => {
            window.location.href = "historial2.html";
          });
          break;
      }
    });
  }