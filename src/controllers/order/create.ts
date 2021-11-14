import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Order } from 'typeorm/entities/order/order';
import { OrderItem } from 'typeorm/entities/order/order-item';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const create = async (req: Request, res: Response, next: NextFunction) => {
    console.log('Body ',req.body);
    
    const { subtotal,vat,total,token,total_items,customer_name,status,items } = req.body;

    
    
    try {
            const orderRepository = getRepository(Order);

            const newOrder          = new Order();
            newOrder.subtotal       = subtotal;
            newOrder.vat            = vat;
            newOrder.total          = total;
            newOrder.token          = token;
            newOrder.total_items    = total_items;
            newOrder.customer_name  = customer_name;
            newOrder.status         = status;

            const result = await orderRepository.save(newOrder);

            const orderItemRepository = getRepository(OrderItem);
                
            items.forEach( async element => {
                
                    const newOrderItem = new  OrderItem();
                    newOrderItem.item  = element.id;
                    newOrderItem.order = result;

                    await orderItemRepository.save(newOrderItem);
            });

            
            res.customSuccess(200, 'Order successfully created.');
        
    } catch (err) {

        const customError = new CustomError(400, 'Raw', 'Error', null, err);
        return next(customError);
    }
};
