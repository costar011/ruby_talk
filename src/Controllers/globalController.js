import User from "../models/User";

export const testScreen = (req, res) => {
  res.render("base");
};

export const mainController = (req, res) => {
  const loginFlag = req.userLoginFlag || false;

  let isAuthemticated = false;

  if (loginFlag) {
    isAuthemticated = true;
  }

  if (isAuthemticated) {
    friendController(req, res);
  } else {
    res.render("main");
  }
};
export const friendController = (req, res) => {
  res.render("friends");
};

export const messageController = (req, res) => {
  res.render("message");
};

export const profileController = (req, res) => {
  res.render("profile");
};

export const loginController = async (req, res) => {
  let loginFlag = false;

  const input_id = req.body.input_id;
  let input_pass = req.body.input_pass;
  input_pass = String(input_pass);

  try {
    const result = User.find();

    Promise.all(
      result.map((user) => {
        // map 은 promise 끝날때까지 기다린다.
        if (user.userId === inputId && user.userPassword == input_pass) {
          loginFlag = true;
        }
      })
    );

    userLoginFlag = loginFlag;
    mainController(req, res);
  } catch (e) {
    console.log("[SYSTEM] 사용자가 로그인을 시도하였지만 에러가 발생했습니다.");
    mainController(req, res);
  }
};
