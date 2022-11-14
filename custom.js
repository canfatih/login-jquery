

  function sendForm(data) {
    fetch('https://insider-optimus.herokuapp.com/lead-collection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
  
  function copyText() {
    let state = 'test'
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(state)
  }
  

  $(function () {
    
  
    $('#close').click(function () {
      $('#modalpop').css({ display: 'none' })
    })
  
    $('#submit-button').click(function () {
      const email = $('#email').val()
      const phone = $('#phone').val()
  
      const data = {
        email: email,
        phone: phone,
      }
  
      if (data.email === '')
        return $('#email').css({
          'border-color': 'red',
          'border-width': '1px',
          'border-style': 'solid',
        })
      
  
      if (data.phone.length !== 10)
        return $('#phone').css({
          'border-color': 'red',
          'border-width': '1px',
          'border-style': 'solid',
        })
  
      if ($('#vehicle1').is(':not(:checked)'))
        return $('#vehicle1').css({
          'outline-color': 'red',
          'outline-width': '2px',
          'outline-style': 'solid',
        })
  
      sendForm(data)
  
      $('#modalpop').css({ display: 'none' })
      $('#popup-2').css({ display: 'flex' })
    })
  
    $('#close2').click(function () {
      $('#popup-2').css({ display: 'none' })
    })
  
    $('#copy-button').click(function () {
      copyText()
    })
  })



