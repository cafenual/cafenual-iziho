import Notice from "../models/notice";

//공지생성
export const createNoitce = async (req, res) => {
  try {
    const notice = new Notice(req.body);
    await notice.save();

    return res.status(201).json({
      success: true,
      notice,
    });
  } catch (e) {
    return res.status(500).json({
      success: true,
      e,
    });
  }
};

//공지읽기
export const readNoitce = async (req, res) => {
  try {
    let importantNoitces = await Notice.find({ important: true });
    importantNoitces = [...importantNoitces.reverse()];
    let normalNotices = await Notice.find({ important: false });
    normalNotices = [...normalNotices.reverse()];
    const notices = importantNoitces.concat(normalNotices);
    return res.status(200).json({
      success: true,
      notices,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

//공지사항 상세보기
export const readNoitceDetail = async (req, res) => {
  const { noticeId } = req.params;

  try {
    const notice = await Notice.findById({
      _id: noticeId,
    });

    if (!notice) {
      return res.status(400).json({
        success: false,
        message: "해당 공지사항이 존재하지 않습니다.",
      });
    }

    return res.status(200).json({
      success: true,
      notice,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 공지삭제
export const deleteNotice = async (req, res) => {
  const { noticeId } = req.params;

  try {
    const notice = await Notice.findByIdAndDelete({ _id: noticeId });
    if (!notice) {
      return res.status(400).json({
        success: false,
        message: "해당 공지사항이 존재하지 않습니다.",
      });
    }
    return res.status(200).json({
      success: true,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

//공지사항 수정
export const updateNoitce = async (req, res) => {
  const { noticeId, title, content, important } = req.body;

  try {
    const notice = await Notice.findByIdAndUpdate(
      { _id: noticeId },
      { title, content, important },
      { new: true }
    );

    if (!notice) {
      return res.status(400).json({
        success: false,
        message: "해당 공지사항이 존재하지 않습니다.",
      });
    }

    return res.status(200).json({
      success: true,
      notice,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};
