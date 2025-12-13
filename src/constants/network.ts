export type Coordinates = {
  top: number;
  left: number;
};

export type ResponsiveCoordinates = {
  desktop: Coordinates;
  mobile: Coordinates;
};

export type City = {
  number: number;
  city: string;
  tel: string;
  position: ResponsiveCoordinates;
};

export type MapPoint = {
  id: number;
  desktop: Coordinates;
  mobile: Coordinates;
};

export const POINT_LEFT_OFFSET = 3;

export const CITIES: City[] = [
  {
    number: 1,
    city: "Москва",
    tel: "8 800 600 35 38",
    position: {
      desktop: { top: 41.27273, left: 15.66434 },
      mobile: { top: 48.87095, left: 17.78388 },
    },
  },
  {
    number: 2,
    city: "Санкт-Петербург",
    tel: "8 931 394 46 11",
    position: {
      desktop: { top: 30.54545, left: 17.45455 },
      mobile: { top: 40.52418, left: 18.92745 },
    },
  },
  {
    number: 3,
    city: "Казань",
    tel: "8 904 769 96 54",
    position: {
      desktop: { top: 50.72727, left: 22.15385 },
      mobile: { top: 54.19353, left: 24.84228 },
    },
  },
  {
    number: 4,
    city: "Краснодар",
    tel: "8 993 307 01 77",
    position: {
      desktop: { top: 58.18182, left: 5.37063 },
      mobile: { top: 59.75804, left: 4.49527 },
    },
  },
  {
    number: 5,
    city: "Челябинск",
    tel: "8 922 636 86 06",
    position: {
      desktop: { top: 68.90909, left: 26.96503 },
      mobile: { top: 60.96772, left: 28.98266 },
    },
  },
  {
    number: 6,
    city: "Екатеринбург",
    tel: "8 902 635 22 39",
    position: {
      desktop: { top: 57.27273, left: 30.20979 },
      mobile: { top: 57.33869, left: 34.06941 },
    },
  },
  {
    number: 7,
    city: "Новосибирск",
    tel: "8 902 635 22 39",
    position: {
      desktop: { top: 71.45455, left: 45.2028 },
      mobile: { top: 69.19352, left: 47.55522 },
    },
  },
  {
    number: 8,
    city: "Владивосток",
    tel: "8 902 635 22 39",
    position: {
      desktop: { top: 82.90909, left: 91.52448 },
      mobile: { top: 74.03223, left: 91.32496 },
    },
  },
];

export const MAP_POINTS: MapPoint[] = [
  {
    id: 1,
    desktop: { top: 27.14655, left: 10.72261 },
    mobile: { top: 29.55313, left: 8.49763 },
  },
  {
    id: 2,
    desktop: { top: 37.87873, left: 9.01321 },
    mobile: { top: 37.17736, left: 7.04522 },
  },
  {
    id: 3,
    desktop: { top: 31.94436, left: 27.73897 },
    mobile: { top: 33.10813, left: 29.32773 },
  },
  {
    id: 4,
    desktop: { top: 36.61618, left: 15.30697 },
    mobile: { top: 42.50672, left: 15.94709 },
  },
  {
    id: 5,
    desktop: { top: 42.04545, left: 12.97589 },
    mobile: { top: 42.127, left: 10.88 },
  },
  {
    id: 6,
    desktop: { top: 45.45455, left: 9.71251 },
    mobile: { top: 37.62095, left: 10.26881 },
  },
  {
    id: 7,
    desktop: { top: 47.34855, left: 15.46227 },
    mobile: { top: 49.88913, left: 17.17595 },
  },
  {
    id: 8,
    desktop: { top: 54.92418, left: -1.3986 },
    mobile: { top: 48.27615, left: -5.61909 },
  },
  {
    id: 9,
    desktop: { top: 54.798, left: 4.81741 },
    mobile: { top: 46.13575, left: 1.66273 },
  },
  {
    id: 10,
    desktop: { top: 40.65655, left: 22.61069 },
    mobile: { top: 35.39648, left: 23.90573 },
  },
  {
    id: 11,
    desktop: { top: 54.04036, left: 23.54316 },
    mobile: { top: 42.36555, left: 24.89161 },
  },
  {
    id: 12,
    desktop: { top: 58.08073, left: 20.27972 },
    mobile: { top: 46.86821, left: 23.57059 },
  },
  {
    id: 13,
    desktop: { top: 36.61618, left: 30.92464 },
    mobile: { top: 35.12769, left: 32.69587 },
  },
  {
    id: 14,
    desktop: { top: 47.97982, left: 29.29298 },
    mobile: { top: 47.52688, left: 30.97075 },
  },
  {
    id: 15,
    desktop: { top: 45.202, left: 38.46154 },
    mobile: { top: 57.53357, left: 36.64236 },
  },
  {
    id: 16,
    desktop: { top: 57.07073, left: 36.75211 },
    mobile: { top: 40.26881, left: 38.85711 },
  },
  {
    id: 17,
    desktop: { top: 68.05564, left: 38.46154 },
    mobile: { top: 50.23861, left: 40.66445 },
  },
  {
    id: 18,
    desktop: { top: 31.94436, left: 48.09634 },
    mobile: { top: 33.35007, left: 50.85108 },
  },
  {
    id: 19,
    desktop: { top: 51.38891, left: 45.99843 },
    mobile: { top: 52.09341, left: 48.63302 },
  },
  {
    id: 20,
    desktop: { top: 60.35345, left: 51.1266 },
    mobile: { top: 43.05772, left: 54.05491 },
  },
  {
    id: 21,
    desktop: { top: 45.70709, left: 52.3699 },
    mobile: { top: 49.88575, left: 58.44513 },
  },
  {
    id: 22,
    desktop: { top: 42.42418, left: 59.75138 },
    mobile: { top: 41.41123, left: 63.17368 },
  },
  {
    id: 23,
    desktop: { top: 55.93436, left: 60.6061 },
    mobile: { top: 37.33535, left: 65.61521 },
  },
  {
    id: 24,
    desktop: { top: 45.202, left: 66.43357 },
    mobile: { top: 30.0739, left: 70.23859 },
  },
  {
    id: 25,
    desktop: { top: 57.95455, left: 70.16313 },
    mobile: { top: 51.8649, left: 66.2559 },
  },
  {
    id: 26,
    desktop: { top: 28.78782, left: 71.40632 },
    mobile: { top: 37.17736, left: 75.49617 },
  },
  {
    id: 27,
    desktop: { top: 42.42418, left: 74.74752 },
    mobile: { top: 28.22575, left: 79.02874 },
  },
  {
    id: 28,
    desktop: { top: 20.45455, left: 80.73041 },
    mobile: { top: 23.77015, left: 79.20287 },
  },
  {
    id: 29,
    desktop: { top: 34.84855, left: 82.05124 },
    mobile: { top: 43.62905, left: 70.89904 },
  },
  {
    id: 30,
    desktop: { top: 36.36364, left: 94.25018 },
    mobile: { top: 34.35482, left: 89.47492 },
  },
  {
    id: 31,
    desktop: { top: 67.67673, left: 87.10176 },
    mobile: { top: 56.0349, left: 82.03536 },
  },
  {
    id: 32,
    desktop: { top: 79.54545, left: 84.7708 },
    mobile: { top: 62.35885, left: 80.04408 },
  },
];
