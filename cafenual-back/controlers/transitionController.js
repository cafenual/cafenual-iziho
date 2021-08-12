import Transition from "../models/transition";

//인수인계생성
export const createTransition = async (req, res)=>{
    try {
        const transition = new Transition(req.body)
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
}