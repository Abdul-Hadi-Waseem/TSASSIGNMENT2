abstract class Vehicle {
    constructor(
      private make: string,
      private model: string,
      private year: number,
      private rented: boolean = false
    ) {}
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    isRented(): boolean {
      return this.rented;
    }
  
    setRented(rented: boolean): void {
      this.rented = rented;
    }
  
    abstract rentalRate(): number;
  
    rent(): void {
      if (this.isRented()) {
        console.log(`Sorry, ${this.getMake()} ${this.getModel()} is already rented.`);
      } else {
        console.log(`Renting ${this.getMake()} ${this.getModel()}...`);
        this.setRented(true);
      }
    }
  
    returnVehicle(): void {
      if (this.isRented()) {
        console.log(`Returning ${this.getMake()} ${this.getModel()}...`);
        this.setRented(false);
      } else {
        console.log(`Sorry, ${this.getMake()} ${this.getModel()} is not rented.`);
      }
    }
  }
  
  class Car extends Vehicle {
    private numSeats: number;
  
    constructor(make: string, model: string, year: number, numSeats: number, rented: boolean = false) {
      super(make, model, year, rented);
      this.numSeats = numSeats;
    }
  
    rentalRate(): number {

      return 50;
    }
  
    getNumSeats(): number {
      return this.numSeats;
    }
  }
  
  class Truck extends Vehicle {
    private payloadCapacity: number;
  
    constructor(make: string, model: string, year: number, payloadCapacity: number, rented: boolean = false) {
      super(make, model, year, rented);
      this.payloadCapacity = payloadCapacity;
    }
  
    rentalRate(): number {
  
      return 100;
    }
  
    getPayloadCapacity(): number {
      return this.payloadCapacity;
    }
  }
  
  class Motorcycle extends Vehicle {
    private engineDisplacement: number;
  
    constructor(make: string, model: string, year: number, engineDisplacement: number, rented: boolean = false) {
      super(make, model, year, rented);
      this.engineDisplacement = engineDisplacement;
    }
  
    rentalRate(): number {
     
      return 25;
    }
  
    getEngineDisplacement(): number {
      return this.engineDisplacement;
    }
  }
  

  const car = new Car('Toyota', 'Corolla', 2022, 5);
  car.rent();
  car.rent();
  car.returnVehicle();
  
  const truck = new Truck('Ford', 'F-150', 2021, 2000);
  console.log(`The rental rate for the ${truck.getMake()} ${truck.getModel()} is ${truck.rentalRate()} per day.`);
  
  const motorcycle = new Motorcycle('Honda', 'CB500X', 2023, 500);
  motorcycle.rent();
  motorcycle.returnVehicle();
  