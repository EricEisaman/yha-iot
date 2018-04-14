var serverModulePlugin = {
  addHandlers: (io,socket,fb,membersOnline,mailService)=>{
    console.log('Adding server module plugin...');
    fb.subscribeToSensor('buzz',data=>{
      let buzz = data.val();
      console.log(buzz);
      io.emit('buzzUpdate',buzz);
    });
  }
}
module.exports = serverModulePlugin;



