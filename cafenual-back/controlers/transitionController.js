import Transition from "../models/transition";

//인수인계생성
export const createTransition = async (req, res) => {
  try {
    const transition = new Transition(req.body);
    transition = await transition.popilate("writer").execPopulate();
    await transition.save();
    return res.status(201).json({
      success: true,
      transition,
    });
  } catch (e) {
    return res.status(500).json({
      success: true,
      e,
    });
  }
};
export const readTransition = async (req, res) => {
  try {
    let transitionlist = await Transition.find();
    const transitions = [...transitionlist.reverse()];
    return res.status(200).json({
      success: true,
      transitions,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

export const readTransitionDetail = async (req, res) => {
  const { transitionId } = req.params;
  try {
    const transition = await Transition.findById({
      _id: transitionId,
    });

    if (!transition) {
      return res.status(400).json({
        success: false,
        message: "해당 인수인계가 존재하지 않습니다.",
      });
    }
    return res.status(200).json({
      success: true,
      transition,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

export const updateTransition = async (req, res) => {
  const { transitionId } = req.params;
  const { title, content } = req.body;

  try {
    const transition = await Transition.findByIdAndUpdate(
      { _id: transitionId },
      { title, content },
      { new: true }
    );

    if (!transition) {
      return res.status(400).json({
        success: false,
        message: "해당 공지사항이 존재하지 않습니다.",
      });
    }
    
    return res.status(200).json({
      success: true,
      transition,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

export const deleteTransition = async (req, res) => {
    const { transitionId } = req.params;

    try {
      const transition = await Transition.findByIdAndDelete({ _id: transitionId });
      if (!transition) {
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
