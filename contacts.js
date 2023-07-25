const fs =  require('fs');
// const readline = require('readline');
const chalk = require('chalk  ')
const validator = require('validator');

const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//membuat folder data
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8')
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
      rl.question(pertanyaan, (nama)=> {
        
        resolve(nama);
      });
    });
  };
// cek alamat
if(email){
  if(!validator.isAlamat(alamay)){
  console.log(
    chalk.red.inverse.bold('alamat tidak valid!'));
  }
}
const loadContact =() => {
const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(fileBuffer);
    return contacts;

}

const simpanContact = (nama, alamat, nohp) =>{
    const contact  = { nama, alamat, nohp};
    // const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
    // const contacts = JSON.parse(fileBuffer);
    const contacts = loadContact();


// cek duplikat
const duplikat =  contacts.find((contact) => contact.nama === nama);
if (duplikat){
  console.log('contact sudah terdaftar, gunakan nama lain!');
   chalk.red.inverse.bold('contact sudah terdaftar, gunakan nama lain!')
  return false;s
}


    contacts.push(contact);

// cek no HP
if (!validator.isMobilePhone(noHP,'id-ID' )){
  console.log(chalk.red.inverse.bold('alamat tidak valid')); 
  return false
}
contacts.push(contact);
   fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log(chalk.green.inverse.bold('Terimakasih sudah memasukan data.'));
    rl.close();

};


const listcontacts = () => {;
  const contacts  = loadContact();
  contacts.forEach((contact, i) => {
    console.log('${i + 1}. ${contact.nama} - ${contact.noHP}');

});
};

const detailContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find(
  (contact) => contact.nama.toLoweCase()  === nama.toLoweCase()
  );

  if(!contact){ 
    console.log(chalk.red.inverse.bold('${nama} tidak ditemukan! '));
    return false;   
  }

  console.log(chalk.red.inverse.bold(contact.nama));
  console.log(contact.nohp);
  if (constact.alamat) {
     console.log(contact.alamat);
      }
  };


  const deleteContact = (nama) =>{;
    const contacts = loadContact();
    const newContacts = contacts.filter(
      (contact) => contact.nama.toLoweCase() !==nama.toLoweCase()
    );


    if(!contact.length === newContacts.legth) { 
      console.log(chalk.red.inverse.bold('${nama} tidak ditemukan! '));
      return false;   
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));
    console.log(
    chalk.green.inverse.bold('data contact ${nama} berhasil dihapus!')
    ); 
  };   







module.exports = {tulisPertanyaan, listContact, detailContact };