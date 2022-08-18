


































































const orderButton = document.querySelector('.order')


orderButton?.addEventListener('submit', (event)=> {
    event.preventDefault();
    const name = orderButton.querySelector('.Name').value;
    const phone = orderButton.querySelector('.Phone').value;
    const email = orderButton.querySelector('.Email').value;
    const photo = orderButton.querySelector('.Photo').value;
    const description = orderButton.querySelector('.Description').value;
   
    const modal = document.querySelector('#exampleModal');
    try {
        const response = await fetch('/order', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            photo,
            description
          }),
        });
        setTimeout(()=>   , 8000)
        window.location.replace('/');
      } catch (error) {
        console.log(error);
      }
})
