import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Item } from 'typeorm/entities/item/item';
import { User } from 'typeorm/entities/users/user';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    const { name, price } = req.body;
    console.log('create', req.body);
   
    try {
        const itemRepository = getRepository(Item);
        const item = await itemRepository.findOne({ where: { name } });
        
        
        if (item) {
            const customError = new CustomError(400, 'General', 'Item already exists', [
                `Item '${item.name}' already exists`,
            ]);
            return next(customError);
        }

        try {
            const newItem = new Item();

            newItem.name  = name;
            newItem.price = price;
           
            await itemRepository.save(newItem);

            res.customSuccess(200, 'Item successfully created.');
        } catch (err) {
            const customError = new CustomError(400, 'Raw', `Item '${item.name}' can't be created`, null, err);
            return next(customError);
        }
    } catch (err) {
        
        const customError = new CustomError(400, 'Raw', 'Error', null, err);
        return next(customError);
    }
};
