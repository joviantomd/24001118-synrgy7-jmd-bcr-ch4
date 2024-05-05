class App {
  constructor() {
    this.searchButton = document.getElementById("search-button");
    this.carlistElement = document.getElementById("list-car");
    this.driverType = document.getElementById("type-driver");
    this.dateAvail = document.getElementById("datetime");
    this.pickupTime = document.getElementById("pickup-time");
    this.passenger = document.getElementById("passenger");
  }

  async init() {

    this.searchButton.addEventListener('click', async() => {
      await this.load()
      this.clear()
      this.run()
      this.test() 
    });

    this.driverType.addEventListener("change", this.periksaInput);
    this.dateAvail.addEventListener("change", this.periksaInput);
    this.pickupTime.addEventListener("change", this.periksaInput);

  }

  test = () =>{
    console.log("Button ditekan")
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      document.getElementById("list-car").appendChild(node);
    });
  };

  async load() {
    localStorage.removeItem("CARS");

    const cars = await Binar.listCars();

    Car.init(cars);

    const carlist = JSON.parse(localStorage.getItem("CARS"));

    const newCarList = carlist.map((car) => {
    const typedriver = ["dengansupir", "tanpasupir"];
    const IndexDriver = Math.floor(Math.random() *typedriver.length);
    const randomIndex = typedriver[IndexDriver];

      return {
        ...car,
        typeDriver: randomIndex,
      };
    });

    console.log("List Data Baru");
    console.log(newCarList);

    const filterCars = newCarList.filter((car) => {

      if ( this.dateAvail.value !== "" && this.pickupTime.value !== "" && this.driverType.value !== "") {

        let DateInput = new Date(`${this.dateAvail.value} ${this.pickupTime.value}`);
        let DateData = new Date(car.availableAt);
        

        if (this.passenger.value == '') {
          if ( DateData.getTime() >= DateInput.getTime() && this.driverType.value == car.typeDriver && car.available == true
          )
            return true;
        } else {
          if ( DateData.getTime() >= DateInput.getTime() && this.driverType.value == car.typeDriver && car.capacity >= this.passenger.value && car.available == true
          ) {
            return true;
          }
        }
      }
    });
    Car.init(filterCars);
    console.log(filterCars);  
  }

  // Fungsi untuk periksa input field jika sesuai dengan kondisi 
  // Type Driver ,Tanggal, Jam Ambil (Mandatory)
  periksaInput = () => {
    const input1 = document.getElementById("type-driver");
    const input2 = document.getElementById("datetime");
    const input3 = document.getElementById("pickup-time");
    const input4 = document.getElementById("passenger")

    console.log({ 1: input1.value, 2: input2.value, 3: input3.value, 4:input4.value })

    if ( input1.value.trim() !== "" && input2.value.trim() !== "" && input3.value.trim() !== "") {
      this.searchButton.removeAttribute("disabled"); // Aktifkan tombol jika semua input field terisi
    } else {
      this.searchButton.setAttribute("disabled", "true"); // Nonaktifkan tombol jika salah satu atau semua input field kosong
    }
  };

  clear = () => {
    let child = this.carlistElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carlistElement.firstElementChild;
    }
  };

  
}
