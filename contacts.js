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


const simpanContact = (nama, alamat, nohp) =>{
    const contact = { nama, alamat, nohp};
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(fileBuffer);

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

module.exports = {tulisPertanyaan, simpanContact };