import type {NextApiRequest, NextApiResponse} from 'next'
import { db } from '../../../helpers/db'

db.connect()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const itemID = req.query.itemid

    try {

        if (req.method === "DELETE") [

            db.query(`DELETE FROM list WHERE itemID = ?`, [itemID], (err, result) => {

                if (err) {
                    return res.json({
                        status: 'fail',
                        msg: 'Please try again.'
                    })
                }

                db.end()
                return res.status(202).json({
                    status: 'ok',
                    msg: 'Deleted Successfully.'
                })

            })

        ]
        
    } catch (err) {
        throw Error ('Please try again.')
    }

}