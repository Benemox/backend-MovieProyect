
//login


test("Aqui se valida el login", () => {

	expect(checkPassword(password.value)).toBe(true);
	expect(checkUsers(user.value)).toBe(true);
	expect(popUp()).toBe("string");
});


// register


const user1 = {
	"email": "test1@test.com",
	"password": "Test12*."
};
const user2 = {
	"email": "test1aest.com",
	"password": "Test12*."
};
const user3 = {
	"email": "",
	"password": "Test12*."
};
const user4 = {
	"email": "test1aest",
	"password": "."
};
const user5 = {
	"email": "",
	"password": "."
};
const FavMovie = {
	"title" : "algo",
	"img" : "nose.img",
	"year": 2019,
	"director" : "cameron diaz",
	"category" : "crimen",
	"duration" : 200000
};
const NewMovie = {
	"title" : "algo",
	"img" : "nose.img",
	"year": 2019,
	"director" : "cameron diaz",
	"category" : "crimen",
	"duration" : 200000
};

const {registerUser} = require("./public/main.js");
const {checkPassword} = require("./public/main.js");
const {checkUsers} = require("./public/main.js");
const {popUp} = require("./public/main.js");
const {IsthereFav} = require("./public/main.js");
const {IsthereMovie} = require("./public/main.js");
const {addMoviefun} = require("./public/main.js");
const {CheckCreateMovieADM} = require("./public/main.js");
const {deleteMovie} = require("./public/main.js");

//TEST DE LOGIN

test("Aqui se valida el login", () => {
	expect(checkPassword(user1.password)).toBe(true);
	expect(checkUsers(user2.email)).toBe(true);
	expect(popUp()).toBe("string");
});

//TEST DE REGISTER

test("Aqui se valida el register", () => {
	expect(registerUser("aa@aa.aa")).toBe(false);
	expect(registerUser(user1)).toBe(false);
	expect(registerUser(user2)).toBe(false);
	expect(registerUser(user3)).toBe(false);
	expect(registerUser(user4)).toBe(false);
	expect(registerUser(user5)).toBe(false);
	expect(registerUser()).toBe(false);

});

///TEST DE CREATE MOVIE///

test("Aqui se valida la nueva pelicula", () =>{
	expect(CheckCreateMovieADM(NewMovie)).tobe(false);
	expect(IsthereMovie(NewMovie)).tobe(false);
	expect(popUp()).tobe("String");

});

///// ADDMOVIE USER

test("Aqui se valida El favorito al movie", () => {
	expect(IsthereFav(FavMovie)).tobe(false);
	expect(addMoviefun(FavMovie)).tobe("added");
	expect(popUp()).tobe("string");
});

///////DeleteMovie//////////////////

test("Aqui se valida el DeleteMovie", ()=>{
	expect(deleteMovie(FavMovie)).tobe(true);

});

// /SEARCH

const search = require("./public/main.js");
const objetoDatosMovies = {
	"title": "movie1",
	"img": "www.url.com/img",
	"year": "aaaa",
	"director": "director",
	"category": "category",
	"duration": "120min"
};

test("Validamos nuestro search", () => {

	expect(search(objetoDatosMovies.value)).tobe(true);

});

//	TEST LOGOUT

// const {logout} = require("./main.js");
// test("Se comprueba si se ha borrado correctamente el JWT", () => {
// 	expect();
// });


// https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests

const localStorageMock = {
	"getItem": jest.fn(),
	"setItem": jest.fn(),
	"clear": jest.fn()
};
global.localStorage = localStorageMock;

const {JWT} = require("./public/main.js");
const {clearJWT} = require("./public/main.js");

test("Se comprieba si se ha borrado el JWT", () => {

	expect(localStorage.getItem).toBeCalledWith("token");

});