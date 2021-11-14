import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Item } from 'typeorm/entities/item/item';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const destroy = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  const itemRepository = getRepository(Item);
  try {
    const item = await itemRepository.findOne({ where: { id } });

    if (!item) {
      const customError = new CustomError(404, 'General', 'Not Found', [`Item with id:${id} doesn't exists.`]);
      return next(customError);
    }
    itemRepository.delete(id);

    res.customSuccess(200, 'Item successfully deleted.', { id: item.id, name: item.name });
    
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
