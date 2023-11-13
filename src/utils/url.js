const backendUrl = (route1, route2 = "", route3 = "", route4 = "") => {
  return `http://159.89.28.83:80/${route1}${route2}${route3}${route4}`;
};

export default backendUrl;
