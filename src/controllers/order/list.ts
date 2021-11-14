import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Item } from 'typeorm/entities/item/item';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const list = async (req: Request, res: Response, next: NextFunction) => {
  const itemRepository = getRepository(Item);
  try {

    const item = await itemRepository.find();

    res.customSuccess(200, 'List of users.', item);
    
  } catch (err) {

    const customError = new CustomError(400, 'Raw', `Can't retrieve list of item.`, null, err);

    return next(customError);
  }
};
