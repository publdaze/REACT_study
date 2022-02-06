function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "EunJi",
  lastName: "Kim",
};

const element = <h1>Hello, {formatName(user)}!</h1>;

function IntroducintJSX() {
  return element;
}

export default IntroducintJSX;
