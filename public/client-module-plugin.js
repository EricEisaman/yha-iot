var client_module_plugin = {
init: (socket,firebaseUser)=>{
  console.log('Initializing client module plugin...');
  var dynamicElement = document.getElementById('dynamic');
  socket.on('buzzUpdate',data=>{
    console.log(data);
    dynamicElement.innerHTML = `<h3>Buzzer Buzzing State: ${data}</h3>`;
  });
}
}
module.exports = client_module_plugin;


