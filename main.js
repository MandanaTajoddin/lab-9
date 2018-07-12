
let Cookie = function(storeName, storeAge, storeLocation, storeHour) {

    this.storeName = storeName;

    this.storeAge = storeAge;

    this.storeLocation = storeLocation;

    this.stourHour = storeHour;

}



let cookieArray = []



let form = document.getElementById('new-form')



let userText = form.cookieStoreName

let userNumber = form.cookieStoredAge

let userSelect = form.cookieStoreLocation

let userRadio = form.cookieStoreHour



form.addEventListener('submit', function(event) {

    event.preventDefault()

    let newCookie = new cookie(userText.value, userNumber.value, userSelect.value, userRadio.value)

    cookieArray.push(newCookie)

    

    console.log(cookieArray)

})










let Store = function(storeName, hour6, hour7, hour8, hour9, hour10, hour11, hour12, hour1, hour2, hour3) {

    this.storeName = storeName;
    this.hour6 = hour6;
    this.hour7 = hour7;
    this.hour8 = hour8;
    this.hour9 = hour9;
    this.hour10 = hour10;
    this.hour11 = hour11;
    this.hour12 = hour12;
    this.hour1 = hour1;
    this.hour2 = hour2;
    this.hour3 = hour3;
};


let storeTime = new Store("Store Locations", "6.00am", "7.00am", "8.00am", "9.00am", "10.00am", "11.00am","12.00pm","1.00pm","2.00pm","3.00pm");
let storeOne = new Store("Bethesda cookie", 100, 100, 150, 150, 150, 100, 100, 150, 250, 250);
let storeTwo = new Store("Gaithersburg cookie", 85, 100, 155, 250, 300, 305, 240, 185, 250, 300);
let storeThree = new Store("Germantown cookie", 90, 105, 150, 195, 250, 300, 300, 300, 300, 300);
let storeFour = new Store("Rio cookie", 95, 105, 155, 165, 200, 250, 350, 350, 350, 350);   

let storeArray = [storeTime, storeOne, storeTwo, storeThree, storeFour]

console.log(storeArray);

let elBody = document.getElementById("table-container")
let elTable = document.createElement("table")
elTable.setAttribute("id","id-table")
elBody.appendChild(elTable)

for ( i=0; i<storeArray.length ; i++){
        
    let elRow = document.createElement("tr")
    elTable.appendChild(elRow)
    
    let elTh = document.createElement("th")
    elTh.innerText = storeArray[i].storeName
    elRow.appendChild(elTh)

    let hour6 = document.createElement("td")
    hour6.innerText = storeArray[i].hour6
    elRow.appendChild(hour6)

    let hour7 = document.createElement("td")
    hour7.innerText = storeArray[i].hour7
    elRow.appendChild(hour7)

    let hour8 = document.createElement("td")
    hour8.innerText = storeArray[i].hour8
    elRow.appendChild(hour8)

    let hour9 = document.createElement("td")
    hour9.innerText = storeArray[i].hour9
    elRow.appendChild(hour9)

    let hour10 = document.createElement("td")
    hour10.innerText = storeArray[i].hour10
    elRow.appendChild(hour10)

    let hour11 = document.createElement("td")
    hour11.innerText = storeArray[i].hour11
    elRow.appendChild(hour11)

    let hour12 = document.createElement("td")
    hour12.innerText = storeArray[i].hour12
    elRow.appendChild(hour12)

    let hour1 = document.createElement("td")
    hour1.innerText = storeArray[i].hour1
    elRow.appendChild(hour1)

    let hour2 = document.createElement("td")
    hour2.innerText = storeArray[i].hour2
    elRow.appendChild(hour2)

    let hour3 = document.createElement("td")
    hour3.innerText = storeArray[i].hour3
    elRow.appendChild(hour3)


};




