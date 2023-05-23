export type Agent = {
  name: {
    first: string;
    last: string;
  };
  login: {
    username: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  dob: {
    date: string;
    age: number;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
  gender: string;
  eyeColor: string; // This will be randomly generated
};
