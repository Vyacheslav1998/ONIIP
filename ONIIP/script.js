var vocabulary = [
    {id: "а", name: ['а','н','а','н','а','с']},
    {id: "б", name: ['б','о','ч','к','а']},
    {id: "в", name: ['в','и','л','к','а']},
    {id: "г", name: ['г','у','л']},
    {id: "д", name: ['д','о','м']},
    {id: "е", name: ['е','д','а']},
    {id: "ё", name: ['ё','л','к','а']},
    {id: "ж", name: ['ж','и','л','е','т']},
    {id: "з", name: ['з','а','м','о','к']},
    {id: "и", name: ['и','к','р','а']},
    {id: "к", name: ['к','о','л']},
    {id: "л", name: ['л','и','с','т']},
    {id: "м", name: ['м','я','ч']},
    {id: "н", name: ['н','о','с']},
    {id: "о", name: ['о','п','ы','т']},
    {id: "п", name: ['п','у','х']},
    {id: "р", name: ['р','ы','б','а']},
    {id: "с", name: ['с','т','у','л']},
    {id: "т", name: ['т','а','й','н','а']},
    {id: "у", name: ['у','т','ю','г']},
    {id: "ф", name: ['ф','о','т','о']},
    {id: "х", name: ['х','л','е','б']},
    {id: "ц", name: ['ц','в','е','т','ы']},
    {id: "ч", name: ['ч','е','к']},
    {id: "ш", name: ['ш','и','ш','к','а']},
    {id: "щ", name: ['щ','ё','т','к','а']},
    {id: "э", name: ['э','м','у']},
    {id: "ю", name: ['ю','л','а']},
    {id: "я", name: ['я','б','л','о','к','о']},
  ];
  
  let word1 = vocabulary.find(item => item.id == "г");

  const li1 =  document.getElementById ("li1")
  const h2 = word1.name
  li1.innerText =h2;



  vocabulary.lastletter = function() {
    return h2[h2.length - 1];
}
const h3 = vocabulary.lastletter()

let word2 = vocabulary.find(item => item.id == h3);

const li2 =  document.getElementById ("li2")
  li2.innerText = word2.name;



  vocabulary.lastletter = function() {
    return word2.name[word2.name.length - 1];
}
const h4 = vocabulary.lastletter()

let word3 = vocabulary.find(item => item.id == h4);

const li3 =  document.getElementById ("li3")
  li3.innerText = word3.name;


  
  vocabulary.lastletter = function() {
    return word3.name[word3.name.length - 1];
}
const h5 = vocabulary.lastletter()

let word4 = vocabulary.find(item => item.id == h5);

const li4 =  document.getElementById ("li4")
  li4.innerText = word4.name; 
 
  

  vocabulary.lastletter = function() {
    return word4.name[word4.name.length - 1];
}
const h6 = vocabulary.lastletter()

let word5 = vocabulary.find(item => item.id == h6);

const li5 =  document.getElementById ("li5")
  li5.innerText = word5.name; 


  vocabulary.lastletter = function() {
    return word5.name[word5.name.length - 1];
}
const h7 = vocabulary.lastletter()

let word6 = vocabulary.find(item => item.id == h7);

const li6 =  document.getElementById ("li6")
  li6.innerText = word6.name; 



  vocabulary.lastletter = function() {
    return word6.name[word6.name.length - 1];
}
const h8 = vocabulary.lastletter()

let word7 = vocabulary.find(item => item.id == h8);

const li7 =  document.getElementById ("li7")
  li7.innerText = word7.name;



  vocabulary.lastletter = function() {
    return word7.name[word7.name.length - 1];
}
const h9 = vocabulary.lastletter()

let word8 = vocabulary.find(item => item.id == h9);

const li8 =  document.getElementById ("li8")
  li8.innerText = word8.name;