import User from "../models/user";
import cookieParser from "cookie-parser";
//회원가입
export const register = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // 이메일이 디비에 있는지 확인
    const exist = await User.findOne({
      email,
    });
    if (exist) {
      return res.status(500).json({
        success: false,
        message: "이미 존재하는 계정입니다.",
      });
    }
    const user = new User({
      email,
      password,
      name,
    });
    console.log(user);
    await user.setPassword(password);

    await user.save();
    res.status(200).json({
      success: true,
      user,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      e,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  //이메일이나 패스워드 없을때 예외처리
  if (!email || !password) {
    return res.status(401).json({
      success: false,
      message: "정보가 입력되지 않았습니다",
    });
  }

  try {
    const user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "해당 email이 존재하지 않습니다.",
      });
    }

    const valid = await user.checkPassword(password);
    if (!valid) {
      return res.status(401).json({
        success: true,
        message: "비밀번호가 일치하지 않습니다.",
      });
    }

    const token = await user.generateToken();
    console.log("as1");
    return res.cookie("user", token).status(200).json({
      success: true,
      message: "로그인 성공!",
      user,
    });
  } catch (e) {
    status(500).json({
      e,
    });
  }
};


//로그아웃

export const logout = async(req,res)=>{
  res.cookie("user","").status(200).json({
  success:true,
  message:"로그아웃 성공!",
 })
}