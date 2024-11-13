const Joi = require('joi');

const couponSchema = 
    Joi.object({
        id: Joi.number().required(),
        code: Joi.string().required(),
        amount: Joi.string().required(),
        date_created: Joi.string().required(),
        date_created_gmt: Joi.string().required(),
        date_modified: Joi.string().required(),
        date_modified_gmt: Joi.string().required(),
        discount_type: Joi.string().required(),
        description: Joi.string().allow(null, ''),
        date_expires: Joi.any().allow(null),
        date_expires_gmt: Joi.any().allow(null),
        usage_count: Joi.number().required(),
        individual_use: Joi.boolean().required(),
        product_ids: Joi.array().items(Joi.number()).required(),
        excluded_product_ids: Joi.array().items(Joi.number()).required(),
        usage_limit: Joi.any().allow(null),
        usage_limit_per_user: Joi.any().allow(null),
        limit_usage_to_x_items: Joi.any().allow(null),
        free_shipping: Joi.boolean().required(),
        product_categories: Joi.array().items(Joi.number()).required(),
        excluded_product_categories: Joi.array().items(Joi.number()).required(),
        exclude_sale_items: Joi.boolean().required(),
        minimum_amount: Joi.string().required(),
        maximum_amount: Joi.string().required(),
        email_restrictions: Joi.array().items(Joi.string()).required(),
        used_by: Joi.array().items(Joi.string()).required(),
        meta_data: Joi.array().required(),
        _links: Joi.object({
            self: Joi.array().items(Joi.object({
                href: Joi.string().uri().required()
            })).required(),
            collection: Joi.array().items(Joi.object({
                href: Joi.string().uri().required()
            })).required()
        }).required()
    });

export default couponSchema;