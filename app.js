const yargs = require('yargs');
const contacts = require('./contacts');

yargs.command({
      command: 'add',
      describe: 'Menambahkan contact baru',
      builder: {
        nama: {
          describe: 'nama lengkap',
          demandOption: true,
          type: 'string',
        },
        alamat: {
          describe: 'email',
          demandOption: false,
          type: 'string',
        },
          noHP: {
          describe: 'Nomor Handphone',
          demandOption: true,
          type: 'string',

       },
      },
      handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.nohp);
        }
      })
      
//  console.log(contact)
      .demandCommand();

      // menampilkan detail contact 
yargs.command({
  command: 'list',
    describe: 'Menampilkan daftar semua nama % hp contact',
    builder: {
    
    },
});

//menamilkan detail sebuah contact
yargs.command({
  command: 'detail',
    describe: 'Menampilkan detail contact',
    builder: {
    nama: {
      describe: 'nama lengkap',
      demandOption: true,
      type: 'string',
    },
},
handler(argv) {
      contacts.detailContact(argv.nama);
   },
});

// menghapus contact berdasarkan nama
yargs.command({
  command: 'delete',
  describe: 'Menampilkan detail sebuah contact berdasarkan nama',
  builder: {
    nama: {
      describe: 'nama lengkap',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.nama);
  }

});

yargs.perse(); 


