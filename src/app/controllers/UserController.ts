import { Request, Response } from 'express'
import User from '../models/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()
    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const { email, firstName } = req.body

    if (!email) {
      return res.json({ error: 'Email not found' })
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.json({ error: "User already exists." })
    }

    if (!firstName) {
      return res.json({ error: 'FirstName not found' })
    }

    const newUser = await User.create(req.body)
    return res.json({
      newUser, fullName: newUser.fullName()
    })
  }
}

export default new UserController()
