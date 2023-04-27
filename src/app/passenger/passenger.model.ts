export interface IPassenger {
  name: string;
  trips: number;
  airlines: IAirline[];
}

export class Passenger implements IPassenger {
  name: string;
  trips: number;
  airlines: IAirline[];

  constructor(name: string, trips: number, airlines: IAirline[]) {
    this.name = name;
    this.trips = trips;
  }
}

export interface IAirline {
  name: string;
  country: string;
  slogan: string;
}

export class Airline implements IAirline {
  name: string;
  country: string;
  slogan: string;

  constructor(name: string, country: string, slogan: string) {
    this.name = name;
    this.country = country;
    this.slogan = slogan;
  }
}
