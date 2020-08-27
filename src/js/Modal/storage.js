export function getLocation() {
  return localStorage.getItem('nameCity');
}
export function setLocation(name) {
  localStorage.setItem('nameCity', name);
}
