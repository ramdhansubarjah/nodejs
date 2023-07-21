// mengambil argumen dari command line
// const command = process.argv[2];
// if(command === 'add') {

// } else if(command === 'remove'){

// }else if(command ==='list'){

// }

// const contacts = require('./contacts');














const contacts = require ('./contacts');

const main = async () => {
  const nama = await contacts.tulisPertanyaan('Masukan Nama Anda : ');
  const alamat = await contacts.tulisPertanyaan('Masukan Alamat Anda : ');
  const nohp = await contacts.tulisPertanyaan('Masukan nohp Anda : ');

  contacts.simpanContact(nama, alamat, nohp);
};

main();