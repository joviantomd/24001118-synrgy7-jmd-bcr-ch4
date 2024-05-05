class Components {
    constructor({
        id,
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        transmission,
        available,
        type,
        year,
        options,
        specs,
        availableAt,
      }) {
        this.id = id;
        this.plate = plate;
        this.manufacture = manufacture;
        this.model = model;
        this.image = image;
        this.rentPerDay = rentPerDay;
        this.capacity = capacity;
        this.description = description;
        this.transmission = transmission;
        this.available = available;
        this.type = type;
        this.year = year;
        this.options = options;
        this.specs = specs;
        this.availableAt = availableAt;
      }
    
      render() {
        // return `
        //   <p>id: <b>${this.id}</b></p>
        //   <p>plate: <b>${this.plate}</b></p>
        //   <p>manufacture: <b>${this.manufacture}</b></p>
        //   <p>model: <b>${this.model}</b></p>
        //   <p>typedriver: <b>${this.typeDriver}</b></p>
        //   <p>available at:<b>${this.availableAt}</b></p>
        //   <img src="${this.image}" alt="${this.manufacture}" width="64px">
        // `;
        return`
        <div class="card" style="width: 250px;">
        <div class="card-img-top" style="background-image: url(${this.image});">
                  <!-- URL Image -->
        </div>
        <div class="card-body">
          <h6 class="card-title" id="name">${this.manufacture} ${this.model} </h6>
          <h5 id="rent">Rp.${this.rentPerDay} /hari</h5>
          <p class="card-text">${this.description}</p>
          <div class="mt-3 gap-2 row">
            <div class="icon-card">
              <i class="fa-solid fa-user-group fa-lg" style="color: #bfbfbf;"></i>
              <p> ${this.capacity} Orang</p>
            </div>
            <div class="icon-card ">
              <i class="fa-solid fa-gear fa-lg" style="color: #bfbfbf;"></i>
              <p> ${this.transmission}</p>
            </div>
            <div class="icon-card">
              <i class="fa-solid fa-calendar fa-lg" style="color: #bfbfbf;"></i>
              <p> Tahun ${this.year}</p>
            </div>
            
          </div>
        </div>
      </div>    
        `
      }
    
}